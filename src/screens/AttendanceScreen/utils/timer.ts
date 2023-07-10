/**
 *
 * @param date 기준 시간
 * @returns 기준 시간과 현재 시간의 차이
 */
export const remainingTime = (date: Date): Date => {
  const currentTime = new Date();
  const timeDiff = new Date(date.getTime() - currentTime.getTime());
  return new Date(timeDiff);
};

/**
 *
 * @param date 1초 뺄 시간
 * @returns 1초 뺀 시간
 */
export const timeBeforeOneSecond = (date: Date): Date => {
  return new Date(date.setTime(date.getTime() - 1000));
};

/**
 *
 * @param date mm:ss로 나타내고 싶은 시간
 * @returns mm:ss
 */
export const formattedTime = (date: Date): string => {
  const minutes = Math.floor(date.getTime() / 60000);
  const seconds = Math.floor((date.getTime() / 1000) % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
};
