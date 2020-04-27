import React from 'react';
import { useSelector } from 'react-redux';

import { Modal as ModalWrapper } from 'components';
import { HistoryPagePopup } from 'features/HistoryPage';
import { TRootState } from 'reducers';

const Modal = () => {
  const { isOpen } = useSelector<TRootState, { isOpen: boolean }>((state) => state.modal);

  return (
    isOpen && (
    <ModalWrapper>
      <HistoryPagePopup />
    </ModalWrapper>
    )
  );
};

export default Modal;
