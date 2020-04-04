import { useSelector } from 'react-redux';

// eslint-disable-next-line import/prefer-default-export
export const useRepoName = () => useSelector(
  ({ settings }) => settings.name,
);
