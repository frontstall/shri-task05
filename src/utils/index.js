import callApi from './callApi';
import formatTime from './formatTime';
import formatDate from './formatDate';

const minToSec = (minutes) => parseInt(minutes, 10) * 60;

const getStatus = (status) => {
  const config = {
    Waiting: 'warning',
    Success: 'success',
    Fail: 'danger',
    InProgress: 'warning',
  };

  return config[status];
};

const formatHash = (hash, number = 6) => hash.slice(0, number);

export {
  callApi,
  formatDate,
  formatHash,
  formatTime,
  getStatus,
  minToSec,
};
