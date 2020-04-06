import { callApi } from '../utils';

export const addConfig = (data) => callApi({
  method: 'POST',
  url: '/conf',
  data,
});

export const deleteConfig = () => callApi({ method: 'DELETE', url: '/conf' });

export const getBuilds = (offset = 0, limit = 25) => callApi({
  method: 'GET',
  url: '/build/list',
  params: { offset, limit },
});

export const getConfig = () => callApi({ method: 'GET', url: '/conf' });

export const getBuild = (buildId) => callApi({
  method: 'GET',
  url: '/build/details',
  params: { buildId },
});

export const getLog = (buildId) => callApi({
  method: 'GET',
  url: '/build/log',
  params: { buildId },
});

export const addBuild = ({
  commitMessage,
  commitHash,
  mainBranch,
  authorName,
}) => {
  const data = {
    commitMessage,
    commitHash,
    branchName: mainBranch,
    authorName,
  };

  return callApi({ method: 'POST', url: '/build/request', data });
};
