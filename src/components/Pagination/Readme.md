Обёртка для пагинации. Children становятся элементами списка.

```js padded
import { BrowserRouter } from 'react-router-dom';
import BuildCard from '../BuildCard';

<BrowserRouter>
  <Pagination>
    <BuildCard
      buildId="1234"
      adaptive
      status="success"
      commitName="add some awesome feature"
      branch="master"
      hash="9c9f0b9"
      author="Dan Abramov"
      date="21 янв, 03:06"
      duration="1 ч 20 мин"
    />
    <BuildCard
      buildId="1235"
      adaptive
      status="danger"
      commitName="add some awesome feature"
      branch="master"
      hash="9c9f0b9"
      author="Dan Abramov"
      date="21 янв, 03:06"
      duration="1 ч 20 мин"
    />
  </Pagination>
</BrowserRouter>
```
