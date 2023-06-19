import { FC } from 'react';
import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';
import TimeSelectBottomSheet from 'domain/moit/TimeSelectBottomSheet';
import { useModal } from 'hooks/useModal';

const Example: FC = () => {
  const selectDateBottonSheet = useModal();

  return (
    <Greeting>
      <Title>Hello, MOIT</Title>
      <Button onClick={() => selectDateBottonSheet.showModal()}>TEST</Button>
      <TimeSelectBottomSheet modalProps={selectDateBottonSheet} />
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
