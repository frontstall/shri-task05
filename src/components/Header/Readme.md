Хэдер. В качестве children принимает компонент Menu.

```js padded
import { BrowserRouter } from 'react-router-dom';
import Menu from '../Menu';
import Button from '../Button';

<BrowserRouter>
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
</BrowserRouter>
```
