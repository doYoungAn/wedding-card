import { FC, useState } from 'react';
import GalleryModal from '../modal/galleryModal';
import Flower from './../../assets/flower.png';
import { GALLERY_IMAGES } from './../../data/gallery';

const Gallery: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedIndex, setSelectIndex] = useState(0);

  const onClickImage = (index: number) => {
    setSelectIndex(index);
    setIsOpenModal(true);
  };

  return (
    <>
      {/* <div className='flex items-center justify-center mb-8'>
        <img src={Flower} alt='' />
      </div> */}
      <div className="grid grid-cols-2 grid-rows-13 gap-[2px]">
        {GALLERY_IMAGES.map((image, index) => (
          <div
            className="rounded-md overflow-hidden"
            style={{ gridArea: image.gridArea, height: image.height }}
            onClick={() => onClickImage(index)}
          >
            <img
              className="object-cover w-full h-full"
              src={image.optimizationSrc}
              alt=""
              style={{ objectPosition: image?.objectPosition }}
            />
          </div>
        ))}
      </div>
      {isOpenModal ? (
        <GalleryModal
          isOpen={isOpenModal}
          initialSlide={selectedIndex}
          onClickOutSide={() => setIsOpenModal(false)}
        />
      ) : null}
    </>
  );
};

export default Gallery;
