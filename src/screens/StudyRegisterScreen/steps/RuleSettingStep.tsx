import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import Button from '@components/Button';
import LargeBottom from '../component/LargeBottom';

interface RuleSettingStepProps {
  onNext: () => void;
}

const RuleSettingStep: FC<RuleSettingStepProps> = ({ onNext }) => {
  return (
    <Box>
      <Box>RuleSettingStep</Box>
      <LargeBottom>
        <Button label="다음" onClick={onNext} />
      </LargeBottom>
    </Box>
  );
};

export default RuleSettingStep;
