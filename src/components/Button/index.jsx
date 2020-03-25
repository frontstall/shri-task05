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

  return asLink
    ? (
      <button
        className={className}
        type={type}
      >
        {children}
      </button>
    )
    : <a className={className} href={href}>{children}</a>;
};

export default Button;
