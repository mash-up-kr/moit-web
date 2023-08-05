import { FC, ReactNode } from 'react';
import { palette } from '@styles/theme';
import { ModalProps } from 'hooks/useModal';
import BottomSheet from '@components/BottomSheet';

interface Props {
  modalProps: ModalProps;
  title: string;
  contents: ReactNode;
}

const SelectBottomSheet: FC<Props> = ({ modalProps, title, contents }) => {
  return (
    <BottomSheet
      dimColor={palette.modal_dim}
      headerTitle={title}
      modalProps={modalProps}
      content={contents}
    />
  );
};

export default SelectBottomSheet;
