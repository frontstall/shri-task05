import React, { Children } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import './styles.scss';

const Menu = ({ className, children }) => {
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
};

Menu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Menu.defaultProps = {
  className: '',
  children: '',
};

export default Menu;
