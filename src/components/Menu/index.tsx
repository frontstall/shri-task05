import React, { Children, memo } from 'react';

import cn from 'classnames';

import './styles.scss';

interface IMenu {
  className?: string,
  children?: React.ReactNode,
}

const Menu: React.FC<IMenu> = memo(({ className, children }) => {
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

export default Menu;
