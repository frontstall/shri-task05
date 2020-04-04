export const footerRoutes = {
  navigationRoutes: [
    {
      route: '#',
      name: 'Support',
    },
    {
      route: '#',
      name: 'Learning',
    },
  ],
  copyrightRoutes: [
    {
      route: '#',
      name: '\u00A9 2020 Your Name',
    },
  ],
};

export const API_ROOT = 'http://localhost:3001/api';

export const ROUTES = {
  root: '/',
  settings: '/settings',
  build: '/build',
};

export const API_ROUTES = {
  root: `${API_ROOT}/`,
  settings: `${API_ROOT}/settings`,
  builds: `${API_ROOT}/builds`,
  build: `${API_ROOT}/build`,
};

export const DEFAULT_PERIOD = 600;
