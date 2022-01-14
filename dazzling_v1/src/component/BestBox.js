import '../style/main/BestBox.scss';

export default function BestBox(){
  return (
    <article id="bestBox">
      <div className="best_inner">
        <h2>인기상품</h2>
        <div className="product_area">
          <ul>
            <li>
              <a href="#">
                <div className="img_part"><span className="blind">상품이름_1</span></div>
                <dl>
                  <dt>상품명</dt>
                  <dd>#키워드 #키워드</dd>
                </dl>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img_part"><span className="blind">상품이름_2</span></div>
                <dl>
                  <dt>상품명</dt>
                  <dd>#키워드 #키워드</dd>
                </dl>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img_part"><span className="blind">상품이름_3</span></div>
                <dl>
                  <dt>상품명</dt>
                  <dd>#키워드 #키워드</dd>
                </dl>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img_part"><span className="blind">상품이름_4</span></div>
                <dl>
                  <dt>상품명</dt>
                  <dd>#키워드 #키워드</dd>
                </dl>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}