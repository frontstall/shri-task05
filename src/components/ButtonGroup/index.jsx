import React, { cloneElement, Children } from 'react';

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

export default ButtonGroup;
