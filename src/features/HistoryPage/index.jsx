import React from 'react';

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
import { footerRoutes, ROUTES } from 'config';

import useHistory from './hooks';

const {
  navigationRoutes,
  copyrightRoutes,
} = footerRoutes;


const Builds = () => {
  const {
    builds,
    loading,
  } = useHistory();

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
            <Button size="s" icon="run">
              Run build
            </Button>
            <Button asLink size="s" icon="gear" href={ROUTES.settings} />
          </Menu>
        </HeaderUI.Menu>
      </HeaderUI.Container>
      <main className="Main MainLayout-Content">
        <div className="Main-Container">
          <Pagination loading={loading}>
            {builds.map(({
              buildId,
              status,
              commitName,
              branch,
              hash,
              author,
              date,
              duration,
            }) => (
              <BuildCard
                adaptive
                clickable
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

export default Builds;
