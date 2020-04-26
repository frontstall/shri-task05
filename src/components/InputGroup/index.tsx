import React, { memo } from 'react';

import cn from 'classnames';

import Input from 'components/Input';

import './styles.scss';

interface IInputGroup {
  clearable?: boolean,
  onChange: () => void,
  value?: string,
  placeholder?: string,
  disabled?: boolean,
  className?: string,
  id: string,
  children?: React.ReactNode,
  onClear?: () => void,
  inline?: boolean,
  required?: boolean,
}

const InputGroup: React.FC<IInputGroup> = memo(({
  clearable = false,
  onChange,
  value = '',
  placeholder = '',
  disabled = false,
  className,
  id,
  children,
  onClear,
  inline = false,
  required = false,
}) => {
  const classNames = cn(
    className,
    'InputGroup',
    inline && 'InputGroup_inline',
  );

  return (
    <div className={classNames}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="InputGroup-Label" htmlFor={id}>
        {children}
      </label>
      <div className="InputGroup-Wrapper">
        <Input
          className="InputGroup-Input Input Input_clearable Input_size_max"
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          id={id}
          clearable={clearable}
          required={required}
        />
        {clearable && value && (
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <button className="InputGroup-Icon" type="button" onClick={onClear} />
        )}
      </div>
    </div>
  );
});

export default InputGroup;
