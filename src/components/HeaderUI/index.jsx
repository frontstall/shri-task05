import React, { cloneElement, Children, memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import cn from 'classnames';

import './styles.scss';

const Container = memo(({ className, children }) => {
  const classNames = cn(
    className,
    'Header',
  );

  return (
    <header className={classNames}>
      <div className="Header-Container">
        {children}
      </div>
    </header>
  );
});

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Container.defaultProps = {
  className: '',
  children: '',
};

const Logo = memo(({ children, route = '#' }) => (
  <Link to={route} className="Header-Logo">
    {children}
  </Link>
));

Logo.propTypes = {
  children: PropTypes.node,
  route: PropTypes.string,
};

Logo.defaultProps = {
  children: '',
  route: '#',
};

const Menu = ({ children }) => (
  children && Children.map(children, (child) => (
    cloneElement(child, { className: 'Header-Menu' })
  ))
);

Menu.propTypes = {
  children: PropTypes.node,
};

Menu.defaultProps = {
  children: '',
};

const HeaderUI = {
  Container,
  Logo,
  Menu,
};

export default HeaderUI;
