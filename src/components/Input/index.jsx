import React from 'react';

import cn from 'classnames';

import './styles.scss';

const Input = ({
  clearable,
  fluid,
  size = 's',
  align = 'right',
  onChange,
  value,
  placeholder = '',
  disabled = false,
  className,
}) => {
  const classNames = cn(
    'Input',
    `Input_size_${size}`,
    align && `Input_align_${align}`,
    fluid && 'Input_fluid',
    clearable && 'Input_clearable',
    className,
  );

  return (
    <input
      className={classNames}
      value={value}
      onChange={onChange}
      type="text"
      disabled={disabled}
      placeholder={placeholder}
    />
  );
};

export default Input;
