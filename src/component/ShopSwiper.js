import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function ShopSwiper(props) {
  return (
    <div className='Shop_wrap'>
      <img src={`${process.env.PUBLIC_URL}/images/title_shopping_icon.png`} alt="쇼핑아이콘" />
      <h2><span>지니펫 쇼핑</span>하러 가기</h2>
      <button>바로가기</button>
      
      <div className='s_slide'>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 8000 }}
          className='shop_slide'
        >
          <SwiperSlide className='shop_slide'>
            <div className="shop-inner">
              <img 
                src={`${process.env.PUBLIC_URL}/images/172162766869500.jpg`} 
                alt="냥블리참치" 
              />
              <div className='product_info'>
                <p className='cate'>([간식] 더캣 더스낵)</p>
                <p className='title'>냥블리타임 참치 14g*10ea</p>
                <br /><br />
                <p className='price'><span>5,000</span>원</p>
                <br /><br />
                <div className='product_button'>
                  <button><img src={`${process.env.PUBLIC_URL}/images/icon_cart.png`} alt="cart" /></button>
                  <button><img src={`${process.env.PUBLIC_URL}/images/icon_wish.png`} alt="wish" /></button>
                  <button><img src={`${process.env.PUBLIC_URL}/images/icon_preview.png`} alt="preview" /></button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='shop_slide'>
            <div className="shop-inner">
              <img 
                src={`${process.env.PUBLIC_URL}/images/172162761334300.jpg`} 
                alt="냥블리닭고기" 
              />
              <div className='product_info'>
                <p className='cate'>([간식] 더캣 더스낵)</p>
                <p className='title'>냥블리타임 닭고기 14g*10ea</p>
                <br /><br />
                <p className='price'><span>5,000</span>원</p>
                <br /><br />
                <div className='product_button'>
                  <button><img src={`${process.env.PUBLIC_URL}/images/icon_cart.png`} alt="cart" /></button>
                  <button><img src={`${process.env.PUBLIC_URL}/images/icon_wish.png`} alt="wish" /></button>
                  <button><img src={`${process.env.PUBLIC_URL}/images/icon_preview.png`} alt="preview" /></button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='shop_slide'>
            <div className="shop-inner">
              <img 
                src={`${process.env.PUBLIC_URL}/images/172126109952400.jpg`} 
                alt="홍삼오리" 
              />
              <div className='product_info'>
                <p className='cate'>([사료] 홀리스틱)</p>
                <p className='title'>홍삼&국내산오리(1.2kg)</p>
                <br /><br />
                <p className='price'><span>24,000</span>원</p>
                <br /><br />
                <div className='product_button'>
                  <button><img src={`${process.env.PUBLIC_URL}/images/icon_cart.png`} alt="cart" /></button>
                  <button><img src={`${process.env.PUBLIC_URL}/images/icon_wish.png`} alt="wish" /></button>
                  <button><img src={`${process.env.PUBLIC_URL}/images/icon_preview.png`} alt="preview" /></button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='shop_slide'>
            <div className="shop-inner">
              <img 
                src={`${process.env.PUBLIC_URL}/images/173216863638000.jpg`} 
                alt="홍삼연어" 
              />
              <div className='product_info'>
                <p className='cate'>([사료] 홀리스틱)</p>
                <p className='title'>홍삼&신선한연어(1.2kg)</p>
                <br /><br />
                <p className='price'><span>24,000</span>원</p>
                <br /><br />
                <div className='product_button'>
                  <button><img src={`${process.env.PUBLIC_URL}/images/icon_cart.png`} alt="cart" /></button>
                  <button><img src={`${process.env.PUBLIC_URL}/images/icon_wish.png`} alt="wish" /></button>
                  <button><img src={`${process.env.PUBLIC_URL}/images/icon_preview.png`} alt="preview" /></button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ShopSwiper;