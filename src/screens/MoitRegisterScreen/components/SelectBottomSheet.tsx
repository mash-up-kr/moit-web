import { FC, Fragment, ReactNode } from 'react';
import { palette } from '@styles/theme';
import { ModalProps } from 'hooks/useModal';
import BottomSheet from '@components/BottomSheet';

interface Props {
  modalProps: ModalProps;
  title: string;
  contents: ReactNode;

  initialHeight?: number;
}

const SelectBottomSheet: FC<Props> = ({
  modalProps,
  title,
  contents,
  initialHeight,
}) => {
  return (
    <Fragment>
      <BottomSheet
        dimColor={palette.modal_dim}
        headerTitle={title}
        modalProps={modalProps}
        content={contents}
        containerHeight={initialHeight}
      />
    </Fragment>
  );
};

export default SelectBottomSheet;
