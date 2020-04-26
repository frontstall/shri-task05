import { createElement, memo } from 'react';

import cn from 'classnames';

import './styles.scss';

interface IHeading {
  className?: string,
  children?: React.ReactNode,
  level?: 1 | 2 | 3 | 4 | 5 | 6 | 7,
  size?: 'm' | 'l' | 'xl',
  color?: 'default' | 'accent',
}

const Heading: React.FC<IHeading> = memo(({
  className,
  level = 1,
  size = 'xl',
  color = 'default',
  children,
}) => {
  const classNames = cn(
    className,
    'Heading',
    `Heading_size_${size}`,
    `Heading_color_${color}`,
  );

  return createElement(`h${level}`, { className: classNames }, children);
});

export default Heading;
