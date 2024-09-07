import { FC, PropsWithChildren } from 'react';

const Main: FC<PropsWithChildren> = ({ children }) => {

  return (
    <main className='flex flex-col font-pre bg-mainBg'>
      {children}
    </main>
  )
}

export default Main