import { callApi } from 'utils';
import { API_ROUTES } from 'config';

const getRepoSettings = async ({ onRequest, onSuccess, onError }) => {
  await callApi({
    method: 'GET',
    url: API_ROUTES.settings,
    onRequest,
    onSuccess,
    onError,
  });
};

const getBuilds = async ({ onRequest, onSuccess, onError }) => {
  await callApi({
    method: 'GET',
    url: API_ROUTES.builds,
    onRequest,
    onSuccess,
    onError,
  });
};

const postCommitHash = async ({
  onRequest,
  onSuccess,
  onError,
  commitHash,
}) => {
  await callApi({
    method: 'POST',
    url: `${API_ROUTES.builds}/${commitHash}`,
    onRequest,
    onSuccess,
    onError,
  });
};

const getBuildDetails = async ({
  onRequest,
  onSuccess,
  onError,
  id,
}) => {
  await callApi({
    method: 'GET',
    url: `${API_ROUTES.builds}/${id}`,
    onRequest,
    onSuccess,
    onError,
  });
};

const API = {
  getBuildDetails,
  getBuilds,
  getRepoSettings,
  postCommitHash,
};

export default API;
