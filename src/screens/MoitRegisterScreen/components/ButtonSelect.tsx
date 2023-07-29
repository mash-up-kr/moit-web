import { Flex } from '@chakra-ui/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@styles/theme';

interface ButtonSelectProps<T> {
  options: { value: T; label: string }[];
  value: string | string[];
  onChange: (value: T) => void;
}

const ButtonSelect = <T extends string>({
  options,
  value,
  onChange,
}: ButtonSelectProps<T>) => {
  return (
    <Flex justify="space-between">
      {options.map((item) => (
        <OptionButton
          key={item.value}
          active={item.value === value}
          onClick={() => {
            onChange(item.value);
          }}
        >
          {item.label}
        </OptionButton>
      ))}
    </Flex>
  );
};

const OptionButton = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 14px;
  background-color: ${theme.colors.background.input};
  border: 0.771px solid ${theme.palette.gray200};
  color: ${theme.colors.text.general};
  border-radius: 9.247px;
  height: 54px;

  ${css(theme.fonts.p3)}

  ${(p) =>
    p.active &&
    css`
      color: ${theme.palette.white};
      background-color: ${theme.colors.primary.default};
      box-shadow: 0px 5px 6px 0px rgba(88, 95, 240, 0.25);
    `}
`;

export default ButtonSelect;
