import '../style/FootBox.scss';

export default function FootBox(){
  return (
    <footer id="footBox">
      <div className="foot_inner">
        <nav className="gnb">
          <h2 className="blind">전체메뉴</h2>
          <ul>
            <li>회사소개</li>
            <li>전체상품</li>
            <li>공지사항</li>
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