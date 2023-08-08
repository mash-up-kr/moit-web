/* eslint-disable react/prop-types */
import { FC, ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@styles/theme';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  readOnly?: boolean;
  width?: number;
  variant?: 's' | 'l';
  unit?: string;
}

const Input: FC<InputProps> = forwardRef(
  (
    { width = 0, variant = 'l', readOnly = false, unit = '', ...restProps },
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <InputWrapper width={width}>
        <TransparentInput
          variant={variant}
          readOnly={readOnly}
          unit={unit}
          ref={ref}
          {...restProps}
        />

        {unit && <InputUnit variant={variant}>{unit}</InputUnit>}
      </InputWrapper>
    );
  },
);

Input.displayName = 'Input';

const InputWrapper = styled.div<{
  width: InputProps['width'];
}>`
  display: flex;
  position: relative;
  background-color: ${theme.palette.gray50};
  border: 1px solid ${theme.palette.gray200};
  border-radius: 12px;
  padding: 15px 22px;
  width: ${(p) => (p.width ? `${p.width}px` : '')};

  :focus {
    outline: 0;
  }
`;

const TransparentInput = styled.input<{
  variant: InputProps['variant'];
  readOnly: InputProps['readOnly'];
  unit: InputProps['unit'];
}>`
  width: 100%;
  background: none;
  outline: none;
  color: ${theme.palette.gray900};

  ${(p) => (p.variant === 's' ? css(theme.fonts.p2) : css(theme.fonts.p1))};

  ::placeholder {
    color: ${theme.palette.gray500};
  }

  ${(p) =>
    p.readOnly &&
    css`
      text-align: center;
    `}

  ${(p) =>
    p.unit &&
    css`
      text-align: right;
    `}
`;

const InputUnit = styled.span<{
  variant: InputProps['variant'];
}>`
  ${(p) => (p.variant === 's' ? css(theme.fonts.p2) : css(theme.fonts.p1))};
`;

export default Input;
