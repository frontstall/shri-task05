import React, { cloneElement, Children } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import Button from 'components/Button';

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
        <Button
          className="Pagination-Button"
          size="s"
          disabled="isFetching"
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
