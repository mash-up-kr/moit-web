import { FC } from 'react';
import styled from '@emotion/styled';

const Example: FC = () => {
  return (
    <Greeting>
      <Title>Hello, MOIT</Title>
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
