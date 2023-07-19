import {
  AvatarProps as ChakraAvatarProps,
  Avatar as ChakraAvatar,
} from '@chakra-ui/react';
import * as pngType from '@styles/pngs';
import theme, { AvatarKeyType } from '@styles/theme';

type AvatarImage =
  | typeof pngType.ghost
  | typeof pngType.character
  | (typeof pngType.profile)[number];

interface AvatarProps extends ChakraAvatarProps {
  type: AvatarKeyType;
  src: AvatarImage;
}

const Avatar = ({ type, src, ...restProps }: AvatarProps) => {
  return (
    <ChakraAvatar
      src={src}
      css={theme.avatar[type]}
      bg={theme.palette.gray100}
      border={`1px solid ${theme.palette.gray200}`}
      {...restProps}
    />
  );
};

export default Avatar;
