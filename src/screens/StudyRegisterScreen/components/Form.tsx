import { PropsWithChildren } from 'react';
import { VStack } from '@chakra-ui/react';

interface FormProps extends PropsWithChildren {
  onSubmit: () => void;
}

const Form = ({ onSubmit, children }: FormProps) => {
  return (
    <VStack as="form" gap="20px" onSubmit={onSubmit}>
      {children}
    </VStack>
  );
};

export default Form;
