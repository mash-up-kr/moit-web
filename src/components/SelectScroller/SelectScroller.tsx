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
  display: flex;
  flex-direction: column;
  gap: 20px;

  height: 136px;
  padding: 52px 0;

  overflow: scroll;

  color: ${({ theme }) => theme.palette.gray900};

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Cursor = styled.div`
  position: absolute;
  top: 50%;
  z-index: ${({ theme }) => theme.zIndex.hide};

  width: 100%;
  height: 52px;
  transform: translateY(-24px);

  background-color: ${({ theme }) => theme.palette.blue100};
  border-radius: 20px;
`;
