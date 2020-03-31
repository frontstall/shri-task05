import React, { cloneElement, Children } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import cn from 'classnames';

import './styles.scss';

const Header = ({ className, children }) => {
  const classNames = cn(
    className,
    'Header',
  );

  return (
    <header className={classNames}>
      <div className="Header-Container">
        <Link to="/" className="Header-Logo">
          <h1 className="Heading Heading_color_default Heading_size_xl">School CI server</h1>
        </Link>
        {Children.map(children, (child) => (
          cloneElement(child, { className: 'Header-Menu' })
        ))}
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  className: '',
  children: '',
};

export default Header;
