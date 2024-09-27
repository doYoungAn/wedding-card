import { FC, PropsWithChildren } from 'react';

interface SectionProps {
  bg?: 'secondary';
}

const Section: FC<SectionProps & PropsWithChildren> = ({ children, bg }) => {
  return (
    <section className={`px-4 py-10 mb-6 ${bg ? 'bg-secondBg' : ''}`}>
      {children}
    </section>
  );
};

export default Section;
