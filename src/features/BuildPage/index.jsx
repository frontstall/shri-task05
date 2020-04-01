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

import useBuild from './hooks';

const {
  navigationRoutes,
  copyrightRoutes,
} = footerRoutes;


const BuildPage = () => {
  const {
    building,
    buildLog,
    buildId,
    status,
    commitName,
    branch,
    hash,
    author,
    date,
    duration,
  } = useBuild();

  return (
    <div className="MainLayout">
      <HeaderUI.Container>
        <HeaderUI.Logo route={ROUTES.build}>
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
            <BuildCard
              key={buildId}
              buildId={buildId}
              status={status}
              commitName={commitName}
              branch={branch}
              hash={hash}
              author={author}
              date={date}
              duration={duration}
            />
          </div>
          <div className="BuildDetails-Container">
            <pre className="BuildDetails-Flow">
              {building
                ? 'Building...'
                : buildLog}
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
