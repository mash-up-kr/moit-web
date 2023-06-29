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
  const currentStepIdx = STEPS.findIndex((t) => t === step);

  const handleClickPrev = () => {
    if (currentStepIdx === 0) {
      // TODO: 웹뷰 종료
      return;
    }
    setStep(STEPS[currentStepIdx - 1]);
  };

  return (
    <Box>
      <ScreenHeader
        title="스터디 생성"
        leftIcon={
          <SvgIcon name="ArrowLeft" size={24} onClick={handleClickPrev} />
        }
      />
      <Progress
        value={(100 / STEPS.length) * (currentStepIdx + 1)}
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
