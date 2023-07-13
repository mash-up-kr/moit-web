import { PropsWithChildren } from 'react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { css } from '@emotion/react';
import theme from '@styles/theme';

interface FormItemProps extends PropsWithChildren {
  label: string;
  direction?: 'row' | 'column';
}

const rowStyle = css`
  justify-content: space-between;
  align-items: center;
`;

const colStyle = css`
  gap: 10px;
`;

const FormItem = ({ label, direction = 'column', children }: FormItemProps) => {
  return (
    <FormControl
      display="flex"
      flexDir={direction}
      css={direction === 'row' ? rowStyle : colStyle}
    >
      <FormLabel color={theme.palette.gray700} css={theme.fonts.p2} margin="0">
        {label}
      </FormLabel>
      {children}
    </FormControl>
  );
};

export default FormItem;
