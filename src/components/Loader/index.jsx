import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import './styles.scss';

const Loader = ({
  size = 'm',
  color = 'default',
  className,
}) => {
  const classNames = cn(
    className,
    'Loader',
    `Loader_size_${size}`,
    `Loader_color_${color}`,
  );

  return (
    <div className={classNames} />
  );
};

Loader.propTypes = {
  size: PropTypes.oneOf(['s', 'm']),
  color: PropTypes.oneOf(['default', 'accent']),
  className: PropTypes.string,
};

Loader.defaultProps = {
  size: 'm',
  color: 'default',
  className: '',
};

export default Loader;
