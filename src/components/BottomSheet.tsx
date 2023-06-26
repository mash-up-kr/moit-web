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
  footer?: ReactNode;
}

const BottomSheet: FC<BottomSheetProps> = ({
  modalProps,
  dimColor,
  containerHeight = 432,
  header,
  headerTitle,
  content,
  footer,
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
        <ContentWrapper height={containerHeight}>{content}</ContentWrapper>
        {footer ? (
          <footer>{footer}</footer>
        ) : (
          <DefaultBottomCTA>
            {/* TODO: 우리 버튼 컴포넌트로 바꾸기 */}
            <button>임시 버튼</button>
          </DefaultBottomCTA>
        )}
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
  border-top-left-radius: ${({ theme }) => theme.spacing.md}px;
  border-top-right-radius: ${({ theme }) => theme.spacing.md}px;
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
  margin-bottom: ${({ theme }) => theme.spacing.md}px;

  h1 {
    color: ${({ theme }) => theme.palette.gray900};
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
  }
`;

const ContentWrapper = styled.section<{ height?: number }>`
  height: ${({ height }) =>
    // 216 = (header height + footer height)
    `calc(${height}px - 216px)`};
`;

const DefaultBottomCTA = styled.footer`
  height: 100px;
  padding: 8px 0 36px 0;
  margin-top: ${({ theme }) => theme.spacing.md}px;
`;
