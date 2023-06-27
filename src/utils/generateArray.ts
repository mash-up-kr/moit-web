/**
 * @param num number
 * @returns [0, 1, 2, ..., num]
 */

export const generateArray = (num: number): number[] => {
  if (num < 0) {
    return [];
  }

  return Array.from({ length: num + 1 }, (_, index) => index);
};
