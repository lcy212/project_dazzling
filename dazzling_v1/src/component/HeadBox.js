import '../style/HeadBox.scss';

export default function HeadBox(){
  return (
    <header id="headBox">
      <div className="head_inner">
        <h1>다즐링 잡화점</h1>
        <nav className="gnb">
          <h2 className="blind">전체메뉴</h2>
          <ul>
            <li>회사소개</li>
            <li>전체상품</li>
            <li>공지사항</li>
            <li><a href="#">스 토 어</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

