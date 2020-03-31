import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import './styles.scss';

const Input = ({
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
      type="text"
      disabled={disabled}
      placeholder={placeholder}
      id={id}
    />
  );
};

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
};

export default Input;
