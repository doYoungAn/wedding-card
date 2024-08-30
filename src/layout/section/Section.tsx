import { FC, PropsWithChildren } from 'react';

const Section: FC<PropsWithChildren> = ({ children }) => {

  return (
    <section className="mb-6">
      {children}
    </section>
  )
};

export default Section