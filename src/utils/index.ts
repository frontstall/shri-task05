import callApi from './callApi';
import formatTime from './formatTime';
import formatDate from './formatDate';

const minToSec = (minutes: string) => parseInt(minutes, 10) * 60;

export const STATUSES = {
  Waiting: 'warning',
  Success: 'success',
  Fail: 'danger',
  InProgress: 'warning',
} as const;

const getStatus = (status: keyof typeof STATUSES) => STATUSES[status];

const formatHash = (hash: string, number = 6) => hash.slice(0, number);

export {
  callApi,
  formatDate,
  formatHash,
  formatTime,
  getStatus,
  minToSec,
};
