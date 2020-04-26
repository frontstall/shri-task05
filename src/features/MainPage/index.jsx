import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'hooks';

import { getRepoSettings } from './repoSettingsSlice';
import StartPage from '../StartPage';
import HistoryPage from '../HistoryPage';


const MainPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getRepoSettings());
  }, [dispatch]);

  const { name, isFetching } = useSelector(({ settings }) => settings);

  return name ? <HistoryPage /> : <StartPage isFetching={isFetching} />;
};

export default MainPage;
