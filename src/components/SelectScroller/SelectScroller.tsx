import { PropsWithChildren, forwardRef } from 'react';
import styled from '@emotion/styled';

interface Props {
  onScroll: VoidFunction;
}

export const SelectScroller = forwardRef<
  HTMLUListElement,
  PropsWithChildren<Props>
>((props, ref) => {
  const { children, onScroll } = props;

  return (
    <Container ref={ref} onScroll={onScroll}>
      {children}
      <Cursor />
    </Container>
  );
});

SelectScroller.displayName = 'SelectScroller'; // ?? 이게 몰까염

const Container = styled.ul`
  height: 136px;
  overflow: scroll;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  color: ${({ theme }) => theme.palette.gray900};
  display: flex;
  flex-direction: column;
  padding: 52px 0;
  gap: 20px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Cursor = styled.div`
  position: absolute;
  top: 50%;
  z-index: ${({ theme }) => theme.zIndex.hide};
  background-color: ${({ theme }) => theme.palette.blue100};
  border-radius: 20px;
  width: 100%;
  height: 52px;
  transform: translateY(-24px);
`;
