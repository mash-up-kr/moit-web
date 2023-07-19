import { FC, ReactNode } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { slideUp } from '@styles/keyframes';
import BaseModal, { BaseModalProps } from './BaseModal';

interface BottomSheetProps extends Omit<BaseModalProps, 'children'> {
  containerHeight?: number;
  header?: ReactNode;
  headerTitle?: string;
  content: ReactNode;
}

const BottomSheet: FC<BottomSheetProps> = ({
  modalProps,
  dimColor,
  containerHeight = 432,
  header,
  headerTitle,
  content,
}) => {
  return (
    <BaseModal modalProps={modalProps} dimColor={dimColor}>
      <Container isShow={modalProps.modalShowing} height={containerHeight}>
        {header ? (
          <header>{header}</header>
        ) : (
          <DefaultHeader>
            <h1>{headerTitle}</h1>
          </DefaultHeader>
        )}
        {content}
      </Container>
    </BaseModal>
  );
};

export default BottomSheet;

const Container = styled.div<{ isShow: boolean; height?: number }>`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${({ height }) => `${height}px`};
  overflow: scroll;
  background-color: ${({ theme }) => theme.palette.white};
  padding: 20px 20px 0 20px;
  border-top-left-radius: ${({ theme }) => theme.space.md};
  border-top-right-radius: ${({ theme }) => theme.space.md};
  transform: translateY(100%);
  transition: 0.24s ease-out;
  ${({ isShow }) =>
    isShow &&
    css`
      animation: ${slideUp} 0.4s forwards;
    `};
`;

const DefaultHeader = styled.header`
  height: 56px;
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.md};

  h1 {
    color: ${({ theme }) => theme.palette.gray900};
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
  }
`;
