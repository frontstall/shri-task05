import React, { memo } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import './styles.scss';

const Input = memo(({
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

Input.propTypes = {
  clearable: PropTypes.bool,
  size: PropTypes.oneOf(['s', 'max']),
  align: PropTypes.oneOf(['right']),
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  inline: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'number']),
  required: PropTypes.bool,
};

Input.defaultProps = {
  clearable: false,
  size: 's',
  align: null,
  onChange: () => {},
  value: '',
  placeholder: '',
  disabled: false,
  className: '',
  inline: false,
  type: 'text',
  required: false,
};

export default Input;
