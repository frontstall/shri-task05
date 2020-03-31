import React from 'react';

import {
  Button,
  Footer,
  HeaderUI,
  Heading,
  Menu,
  Navigation,
  Placeholder,
} from 'components';

const navigationRoutes = [
  {
    route: '#',
    name: 'Support',
  },
  {
    route: '#',
    name: 'Learning',
  },
];

const copyrightRoutes = [
  {
    route: '#',
    name: '\u00A9 2020 Your Name',
  },
];

const MainPage = () => (
  <div className="MainLayout">
    <HeaderUI.Container>
      <HeaderUI.Logo route="#">
        <Heading>
          School CI server
        </Heading>
      </HeaderUI.Logo>
      <HeaderUI.Menu>
        <Menu>
          <Button asLink size="s" icon="gear" href="settings">
            Settings
          </Button>
        </Menu>
      </HeaderUI.Menu>
    </HeaderUI.Container>
    <main className="Main Main_aligned_center MainLayout-Content">
      <div className="Main-Container">
        <Placeholder
          description="Configure repository connection and synchronization settings"
          buttonConfig={{ text: 'Open settings', route: '/settings' }}
        />
      </div>
    </main>
    <Footer>
      <Navigation routes={navigationRoutes} />
      <Navigation routes={copyrightRoutes} />
    </Footer>
  </div>
);

export default MainPage;
