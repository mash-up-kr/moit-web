import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

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
  color: ${({ theme, isActive }) =>
    isActive ? theme.palette.gray900 : theme.palette.gray600};
`;
