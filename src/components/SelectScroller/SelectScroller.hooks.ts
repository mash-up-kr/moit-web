import { RefObject, useRef, useState } from 'react';

export interface UseSelectScroller {
  selectedIndex: number;
  ref: RefObject<HTMLUListElement>;
  onScroll: () => void;
}

export const useSelectScroller = ({
  itemHeight = 52,
  initialSelectedIndex = 0,
}: {
  itemHeight: number;
  initialSelectedIndex?: number;
}): UseSelectScroller => {
  const ref = useRef<HTMLUListElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);

  const onScroll = () => {
    const top = ref.current && ref.current.scrollTop;
    const currentItemIndex = top ? Math.round(top / itemHeight) : 0;

    setSelectedIndex(currentItemIndex);
  };

  return { onScroll, selectedIndex, ref };
};
