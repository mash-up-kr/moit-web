import {
  ChangeEventHandler,
  Dispatch,
  KeyboardEventHandler,
  SetStateAction,
  // useEffect,
  // useRef,
} from 'react';
import { Input } from '@chakra-ui/react';

interface TransparentInputProps {
  setAnswer: Dispatch<SetStateAction<string>>;
}

const TransparentInput = ({ setAnswer }: TransparentInputProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value !== '') {
      setAnswer(e.target.value);
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key == 'Backspace') {
      setAnswer('');
    }
  };

  return (
    <Input
      id="transparent-input"
      maxLength={4}
      onChange={handleChange}
      position={'absolute'}
      onKeyDown={handleKeyDown}
      cursor={'none'}
      w={'303px'}
      h={'70px'}
      p={'0px 19px'}
      bg={'transparent'}
      mt={'25px'}
      border={'none'}
      fontSize={'32px'}
      fontWeight={'700'}
      letterSpacing={'51px'}
      outline={'none'}
      focusBorderColor={'none'}
      textDecorationLine={'none'}
      textDecor={'none'}
      style={{ caretColor: 'transparent' }}
      textDecoration={'none'}
      color={'transparent'}
      zIndex={'30'}
    />
  );
};

export default TransparentInput;
