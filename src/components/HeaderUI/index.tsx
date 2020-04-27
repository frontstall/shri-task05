import React, { cloneElement, Children, memo } from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';

import './styles.scss';

interface IContainer {
  className?: string,
  children?: React.ReactElement | React.ReactNode,
}

const Container: React.FC<IContainer> = memo(({ className, children }) => {
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

interface ILogo {
  children?: React.ReactElement,
  route?: string,
}

const Logo: React.FC<ILogo> = memo(({ children, route = '#' }) => (
  <Link to={route} className="Header-Logo">
    {children}
  </Link>
));

interface IMenu {
  children: React.ReactElement,
}
// @ts-ignore
const Menu: React.FC<IMenu> = ({ children }) => (
  children && Children.map(children, (child) => (
    // @ts-ignore
    cloneElement(child, { className: 'Header-Menu' })
  ))
);

const HeaderUI = {
  Container,
  Logo,
  Menu,
};

export default HeaderUI;
