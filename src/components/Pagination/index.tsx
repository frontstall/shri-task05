import React, { Children, memo } from 'react';

import cn from 'classnames';

import Button from 'components/Button';
import Loader from 'components/Loader';

import './styles.scss';

interface IPagination {
  className?: string,
  children?: React.ReactNode,
  isFetching: boolean,
  fetch: () => void,
}

const Pagination: React.FC<IPagination> = memo(({
  className,
  children,
  isFetching,
  fetch,
}) => {
  const classNames = cn(
    className,
    'Pagination',
  );

  return (
    <div className={classNames}>
      <ul className="Pagination-List">
        {Children.map(children, (child) => (
          <li className="Pagination-ListItem">
            {child}
          </li>
        ))}
        {isFetching && <Loader size="m" className="Pagination-Loader" />}
        <Button
          className="Pagination-Button"
          size="s"
          disabled={isFetching}
          onClick={fetch}
        >
          {isFetching ? 'Loading...' : 'Show more'}
        </Button>
      </ul>
    </div>
  );
});

export default Pagination;
