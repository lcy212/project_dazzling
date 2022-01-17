import React from 'react';
import '../style/product/ProductBox.scss';

export default function Product(){
  return (
    <div id="productBox">
      <div className="product_inner">

        <div className="title_area">
          <h2>제품소개</h2>
          <p>다즐링 잡화점에서 판매하는 제품을 소개드립니다.</p>
          <p>스토어로 이동하여 구매 가능합니다.</p>
        </div>

        <div className="product_area">
          <p>총 00개의 제품이 있습니다.</p>
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
            <li>
              <a href="#">
                <div className="img_part"><span className="blind">상품이름_5</span></div>
                <dl>
                  <dt>상품명</dt>
                  <dd>#키워드 #키워드</dd>
                </dl>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img_part"><span className="blind">상품이름_6</span></div>
                <dl>
                  <dt>상품명</dt>
                  <dd>#키워드 #키워드</dd>
                </dl>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img_part"><span className="blind">상품이름_7</span></div>
                <dl>
                  <dt>상품명</dt>
                  <dd>#키워드 #키워드</dd>
                </dl>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img_part"><span className="blind">상품이름_8</span></div>
                <dl>
                  <dt>상품명</dt>
                  <dd>#키워드 #키워드</dd>
                </dl>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img_part"><span className="blind">상품이름_9</span></div>
                <dl>
                  <dt>상품명</dt>
                  <dd>#키워드 #키워드</dd>
                </dl>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img_part"><span className="blind">상품이름_10</span></div>
                <dl>
                  <dt>상품명</dt>
                  <dd>#키워드 #키워드</dd>
                </dl>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img_part"><span className="blind">상품이름_11</span></div>
                <dl>
                  <dt>상품명</dt>
                  <dd>#키워드 #키워드</dd>
                </dl>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="img_part"><span className="blind">상품이름_12</span></div>
                <dl>
                  <dt>상품명</dt>
                  <dd>#키워드 #키워드</dd>
                </dl>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}