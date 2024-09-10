import { FC, PropsWithChildren } from 'react';

interface RoundButtonProps extends PropsWithChildren {
  onClick?: () => void;
}

const RoundButton: FC<RoundButtonProps> = ({ children, onClick }) => {

  return (
    <button className='flex flex-row items-center justify-center text-base border px-2 py-2 rounded-2xl border-mainBorder text-contentPrimary font-IropkeBatangM w-1/2 bg-whiteBg' onClick={() => onClick?.()}>
      {children}
    </button>
  )
}

export default RoundButton