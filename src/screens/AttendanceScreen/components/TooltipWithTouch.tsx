import { PropsWithChildren, useState } from 'react';
import {
  Box,
  Tooltip,
  TooltipProps as ChakraTooltipProps,
} from '@chakra-ui/react';
import { PalleteValueType, palette } from '@styles/theme';

interface ToolTipProps extends Omit<ChakraTooltipProps, 'color'> {
  color?: PalleteValueType;
}

export const TooltipWithTouch = ({
  children,
  ...restProps
}: PropsWithChildren<ToolTipProps>) => {
  const [isLabelOpen, setIsLabelOpen] = useState(false);

  return (
    <Tooltip
      isOpen={isLabelOpen}
      bg={palette.gray300}
      color={palette.gray900}
      py={'11px'}
      px={'16px'}
      mr={'20px'}
      borderRadius={'10px'}
      whiteSpace={'pre-line'}
      {...restProps}
    >
      <Box
        onMouseEnter={() => setIsLabelOpen(true)}
        onMouseLeave={() => setIsLabelOpen(false)}
        onClick={() => setIsLabelOpen(!isLabelOpen)}
      >
        {children}
      </Box>
    </Tooltip>
  );
};
