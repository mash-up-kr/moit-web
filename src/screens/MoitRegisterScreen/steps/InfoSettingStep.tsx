import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Box } from '@chakra-ui/react';
import { useRecoilState, useRecoilValue } from 'recoil';
import Button from '@components/Button';
import Text from '@components/Text';
import { imageDataAtom, registerFormDataAtom } from '../atoms';
import Form from '../components/Form';
import FormItem from '../components/FormItem';
import ImageUploader from '../components/ImageUploader';
import Input from '../components/Input';
import LargeBottom from '../components/LargeBottom';
import TextArea from '../components/TextArea';

const STEP_MAIN_TEXT = '스터디 기본 정보를\n입력해주세요';

interface InfoSettingStepProps {
  onNext: (data: InfoStepFormData) => void;
}

const InfoSettingStep: FC<InfoSettingStepProps> = ({ onNext }) => {
  const registerFormData = useRecoilValue(registerFormDataAtom);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [imageData, setImageData] = useRecoilState(imageDataAtom);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<InfoStepFormData>({
    defaultValues: registerFormData,
  });
  const onSubmit = handleSubmit((values) => {
    onNext(values);
  });

  const isDisabled = Object.keys(errors).length > 0;

  return (
    <Box>
      <Text type="h4" mb="20px">
        {STEP_MAIN_TEXT}
      </Text>

      <Form onSubmit={onSubmit}>
        <ImageUploader
          imageSrc={imageData.imgSrc}
          // onChange={(src, file) =>
          //   setImageData({
          //     imgFile: file,
          //     imgSrc: src,
          //   })
          // }
        />

        <FormItem label="스터디명 (필수)">
          <Input
            placeholder="스터디명을 10자 이내로 입력해주세요"
            {...register('name', {
              required: true,
              maxLength: 10,
            })}
          />
        </FormItem>

        <FormItem label="스터디 설명 (선택)">
          <TextArea
            rows={2}
            placeholder="스터디명을 40자 이내로 입력해주세요"
            {...register('description', {
              maxLength: 40,
            })}
          />
        </FormItem>

        <LargeBottom>
          <Button label="다음" type="submit" isDisabled={isDisabled} />
        </LargeBottom>
      </Form>
    </Box>
  );
};

export default InfoSettingStep;
