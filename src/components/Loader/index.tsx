import React, { memo } from 'react';

import cn from 'classnames';

import './styles.scss';

interface ILoader {
  size?: 's'| 'm',
  color?:'default' | 'accent',
  className?: string,
}

const Loader: React.FC<ILoader> = memo(({
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
});

export default Loader;
