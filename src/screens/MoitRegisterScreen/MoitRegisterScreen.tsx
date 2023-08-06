import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Progress } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { closeWebview } from 'bridge';
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

  const { mutate } = useRegisterMoit();

  const currentStepIdx = REGISTER_STEPS.findIndex((t) => t === step);

  const handleClickPrev = () => {
    if (currentStepIdx === 0) {
      closeWebview();
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
                  if (!(data.lateTime <= data.absenceTime)) {
                    window.webkit.messageHandlers.MOIT.postMessage({
                      command: 'toast',
                      value: '결석 벌금은 지각 벌금과 같거나 더 커야 합니다',
                    });
                    return;
                  }

                  if (!(data.lateAmount < data.absenceAmount)) {
                    window.webkit.messageHandlers.MOIT.postMessage({
                      command: 'toast',
                      value: '결석 시간은 지각 시간 이후여야 합니다',
                    });
                    return;
                  }

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
