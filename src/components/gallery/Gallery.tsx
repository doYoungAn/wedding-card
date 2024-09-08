import { FC } from 'react';
import Us3 from './../../assets/na_u_us/us_3.jpg';
import Us4 from './../../assets/na_u_us/us_4.jpg';
import Us8 from './../../assets/na_u_us/us_8.jpg';
import Us10 from './../../assets/na_u_us/us_10.jpg';
import Us11 from './../../assets/na_u_us/us_11.jpg';
import Ws1 from './../../assets/ws/ws_1.jpg';
import Ws2 from './../../assets/ws/ws_2.jpg';
import Ws4 from './../../assets/ws/ws_4.jpg';
import Ws6 from './../../assets/ws/ws_6.jpg';
import Ws8 from './../../assets/ws/ws_8.jpg';
import Ws9 from './../../assets/ws/ws_9.jpg';
import Ws11 from './../../assets/ws/ws_11.jpg';
import Ws12 from './../../assets/ws/ws_12.jpg';
import Ws13 from './../../assets/ws/ws_13.jpg';
import { GALLERY_IMAGES } from './../../data/gallery';

const Gallery: FC = () => {

  return (
    <div className='grid grid-cols-2 grid-rows-11 gap-[2px]'>
      {GALLERY_IMAGES.map((image) => (
        <div className='rounded-md overflow-hidden' style={{ 'gridArea': image.gridArea, height: image.height }}>
          <img className='object-cover w-full h-full' src={image.src} alt="" />
        </div>
      ))}
      {/* <div className='rounded-md overflow-hidden' style={{ 'gridArea': 'span 2 / 1 / auto', height: '202px' }}>
        <img className='object-cover w-full h-full' src={Us3} alt="" />
      </div>
      <div className='rounded-md overflow-hidden' style={{ 'gridArea': 'span 1 / 2 / auto', height: '100px' }}>
        <img className='object-cover w-full h-full' src={Us4} alt="" />
      </div>
      <div className='rounded-md overflow-hidden' style={{ 'gridArea': 'span 1 / 2 / auto', height: '100px' }}>
        <img className='object-cover w-full h-full' src={Us8} alt="" />
      </div>
      <div className='rounded-md overflow-hidden' style={{ 'gridArea': 'span 2 / 1 / auto / 3', height: '202px' }}>
        <img className='object-cover w-full h-full' src={Us10} alt="" />
      </div>
      <div className='rounded-md overflow-hidden' style={{ 'gridArea': 'span 1 / 1 / auto', height: '100px' }}>
        <img className='object-cover w-full h-full' src={Us11} alt="" />
      </div>
      <div className='rounded-md overflow-hidden' style={{ 'gridArea': 'span 2 / 2 / auto', height: '202px' }}>
        <img className='object-cover w-full h-full' src={Us3} alt="" />
      </div>
      <div className='rounded-md overflow-hidden' style={{ 'gridArea': 'span 1 / 1 / auto', height: '100px' }}>
        <img className='object-cover w-full h-full' src={Us3} alt="" />
      </div>
      <div className='rounded-md overflow-hidden' style={{ 'gridArea': 'span 2 / 1 / auto', height: '202px' }}>
        <img className='object-cover w-full h-full' src={Us3} alt="" />
      </div>
      <div className='rounded-md overflow-hidden' style={{ 'gridArea': 'span 1 / 2 / auto / 3', height: '100px' }}>
        <img className='object-cover w-full h-full' src={Us3} alt="" />
      </div>
      <div className='rounded-md overflow-hidden' style={{ 'gridArea': 'span 1 / 2 / auto', height: '100px' }}>
        <img className='object-cover w-full h-full' src={Us3} alt="" />
      </div>
      <div className='rounded-md overflow-hidden' style={{ 'gridArea': 'span 2 / 1 / auto / 3', height: '202px' }}>
        <img className='object-cover w-full h-full' src={Ws8} alt="" />
      </div>
      <div className='rounded-md overflow-hidden' style={{ 'gridArea': 'span 1 / 1 / auto', height: '100px' }}>
        <img className='object-cover w-full h-full' src={Us3} alt="" />
      </div>
      <div className='rounded-md overflow-hidden' style={{ 'gridArea': 'span 2 / 2 / auto', height: '202px' }}>
        <img className='object-cover w-full h-full' src={Us3} alt="" />
      </div>
      <div className='rounded-md overflow-hidden' style={{ 'gridArea': 'span 1 / 1 / auto', height: '100px' }}>
        <img className='object-cover w-full h-full' src={Us3} alt="" />
      </div> */}
    </div>
  )
}

export default Gallery