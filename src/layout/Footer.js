import React from 'react';

function Footer(props) {
  return (
    <footer>
      <div className='f_wrap'>
        <nav>
          <ul>
            <li>개인정보처리방침</li>
            <li>쇼핑몰약관</li>
          </ul>
        </nav>
        <hr />
        <h3>고객센터</h3>
        <p><span>02-2166-7770</span> 평일 10:00~17:00 (점심: 12:00~13:00)</p>        
      </div>
    </footer>
  );
}

export default Footer;