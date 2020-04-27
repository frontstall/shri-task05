import React, { memo } from 'react';

import cn from 'classnames';

import './styles.scss';

interface IInput {
  clearable?: boolean,
  size?: 's' | 'max',
  align?: 'right',
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  value?: string,
  placeholder?: string,
  disabled?: boolean,
  className?: string,
  id: string,
  inline?: boolean,
  type?:'text' | 'number',
  required?: boolean,
}

const Input: React.FC<IInput> = memo(({
  clearable = false,
  size = 's',
  align,
  onChange,
  value = '',
  placeholder = '',
  disabled = false,
  className,
  id,
  inline = false,
  type = 'text',
  required = false,
}) => {
  const classNames = cn(
    className,
    'Input',
    `Input_size_${size}`,
    align && `Input_align_${align}`,
    clearable && 'Input_clearable',
    inline && 'Input_inline',
  );

  return (
    <input
      className={classNames}
      value={value}
      onChange={onChange}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      id={id}
      required={required}
    />
  );
});

export default Input;
