import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import './styles.scss';

const Button = ({
  size = 'm',
  color = 'default',
  asLink = false,
  type = 'button',
  icon,
  children,
  href = '#',
  className,
}) => {
  const classNames = cn(
    className,
    'Button',
    `Button_size_${size}`,
    `Button_color_${color}`,
    icon && ['Button_iconed', `Button_iconed_${icon}`],
  );

  const buttonValue = icon
    ? (
      <div className="Button-Content">
        <span className="Button-Text">{children}</span>
      </div>
    )
    : children;
  return asLink
    ? (
      <a
        className={classNames}
        href={href}
      >
        {buttonValue}
      </a>
    )
    : (
      <button
        className={classNames}
        type={type}
      >
        {buttonValue}
      </button>
    );
};

Button.propTypes = {
  size: PropTypes.oneOf(['s', 'm']),
  color: PropTypes.oneOf(['default', 'accent']),
  asLink: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
  icon: PropTypes.oneOf(['gear', 'run', 'refresh']),
  children: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  size: 'm',
  color: 'default',
  asLink: false,
  type: 'button',
  href: '#',
  icon: null,
  children: '',
  className: '',
};

export default Button;
