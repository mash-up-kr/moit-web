import { FC } from 'react';
import { Container } from '@chakra-ui/react';
import { Button } from '@components/Button';

interface NotiSettingStepProps {
  onNext: () => void;
}

const NotiSettingStep: FC<NotiSettingStepProps> = ({ onNext }) => {
  return (
    <Container>
      NotiSettingStep
      <Button label="다음" onClick={onNext} />
    </Container>
  );
};

export default NotiSettingStep;
