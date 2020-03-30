Футер.

```js padded
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../Navigation';

const navigationRoutes = [
  {
    route: '/support',
    name: 'Support',
  },
  {
    route: '/learning',
    name: 'Learning',
  },
];

const copyrightRoutes = [
  {
    route: '/copyright',
    name: '\u00A9 2020 Your Name',
  },
];

<BrowserRouter>
  <Footer>
    <Navigation routes={navigationRoutes} />
    <Navigation routes={copyrightRoutes} />
  </Footer>
</BrowserRouter>
```
