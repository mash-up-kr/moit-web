import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import Button from '@components/Button';
import LargeBottom from '../component/LargeBottom';

interface NotiSettingStepProps {
  onNext: () => void;
}

const NotiSettingStep: FC<NotiSettingStepProps> = ({ onNext }) => {
  return (
    <Box>
      <Box>NotiSettingStep</Box>
      <LargeBottom>
        <Button label="다음" onClick={onNext} />
      </LargeBottom>
    </Box>
  );
};

export default NotiSettingStep;
