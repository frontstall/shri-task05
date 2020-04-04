import React from 'react';

import {
  BuildCard,
  Button,
  Footer,
  HeaderUI,
  Heading,
  Menu,
  Navigation,
} from 'components';
import { footerRoutes, ROUTES } from 'config';
import { getStatus } from 'utils';

import useBuild from './hooks';

const {
  navigationRoutes,
  copyrightRoutes,
} = footerRoutes;


const BuildPage = () => {
  const {
    id,
    buildLog,
    buildNumber,
    status,
    commitMessage,
    branchName,
    commitHash,
    authorName,
    start = 'Not started',
    duration = 'Not finished',
  } = useBuild();

  return (
    <div className="MainLayout">
      <HeaderUI.Container>
        <HeaderUI.Logo route={ROUTES.root}>
          <Heading color="accent">
            philip1967/my-awesome-repo
          </Heading>
        </HeaderUI.Logo>
        <HeaderUI.Menu>
          <Menu>
            <Button size="s" icon="refresh">
              Rebuild
            </Button>
            <Button asLink size="s" icon="gear" href={ROUTES.settings} />
          </Menu>
        </HeaderUI.Menu>
      </HeaderUI.Container>
      <main className="Main MainLayout-Content">
        <div className="BuildDetails">
          <div className="BuildDetails-Build Main-Container">
            {status
              ? (
                <BuildCard
                  key={id}
                  id={id}
                  status={getStatus(status)}
                  commitMessage={commitMessage}
                  branchName={branchName}
                  commitHash={commitHash}
                  authorName={authorName}
                  date={start}
                  duration={duration}
                  buildNumber={buildNumber}
                />
              )
              : 'loading'}
          </div>
          <div className="BuildDetails-Container">
            <pre className="BuildDetails-Flow">
              {buildLog}
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
