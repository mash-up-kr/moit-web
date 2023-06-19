import { forwardRef } from 'react';

interface Props {
  onScroll: () => void;
}

const SelectScroller = forwardRef<HTMLUListElement, Props>((props, ref) => {
  const { onScroll } = props;

  return <ul ref={ref} onScroll={onScroll}></ul>;
});

SelectScroller.displayName = 'SelectScroller';

export default SelectScroller;
