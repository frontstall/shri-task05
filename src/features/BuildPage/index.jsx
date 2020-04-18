import React from 'react';

import {
  BuildCard,
  Button,
  Footer,
  HeaderUI,
  Heading,
  Loader,
  Menu,
  Navigation,
} from 'components';
import { footerRoutes, ROUTES } from 'config';
import { getStatus, formatTime } from 'utils';

import useBuild from './hooks';

const {
  navigationRoutes,
  copyrightRoutes,
} = footerRoutes;


const BuildPage = () => {
  const {
    id,
    repoName,
    buildLog,
    buildNumber,
    status,
    commitMessage,
    branchName,
    commitHash,
    authorName,
    start,
    duration,
    isFetching,
    isLogFetching,
    rebuild,
  } = useBuild();

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
            <Button size="s" icon="refresh" onClick={rebuild}>
              Rebuild
            </Button>
            <Button asLink size="s" icon="gear" href={ROUTES.settings} />
          </Menu>
        </HeaderUI.Menu>
      </HeaderUI.Container>
      <main className="Main MainLayout-Content">
        <div className="BuildDetails">
          <div className="BuildDetails-Build Main-Container">
            {isFetching && <Loader className="BuildDetails-Loader" />}
            {id && (
            <BuildCard
              key={id}
              id={id}
              status={getStatus(status)}
              commitMessage={commitMessage}
              branchName={branchName}
              commitHash={commitHash}
              authorName={authorName}
              date={start}
              duration={formatTime(duration)}
              buildNumber={buildNumber}
            />
            )}
          </div>
          <div className="BuildDetails-Container">
            <pre className="BuildDetails-Flow">
              {isLogFetching
                ? <Loader className="BuildDetails-Loader" />
                : buildLog || 'Build log is not available yet.' }
            </pre>
          </div>
        </div>
      </main>
      <Footer>
        <Navigation routes={navigationRoutes} />
        <Navigation routes={copyrightRoutes} />
      </Footer>
    </div>
  );
};

export default BuildPage;
