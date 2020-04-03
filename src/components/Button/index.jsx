import React, { memo } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import './styles.scss';
import { Link } from 'react-router-dom';

const Button = memo(({
  size = 'm',
  color = 'default',
  asLink = false,
  type = 'button',
  icon,
  children,
  href = '#',
  className,
  onClick,
}) => {
  const classNames = cn(
    className,
    'Button',
    `Button_size_${size}`,
    `Button_color_${color}`,
    icon && ['Button_iconed', `Button_iconed_${icon}`],
  );

  const buttonContent = icon
    ? (
      <div className="Button-Content">
        {children && <span className="Button-Text">{children}</span>}
      </div>
    )
    : children;

  return asLink
    ? (
      <Link
        className={classNames}
        to={href}
      >
        {buttonContent}
      </Link>
    )
    : (
      <button
        className={classNames}
        type={type}
        onClick={onClick}
      >
        {buttonContent}
      </button>
    );
});

Button.propTypes = {
  size: PropTypes.oneOf(['s', 'm']),
  color: PropTypes.oneOf(['default', 'accent']),
  asLink: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
  icon: PropTypes.oneOf(['gear', 'run', 'refresh']),
  children: PropTypes.node,
  href: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  size: 'm',
  color: 'default',
  asLink: false,
  type: 'button',
  children: '',
  href: '#',
  icon: null,
  className: '',
  onClick: () => {},
};

export default Button;
