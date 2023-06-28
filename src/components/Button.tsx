import { PropsWithChildren } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme, { PalleteValueType } from '@styles/theme';
import Text from '@components/Text';

type ButtonSize = 's' | 'm' | 'l';
interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
  label?: string;
  bgColor?: PalleteValueType;
  color?: PalleteValueType;
  width?: number;
  size?: ButtonSize;
  isDisabled?: boolean;
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
}: ButtonProps) => {
  return (
    <StyledButton
      bgColor={bgColor}
      color={color}
      size={size}
      isDisabled={isDisabled}
      onClick={onClick}
    >
      <Text as="span" color={color} type="h6">
        {label ?? children ?? DEFAULT_LABEL}
      </Text>
    </StyledButton>
  );
};

const disabledStyle = css({
  backgroundColor: theme.colors.primary.disabled,
  boxShadow: 'none',
});

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
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: 56px;

  ${(p) => p.isDisabled && disabledStyle}
`;

export default Button;
