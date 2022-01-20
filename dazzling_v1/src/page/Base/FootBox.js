import '../../style/FootBox.scss';
import { NavLink } from 'react-router-dom';

export default function FootBox(){
  return (
    <footer id="footBox">
      <div className="foot_inner">
        <nav className="gnb">
          <h2 className="blind">전체메뉴</h2>
          <ul>
            <li><NavLink path="Company" to="/Company">회사소개</NavLink></li>
            <li><NavLink path="Product" to="/Product">제품소개</NavLink></li>
            <li><NavLink path="Notice" to="/Notice">공지사항</NavLink></li>
            <li><a href="#">스 토 어</a></li>
          </ul>
        </nav>
        <address>
          <p>상호명 : 다즐링 잡화점</p>
          <p>연락처 : 000-0000-0000</p>
          <p>이메일 : aaaaaa@naver.com</p>
        </address>
      </div>
    </footer>
  )
}