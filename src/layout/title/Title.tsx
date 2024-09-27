import { FC } from 'react';

interface TitleProps {
  title?: string;
  subTitle?: string;
}

const Title: FC<TitleProps> = ({ title = '', subTitle = '' }) => {
  return (
    <div className="flex flex-col gap-1 items-center mb-12">
      <h2 className="text-s text-subTitle">{title}</h2>
      <h3 className="text-xl text-title font-IropkeBatangM">{subTitle}</h3>
    </div>
  );
};

export default Title;
