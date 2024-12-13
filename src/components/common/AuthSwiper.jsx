import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const AuthSwiper = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Autoplay]}
    >
      <SwiperSlide className="relative">
        <img
          src="/assets/auth-landing.png"
          alt="Auth Landing"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-[65px]"></div>
      </SwiperSlide>
      
      <SwiperSlide className="relative">
        <img
          src="/assets/login-landing.png"
          alt="Auth Landing"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent  rounded-[65px]"></div>
        <div className="z-10 relative bottom-32 left-10 font-semibold text-4xl text-white">
          <p>Yuk, #CariKerja di</p>
          <p>
            <span className="text-accents">Ruang</span>Nganggur.
          </p>
        </div>
      </SwiperSlide>
      
      <SwiperSlide className="relative">
        <img
          src="/assets/register-landing.png"
          alt="Auth Landing"
          className="w-full h-full "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-[65px]"></div>
        <div className="text-white z-10 relative bottom-32 left-10 font-medium text-4xl">
          <p>Kami memiliki 1.000+ klien di</p>
          <p>seluruh Indonesia.</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default AuthSwiper;
