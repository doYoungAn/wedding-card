import React, { useEffect } from 'react';
import logo from './logo.svg';
import Section from './layout/section';
import Title from './layout/title';
import Gallery from './components/gallery';
import TopBanner from './components/topBanner';
import TopImage from './components/topImage';
import TopDescription from './components/topDescription';
import Location from './components/location';
import './App.css';

const App = () => {

  return (
    <main className='flex flex-col px-4 font-pre'>
      <TopBanner/>
      <TopImage />
      <TopDescription />
      <Section>
        <Title title='INVITATION' subTitle='소중한 분들을 초대합니다.'></Title>
      </Section>
      <Section>
        <Title title='GALLERY' subTitle='갤러리'></Title>
        <Gallery></Gallery>
      </Section>
      <Section>
        <Title title='LOCATION' subTitle='오시는길'></Title>
        <Location />
      </Section>
      <Section>
        <Title title='GIVE' subTitle='마음 전하실 곳'></Title>
      </Section>
    </main>
  )
}

export default App;
