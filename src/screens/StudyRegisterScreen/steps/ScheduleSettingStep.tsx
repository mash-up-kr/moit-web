import { FC } from 'react';
import { Container } from '@chakra-ui/react';
import Button from '@components/Button';

interface ScheduleSettingStepProps {
  onNext: () => void;
}

const ScheduleSettingStep: FC<ScheduleSettingStepProps> = ({ onNext }) => {
  return (
    <Container>
      ScheduleSettingStep
      <Button label="다음" onClick={onNext} />
    </Container>
  );
};

export default ScheduleSettingStep;
