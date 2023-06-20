import { FC } from 'react';
import styled from '@emotion/styled';
import Text from '@components/Text';

const Example: FC = () => {
  return (
    <Greeting>
      <Title>Hello, MOIT</Title>
      <Text type="h1">스터디 벌금 칙을 생성해주세요</Text>
      <Text type="h2">Heading2</Text>
      <Text type="h3">Heading3</Text>
      <Text type="h4">Heading4</Text>
      <Text type="h5">Heading5</Text>
      <Text type="h6">Heading6</Text>
      <Text type="p1">p1</Text>
      <Text type="p2">p2</Text>
      <Text type="p3">p3</Text>
      <Text type="caption">caption</Text>
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
