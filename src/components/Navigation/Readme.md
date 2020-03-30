Блок навигации (используется в футере).

```js padded
import { BrowserRouter } from 'react-router-dom';

const routes = [
  {
    route: '/support',
    name: 'Support',
  },
  {
    route: '/learning',
    name: 'Learning',
  },
];

<BrowserRouter>
  <Navigation routes={routes} />
</BrowserRouter>
```
