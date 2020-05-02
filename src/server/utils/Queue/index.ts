import orderBy from 'lodash/orderBy';
import isEmpty from 'lodash/isEmpty';
import last from 'lodash/last';

import statuses from 'server/config';

import * as storageApi from '../../api/storageApi';
import build from '../builder';

const STATES = {
  building: 'building',
  idle: 'idle',
  fetching: 'fetching',
};

interface IBuild {
  id: string,
  branchName: string,
  status: string,
  buildCommand: string,
  repoName: string,
}

export default class Queue {
  public statuses: typeof statuses

  public state: typeof STATES[keyof typeof STATES]

  public builds: IBuild[]

  public api: typeof storageApi

  public currentBuild: null | number

  public builder: typeof build

  constructor(
    api: typeof storageApi,
    builder: typeof build,
    statusesToBuild: typeof statuses,
  ) {
    this.api = api;
    this.state = STATES.idle;
    this.currentBuild = null;
    this.builds = [];
    this.statuses = statusesToBuild;
    this.builder = builder;
  }

  getBuilds = async () => {
    this.state = STATES.fetching;
    const { data: builds }: { data: Array<IBuild> } = await this.api.getBuilds();
    const buildsToBuild = builds
      .filter(({ status }) => this.statuses.includes(status));
    const sortedBuilds = orderBy(buildsToBuild, 'buildNumber', 'desc');
    this.builds = sortedBuilds;
    this.state = STATES.idle;
  }

  build = async () => {
    if (this.state !== STATES.idle) return;

    if (isEmpty(this.builds)) return;

    const {
      id: buildId,
      branchName,
      buildCommand,
      repoName,
    } = last(this.builds) as IBuild;
    this.state = STATES.building;

    await this.api.startBuild({ buildId, dateTime: new Date() });

    const {
      success,
      buildLog,
      duration,
    } = await this.builder({ branchName, repoName, buildCommand });

    await this.api.finishBuild({
      buildId,
      success,
      buildLog,
      duration,
    });
    this.builds.pop();
    this.state = STATES.idle;

    if (!isEmpty(this.builds)) {
      await this.build();
    }
  }

  addBuild = (currentBuild: IBuild) => {
    this.builds.unshift(currentBuild);
    this.build();
  }

  init = async () => {
    await this.getBuilds();
    await this.build();
  }
}

export type TQueue = InstanceType<typeof Queue>;
