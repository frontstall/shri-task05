import React, { Children, memo } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import Button from 'components/Button';
import Loader from 'components/Loader';

import './styles.scss';

const Pagination = memo(({
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

Pagination.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  isFetching: PropTypes.bool.isRequired,
  fetch: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  className: '',
  children: '',
};

export default Pagination;
