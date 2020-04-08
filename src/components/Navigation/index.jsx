import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import cn from 'classnames';

import './styles.scss';

const Navigation = memo(({ routes, className }) => {
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

Navigation.propTypes = {
  className: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.shape({
    route: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

Navigation.defaultProps = {
  className: '',
};

export default Navigation;
