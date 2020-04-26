import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';

import './styles.scss';

interface INavigation {
  routes: Array<{
    route: string,
    name: string
  }>,
  className?: string,
}

const Navigation: React.FC<INavigation> = memo(({ routes, className }) => {
  const classNames = cn(
    className,
    'Navigation',
  );

  return (
    <ul className={classNames}>
      {routes.map(({ route, name }) => (
        <li className="Navigation-Item" key={`${route}${name}`}>
          <Link to={route} className="Navigation-Link">
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
});

export default Navigation;
