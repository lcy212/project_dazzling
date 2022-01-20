import '../../style/HeadBox.scss';
import { NavLink } from 'react-router-dom';

export default function HeadBox(){
  return (
    <header id="headBox">
      <div className="head_inner">
        <h1><NavLink to="/">다즐링 잡화점</NavLink></h1>
        <nav className="gnb">
          <h2 className="blind">전체메뉴</h2>
          <ul>
            <li><NavLink path="Company" to="/Company">회사소개</NavLink></li>
            <li><NavLink path="Product" to="/Product">제품소개</NavLink></li>
            <li><NavLink path="Notice" to="/Notice">공지사항</NavLink></li>
            <li><a href="#">스 토 어</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

