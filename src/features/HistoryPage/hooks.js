import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import size from 'lodash/size';
import orderBy from 'lodash/orderBy';

import { useRepoName, useAppDispatch } from 'hooks';
import { openModal } from 'features/Modal/modalSlice';
import { getBuilds } from './historySlice';

const useHistoryPage = () => {
  const {
    builds,
    isFetching,
  } = useSelector(({ history }) => ({
    builds: history.builds,
    isFetching: history.isFetching,
  }));

  const repoName = useRepoName();

  const dispatch = useAppDispatch();

  const orderedBuilds = orderBy(builds, 'buildNumber', 'desc');

  useEffect(() => {
    dispatch(getBuilds());
  }, [dispatch]);
  const handleOpenModal = useCallback(() => dispatch(openModal()), [dispatch]);

  const fetch = useCallback(() => {
    dispatch(getBuilds(size(builds)));
  }, [builds, dispatch]);

  return {
    repoName,
    builds: orderedBuilds,
    fetch,
    handleOpenModal,
    isFetching,
  };
};

export default useHistoryPage;
