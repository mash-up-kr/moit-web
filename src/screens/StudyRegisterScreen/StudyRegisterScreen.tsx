import { FC, useState } from 'react';
import { Box, Progress } from '@chakra-ui/react';
import ScreenHeader from 'components/ScreenHeader';
import SvgIcon from '@components/SvgIcon';
import {
  InfoSettingStep,
  NotiSettingStep,
  RuleSettingStep,
  ScheduleSettingStep,
} from './steps';

const STEPS = ['info', 'schedule', 'rule', 'noti'] as const;

const StudyRegisterScreen: FC = () => {
  const [step, setStep] = useState<(typeof STEPS)[number]>(STEPS[0]);

  return (
    <Box>
      <ScreenHeader
        title="스터디 생성"
        leftIcon={<SvgIcon name="ArrowLeft" size={24} />}
      />
      <Progress
        value={(100 / STEPS.length) * (STEPS.findIndex((t) => t === step) + 1)}
        height="3px"
      />

      <Box>
        {step === 'info' && (
          <InfoSettingStep onNext={() => setStep('schedule')} />
        )}
        {step === 'schedule' && (
          <ScheduleSettingStep onNext={() => setStep('rule')} />
        )}
        {step === 'rule' && <RuleSettingStep onNext={() => setStep('noti')} />}
        {step === 'noti' && <NotiSettingStep onNext={() => setStep('info')} />}
      </Box>
    </Box>
  );
};

export default StudyRegisterScreen;
