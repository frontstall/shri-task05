import callApi from './callApi';

const minToSec = (minutes) => parseInt(minutes, 10) * 60;

export {
  callApi,
  minToSec,
};
