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
      autoFocus
      maxLength={4}
      ref={inputRef}
      onChange={(e) => handleAnswer(e.target.value)}
      position={'absolute'}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
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
      color={'rgba(0, 0, 0, 0)'}
      zIndex={'30'}
    />
  );
};

export default TransparentInput;
