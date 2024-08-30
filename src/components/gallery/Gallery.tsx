import { FC } from 'react';
import { Gallery as GalleryLib } from "react-grid-gallery";
import A from './../../assets/na_u_us/1.jpg';
import B from './../../assets/na_u_us/2.jpg';

const Gallery: FC = () => {

  return (
    <GalleryLib images={[
      {
        src: A,
        width: 100,
        height: 100,
      },
      {
        src: B,
        width: 100,
        height: 100,
      },
    ]} />
  )
}

export default Gallery