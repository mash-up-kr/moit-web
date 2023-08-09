import { FC, useEffect } from 'react';
import { SelectScrollerOption } from '@components/SelectScroller/SelectScroller.option';
import { ModalProps } from 'hooks/useModal';
import { generateMinuteArray } from 'utils/generateArray';
import Button from '@components/Button';
import { SelectScroller, useSelectScroller } from '@components/SelectScroller';
import { SELECT_CONTENT_HEIGHT, SELECT_TIME_MINUTE_INTERVAL } from '../consts';
import { ContentWrapper, Cursor, DefaultBottomCTA } from '../styled';
import SelectBottomSheet from './SelectBottomSheet';

interface Props {
  modalProps: ModalProps;
  initialData: number;
  update: (v: number) => void;
}

const MinuteScreen: FC<Props> = ({ modalProps, initialData, update }) => {
  const { ref, onScroll, selectedIndex } = useSelectScroller({
    itemHeight: SELECT_CONTENT_HEIGHT,
    initialSelectedIndex: initialData,
  });

  useEffect(() => {
    setTimeout(() => {
      ref.current?.scrollTo(0, (initialData - 1) * SELECT_CONTENT_HEIGHT);
    }, 10);
  }, [initialData, ref]);

  return (
    <SelectBottomSheet
      modalProps={modalProps}
      title={'시간 선택'}
      initialHeight={352}
      contents={
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
