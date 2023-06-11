import { FC } from 'react';
import { Box, Button } from '@chakra-ui/react';
import styled from '@emotion/styled';
import BottomSheet from 'components/BottomSheet';
import { useModal } from 'hooks/useModal';

const Greeting = styled.div`
  background-color: ${({ theme }) => theme.colors.blue400};
  width: 100vw;
  height: 100vh;
`;

const Example: FC = () => {
  const testBottomSheetProps = useModal();

  return (
    <Greeting>
      <Box bg={'white'}>Hello, MO IT</Box>
      <Button onClick={() => testBottomSheetProps.showModal()}>
        modal test
      </Button>
      <BottomSheet
        modalProps={testBottomSheetProps}
        headerTitle="title test"
        content={<h3>content test</h3>}
      />
    </Greeting>
  );
};

export default Example;
