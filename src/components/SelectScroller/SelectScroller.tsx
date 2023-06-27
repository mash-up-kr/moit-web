import { PropsWithChildren, forwardRef } from 'react';
import styled from '@emotion/styled';

interface Props {
  onScroll: () => void;
}

export const SelectScroller = forwardRef<
  HTMLUListElement,
  PropsWithChildren<Props>
>((props, ref) => {
  const { children, onScroll } = props;

  return (
    <Container ref={ref} onScroll={onScroll}>
      {children}
    </Container>
  );
});

SelectScroller.displayName = 'SelectScroller';

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md}px;
  width: 50%;

  height: 136px;
  padding: 52px 0;

  overflow: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  scroll-snap-stop: always;

  ::-webkit-scrollbar {
    display: none;
  }
`;
