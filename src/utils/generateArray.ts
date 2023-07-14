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
