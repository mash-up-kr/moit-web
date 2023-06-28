import { FC } from 'react';
import { Container } from '@chakra-ui/react';
import Button from '@components/Button';

interface RuleSettingStepProps {
  onNext: () => void;
}

const RuleSettingStep: FC<RuleSettingStepProps> = ({ onNext }) => {
  return (
    <Container>
      RuleSettingStep
      <Button label="다음" onClick={onNext} />
    </Container>
  );
};

export default RuleSettingStep;
