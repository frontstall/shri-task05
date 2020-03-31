import React from 'react';

import {
  Footer,
  Navigation,
  Header,
  Menu,
  Button,
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

const Main = () => (
  <div className="MainLayout">
    <Header>
      <Menu>
        <Button asLink size="s" icon="gear">
          Settings
        </Button>
        <Button size="s" icon="refresh">
          Rebuild
        </Button>
      </Menu>
    </Header>
    <main className="Main Main_aligned_center MainLayout-Content">
      <div className="Main-Container">
        <Placeholder
          description="Configure repository connection and synchronization settings"
          buttonConfig={{ text: 'Open settings', route: '/settings.html' }}
        />
      </div>
    </main>
    <Footer>
      <Navigation routes={navigationRoutes} />
      <Navigation routes={copyrightRoutes} />
    </Footer>
  </div>
);

export default Main;
