import { FC } from 'react';
import styled from '@emotion/styled';
import { SelectScrollerOption } from '@components/SelectScroller/SelectScroller.option';
import { palette } from '@styles/theme';
import { ModalProps } from 'hooks/useModal';
import { REPEAT_CYCLE_OPTIONS } from 'screens/MoitRegisterScreen/consts';
import BottomSheet from '@components/BottomSheet';
import Button from '@components/Button';
import { SelectScroller, useSelectScroller } from '@components/SelectScroller';

interface Props {
  modalProps: ModalProps;
  repeatUpdate: () => void;
}

const RepeatScreen: FC<Props> = ({ modalProps, repeatUpdate }) => {
  const { ref, onScroll, selectedIndex } = useSelectScroller({
    itemHeight: 52,
  });

  return (
    <BottomSheet
      headerTitle="반복 선택"
      dimColor={palette.modal_dim}
      modalProps={modalProps}
      containerHeight={352}
      content={
        <main>
          <ContentWrapper>
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
          </ContentWrapper>
          <DefaultBottomCTA>
            <Button
              label="선택하기"
              onClick={() => {
                repeatUpdate();
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

const ContentWrapper = styled.section`
  display: flex;
  justify-content: center;
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
