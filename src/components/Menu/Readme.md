Каждый вложенный элемент становится пунктом меню.

```js padded
import { BrowserRouter } from 'react-router-dom';
import Button from '../Button';

<BrowserRouter>
  <Menu>
    <Button asLink size="s" icon="gear">
      Settings
    </Button>
    <Button size="s" icon="refresh">
      Rebuild
    </Button>
  </Menu>
</BrowserRouter>
```
