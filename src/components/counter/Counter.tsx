import { FC, useEffect, useState } from 'react';
import { WEDDING_DATE, WEDDING_TIME } from './../../data/wedding-date';

const Counter: FC = () => {

  const [remainDay, setRemainDay] = useState(0);
  const [remainHour, setRemainHour] = useState(0);
  const [remainMinute, setRemainMinute] = useState(0);
  const [remainSecond, setRemainSecond] = useState(0);

  useEffect(() => {
    const intervalId = timer();

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  const timer = () => {
    const intervalId = setInterval(() => {
      const future = Date.parse(`${WEDDING_DATE} ${WEDDING_TIME}`);
      const now = new Date().getTime();
      const diff = future - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const mins = Math.floor(diff / (1000 * 60));
      const secs = Math.floor(diff / 1000);

      const d = days;
      const h = hours - days * 24;
      const m = mins - hours * 60;
      const s = secs - mins * 60;
      setRemainDay(d);
      setRemainHour(h);
      setRemainMinute(m);
      setRemainSecond(s);
    }, 1000);
    
    return intervalId;
  }

  return (
    <div className='flex flex-col gap-4 items-center'>
      <div className='flex flex-row items-center justify-center gap-4'>
        <div className='flex flex-col p-3 bg-primary rounded-lg'>
          <span>{remainDay}</span>
          <span className='text-xs'>Days</span>
        </div>
        <div className='flex flex-col p-3 bg-primary rounded-lg'>
          <span>{remainHour}</span>
          <span className='text-xs'>HOUR</span>
        </div>
        <div className='flex flex-col p-3 bg-primary rounded-lg'>
          <span>{remainMinute}</span>
          <span className='text-xs'>MIN</span>
        </div>
        <div className='flex flex-col p-3 bg-primary rounded-lg'>
          <span>{remainSecond}</span>
          <span className='text-xs'>SEC</span>
        </div>
      </div>

      <div>
        도영 | 선미의 결혼식이 {remainDay + 1}일 남았습니다.
      </div>
    </div>
  )
}

export default Counter