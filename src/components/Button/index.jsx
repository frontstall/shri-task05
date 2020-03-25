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
    ? <span classNames="Button-Text">{children}</span>
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

export default Button;
