import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { fonts } from '@styles/theme';

interface Props {
  isActive: boolean;
}

export const SelectScrollerOption = ({
  children,
  isActive,
}: PropsWithChildren<Props>) => {
  return <Option isActive={isActive}>{children}</Option>;
};

const Option = styled.span<Props>`
  ${fonts.h4}
  text-align: center;
  color: ${({ theme, isActive }) =>
    theme.palette[isActive ? 'gray900' : 'gray600']};
`;
