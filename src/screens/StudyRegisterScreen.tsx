import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import ScreenHeader from 'components/ScreenHeader';
import SvgIcon from '@components/SvgIcon';

const StudyRegisterScreen: FC = () => {
  return (
    <Box>
      <ScreenHeader
        title="스터디 생성"
        leftIcon={<SvgIcon name="ArrowLeft" size={24} />}
      />
    </Box>
  );
};

export default StudyRegisterScreen;
