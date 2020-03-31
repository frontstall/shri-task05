Обычная кнопка. Может быть ссылкой или кнопкой.

```js padded
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
  <Button>Regular button</Button>
  <Button asLink color='accent'>Link</Button>
</BrowserRouter>
```

Может иметь иконку.

```js padded
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
  <Button icon="refresh" size='s'>Iconed</Button>
  <Button icon="run" size='s'>Iconed</Button>
  <Button icon="gear" asLink size='s'>Iconed link</Button>
</BrowserRouter>
```
