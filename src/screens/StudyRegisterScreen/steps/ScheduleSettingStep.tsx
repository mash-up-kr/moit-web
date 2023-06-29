import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import Button from '@components/Button';
import LargeBottom from '../component/LargeBottom';

interface ScheduleSettingStepProps {
  onNext: () => void;
}

const ScheduleSettingStep: FC<ScheduleSettingStepProps> = ({ onNext }) => {
  return (
    <Box>
      <Box>ScheduleSettingStep</Box>
      <LargeBottom>
        <Button label="다음" onClick={onNext} />
      </LargeBottom>
    </Box>
  );
};

export default ScheduleSettingStep;
