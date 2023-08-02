import { FC, useEffect } from 'react';
import { SelectScrollerOption } from '@components/SelectScroller/SelectScroller.option';
import { palette } from '@styles/theme';
import { ModalProps } from 'hooks/useModal';
import { REPEAT_CYCLE_OPTIONS } from 'screens/MoitRegisterScreen/consts';
import BottomSheet from '@components/BottomSheet';
import Button from '@components/Button';
import { SelectScroller, useSelectScroller } from '@components/SelectScroller';
import { ContentWrapper, Cursor, DefaultBottomCTA } from '../constants/styled';

interface Props {
  modalProps: ModalProps;
  initialRepeatIndex: number;
  repeatUpdate: (v: (typeof REPEAT_CYCLE_OPTIONS)[number]) => void;
}

const RepeatScreen: FC<Props> = ({
  modalProps,
  initialRepeatIndex,
  repeatUpdate,
}) => {
  const { ref, onScroll, selectedIndex } = useSelectScroller({
    itemHeight: 52,
    initialSelectedIndex: initialRepeatIndex,
  });

  useEffect(() => {
    setTimeout(() => {
      ref.current?.scrollTo(0, initialRepeatIndex * 52);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BottomSheet
      headerTitle="반복 선택"
      dimColor={palette.modal_dim}
      modalProps={modalProps}
      containerHeight={352}
      content={
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
                modalProps.hideModal();
              }}
            />
          </DefaultBottomCTA>
        </main>
      }
    />
  );
};

export default RepeatScreen;
