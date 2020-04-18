import React from 'react';

import { footerRoutes, ROUTES } from 'config';
import {
  getStatus,
  formatTime,
  formatDate,
} from 'utils';
import {
  BuildCard,
  Button,
  Footer,
  HeaderUI,
  Heading,
  Menu,
  Navigation,
  Pagination,
} from 'components';

import useHistoryPage from './hooks';
import Popup from './Popup';

const {
  navigationRoutes,
  copyrightRoutes,
} = footerRoutes;

const HistoryPage = () => {
  const {
    builds,
    fetch,
    handleOpenModal,
    isFetching,
    repoName,
  } = useHistoryPage();

  return (
    <div className="MainLayout">
      <HeaderUI.Container>
        <HeaderUI.Logo route={ROUTES.root}>
          <Heading color="accent">
            {repoName}
          </Heading>
        </HeaderUI.Logo>
        <HeaderUI.Menu>
          <Menu>
            <Button size="s" icon="run" onClick={handleOpenModal}>
              Run build
            </Button>
            <Button asLink size="s" icon="gear" href={ROUTES.settings} />
          </Menu>
        </HeaderUI.Menu>
      </HeaderUI.Container>
      <main className="Main MainLayout-Content">
        <div className="Main-Container">
          <Pagination isFetching={isFetching} fetch={fetch}>
            {builds.map(({
              id,
              status,
              commitMessage,
              branchName,
              buildNumber,
              commitHash,
              authorName,
              start,
              duration,
            }) => (
              <BuildCard
                adaptive
                buildNumber={buildNumber}
                clickable
                key={id}
                id={id}
                status={getStatus(status)}
                commitMessage={commitMessage}
                branchName={branchName}
                commitHash={commitHash}
                authorName={authorName}
                date={formatDate(start)}
                duration={formatTime(duration)}
              />
            ))}
          </Pagination>
        </div>
      </main>
      <Footer>
        <Navigation routes={navigationRoutes} />
        <Navigation routes={copyrightRoutes} />
      </Footer>
    </div>
  );
};

export default HistoryPage;

export const HistoryPagePopup = Popup;
