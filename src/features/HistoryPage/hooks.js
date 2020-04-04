import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { openModal } from 'features/Modal/modalSlice';
import { getBuilds } from './historySlice';

const useHistoryPage = () => {
  const {
    repoName,
    builds,
    isFetching,
  } = useSelector(({ history, settings }) => ({
    repoName: settings.name,
    builds: history.builds,
    isFetching: history.isFetching,
  }));

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
