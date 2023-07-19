import {
  AvatarProps as ChakraAvatarProps,
  Avatar as ChakraAvatar,
} from '@chakra-ui/react';
import * as pngType from '@styles/pngs';
import { defaultAvatar } from '@styles/pngs';
import theme, { AvatarKeyType } from '@styles/theme';

type AvatarImage =
  | typeof pngType.ghost
  | typeof pngType.character
  | (typeof pngType.profile)[number];

interface AvatarProps extends ChakraAvatarProps {
  src?: AvatarImage;
  type?: AvatarKeyType;
}

/**
 *
 * @param param0 src, type은 모두 optional입니다
 * @returns 아무 값도 넘기지 않은 경우 ? 모양의 md 사이즈 Avatar 기본값이 출력됩니다
 */
const Avatar = ({ type = 'md', src, ...restProps }: AvatarProps) => {
  const isEmpty = Boolean(!src);
  return (
    <ChakraAvatar
      src={src || defaultAvatar}
      css={theme.avatar[type]}
      bg={isEmpty ? theme.palette.gray300 : theme.palette.gray100}
      border={`1px solid ${theme.palette.gray200}`}
      {...restProps}
    />
  );
};

export default Avatar;
