import { FC } from 'react';
import { Box, Input } from '@chakra-ui/react';
import styled from '@emotion/styled';
import pngs from '@styles/pngs';
import Avatar from '@components/Avatar';
import SvgIcon from '@components/SvgIcon';

interface ImageUploaderProps {
  imageSrc: string | undefined;
  onChange: (imgSrc: string, imgFile: File) => void;
}

const ImageUploader: FC<ImageUploaderProps> = ({ onChange, imageSrc }) => {
  const handleClick = () => {};
  return (
    <Box pos="relative" onClick={handleClick}>
      <Avatar type="lg" src={imageSrc || pngs.trophy} />
      <StyledIcon name="PlusFill" size={24} />

      <Input
        type="file"
        height="100%"
        width="100%"
        position="absolute"
        top="0"
        left="0"
        opacity="0"
        aria-hidden="true"
        accept="image/*"
        onChange={(e) => {
          if (!e.target.files) return;
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.readAsDataURL(file);
          return new Promise<void>((resolve) => {
            reader.onload = () => {
              onChange((reader.result as string) || '', file);
              resolve();
            };
          });
        }}
      />
    </Box>
  );
};

const StyledIcon = styled(SvgIcon)`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export default ImageUploader;
