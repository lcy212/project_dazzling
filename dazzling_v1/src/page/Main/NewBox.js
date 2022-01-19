import '../../style/main/NewBox.scss';

export default function NewBox(){
  return (
    <article id="newBox">
      <div className="new_inner">
        <h2>신상품</h2>
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