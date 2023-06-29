import { FC, useState } from 'react';
import { Box, Progress } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import ScreenHeader from 'components/ScreenHeader';
import SvgIcon from '@components/SvgIcon';
import { RegisterFormData } from '../../../types/register';
import { registerFormDataAtom } from './atoms';
import { REGISTER_STEPS } from './consts';
import {
  InfoSettingStep,
  NotiSettingStep,
  RuleSettingStep,
  ScheduleSettingStep,
} from './steps';

const StudyRegisterScreen: FC = () => {
  const [step, setStep] = useState<(typeof REGISTER_STEPS)[number]>(
    REGISTER_STEPS[0],
  );

  const [, setRegisterFormData] = useRecoilState(registerFormDataAtom);

  const currentStepIdx = REGISTER_STEPS.findIndex((t) => t === step);

  const handleClickPrev = () => {
    if (currentStepIdx === 0) {
      // TODO: 웹뷰 종료
      return;
    }
    setStep(REGISTER_STEPS[currentStepIdx - 1]);
  };

  function handleChangeFormData(data: Partial<RegisterFormData>): void {
    setRegisterFormData((prev) => ({ ...prev, ...data }));
  }

  return (
    <Box>
      <ScreenHeader
        title="스터디 생성"
        leftIcon={
          <SvgIcon name="ArrowLeft" size={24} onClick={handleClickPrev} />
        }
      />
      <Progress
        value={(100 / REGISTER_STEPS.length) * (currentStepIdx + 1)}
        height="3px"
      />

      <Box>
        {step === 'info' && (
          <InfoSettingStep
            onNext={(data) => {
              setStep('schedule');
              handleChangeFormData(data);
            }}
          />
        )}
        {step === 'schedule' && (
          <ScheduleSettingStep
            onNext={(data) => {
              setStep('rule');
              handleChangeFormData(data);
            }}
          />
        )}
        {step === 'rule' && <RuleSettingStep onNext={() => setStep('noti')} />}
        {step === 'noti' && <NotiSettingStep onNext={() => setStep('info')} />}
      </Box>
    </Box>
  );
};

export default StudyRegisterScreen;
