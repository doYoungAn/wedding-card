import { FC } from 'react';
import A from './../../assets/finish.jpg';

const Finish: FC = () => {
  return (
    <div className="relative my-4">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col w-[90%] items-center justify-center text-[#ffffff] z-[2]">
        <span>응원하고 격려해주신 모든 분들께 감사드리며</span>
        <span>행복하게 잘 살겠습니다.</span>
      </div>
      <div className="absolute w-full h-full top-0 bg-[#000000] bg-opacity-40"></div>
      <img src={A} alt="" />
    </div>
  );
};

export default Finish;
