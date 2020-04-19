import axios from 'axios';
import https from 'https';

const DB_API = 'https://hw.shri.yandex/api/';

const callApi = async ({
  method,
  url,
  data,
  params,
// eslint-disable-next-line consistent-return
}) => {
  axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false });
  axios.defaults.baseURL = DB_API;
  axios.defaults.headers.common.Authorization = `Bearer ${process.env.TOKEN}`;

  try {
    const response = await axios({
      method,
      url,
      data,
      params,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default callApi;
