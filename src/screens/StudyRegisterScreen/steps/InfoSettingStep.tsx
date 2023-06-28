import { FC } from 'react';
import { Container } from '@chakra-ui/react';
import Button from '@components/Button';

interface InfoSettingStepProps {
  onNext: () => void;
}

const InfoSettingStep: FC<InfoSettingStepProps> = ({ onNext }) => {
  return (
    <Container>
      InfoSettingStep
      <Button label="다음" onClick={onNext} />
    </Container>
  );
};

export default InfoSettingStep;
