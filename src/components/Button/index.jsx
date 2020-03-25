import React from 'react';

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
}) => {
  const className = cn(
    'Button',
    `Button_size_${size}`,
    `Button_color_${color}`,
    icon && ['Button_iconed', `Button_iconed_${icon}`],
  );

  const buttonValue = icon
    ? <span className="Button-Text">{children}</span>
    : children;
  return asLink
    ? (
      <a
        className={className}
        href={href}
      >
        {buttonValue}
      </a>
    )
    : (
      <button
        className={className}
        type={type}
      >
        {buttonValue}
      </button>
    );
};

export default Button;
