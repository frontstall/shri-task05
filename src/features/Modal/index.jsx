import React from 'react';
import { useSelector } from 'react-redux';

import { Modal as ModalWrapper } from 'components';
import { HistoryPagePopup } from 'features/HistoryPage';

const Modal = () => {
  const { isOpen } = useSelector((state) => state.modal);

  return (
    isOpen && (
    <ModalWrapper>
      <HistoryPagePopup />
    </ModalWrapper>
    )
  );
};

export default Modal;
