import axios from 'axios';

import { API_ROOT } from 'config';

export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT',
} as const;

const callApi = async <TData, TParams, TResponse>({
  method = HTTP_METHODS.GET,
  url,
  data,
  params,
  onRequest,
  onSuccess,
  onError = console.error,
}: {
  method: keyof typeof HTTP_METHODS,
  url: string,
  data?: TData,
  params?: TParams,
  onRequest?: () => void,
  onSuccess?: (data: TResponse) => void,
  onError?: (error: Error) => void,
}) => {
  axios.defaults.baseURL = API_ROOT;

  try {
    if (onRequest) {
      onRequest();
    }
    const response = await axios({ method, url, data });

    if (onSuccess) {
      onSuccess(response.data);
    }
  } catch (error) {
    onError(error);
  }
};

export default callApi;
