import React from 'react';

import EmptyPage from '../EmptyPage';
import HistoryPage from '../HistoryPage';

const MainPage = () => {
  const useStore = () => ({ repoName: 'some repo', isFetching: false });
  const { repoName, isFetching } = useStore();

  return repoName ? <HistoryPage /> : <EmptyPage isFetching={isFetching} />;
};

export default MainPage;
