import React, { cloneElement, Children, memo } from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';

import './styles.scss';

interface IContainer {
  className?: string,
  children?: React.ReactElement,
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
  children?: React.ReactNode,
  route?: string,
}

const Logo = memo(({ children, route = '#' }: ILogo) => (
  <Link to={route} className="Header-Logo">
    {children}
  </Link>
));

interface IMenu {
  children: React.ReactElement,
}

const Menu = ({ children }: IMenu) => (
  children && Children.map(children, (child) => (
    cloneElement(child, { className: 'Header-Menu' })
  ))
);

const HeaderUI = {
  Container,
  Logo,
  Menu,
};

export default HeaderUI;
