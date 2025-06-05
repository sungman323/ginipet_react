import React from 'react';
import MSwiper from './MSwiper';
import '../styles/main.css';
import ShopSwiper from './ShopSwiper';
import StoryInsta from './StoryInsta';

function Main(props) {
  return (
    <main>
      <MSwiper />
      <ShopSwiper />
      <StoryInsta />
    </main>
  );
}

export default Main;