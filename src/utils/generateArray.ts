/**
 * @param num number
 * @returns [0, 1, 2, ..., num]
 */
export const generateArrayFromZero = (num: number): number[] => {
  if (num < 0) {
    return [];
  }

  return Array.from({ length: num + 1 }, (_, index) => index);
};

/**
 * @param start: number,
 * @param end: number,
 * @returns [start, ... , end]
 */
export const generateArray = (start: number, end: number): number[] => {
  if (start !== 0) {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }

  return generateArrayFromZero(end);
};

/**
 * @param interval 생성하고자 하는 배열의 분 단위
 * @param type
 * e.g interval:5 => [5,10,15, ... ,60]
 */
export const generateMinuteArray = (
  type: 'startZero' | 'endSixty',
  interval?: number,
): number[] => {
  if (!interval) {
    return generateArray(1, 60);
  }
  if (interval <= 0 || interval > 60) {
    return generateArray(1, 60);
  }

  const base = Array.from(
    { length: Math.floor(60 / interval) },
    (_, index) => (index + 1) * interval,
  );

  if (type === 'startZero' && base.length > 1) {
    return base.slice(0, base.length - 1);
  } else {
    return base.slice(0, base.length - 1);
  }
};
