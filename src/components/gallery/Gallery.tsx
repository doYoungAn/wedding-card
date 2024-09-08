import { FC } from 'react';
import { GALLERY_IMAGES } from './../../data/gallery';

const Gallery: FC = () => {

  return (
    <div className='grid grid-cols-2 grid-rows-11 gap-[2px]'>
      {GALLERY_IMAGES.map((image) => (
        <div className='rounded-md overflow-hidden' style={{ 'gridArea': image.gridArea, height: image.height }}>
          <img className='object-cover w-full h-full' src={image.src} alt="" style={{ 'objectPosition': image?.objectPosition }} />
        </div>
      ))}
    </div>
  )
}

export default Gallery