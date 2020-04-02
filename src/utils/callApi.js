import axios from 'axios';

import { API_ROOT } from 'config';

const callApi = async ({
  method = 'GET',
  url,
  data,
  onRequest,
  onSuccess,
  onError = console.error,
}) => {
  axios.defaults.baseURL = API_ROOT;

  try {
    onRequest();
    const response = await axios({ method, url, data });

    onSuccess(response);
  } catch (error) {
    onError(error);
  }
};

export default callApi;
