Элементы для конструирования хэдера.

```js padded
import { BrowserRouter } from 'react-router-dom';
import Menu from '../Menu';
import Button from '../Button';
import Heading from '../Heading';

const {
  Container,
  Logo,
  Menu: MenuWrapper,
} = HeaderUI;

<BrowserRouter>
  <Container>
    <Logo>
      <Heading>
        School CI server
      </Heading>
    </Logo>
    <MenuWrapper>
      <Menu>
        <Button asLink size="s" icon="gear">
          Settings
        </Button>
        <Button size="s" icon="refresh">
          Rebuild
        </Button>
      </Menu>
    </MenuWrapper>
  </Container>
</BrowserRouter>
```
