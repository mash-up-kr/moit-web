import { PropsWithChildren } from 'react';
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
    <li>
      <Text
        type="h4"
        color={isActive ? theme.colors.text.general : theme.palette.gray500}
        textAlign={'center'}
      >
        {children}
      </Text>
    </li>
  );
};
