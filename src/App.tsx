import { FC } from 'react';
import Section from './layout/section';
import Title from './layout/title';
import Gallery from './components/gallery';
import Contact from './components/contact';
import Calendar from './components/calendar';
import Counter from './components/counter';
import TopBanner from './components/topBanner';
import TopImage from './components/topImage';
import TopDescription from './components/topDescription';
import Location from './components/location';
import Give from './components/give';
import Finish from './components/finish';
import Footer from './layout/footer';
import Information from './components/information';
import Main from './layout/main';
import Invitation from './components/invitation';
import './App.css';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const App: FC = () => {

  return (
    <Main>
      <TopBanner/>
      <TopImage />
      <TopDescription />
      <Section>
        <Title title='INVITATION' subTitle='소중한 분들을 초대합니다.' />
        <Invitation />
      </Section>
      <Section>
        <Contact />
      </Section>
      <Section bg="secondary">
        <Title title='CALENDAR' subTitle='일정' />
        <Calendar />
        <Counter />
      </Section>
      <Section>
        <Title title='GALLERY' subTitle='갤러리' />
        <Gallery />
      </Section>
      <Section>
        <Title title='LOCATION' subTitle='오시는길' />
        <Location />
      </Section>
      <Section>
        <Title title='INFORMATION' subTitle='예식정보 및 안내사항' />
        <Information />
      </Section>
      <Section>
        <Title title='GIVE' subTitle='마음 전하실 곳' />
        <Give />
      </Section>

      <Finish />
      <Footer />

      <ToastContainer 
        position="top-center"    
        autoClose={1000}
      />
    </Main>
  )
}

export default App;
