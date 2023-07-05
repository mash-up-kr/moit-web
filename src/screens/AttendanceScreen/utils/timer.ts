/**
 *
 * @param dueDate 기준이 되는 시간 값 (Date 객체)
 * @returns dueDate와 현재 시간의 차이 값
 */
export const calcTimeDiff = (dueDate: Date) => {
  const currentTime = new Date();
  const timeDiff = new Date(dueDate.getTime() - currentTime.getTime());
  return new Date(timeDiff);
};

/**
 *
 * @param time 1초씩 뺄 시간 값 (Date 객체)
 * @returns 1초 빼진 값
 */
export const subtractOneSecond = (stDate: Date) => {
  return new Date(stDate.setTime(stDate.getTime() - 1000));
};

/**
 *
 * @param date 렌더링 할 시간 값 (Date 객체)
 * @returns mm:ss에 사용할 수 있는 { minutes, seconds }
 */
export const formattedTime = (date: Date) => {
  const minutes = Math.floor(date.getTime() / 60000);
  const seconds = Math.floor((date.getTime() / 1000) % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
};
