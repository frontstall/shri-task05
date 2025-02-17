import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Footer,
  HeaderUI,
  Heading,
  Loader,
  Menu,
  Navigation,
  Placeholder,
} from 'components';
import { footerRoutes, ROUTES } from 'config';

const {
  navigationRoutes,
  copyrightRoutes,
} = footerRoutes;

const StartPage = ({ isFetching }) => (
  <div className="MainLayout">
    <HeaderUI.Container>
      <HeaderUI.Logo route={ROUTES.root}>
        <Heading>
          School CI server
        </Heading>
      </HeaderUI.Logo>
      <HeaderUI.Menu>
        <Menu>
          <Button asLink size="s" icon="gear" href={ROUTES.settings}>
            Settings
          </Button>
        </Menu>
      </HeaderUI.Menu>
    </HeaderUI.Container>
    <main className="Main Main_aligned_center MainLayout-Content">
      <div className="Main-Container">
        {isFetching
          ? <Loader />
          : (
            <Placeholder
              description="Configure repository connection and synchronization settings"
              buttonConfig={{ text: 'Open settings', route: ROUTES.settings }}
            />
          )}
      </div>
    </main>
    <Footer>
      <Navigation routes={navigationRoutes} />
      <Navigation routes={copyrightRoutes} />
    </Footer>
  </div>
);

StartPage.propTypes = {
  isFetching: PropTypes.bool.isRequired,
};

export default StartPage;
