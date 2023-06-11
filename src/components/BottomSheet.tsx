import { FC, ReactNode } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { slideUp } from '@styles/keyframes';
import BaseModal, { BaseModalProps } from './BaseModal';

const Container = styled.div<{ isShow: boolean; height?: number }>`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${({ height }) => `${height}px`};
  overflow: scroll;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px 20px 0 20px;
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

const DefaultHeader = styled.header`
  height: 56px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  /* TODO: Delete under line  */
  background-color: red;

  h1 {
    color: ${({ theme }) => theme.colors.gray900};
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
  }
`;

const ContentWrapper = styled.section<{ height?: number }>`
  height: ${({ height }) =>
    `calc(${height}px - 216px)`}; // - (header height + footer height)

  /* TODO: Delete under line  */
  background-color: yellow;
`;

const DefaultBottomCTA = styled.footer`
  height: 100px;
  padding: 8px 0 36px 0;
  margin-top: 20px;

  /* TODO: Delete under line  */
  background-color: blue;
`;

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
            <button
              style={{
                width: '100%',
                height: '56px',
                backgroundColor: 'green',
                borderRadius: '20px',
              }}
            >
              임시 버튼
            </button>
          </DefaultBottomCTA>
        )}
      </Container>
    </BaseModal>
  );
};

export default BottomSheet;
