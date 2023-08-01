import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { SelectScrollerOption } from '@components/SelectScroller/SelectScroller.option';
import { palette } from '@styles/theme';
import { zIndex } from '@styles/z-index';
import { ModalProps } from 'hooks/useModal';
import { insertZero } from 'utils/dateParser';
import { generateArray } from 'utils/generateArray';
import BottomSheet from '@components/BottomSheet';
import Button from '@components/Button';
import { SelectScroller } from '@components/SelectScroller';
import { useSelectDate } from '../hooks/useSelectDate';
import DateZone from './DateZone';

export type CreateMoitRegisterDate = {
  startDate: DateParams;
  endDate: DateParams;
};

interface Props {
  modalProps: ModalProps;
  initialDate: {
    start: DateParams;
    end: DateParams;
  };
  dateUpdate: (startDate: string, endDate: string) => void;
}

const DateSelectScreen: FC<Props> = ({
  modalProps,
  initialDate,
  dateUpdate,
}) => {
  const nowYear = new Date().getFullYear();
  const [currentCursor, setCurrentCursor] = useState<SelectCursor>('start');
  const { year, month, date, startDate, endDate } = useSelectDate(
    currentCursor,
    { startDate: initialDate.start, endDate: initialDate.end },
  );

  const start = useMemo(
    () =>
      `${startDate.y}-${insertZero(startDate.m)}-${insertZero(startDate.d)}`,
    [startDate.d, startDate.m, startDate.y],
  );
  const end = useMemo(
    () => `${endDate.y}-${insertZero(endDate.m)}-${insertZero(endDate.d)}`,
    [endDate.d, endDate.m, endDate.y],
  );
  const isValid = useMemo(() => dayjs(start) < dayjs(end), [end, start]);

  const handleSelectDate = useCallback(() => {
    dateUpdate(start, end);
    modalProps.hideModal();
  }, [dateUpdate, end, modalProps, start]);

  useEffect(() => {
    setTimeout(() => {
      year.ref.current?.scrollTo(0, year.selectedIndex * 52);
      month.ref.current?.scrollTo(0, month.selectedIndex * 52);
      date.ref.current?.scrollTo(0, date.selectedIndex * 52);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCursor]);

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
                  {`${y}년`}
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
                  {`${m}월`}
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
                  {`${d}일`}
                </SelectScrollerOption>
              ))}
            </SelectScroller>
            <Cursor />
          </ContentWrapper>
          <DefaultBottomCTA>
            <Button
              label="선택하기"
              isDisabled={!isValid}
              onClick={handleSelectDate}
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
