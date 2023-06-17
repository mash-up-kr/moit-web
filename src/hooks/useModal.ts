import { useState } from 'react';

export interface ModalProps {
  modalShowing: boolean;
  showModal(): void;
  hideModal(): void;
}

export const useModal = (): ModalProps => {
  const [modalShowing, setIsShowing] = useState(false);

  const showModal = () => {
    if (!modalShowing) {
      setIsShowing(true);
    }
  };

  const hideModal = () => {
    if (modalShowing) {
      setIsShowing(false);
    }
  };

  const modalProps = { modalShowing, showModal, hideModal };

  return modalProps;
};
