import { FC, useState } from 'react';
import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';
import TimeSelectBottomSheet from 'domain/moit/TimeSelectBottomSheet';
import useGetCheckImFirst from 'domain/study/hooks/useGetCheckImFirst';
import { useModal } from 'hooks/useModal';

const DUMMY_SUTDY_ID = 1;

const Example: FC = () => {
  const selectDateButtonSheet = useModal();
  const [exampleHour, setExapmleHour] = useState<number>(0);
  const [exampleMin, setExampleMin] = useState<number>(0);

  const { imFirst } = useGetCheckImFirst(DUMMY_SUTDY_ID);
  console.log(imFirst);

  return (
    <Greeting>
      <Title>Hello, MOIT</Title>
      <Button onClick={() => selectDateButtonSheet.showModal()}>TEST</Button>
      {selectDateButtonSheet.modalShowing && (
        <TimeSelectBottomSheet
          modalProps={selectDateButtonSheet}
          testHSetter={(n: number) => setExapmleHour(n)}
          testH={exampleHour}
          testM={exampleMin}
          testMSetter={(n: number) => setExampleMin(n)}
        />
      )}
    </Greeting>
  );
};
const Greeting = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.default};
  width: 100vw;
  height: 100vh;
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary.default};
  background-color: ${({ theme }) => theme.colors.background.white};
`;
export default Example;
