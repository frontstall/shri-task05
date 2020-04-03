import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import './styles.scss';

const Modal = ({ className, children, closeModal }) => {
  const classNames = cn(
    className,
    'Modal',
  );

  const onEscapePress = (evt) => {
    if (evt.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <div
      className={classNames}
      onClick={closeModal}
      onKeyDown={onEscapePress}
      role="presentation"
    >
      <div className="Modal-Container">
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  className: '',
};

export default Modal;
