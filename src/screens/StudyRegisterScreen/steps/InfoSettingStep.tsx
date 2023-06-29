import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import Button from '@components/Button';
import LargeBottom from '../component/LargeBottom';

interface InfoSettingStepProps {
  onNext: () => void;
}

const InfoSettingStep: FC<InfoSettingStepProps> = ({ onNext }) => {
  return (
    <Box>
      <Box>InfoSettingStep</Box>
      <LargeBottom>
        <Button label="다음" onClick={onNext} />
      </LargeBottom>
    </Box>
  );
};

export default InfoSettingStep;
