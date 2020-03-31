import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import './styles.scss';

const Text = ({
  color,
  className,
  children,
}) => {
  const classNames = cn(
    className,
    'Text',
    color && `Text_color_${color}`,
  );

  return (
    <span className={classNames}>
      {children}
    </span>
  );
};

Text.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['danger', 'default']),
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  className: '',
  color: 'default',
};

export default Text;
