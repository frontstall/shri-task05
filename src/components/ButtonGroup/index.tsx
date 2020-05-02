import React, { cloneElement, Children, memo } from 'react';

import cn from 'classnames';

import './styles.scss';

interface IButtonGroup {
  className?: string,
  children: React.ReactElement,
}

const ButtonGroup: React.FC<IButtonGroup> = memo(({
  children,
  className,
}: IButtonGroup) => {
  const classNames = cn(
    className,
    'ButtonGroup',
  );

  return (
    <div className={classNames}>
      {children && Children.map(children, (child) => (
        cloneElement(child, { className: 'ButtonGroup-Item' })
      ))}
    </div>
  );
});

export default ButtonGroup;
