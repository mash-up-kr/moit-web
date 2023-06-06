import {
  MouseEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { colors } from '@styles/theme';
import { ModalProps } from 'hooks/useModal';
import useScrollLock from 'hooks/useScrollLock';

const Container = styled.div<{ dimColor?: string }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ dimColor }) => dimColor};
  z-index: 998;
`;

export interface BaseModalProps {
  children: ReactNode;
  modalProps: ModalProps;

  dimColor?: string;
}

const BaseModal = ({
  children,
  modalProps,
  dimColor = colors.white_02,
}: BaseModalProps) => {
  const [portal, setPortal] = useState<HTMLElement | null>(null);
  const contentRef = useRef(null);

  useScrollLock(true);

  useEffect(() => {
    setPortal(document.getElementById('modal-root'));

    return () => setPortal(null);
  }, []);

  if (!portal) {
    return null;
  }

  const handleDimClick: MouseEventHandler = (e) => {
    if (e.target === contentRef.current) {
      modalProps.hideModal();
    }
  };

  if (modalProps.modalShowing) {
    return ReactDOM.createPortal(
      <Container ref={contentRef} onClick={handleDimClick} dimColor={dimColor}>
        {children}
      </Container>,
      portal,
    );
  }

  return null;
};

export default BaseModal;
