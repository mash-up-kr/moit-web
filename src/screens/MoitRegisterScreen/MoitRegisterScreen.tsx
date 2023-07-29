import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Progress } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import ScreenHeader from 'components/ScreenHeader';
import { useRegisterMoit } from 'hooks/MoitQuery';
import SvgIcon from '@components/SvgIcon';
import { registerFormDataAtom } from './atoms';
import { REGISTER_STEPS } from './consts';
import {
  InfoSettingStep,
  NotiSettingStep,
  RuleSettingStep,
  ScheduleSettingStep,
} from './steps';

const MoitRegisterScreen: FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<(typeof REGISTER_STEPS)[number]>(
    REGISTER_STEPS[0],
  );
  const [registerFormData, setRegisterFormData] =
    useRecoilState(registerFormDataAtom);

  console.log(
    '🚀 ~ file: StudyRegisterScreen.tsx:22 ~ registerFormData:',
    registerFormData,
  );

  const { mutate } = useRegisterMoit();

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

      <Box p="20px">
        {
          {
            [REGISTER_STEPS[0]]: (
              <InfoSettingStep
                onNext={(data) => {
                  setStep('schedule');
                  handleChangeFormData(data);
                }}
              />
            ),
            [REGISTER_STEPS[1]]: (
              <ScheduleSettingStep
                onNext={(data) => {
                  setStep('rule');
                  handleChangeFormData(data);
                }}
              />
            ),
            [REGISTER_STEPS[2]]: (
              <RuleSettingStep
                onNext={(data) => {
                  setStep('noti');
                  handleChangeFormData(data);
                }}
              />
            ),
            [REGISTER_STEPS[3]]: (
              <NotiSettingStep
                onNext={async (data) => {
                  setStep('info');
                  handleChangeFormData(data);
                  mutate(registerFormData);
                  navigate('/complete');
                }}
              />
            ),
          }[step]
        }
      </Box>
    </Box>
  );
};

export default MoitRegisterScreen;
