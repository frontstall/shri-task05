import React, { cloneElement, Children } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import './styles.scss';

const ButtonGroup = ({
  children,
  className,
}) => {
  const classNames = cn(
    className,
    'ButtonGroup',
  );

  return (
    <div className={classNames}>
      {Children.map(children, (child) => (
        cloneElement(child, { className: 'ButtonGroup-Item' })
      ))}
    </div>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ButtonGroup.defaultProps = {
  className: '',
};

export default ButtonGroup;
