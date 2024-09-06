import { FC } from 'react';
import Section from './layout/section';
import Title from './layout/title';
import Gallery from './components/gallery';
import Calendar from './components/calendar';
import Counter from './components/counter';
import TopBanner from './components/topBanner';
import TopImage from './components/topImage';
import TopDescription from './components/topDescription';
import Location from './components/location';
import './App.css';

const App: FC = () => {

  return (
    <main className='flex flex-col px-4 font-pre'>
      <TopBanner/>
      <TopImage />
      <TopDescription />
      <Section>
        <Title title='INVITATION' subTitle='소중한 분들을 초대합니다.' />
      </Section>
      <Section>
        <Title title='CALENDAR' subTitle='일정' />
        <Calendar />
        <Counter />
      </Section>
      <Section>
        <Title title='GALLERY' subTitle='갤러리' />
        <Gallery></Gallery>
      </Section>
      <Section>
        <Title title='LOCATION' subTitle='오시는길' />
        <Location />
      </Section>
      <Section>
        <Title title='GIVE' subTitle='마음 전하실 곳' />
      </Section>
    </main>
  )
}

export default App;
