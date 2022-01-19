import React from 'react';
import '../style/product/ProductBox.scss';

export default function Product(){

  const productData = [
    { id:"12", title:"제품명_12", keyword:"#키워드 #키워드" },
    { id:"11", title:"제품명_11", keyword:"#키워드 #키워드" },
    { id:"10", title:"제품명_10", keyword:"#키워드 #키워드" },
    { id:"9", title:"제품명_9", keyword:"#키워드 #키워드" },
    { id:"8", title:"제품명_8", keyword:"#키워드 #키워드" },
    { id:"7", title:"제품명_7", keyword:"#키워드 #키워드" },
    { id:"6", title:"제품명_6", keyword:"#키워드 #키워드" },
    { id:"5", title:"제품명_5", keyword:"#키워드 #키워드" },
    { id:"4", title:"제품명_4", keyword:"#키워드 #키워드" },
    { id:"3", title:"제품명_3", keyword:"#키워드 #키워드" },
    { id:"2", title:"제품명_2", keyword:"#키워드 #키워드" },
    { id:"1", title:"제품명_1", keyword:"#키워드 #키워드" },
  ]

  return (
    <article id="productBox">
      <div className="product_inner">

        <div className="title_area">
          <h2>제품소개</h2>
          <p>다즐링 잡화점에서 판매하는 제품을 소개드립니다.</p>
          <p>스토어로 이동하여 구매 가능합니다.</p>
        </div>

        <div className="product_area">
          <p>총 00개의 제품이 있습니다.</p>
          <ul>
            {
              productData.map((data) => {
                return (
                  <li key={data.id}>
                    <a href="#">
                      <div className="img_part"><span className="blind">{data.title}</span></div>
                      <dl>
                        <dt>{data.title}</dt>
                        <dd>{data.keyword}</dd>
                      </dl>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>

      </div>
    </article>
  )
}