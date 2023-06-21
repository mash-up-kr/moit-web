import { useRef, useState } from 'react';

export const useSelectScroller = ({
  itemHeight = 52,
  initialSelectedIndex = 0,
}: {
  itemHeight: number;
  initialSelectedIndex?: number;
}) => {
  const ref = useRef<HTMLUListElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);

  const onScroll = () => {
    const top = ref.current && ref.current.scrollTop;
    const currentItemIndex = top ? Math.round(top / itemHeight) : 0;

    setSelectedIndex(currentItemIndex);
  };

  return { onScroll, selectedIndex, ref };
};
