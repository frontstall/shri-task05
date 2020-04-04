import React, { cloneElement, Children } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import Button from 'components/Button';
import Loader from 'components/Loader';

import './styles.scss';

const Pagination = ({ className, children, isFetching }) => {
  const classNames = cn(
    className,
    'Pagination',
  );

  return (
    <div className={classNames}>
      <ul className="Pagination-List">
        {Children.map(children, (child) => (
          <li className="Pagination-ListItem">
            {cloneElement(child)}
          </li>
        ))}
        {isFetching && <Loader size="m" className="Pagination-Loader" />}
        <Button
          className="Pagination-Button"
          size="s"
          disabled={isFetching}
        >
          {isFetching ? 'Loading...' : 'Show more'}
        </Button>
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  isFetching: PropTypes.bool.isRequired,
};

Pagination.defaultProps = {
  className: '',
  children: '',
};

export default Pagination;
