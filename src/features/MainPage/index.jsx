import React from 'react';

import StartPage from '../StartPage';
import HistoryPage from '../HistoryPage';

const MainPage = () => {
  const useStore = () => ({ repoName: 'some repo', isFetching: false });
  const { repoName, isFetching } = useStore();

  return repoName ? <HistoryPage /> : <StartPage isFetching={isFetching} />;
};

export default MainPage;
