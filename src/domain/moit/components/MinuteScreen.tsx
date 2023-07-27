import { FC } from 'react';
import styled from '@emotion/styled';
import { SelectScrollerOption } from '@components/SelectScroller/SelectScroller.option';
import { palette } from '@styles/theme';
import { zIndex } from '@styles/z-index';
import { ModalProps } from 'hooks/useModal';
import { generateMinuteArray } from 'utils/generateArray';
import BottomSheet from '@components/BottomSheet';
import Button from '@components/Button';
import { SelectScroller, useSelectScroller } from '@components/SelectScroller';
import { SELECT_TIME_MINUTE_INTERVAL } from '../hooks/useSelectTime';

interface Props {
  modalProps: ModalProps;
  update: (v: number) => void;
}

const MinuteScreen: FC<Props> = ({ modalProps, update }) => {
  const { ref, onScroll, selectedIndex } = useSelectScroller({
    itemHeight: 52,
  });

  return (
    <BottomSheet
      modalProps={modalProps}
      headerTitle="시간 선택"
      dimColor={palette.modal_dim}
      containerHeight={352}
      content={
        <main>
          <ContentWrapper>
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
                update(selectedIndex * SELECT_TIME_MINUTE_INTERVAL);
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

const ContentWrapper = styled.section`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.space.md};
  margin-top: ${({ theme }) => theme.space.md};
  position: relative;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Cursor = styled.div`
  position: absolute;
  z-index: ${zIndex.HIDE};
  width: 100%;
  height: 52px;
  transform: translateY(42px);
  background-color: ${({ theme }) => theme.colors.primary.selected};
  border-radius: ${({ theme }) => theme.space.md};
`;

const DefaultBottomCTA = styled.footer`
  height: 100px;
  padding: 8px 0 36px 0;
  margin-top: ${({ theme }) => theme.space.md};
`;
