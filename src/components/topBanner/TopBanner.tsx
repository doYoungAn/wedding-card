import { FC } from 'react';

const TopBanner: FC = () => {
  // 48px 33px 30px
  return (
    <div className="flex flex-col w-full items-center pt-[48px] pb-[30px] text-contentPrimary">
      <span className="text-xl">2024 / 12 / 21</span>
      <span className='text-2xl'>SATURDAY</span>
    </div>
  )
}

export default TopBanner;