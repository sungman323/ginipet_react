import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';

function MSwiper(props) {
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach(slide => {
      const images = slide.querySelectorAll('.animated-img');
      images.forEach(img => {
        img.classList.remove('fade-in'); // 애니메이션 초기화
        void img.offsetWidth; // 리플로우 강제 → animation 재시작 가능하게
        img.classList.add('fade-in');
      });
    });
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.on('slideChangeTransitionStart', handleSlideChange);
      // 첫 로딩시 애니메이션 한 번 실행
      handleSlideChange();
    }
  }, []);

  return (
    <div className='m_slide'>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
        effect='fade'
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        className='mslide'
      >
        <SwiperSlide className='slide'>
          <div className="slide-inner" style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img 
              src={`${process.env.PUBLIC_URL}/images/mo_bg_01.jpg`} 
              alt="배경1" 
            />
            <img 
              src={`${process.env.PUBLIC_URL}/images/mo_txt_01.png`} 
              alt="텍스트1" 
              className="animated-img"
              style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} 
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className='slide'>
          <div className="slide-inner" style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img 
              src={`${process.env.PUBLIC_URL}/images/mo_bg_full_23.png`} 
              alt="배경2" 
            />
            <img 
              src={`${process.env.PUBLIC_URL}/images/mo_bg_23.png`} 
              alt="추가2" 
              style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} 
            />
            <img 
              src={`${process.env.PUBLIC_URL}/images/mo_txt_23.png`} 
              alt="텍스트2" 
              className="animated-img"
              style={{ position: 'absolute', top: 0, left: 0, zIndex: 2 }} 
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MSwiper;