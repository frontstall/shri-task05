import callApi from './callApi';

const minToSec = (minutes) => parseInt(minutes, 10) * 60;

const getStatus = (status) => {
  const config = {
    Waiting: 'warning',
    Success: 'success',
    Failure: 'danger',
  };

  return config[status];
};

const formatHash = (hash, number = 6) => hash.slice(0, number);

export {
  callApi,
  formatHash,
  getStatus,
  minToSec,
};
