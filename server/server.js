import Express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import remove from 'del';
import path from 'path';

import * as storageApi from './api/storageApi';
import * as githubApi from './api/githubApi';
import {
  getPathToLocalRepo,
  getRepoName,
  getRepoUrl,
} from './utils';

const { promises: { mkdir } } = fs;
const API_ROOT = '/api';
const pathToTempDir = path.resolve(__dirname, './tmp');

const initServer = (port) => {
  const app = new Express();
  const logger = morgan('combined');
  app.use(logger);
  app.use(Express.json());
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, DELETE, POST, GET');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
  });

  if (process.env.NODE_ENV === 'production') {
    app.use(Express.static(path.resolve(__dirname, '..', 'build')));

    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
    });
  }

  app.post(`${API_ROOT}/settings`, async (req, res, next) => {
    try {
      const {
        period,
        fullRepoName,
        buildCommand,
        mainBranch,
      } = req.body;

      const repoName = getRepoName(fullRepoName);
      const repoUrl = getRepoUrl(fullRepoName);
      const pathToLocalRepo = getPathToLocalRepo(repoName);
      const data = {
        buildCommand,
        mainBranch: mainBranch || 'master',
        period: parseInt(period, 10),
        repoName,
      };

      await remove(pathToTempDir);
      await mkdir(pathToTempDir);
      await mkdir(pathToLocalRepo);
      await githubApi.clone(repoUrl, pathToLocalRepo);
      await storageApi.addConfig(data);
    } catch (error) {
      next(error);
    }
    res.status(200).end();
  });

  app.get(`${API_ROOT}/settings`, async (req, res, next) => {
    try {
      const { data } = await storageApi.getConfig();
      res.send(data);
    } catch (error) {
      next(error);
    }
  });

  app.delete(`${API_ROOT}/settings`, async (req, res, next) => {
    try {
      await storageApi.deleteConfig();
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  });

  app.get(`${API_ROOT}/builds`, async (req, res, next) => {
    try {
      const { data } = await storageApi.getBuilds();
      res.send(data);
    } catch (error) {
      next(error);
    }
  });

  app.get(`${API_ROOT}/builds/:buildId`, async (req, res, next) => {
    try {
      const { buildId } = req.params;
      const { data } = await storageApi.getBuild(buildId);
      res.send(data);
    } catch (error) {
      next(error);
    }
  });

  app.get(`${API_ROOT}/builds/:buildId/logs`, async (req, res, next) => {
    try {
      const { buildId } = req.params;
      const { data } = await storageApi.getLog(buildId);
      res.send(data);
    } catch (error) {
      next(error);
    }
  });

  app.post(`${API_ROOT}/builds/:commitHash`, async (req, res, next) => {
    const { commitHash } = req.params;
    try {
      const { data: { repoName, mainBranch } } = await storageApi.getConfig();
      const pathToLocalRepo = getPathToLocalRepo(repoName);
      const {
        commitMessage,
        authorName,
      } = await githubApi.getCommitData(pathToLocalRepo, commitHash);
      const data = {
        commitMessage,
        commitHash,
        mainBranch,
        authorName,
      };

      const response = await storageApi.addBuild(data);
      res.send(response);
    } catch (error) {
      next(error);
    }
  });

  app.use((error, req, res, next) => { //eslint-disable-line
    console.log(error);
    res.status(500).end();
  });

  app.listen(port, () => {
    console.log(`server has been started on port ${port}`);
  });
};

export default initServer;
