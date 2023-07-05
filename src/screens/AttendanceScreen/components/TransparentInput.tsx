import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { Input } from '@chakra-ui/react';

interface TransparentInputProps {
  setAnswer: Dispatch<SetStateAction<string>>;
}

const TransparentInput = ({ setAnswer }: TransparentInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const currentRef = inputRef.current;

    const handleTouchStart = (event: TouchEvent) => {
      event.preventDefault();
      handleClick();
    };

    if (currentRef) {
      currentRef.addEventListener('touchstart', handleTouchStart, {
        passive: false,
      });
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('touchstart', handleTouchStart);
      }
    };
  }, []);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleAnswer = (value: string) => {
    if (value !== '') {
      setAnswer(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Backspace') {
      setAnswer('');
    }
  };

  return (
    <Input
      position={'absolute'}
      onChange={(e) => handleAnswer(e.target.value)}
      w={'303px'}
      bg={'transparent'}
      border={'none'}
      fontSize={'32px'}
      fontWeight={'700'}
      letterSpacing={'51px'}
      h={'70px'}
      p={'0px 19px'}
      outline={'none'}
      focusBorderColor="none"
      textDecorationLine={'none'}
      textDecor={'none'}
      cursor={'none'}
      textDecoration={'none'}
      color={'rgba(0, 0, 0, 0)'}
      style={{ caretColor: 'transparent' }}
      mt={'25px'}
      zIndex={'30'}
      maxLength={4}
      onKeyDown={handleKeyDown}
      ref={inputRef}
      autoFocus
      onClick={handleClick}
    ></Input>
  );
};

export default TransparentInput;
