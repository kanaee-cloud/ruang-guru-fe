import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';



const SwiperComponent = () => {
  const images = [
    '/assets/slide-2.png',
    '/assets/slide-3.png',
    '/assets/slide-4.png',
    '/assets/slide-5.png',
    '/assets/slide-2.png',
    '/assets/slide-3.png',
    '/assets/slide-4.png',
    '/assets/slide-5.png',
  ];

  return (
    <Swiper
    slidesPerView={'auto'}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    className="swiper-container mt-10"
    
    modules={[Autoplay]}
  >
    {images.map((image, index) => (
      <SwiperSlide key={index} className="swiper-slide" style={{ width: 'auto', height:'50vh' , flexShrink: 0 }}>
        <img
          src={image}
          alt={`slide-${index}`}
          className="swiper-image"
          style={{
            width: '100%', 
            height: '100%', 
        
          }}
        />
      </SwiperSlide>
    ))}
  </Swiper>
  );
};

export default SwiperComponent;