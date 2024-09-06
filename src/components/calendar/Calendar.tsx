import { FC, useEffect, useState } from 'react';
import { DAY_NAMES, makeMonthInDays } from './../../logic/calendar';
import { WEDDING_DATE } from './../../data/wedding-date';

const Calendar: FC = () => {
  const [daysInWeeks, setDaysInWeeks] = useState<DayItem[][]>([]);

  useEffect(() => {
    setDaysInWeeks(makeMonthInDays(WEDDING_DATE));
  }, []);

  return (
    <div className='py-8 px-4'>
      <table className="table-auto w-full text-center">
        <thead>
          <tr>
            {DAY_NAMES.map((day, index) => <th className={`font-medium px-2 py-2 ${index === 0 ? 'text-red' : ''}`}>{day}</th>)}
          </tr>
        </thead>
        {daysInWeeks.map((week) => {
          return <tr>{week.map((day, index) => {
            return <td className='px-2 py-2 relative'>
              {!day.isToday ? <span className={`${index === 0 ? 'text-red' : ''}`}>{day.day}</span> : <span className='text-[#ffffff] font-bold'>{day.day}</span>}
              {day.isToday ? <span className='w-[28px] h-[28px] bg-primary rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]'></span> : null}
            </td>;
          })}</tr>;
        })}
      </table>
    </div>
  )
}

export default Calendar