import React, { memo } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import './styles.scss';

const Modal = memo(({ className, children }) => {
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

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  className: '',
};

export default Modal;
