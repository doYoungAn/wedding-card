import { FC, useState, CSSProperties } from 'react';
import Wave from 'react-wavify';

interface CustomWaveProps {
  format?: 'default' | 'custom';
}

const CustomWave: FC<CustomWaveProps> = ({ format = 'default' }) => {
  const [styles] = useState<CSSProperties>(
    format === 'default'
      ? {
          display: 'flex',
          width: '100vw',
          height: 60,
        }
      : {
          display: 'flex',
          width: '100vw',
          height: 100,
        }
  );

  const [options] = useState({
    height: 60,
    amplitude: 30,
    speed: 0.2,
    points: 2,
  });

  return (
    <Wave
      fill="url(#gradient)"
      style={styles}
      options={format === 'custom' ? options : {}}
    >
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop offset="70%" stopColor="rgba(255,255,255, 0.6)" />
          <stop offset="30%" stopColor="rgba(255,255,255, 0.6)" />
        </linearGradient>
      </defs>
    </Wave>
  );
};

export default CustomWave;
