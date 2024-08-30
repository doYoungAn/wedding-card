import { FC } from 'react';

interface TitleProps {
  title?: string;
  subTitle?: string;
}

const Title: FC<TitleProps> = ({ title = '', subTitle = '' }) => {
  return (
    <div className='flex flex-col gap-1 items-center text-[#F3C7D9] mb-3'>
      <h2 className=' text-xs'>{title}</h2>
      <h3 className=' text-xl'>{subTitle}</h3>
    </div>
  )
};

export default Title;