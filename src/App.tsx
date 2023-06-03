import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Greeting = styled.div`
  background-color: ${({ theme }) => theme.colors.blue400};
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  return (
    <Greeting>
      <Box bg={'white'}>Hello, MO IT</Box>
    </Greeting>
  );
};

export default App;
