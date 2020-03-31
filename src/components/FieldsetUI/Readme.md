Элементы разметки fieldset форм.

```js padded
import { BrowserRouter } from 'react-router-dom';

import Menu from '../Menu';
import Button from '../Button';
import InputGroup from '../InputGroup';

const {
  Fieldset,
  Legend,
  Row,
} = FieldsetUI;

<form>
  <Fieldset>
    <Legend>
      Fieldset legend
    </Legend>
    <Row>
      <InputGroup
        id='4'
        placeholder='placeholder'
        clearable
        value='some value'
      >
        Label
      </InputGroup>
    </Row>
  </Fieldset>
</form>
```
