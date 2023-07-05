import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import Text from '@components/Text';
interface Props {
  isActive: boolean;
}

export const SelectScrollerOption = ({
  children,
  isActive,
}: PropsWithChildren<Props>) => {
  return (
    <Item>
      <Text
        type="h4"
        color={isActive ? theme.colors.text.general : theme.palette.gray500}
        textAlign={'center'}
      >
        {children}
      </Text>
    </Item>
  );
};

const Item = styled.li`
  scroll-snap-align: center;
  scroll-snap-stop: always;
`;
