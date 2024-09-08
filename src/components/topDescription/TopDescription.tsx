import { FC } from 'react';

const TopDescription: FC = () => {

  return (
    <div className='flex flex-col items-center py-20 px-[20px] gap-8 text-contentPrimary'>
      <div className='text-2xl font-IropkeBatangM font-normal'>
        <span>안도영</span>
        <span className='mx-4'>|</span>
        <span>홍선미</span>
      </div>
      <div className='flex flex-col items-center font-IropkeBatangM gap-3'>
        <span>2024년 12월 21일 토요일 오후 4시 20분</span>
        <span>더 링크 호텔 화이트홀 (7F)</span>
      </div>
    </div>
  )
}

export default TopDescription;