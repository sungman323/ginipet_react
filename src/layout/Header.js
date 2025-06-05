import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visibleUp, setVisibleUp] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setVisibleUp(window.scrollY > 200);
    };    
    window.addEventListener('scroll', handleScroll);
    return() => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <header>
      <button onClick={()=>{setMenuOpen(true)}}><img src={`${process.env.PUBLIC_URL}/images/topIcon_burger.png`} alt='메뉴' /></button>
      <h1><Link to='/' title='메인'><img src={`${process.env.PUBLIC_URL}/images/logo_clr.png`} alt="메인로고" /></Link></h1>
      <button><img src={`${process.env.PUBLIC_URL}/images/topIcon_cart.png`} alt='장바구니' /></button>

      <nav className='navi' style={{left:menuOpen?'0%':'-100%'}}>
      <button className='close_btn' onClick={()=>{setMenuOpen(false)}}>
        <img src={`${process.env.PUBLIC_URL}/images/btn_close.png`} alt="Close" />
      </button>

      <ul className='gnb'>
        <li><Link to='/' title='지니펫 쇼핑몰' onClick={()=>{setMenuOpen(false)}}>지니펫 쇼핑몰</Link></li>
        <li><Link to='/intro' title='브랜드 소개' onClick={()=>{setMenuOpen(false)}}>브랜드 소개</Link></li>
        <li><Link to='/info' title='반려견 정보' onClick={()=>{setMenuOpen(false)}}>반려견 정보</Link></li>
        <li><Link to='/event' title='이벤트' onClick={()=>{setMenuOpen(false)}}>이벤트</Link></li>
        <li><Link to='/customer' title='고객지원' onClick={()=>{setMenuOpen(false)}}>고객지원</Link></li>
      </ul>

      <ul className='form_navi'>
        <li><Link to='/login' title='로그인' onClick={()=>{setMenuOpen(false)}}>로그인</Link></li>
        <li><Link to='/join' title='회원가입' onClick={()=>{setMenuOpen(false)}}>회원가입</Link></li>
        <li><Link to='/order' title='주문조회' onClick={()=>{setMenuOpen(false)}}>주문조회</Link></li>
        <li><Link to='/cart' title='장바구니' onClick={()=>{setMenuOpen(false)}}>장바구니</Link></li>
      </ul>
    </nav>

    {visibleUp && (
      <button className='top_btn' onClick={scrollTop}><FontAwesomeIcon icon={faAngleUp} /></button>
    )}
    </header>
  );
}

export default Header;