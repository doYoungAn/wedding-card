import { FC } from 'react';
import RoundButton from '../common/roundButton';
import Us10 from './../../assets/optimization/na_u_us/us_10.webp';
// import { ReactComponent as ParkingIcon } from './../../assets/icon/parking.svg';
import { ReactComponent as PhoneIcon } from './../../assets/icon/phone.svg';

const Contact: FC = () => {

  return (
    <div className='flex flex-col  items-center'>
      <div className='overflow-hidden rounded-md mb-8'>
        <img src={Us10} alt='' />
      </div>
      <div className='flex flex-col items-center justify-center font-IropkeBatangM text-contentPrimary mb-8'>
        <div className='mb-2'>
          <span>안찬희</span>
          <span className='mx-1'>·</span>
          <span>이순애</span>
          <span className='text-xs mx-2'>의 장남</span>
          <span className='text-lg'>
            안도영
          </span>
        </div>
        <div>
          <span>홍원국</span>
          <span className='mx-1'>·</span>
          <span>한진숙</span>
          <span className='text-xs mx-2'>의 장녀</span>
          <span className='text-lg'>
            홍선미
          </span>
        </div>
      </div>

      <RoundButton>
        <PhoneIcon width={14} height={14} className='mr-2 fill-contentPrimary' />
        연락하기
      </RoundButton>
    </div>
  )
}

export default Contact