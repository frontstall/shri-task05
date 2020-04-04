import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useRepoName } from 'hooks';
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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBuilds());
  }, [dispatch]);
  const handleOpenModal = useCallback(() => dispatch(openModal()), [dispatch]);

  return {
    repoName,
    builds,
    isFetching,
    handleOpenModal,
  };
};

export default useHistoryPage;
