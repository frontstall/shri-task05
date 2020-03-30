import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import './styles.scss';

const Footer = ({ className, children }) => {
  const classNames = cn(
    className,
    'Footer',
  );

  return (
    <footer className={classNames}>
      <div className="Footer-Container">
        {children}
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Footer.defaultProps = {
  className: '',
  children: '',
};

export default Footer;
