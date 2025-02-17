import React, { memo } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import Input from 'components/Input';

import './styles.scss';

const InputGroup = memo(({
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

InputGroup.propTypes = {
  clearable: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.node.isRequired,
  onClear: PropTypes.func,
  inline: PropTypes.bool,
  required: PropTypes.bool,
};

InputGroup.defaultProps = {
  clearable: false,
  onChange: () => {},
  onClear: () => {},
  value: '',
  placeholder: '',
  disabled: false,
  className: '',
  inline: false,
  required: false,
};

export default InputGroup;
