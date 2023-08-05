import { FC, useEffect } from 'react';
import { SelectScrollerOption } from '@components/SelectScroller/SelectScroller.option';
import { REPEAT_CYCLE_OPTIONS } from 'screens/MoitRegisterScreen/consts';
import Button from '@components/Button';
import { SelectScroller, useSelectScroller } from '@components/SelectScroller';
import { SELECT_CONTENT_HEIGHT } from '../constants';
import { ContentWrapper, Cursor, DefaultBottomCTA } from '../constants/styled';

interface Props {
  initialRepeatIndex: number;
  repeatUpdate: (v: (typeof REPEAT_CYCLE_OPTIONS)[number]) => void;
  modalClose: () => void;
}

const RepeatScreen: FC<Props> = ({
  initialRepeatIndex,
  repeatUpdate,
  modalClose,
}) => {
  const { ref, onScroll, selectedIndex } = useSelectScroller({
    itemHeight: SELECT_CONTENT_HEIGHT,
    initialSelectedIndex: initialRepeatIndex,
  });

  useEffect(() => {
    setTimeout(() => {
      ref.current?.scrollTo(0, initialRepeatIndex * 52);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <ContentWrapper style={{ justifyContent: 'center' }}>
        <SelectScroller ref={ref} onScroll={onScroll}>
          {REPEAT_CYCLE_OPTIONS.map((option, i) => (
            <SelectScrollerOption
              isActive={selectedIndex === i}
              key={option.value}
            >
              {option.label}
            </SelectScrollerOption>
          ))}
        </SelectScroller>
        <Cursor />
      </ContentWrapper>
      <DefaultBottomCTA>
        <Button
          label="선택하기"
          onClick={() => {
            repeatUpdate(REPEAT_CYCLE_OPTIONS[selectedIndex]);
            modalClose();
          }}
        />
      </DefaultBottomCTA>
    </main>
  );
};

export default RepeatScreen;
