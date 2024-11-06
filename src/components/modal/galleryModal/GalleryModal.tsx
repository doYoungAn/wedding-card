import { FC, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Scrollbar } from 'swiper/modules';
import { ReactComponent as CloseIcon } from './../../../assets/icon/close.svg';
import { GALLERY_IMAGES } from './../../../data/gallery';
import 'swiper/css';
// import 'swiper/css/scrollbar';

interface GalleryModalProps {
  initialSlide?: number;
  onClickOutSide?: () => void;
}

const GalleryModal: FC<GalleryModalProps> = ({
  initialSlide = 0,
  onClickOutSide,
}) => {
  const [swiperClass, setSwiperClass] = useState<any>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    // console.log('useEffect?');
    swiperClass?.update?.();
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    swiperClass?.update?.();
  }, [swiperClass]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[100vh] flex items-center justify-center bg-modalBackBg z-[1000]">
        <div className="w-[99%] h-full flex flex-col">
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
              initialSlide={initialSlide !== 0 ? initialSlide : undefined}
              loop
              // loopAdditionalSlides={3}
              observeParents
              observer
              // slidesPerView={1}
              className="h-full"
              // modules={[Scrollbar]}
              scrollbar
              preventInteractionOnTransition
              // lazyPreloadPrevNext={3}
              onInit={(swiper: any) => {
                setSwiperClass(swiper);
              }}
              onSwiper={(swiper: any) => {
                setSwiperClass(swiper);
                console.log('onSwiper', swiper);
              }}
            >
              {GALLERY_IMAGES.map((gallery, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center h-full w-full min-h-[300px]">
                    <img src={gallery.optimizationSrc} alt="" />
                    {/* <div className="swiper-lazy-preloader"></div> */}
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
