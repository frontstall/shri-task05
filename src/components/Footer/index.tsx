import React, { memo } from 'react';

import cn from 'classnames';

import './styles.scss';

interface IFooter {
  className?: string,
  children?: React.ReactNode,
}

const Footer: React.FC<IFooter> = memo(({ className, children }) => {
  const classNames = cn(
    className,
    'Footer',
  );

  return (
    <footer className={classNames}>
      <div className="Footer-Container">
        {children}
      </div>
    </footer>
  );
});

export default Footer;
