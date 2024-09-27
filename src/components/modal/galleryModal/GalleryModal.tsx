import { FC, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactComponent as CloseIcon } from './../../../assets/icon/close.svg';
import { GALLERY_IMAGES } from './../../../data/gallery';

import 'swiper/css';

interface GalleryModalProps {
  initialSlide?: number;
  onClickOutSide?: () => void;
  isOpen?: boolean;
}

const GalleryModal: FC<GalleryModalProps> = ({
  initialSlide = 0,
  onClickOutSide,
  isOpen,
}) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      ref={nodeRef}
      className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-modalBackBg flex flex-col z-[1000]"
      onClick={(e) => {
        e.stopPropagation();
        // console.log('click?')
        // onClickOutSide?.();
      }}
    >
      <div className="w-full h-[80px] flex items-center justify-end px-4">
        <CloseIcon
          width={30}
          height={30}
          className="fill-[#fff]"
          onClick={() => {
            console.log('클릭?');
            onClickOutSide?.();
          }}
        />
      </div>
      <div
        className="w-full flex items-center"
        style={{ height: 'calc(100vh - 80px)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <Swiper
          initialSlide={initialSlide}
          loop
          style={{ height: 'calc(100vh - 80px)' }}
        >
          {GALLERY_IMAGES.map((gallery) => (
            <SwiperSlide style={{ height: '100%' }}>
              <div className="flex items-center h-full">
                <img src={gallery.optimizationSrc} alt="" loading="lazy" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GalleryModal;
