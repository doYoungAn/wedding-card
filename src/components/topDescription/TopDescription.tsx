import { FC } from 'react';

const TopDescription: FC = () => {

  return (
    <div className='flex flex-col items-center pt-[20px] pb-[20px] px-[20px] gap-[8px]'>
      <span>안도영 홍선미</span>
      <div className='flex flex-col items-center'>
        <span>2024년 12월 21일 토요일 오후 4시 30분</span>
        <span>더 링크 호텔 화이트홀</span>
      </div>
    </div>
  )
}

export default TopDescription;