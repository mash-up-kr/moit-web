import { PropsWithChildren } from 'react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import theme from '@styles/theme';

interface FormItemProps extends PropsWithChildren {
  label: string;
}

const FormItem = ({ label, children }: FormItemProps) => {
  return (
    <FormControl display="flex" flexDir="column" gap="10px">
      <FormLabel color={theme.palette.gray700} css={theme.fonts.p2} margin="0">
        {label}
      </FormLabel>
      {children}
    </FormControl>
  );
};

export default FormItem;
