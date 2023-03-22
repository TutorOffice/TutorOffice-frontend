import moment from 'moment';
type momentType = ReturnType<typeof moment>;

const TOTAL_DAYS = 42;
const SATURDAY_INDEX = 6;
const SUNDAY_INDEX = 0;

export const momentConfig = {
  week: { dow: 1 },
  months: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
  weekdays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
};

const getStartDay: (today: momentType) => momentType = (today) => {
  return today.clone().startOf('month').startOf('week').clone().subtract(1, 'day');
};
export const getDaysArray: (today: momentType) => Array<momentType> = (today) => {
  const startDay = getStartDay(today);
  return [...Array(TOTAL_DAYS)].map(() => startDay.add(1, 'day').clone());
};

export const getCurrentMonth: (today: momentType) => string = (today) => {
  return today.clone().format('MMMM');
};
export const getPrevMonth: (today: momentType) => string = (today) => {
  return today.clone().subtract(1, 'month').format('MMMM');
};
export const getNextMonth: (today: momentType) => string = (today) => {
  return today.clone().add(1, 'month').format('MMMM');
};

export const getIsWeekend: (day: number) => boolean = (day) => {
  return day === SATURDAY_INDEX || day === SUNDAY_INDEX;
};
