import { FC, ReactNode } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { slideUp } from '@styles/keyframes';
import BaseModal, { BaseModalProps } from './BaseModal';

const Container = styled.div<{ isShow: boolean }>`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-height: 60%;
  min-height: 387px;
  overflow: scroll;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  transform: translateY(100%);
  transition: 0.24s ease-out;
  ${({ isShow }) =>
    isShow &&
    css`
      animation: ${slideUp} 0.4s forwards;
    `};
`;

interface BottomSheetProps extends Omit<BaseModalProps, 'children'> {
  header?: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
}

const BottomSheet: FC<BottomSheetProps> = ({
  modalProps,
  dimColor,
  header,
  content,
  footer,
}) => {
  return (
    <BaseModal modalProps={modalProps} dimColor={dimColor}>
      <Container isShow={modalProps.modalShowing}>
        {header && <header>{header}</header>}
        <section>{content}</section>
        {footer && <footer>{footer}</footer>}
      </Container>
    </BaseModal>
  );
};

export default BottomSheet;
