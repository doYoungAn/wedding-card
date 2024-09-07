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
    <div className='flex flex-col gap-10 items-center font-IropkeBatangM'>
      <div className='flex flex-row items-center justify-center gap-4 text-title'>
        <div className='flex flex-col items-center p-3 bg-primary rounded-lg min-w-14 max-w-14 gap-1'>
          <span>{remainDay}</span>
          <span className='text-[10px]'>DAY</span>
        </div>
        <div className='flex flex-col items-center p-3 bg-primary rounded-lg min-w-14 max-w-14 gap-1'>
          <span>{remainHour}</span>
          <span className='text-[10px]'>HOUR</span>
        </div>
        <div className='flex flex-col items-center p-3 bg-primary rounded-lg min-w-14 max-w-14 gap-1'>
          <span>{remainMinute}</span>
          <span className='text-[10px]'>MIN</span>
        </div>
        <div className='flex flex-col items-center p-3 bg-primary rounded-lg min-w-14 max-w-14 gap-1'>
          <span>{remainSecond}</span>
          <span className='text-[10px]'>SEC</span>
        </div>
      </div>

      <div className='font-IropkeBatangM text-contentPrimary'>
        도영 ❤️ 선미의 결혼식이 <b className='text-primary font-semibold'>{remainDay + 1}일</b> 남았습니다.
      </div>
    </div>
  )
}

export default Counter