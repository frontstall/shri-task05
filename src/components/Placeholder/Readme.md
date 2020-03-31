Заглушка

```js padded
import { BrowserRouter } from 'react-router-dom';

const buttonConfig = {
  text: 'Open settings',
  route: '/settings',
};

<BrowserRouter>
  <Placeholder
    buttonConfig={buttonConfig}
    description="Configure repository connection and synchronization settings"
  />
</BrowserRouter>
```
