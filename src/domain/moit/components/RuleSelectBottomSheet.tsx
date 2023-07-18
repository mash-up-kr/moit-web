import { FC } from 'react';
import styled from '@emotion/styled';
import { SelectScrollerOption } from '@components/SelectScroller/SelectScroller.option';
import { palette } from '@styles/theme';
import { ModalProps } from 'hooks/useModal';
import { generateMinuteArray } from 'utils/generateArray';
import BottomSheet from '@components/BottomSheet';
import Button from '@components/Button';
import { SelectScroller, useSelectScroller } from '@components/SelectScroller';

interface Props {
  modalProps: ModalProps;
  timeRuleUpdate: () => void;
}

const RuleSelectBottomSheet: FC<Props> = ({ modalProps, timeRuleUpdate }) => {
  const { ref, onScroll, selectedIndex } = useSelectScroller({
    itemHeight: 52,
  });

  return (
    <BottomSheet
      headerTitle="시간 선택"
      dimColor={palette.modal_dim}
      modalProps={modalProps}
      containerHeight={352}
      content={
        <main>
          <ContentWrapper>
            <SelectScroller ref={ref} onScroll={onScroll}>
              {generateMinuteArray(5).map((min, i) => (
                <SelectScrollerOption
                  isActive={selectedIndex === i}
                  key={`${i}-${min}`}
                >
                  {`${min}분`}
                </SelectScrollerOption>
              ))}
            </SelectScroller>
          </ContentWrapper>
          <DefaultBottomCTA>
            <Button
              label="선택하기"
              onClick={() => {
                timeRuleUpdate();
                modalProps.hideModal();
              }}
            />
          </DefaultBottomCTA>
        </main>
      }
    />
  );
};

export default RuleSelectBottomSheet;

const ContentWrapper = styled.section`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  position: relative;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const DefaultBottomCTA = styled.footer`
  height: 100px;
  padding: 8px 0 36px 0;
  margin-top: ${({ theme }) => theme.space.md};
`;
