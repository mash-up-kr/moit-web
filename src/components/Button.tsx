import { PropsWithChildren } from 'react';
import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme, { PalleteValueType } from '@styles/theme';
import Text from '@components/Text';

type ButtonSize = 's' | 'm' | 'l';
interface ButtonProps extends ChakraButtonProps, PropsWithChildren {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  bgColor?: PalleteValueType;
  color?: PalleteValueType;
  width?: number;
  size?: ButtonSize;
  isDisabled?: boolean;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

const DEFAULT_LABEL = '확인';

const Button = ({
  label,
  onClick,
  bgColor = theme.colors.primary.default,
  color = theme.colors.background.white,
  size = 'l',
  isDisabled = false,
  children,
  type,
  ...restProps
}: ButtonProps) => {
  return (
    <StyledButton
      bgColor={bgColor}
      color={color}
      size={size}
      isDisabled={isDisabled}
      onClick={onClick}
      type={type}
      {...restProps}
    >
      <Text as="span" color={color} type="h6">
        {label ?? children ?? DEFAULT_LABEL}
      </Text>
    </StyledButton>
  );
};

const disabledStyle = css`
  background-color: ${theme.colors.primary.disabled};
  box-shadow: none;
  span {
    color: ${theme.palette.gray700};
  }
`;

interface StyledButtonProps {
  bgColor: PalleteValueType;
  color: PalleteValueType;
  size: ButtonSize;
  isDisabled: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(p) => p.bgColor};
  color: ${(p) => p.color};
  width: ${(p) => ({ l: '100%', m: '100%', s: '163px' }[p.size])};
  border-radius: 20px;
  box-shadow: ${(p) =>
    p.size === 'l' ? '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' : 'none'};
  height: 56px;

  ${(p) => p.isDisabled && disabledStyle}

  user-select: none;
`;

export default Button;
