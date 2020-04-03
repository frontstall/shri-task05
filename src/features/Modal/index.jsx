import React from 'react';
import { useSelector } from 'react-redux';

import { Modal as ModalWrapper } from 'components';
import { HistoryPagePopup } from 'features/HistoryPage';

import { closeModal } from './modalSlice';

const Modal = () => {
  const { isOpen } = useSelector((state) => state.modal);

  return (
    isOpen && (
    <ModalWrapper closeModal={closeModal}>
      <HistoryPagePopup />
    </ModalWrapper>
    )
  );
};

export default Modal;
