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
  id,
}) => {
  const classNames = cn(
    className,
    'Input',
    `Input_size_${size}`,
    align && `Input_align_${align}`,
    fluid && 'Input_fluid',
    clearable && 'Input_clearable',
  );

  return (
    <input
      className={classNames}
      value={value}
      onChange={onChange}
      type="text"
      disabled={disabled}
      placeholder={placeholder}
      id={id}
    />
  );
};

export default Input;
