import React, { memo } from 'react';

import cn from 'classnames';

import './styles.scss';

interface IText {
  className?: string,
  color?: 'danger' | 'default',
  children: React.ReactNode,
}

const Text: React.FC<IText> = memo(({
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
});

export default Text;
