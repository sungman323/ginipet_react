import React from 'react';

function StoryInsta(props) {
  return (
    <>
      <div className='Story'>
        <img src={`${process.env.PUBLIC_URL}/images/banner_story_icon.png`} alt="스토리아이콘" />
        <h2>지니펫 <span>스토리</span></h2>
        <p>소중한 반려견을 위한</p>
        <p>지니펫의 다양한 소식을 만나보세요!</p>
        <button>자세히보기</button>
        <img src={`${process.env.PUBLIC_URL}/images/banner_story_img.png`} alt="스토리이미지" className='StoryImage' />
      </div>
      <div className='Insta'>
        <div className='insta_title'>
          <img src={`${process.env.PUBLIC_URL}/images/title_instar_icon.png`} alt="스토리아이콘" />
          <h2>지니펫 <span>in 스타</span></h2>
        </div>
        <p>지니펫의 다양한 소식과 정보를 만나보세요</p>
        <div className='sns'>
          <img src={`${process.env.PUBLIC_URL}/images/snsTitle_1.jpg`} alt="최근게시물" />
          <img src={`${process.env.PUBLIC_URL}/images/1672300757689.jpg`} alt="최근게시물내용" />
        </div>
        <div className='sns'>
          <img src={`${process.env.PUBLIC_URL}/images/snsTitle_2.jpg`} alt="최근게시물" />
          <img src={`${process.env.PUBLIC_URL}/images/1692944142605.jpg`} alt="최근게시물내용" />
        </div>

      </div>
    </>
  );
}

export default StoryInsta;