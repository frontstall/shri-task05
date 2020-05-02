import { callApi, STATUSES } from 'utils';
import { API_ROUTES } from 'config';
import { HTTP_METHODS } from 'utils/callApi';


export interface IBuild {
  id: string,
  configurationId: string,
  buildNumber: number,
  commitMessage: string,
  commitHash: string,
  branchName: string,
  authorName: string,
  status: typeof STATUSES[keyof typeof STATUSES],
  start: string,
  duration: number,
}

interface IApiActions {
  onRequest: () => void,
  onError: () => void,
}

interface IRepoSettings {
  id: string,
  repoName: string,
  buildCommand: string,
  mainBranch: string,
  period: 0,
}

interface IGetRepoSettings {
  onRequest: () => void,
  onSuccess: (repoSettings: IRepoSettings) => void,
  onError: () => void,
}

const getRepoSettings = async ({
  onRequest,
  onSuccess,
  onError,
}: IGetRepoSettings) => {
  await callApi({
    method: HTTP_METHODS.GET,
    url: API_ROUTES.settings,
    onRequest,
    onSuccess,
    onError,
  });
};

interface IGetBuilds extends IApiActions {
  offset?: number,
  onSuccess: (builds: Array<IBuild>) => void,
}

const getBuilds = async ({
  onRequest,
  onSuccess,
  onError,
  offset = 0,
}: IGetBuilds) => {
  await callApi({
    method: 'GET',
    url: API_ROUTES.builds,
    params: offset,
    onRequest,
    onSuccess,
    onError,
  });
};

interface IAddNewBuild {
  commitHash: string,
  onRequest: () => void,
  onSuccess: ({ data }: {
    data: {
      id: string,
      buildNumber: number,
      status: 'Waiting',
    }
  }) => void,
  onError: () => void,
}

const addNewBuild = async ({
  onRequest,
  onSuccess,
  onError,
  commitHash,
}: IAddNewBuild) => {
  await callApi({
    method: 'POST',
    url: `${API_ROUTES.builds}/${commitHash}`,
    onRequest,
    onSuccess,
    onError,
  });
};

interface IGetBuildDetails {
  id?: string,
  onRequest: () => void,
  onSuccess: (data: {
    id: string,
    configurationId: string,
    buildNumber: number,
    commitMessage: string,
    commitHash: string,
    branchName: string,
    authorName: string,
    status: 'Waiting' | 'InProgress' | 'Success' | 'Fail' | 'Canceled',
  }) => void,
  onError: () => void,
}

const getBuildDetails = async ({
  onRequest,
  onSuccess,
  onError,
  id,
}: IGetBuildDetails) => {
  await callApi({
    method: 'GET',
    url: `${API_ROUTES.builds}/${id}`,
    onRequest,
    onSuccess,
    onError,
  });
};

interface IGetBuildLog {
  id?: string,
  onRequest: () => void,
  onSuccess: (data: string) => void,
  onError: () => void,
}

const getBuildLog = async ({
  onRequest,
  onSuccess,
  onError,
  id,
}: IGetBuildLog) => {
  await callApi({
    method: 'GET',
    url: `${API_ROUTES.builds}/${id}/logs`,
    onRequest,
    onSuccess,
    onError,
  });
};

const API = {
  getBuildDetails,
  getBuildLog,
  getBuilds,
  getRepoSettings,
  addNewBuild,
};

export default API;
