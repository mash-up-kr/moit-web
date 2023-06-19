import { forwardRef } from 'react';
import styled from '@emotion/styled';

interface Props {
  elements: number[];
  selectedElements: number;
  onScroll: () => void;
}

const SelectScroller = forwardRef<HTMLUListElement, Props>((props, ref) => {
  const { elements, selectedElements, onScroll } = props;

  return (
    <Container ref={ref} onScroll={onScroll}>
      {elements.map((el, i) => (
        <li key={i}>
          <Option isActive={el === selectedElements}>{String(el)}</Option>
        </li>
      ))}
      <Cursor />
    </Container>
  );
});

SelectScroller.displayName = 'SelectScroller'; // ?? 이게 몰까염

export default SelectScroller;

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

const Option = styled.span<{ isActive: boolean }>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.palette.gray900 : theme.palette.gray600};
`;

const Cursor = styled.div`
  position: absolute;
  top: 50%;
  z-index: -1;
  background-color: ${({ theme }) => theme.palette.blue100};
  border-radius: 20px;
  width: 100%;
  height: 52px;
  transform: translateY(-24px);
`;
