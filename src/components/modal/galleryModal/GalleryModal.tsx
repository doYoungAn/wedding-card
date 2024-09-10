import { FC, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GALLERY_IMAGES } from './../../../data/gallery';

import 'swiper/css';

interface GalleryModalProps {
  initialSlide?: number;
  onClickOutSide?: () => void
  isOpen?: boolean;
}

const GalleryModal: FC<GalleryModalProps> = ({ initialSlide = 0, onClickOutSide, isOpen }) => {

  const nodeRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, []);

  return (
    
      <div ref={nodeRef} className='fixed top-0 left-0 w-[100vw] h-[100vh] bg-modalBackBg flex items-center justify-center flex-col' onClick={(e) => {
        e.stopPropagation();
        console.log('click?')
        onClickOutSide?.();
      }}>
        <div className='w-full flex items-center' onClick={(e) => e.stopPropagation()}>
          <Swiper
            initialSlide={initialSlide}
          >
            {GALLERY_IMAGES.map((gallery) => (
              <SwiperSlide>
                <div className='flex items-center'>
                  <img src={gallery.optimizationSrc} alt='' loading="lazy" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
  )
}

export default GalleryModal;