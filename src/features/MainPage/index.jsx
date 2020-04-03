import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRepoSettings } from './repoSettingsSlice';
import StartPage from '../StartPage';
import HistoryPage from '../HistoryPage';


const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRepoSettings());
  }, [dispatch]);

  const { name, isFetching } = useSelector(({ settings }) => settings);

  return name ? <HistoryPage /> : <StartPage isFetching={isFetching} />;
};

export default MainPage;
