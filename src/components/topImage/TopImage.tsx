import { FC } from 'react';
import Wave from 'react-wavify'
import TopImg from './../../assets/optimization/na_u_us/us_9.webp';

const TopImage: FC = () => {

  return (
    <div className=' relative'>
      <div className='absolute top-0 rotate-180'>
        <Wave fill="url(#gradient)" style={{ display: 'flex', width: '100vw', height: 60 }}>
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="70%"  stopColor="rgba(255,255,255, 0.6)" />
              <stop offset="30%" stopColor="rgba(255,255,255, 0.6)" />
            </linearGradient>
          </defs>
        </Wave>
      </div>
      <div className=' absolute top-0 rotate-180'>
        <Wave fill="url(#gradient)" style={{ display: 'flex', width: '100vw', height: 60 }}>
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="70%"  stopColor="rgba(255,255,255, 0.6)" />
              <stop offset="30%" stopColor="rgba(255,255,255, 0.6)" />
            </linearGradient>
          </defs>
        </Wave>
      </div>
      <img src={TopImg} alt='' />
      
      <div className='absolute bottom-0'>
        <Wave fill="url(#gradient)" style={{ display: 'flex', width: '100vw', height: 60 }}>
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="70%"  stopColor="rgba(255,255,255, 0.6)" />
              <stop offset="30%" stopColor="rgba(255,255,255, 0.6)" />
            </linearGradient>
          </defs>
        </Wave>
      </div>
      <div className=' absolute bottom-0'>
        <Wave fill="url(#gradient)" style={{ display: 'flex', width: '100vw', height: 60 }}>
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="70%"  stopColor="rgba(255,255,255, 0.6)" />
              <stop offset="30%" stopColor="rgba(255,255,255, 0.6)" />
            </linearGradient>
          </defs>
        </Wave>
      </div>
    </div>
  )
}

export default TopImage