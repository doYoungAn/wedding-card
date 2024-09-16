import { FC } from 'react';
import Flower from './../../assets/flower.png'

const Invitation: FC = () => {

  return (
    <div className='flex items-center justify-center flex-col'>
      <img src={Flower} alt='' className='mb-8' />

      <div className='font-IropkeBatangM text-contentPrimary mb-2'>
        If I know what love is, it is because of you.
      </div>
      <div className='font-IropkeBatangM text-contentPrimary mb-8 text-sm'>
        - Hermann Hesse -
      </div>

      <div className='font-IropkeBatangM text-contentPrimary text-center mb-2'>
        만약 내가 사랑이 무엇인지 안다면, <br />그건 당신 덕분이에요.
      </div>
      <div className='font-IropkeBatangM text-contentPrimary text-sm'>
        - 헤르만 헤세 -
      </div>
    </div>
  )
}

export default Invitation;