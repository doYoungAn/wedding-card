import { FC, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import { ReactComponent as CloseIcon } from './../../../assets/icon/close.svg';
import { GALLERY_IMAGES } from './../../../data/gallery';
import 'swiper/css';
import 'swiper/css/scrollbar';

interface GalleryModalProps {
  initialSlide?: number;
  onClickOutSide?: () => void;
}

const GalleryModal: FC<GalleryModalProps> = ({
  initialSlide = 0,
  onClickOutSide,
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[100vh] flex items-center justify-center bg-modalBackBg z-[1000]">
        <div className="w-full h-full flex flex-col">
          <div className="w-full px-4 py-4">
            <CloseIcon
              width={24}
              height={24}
              className="fill-[#fff]"
              onClick={() => {
                onClickOutSide?.();
              }}
            />
          </div>
          <div className="w-full h-full">
            <Swiper
              initialSlide={initialSlide}
              loop
              observeParents
              observer
              slidesPerView={'auto'}
              className="h-full"
              modules={[Scrollbar]}
              scrollbar
            >
              {GALLERY_IMAGES.map((gallery, index) => (
                <SwiperSlide style={{ height: '100%' }} key={index}>
                  <div className="flex items-center h-full">
                    <img src={gallery.optimizationSrc} alt="" loading="lazy" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryModal;
