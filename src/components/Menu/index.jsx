import React, { Children, memo } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import './styles.scss';

const Menu = memo(({ className, children }) => {
  const classNames = cn(
    className,
    'Menu',
  );

  return (
    <ul className={classNames}>
      {Children.map(children, (child) => (
        <li className="Menu-Item">
          {child}
        </li>
      ))}
    </ul>
  );
});

Menu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Menu.defaultProps = {
  className: '',
  children: '',
};

export default Menu;
