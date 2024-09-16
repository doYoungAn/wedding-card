import { FC } from 'react';
import CustomWave from '../common/customWave';
import TopImg from './../../assets/optimization/na_u_us/us_9.webp';

const TopImage: FC = () => {

  return (
    <div className=' relative'>
      <div className='absolute top-0 rotate-180'>
        <CustomWave format="default" />
      </div>
      <div className='absolute top-0 rotate-180'>
        <CustomWave format="custom" />
      </div>
      <img src={TopImg} alt='' />
      
      <div className='absolute bottom-0'>
        <CustomWave format="default" />
      </div>
      <div className='absolute bottom-0'>
        <CustomWave format="custom" />
      </div>
    </div>
  )
}

export default TopImage