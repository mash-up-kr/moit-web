import { FC, useEffect } from 'react';
import { SelectScrollerOption } from '@components/SelectScroller/SelectScroller.option';
import { palette } from '@styles/theme';
import { ModalProps } from 'hooks/useModal';
import { generateMinuteArray } from 'utils/generateArray';
import BottomSheet from '@components/BottomSheet';
import Button from '@components/Button';
import { SelectScroller, useSelectScroller } from '@components/SelectScroller';
import { SELECT_TIME_MINUTE_INTERVAL } from '../consts';
import { ContentWrapper, Cursor, DefaultBottomCTA } from '../styled';

interface Props {
  modalProps: ModalProps;
  initialData: number;
  update: (v: number) => void;
}

const MinuteScreen: FC<Props> = ({ modalProps, initialData, update }) => {
  const { ref, onScroll, selectedIndex } = useSelectScroller({
    itemHeight: 52,
    initialSelectedIndex: initialData,
  });

  useEffect(() => {
    setTimeout(() => {
      ref.current?.scrollTo(0, (initialData - 1) * 52);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BottomSheet
      modalProps={modalProps}
      headerTitle="시간 선택"
      dimColor={palette.modal_dim}
      containerHeight={352}
      content={
        <main>
          <ContentWrapper style={{ justifyContent: 'center' }}>
            <SelectScroller ref={ref} onScroll={onScroll}>
              {generateMinuteArray('endSixty', SELECT_TIME_MINUTE_INTERVAL).map(
                (m, i) => (
                  <SelectScrollerOption isActive={selectedIndex === i} key={m}>
                    {`${m}분`}
                  </SelectScrollerOption>
                ),
              )}
            </SelectScroller>
            <Cursor />
          </ContentWrapper>
          <DefaultBottomCTA>
            <Button
              label="선택하기"
              onClick={() => {
                update((selectedIndex + 1) * SELECT_TIME_MINUTE_INTERVAL);
                modalProps.hideModal();
              }}
            />
          </DefaultBottomCTA>
        </main>
      }
    />
  );
};

export default MinuteScreen;
