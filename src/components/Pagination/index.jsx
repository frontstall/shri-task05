import React, { cloneElement, Children } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import Button from 'components/Button';

import './styles.scss';

const Pagination = ({ className, children, loading = false }) => {
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
          disabled="loading"
        >
          {loading ? 'Loading...' : 'Show more'}
        </Button>
      </ul>

    </div>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  loading: PropTypes.bool,
};

Pagination.defaultProps = {
  className: '',
  children: '',
  loading: false,
};

export default Pagination;
