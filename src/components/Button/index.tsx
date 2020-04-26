import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';

import './styles.scss';

interface IButton {
  size?: 's' | 'm',
  color?: 'default' | 'accent',
  asLink?: boolean,
  type?: 'button' | 'submit',
  icon?: 'gear' | 'run' | 'refresh',
  children?: React.ReactNode,
  href?: string,
  className?: string,
  onClick?: () => void,
  disabled?: boolean
}

const Button: React.FC<IButton> = memo(({
  size = 'm',
  color = 'default',
  asLink = false,
  type = 'button',
  icon,
  children,
  href = '#',
  className,
  onClick,
  disabled = false,
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
        disabled={disabled}
      >
        {buttonContent}
      </button>
    );
});

export default Button;
