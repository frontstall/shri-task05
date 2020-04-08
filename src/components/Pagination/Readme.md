Обёртка для пагинации. Children становятся элементами списка.

```js padded
import { BrowserRouter } from 'react-router-dom';
import BuildCard from '../BuildCard';

<BrowserRouter>
  <Pagination isFetching={false}>
    <BuildCard
      id="1234"
      adaptive
      buildNumber={13}
      status="success"
      commitMessage="add some awesome feature"
      branchName="master"
      commitHash="9c9f0b9"
      authorName="Dan Abramov"
      date="21 янв, 03:06"
      duration="1 ч 20 мин"
    />
    <BuildCard
      id="1235"
      adaptive
      buildNumber={13}
      status="danger"
      commitMessage="add some awesome feature"
      branchName="master"
      commitHash="9c9f0b9"
      authorName="Dan Abramov"
      date="21 янв, 03:06"
      duration="1 ч 20 мин"
    />
  </Pagination>
</BrowserRouter>
```
