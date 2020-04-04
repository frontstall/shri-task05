import React from 'react';

import { footerRoutes, ROUTES } from 'config';
import { getStatus } from 'utils';
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
    repoName,
    builds,
    isFetching,
    handleOpenModal,
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
          <Pagination isFetching={isFetching}>
            {builds.map(({
              id,
              status,
              commitMessage,
              branchName,
              buildNumber,
              commitHash,
              authorName,
              date = 'Not started',
              duration = 'Not finished',
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
                date={date}
                duration={duration}
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
