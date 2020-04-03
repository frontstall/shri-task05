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

const API = {
  getBuilds,
  getRepoSettings,
};

export default API;
