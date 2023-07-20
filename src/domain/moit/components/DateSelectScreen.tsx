import { FC, useState } from 'react';
import styled from '@emotion/styled';
import { SelectScrollerOption } from '@components/SelectScroller/SelectScroller.option';
import { palette } from '@styles/theme';
import { zIndex } from '@styles/z-index';
import { ModalProps } from 'hooks/useModal';
import { generateArray } from 'utils/generateArray';
import BottomSheet from '@components/BottomSheet';
import Button from '@components/Button';
import { SelectScroller } from '@components/SelectScroller';
import { useSelectDate } from '../hooks/useSelectDate';
import DateZone from './DateZone';

interface Props {
  modalProps: ModalProps;
  dateUpdate: (startDate: string, endDate: string) => void;
}

// 이름이 Screen인 이유는,, 이번 PR이든 다음 PR이든 바텀시트를 하나로 통합할 예정이기 때문.
const DateSelectScreen: FC<Props> = ({ modalProps, dateUpdate }) => {
  const nowYear = new Date().getFullYear();
  const [currentCursor, setCurrentCursor] = useState<SelectCursor>('start');
  const { year, month, date, startDate, endDate } =
    useSelectDate(currentCursor);

  return (
    <BottomSheet
      modalProps={modalProps}
      dimColor={palette.modal_dim}
      headerTitle="날짜 선택"
      content={
        <main>
          <DateZone
            currentCursor={currentCursor}
            startDate={startDate}
            endDate={endDate}
            onDateZoneClick={(type: SelectCursor) => setCurrentCursor(type)}
          />
          <ContentWrapper>
            <SelectScroller
              ref={year.ref}
              onScroll={() => {
                year.onScroll();
              }}
            >
              {generateArray(2023, 2033).map((y) => (
                <SelectScrollerOption
                  isActive={year.selectedIndex + nowYear === y}
                  key={y}
                >
                  {y}
                </SelectScrollerOption>
              ))}
            </SelectScroller>
            <SelectScroller
              ref={month.ref}
              onScroll={() => {
                month.onScroll();
              }}
            >
              {generateArray(1, 12).map((m) => (
                <SelectScrollerOption
                  key={m}
                  isActive={month.selectedIndex + 1 === m}
                >
                  {m}
                </SelectScrollerOption>
              ))}
            </SelectScroller>
            <SelectScroller
              ref={date.ref}
              onScroll={() => {
                date.onScroll();
              }}
            >
              {generateArray(1, 30).map((d) => (
                <SelectScrollerOption
                  key={d}
                  isActive={date.selectedIndex + 1 === d}
                >
                  {d}
                </SelectScrollerOption>
              ))}
            </SelectScroller>
            <Cursor />
          </ContentWrapper>
          <DefaultBottomCTA>
            <Button
              label="선택하기"
              onClick={() => {
                dateUpdate(
                  `${startDate.y}-${startDate.m}-${startDate.d}`,
                  `${endDate.y}-${endDate.m}-${endDate.d}`,
                );
                modalProps.hideModal();
              }}
            />
          </DefaultBottomCTA>
        </main>
      }
    />
  );
};

export default DateSelectScreen;

const ContentWrapper = styled.section`
  display: flex;
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
