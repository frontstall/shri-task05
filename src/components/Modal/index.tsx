import React, { memo } from 'react';

import cn from 'classnames';

import './styles.scss';

interface IModal {
  className?: string,
  children: React.ReactNode,
}

const Modal: React.FC<IModal> = memo(({ className, children }) => {
  const classNames = cn(
    className,
    'Modal',
  );

  return (
    <div
      className={classNames}
    >
      <div className="Modal-Container">
        {children}
      </div>
    </div>
  );
});

export default Modal;
