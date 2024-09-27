import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

const chunkArrayReduce = (arr: any[], size: number) => {
  return arr.reduce((acc, _, index) => {
    if (index % size === 0) {
      acc.push(arr.slice(index, index + size));
    }
    return acc;
  }, []);
};

export const DAY_NAMES = ['일', '월', '화', '수', '목', '금', '토'];

export const makeMonthInDays = (targetDate: string) => {
  const firstDate = dayjs(targetDate).startOf('months');
  const firstDateDay = firstDate.day();
  const lastDate = dayjs(targetDate).endOf('months');
  const lastDateDay = lastDate.day();
  const daysInMonth = dayjs(dayjs(targetDate).get('y')).daysInMonth();

  const dateList: DayItem[] = [];

  for (let i = firstDateDay - 1; i >= 0; i--) {
    const date = firstDate.subtract(i + 1, 'day');
    dateList.push({
      day: date.get('D'),
      isToday: false,
    });
  }

  for (let i = 0; i < daysInMonth; i++) {
    const date = firstDate.add(i, 'day');
    dateList.push({
      day: date.get('D'),
      isToday: date.isSame(targetDate),
    });
  }

  for (let i = 0; i < 6 - lastDateDay; i++) {
    const date = lastDate.add(i + 1, 'day');
    dateList.push({
      day: date.get('D'),
      isToday: false,
    });
  }

  const dateByWeek: DayItem[][] = chunkArrayReduce(dateList, 7);

  return dateByWeek;
};
