import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../style/product/ProductBox.scss';

export default function Product(){

  const productData = './data/productData.json';
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    (async () => {
      const rel = await axios.get(productData);
      setProductList(rel.data);
    })()
  }, [])

  const filterData = productList.filter((product, idx) => idx < 13);

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
              filterData.map((product, idx) => 
                <li key={idx}>
                  <a href="#">
                    <div className="img_part"><span className="blind">{product.title}</span></div>
                    <dl>
                      <dt>{product.title}</dt>
                      <dd>{product.keyword}</dd>
                    </dl>
                  </a>
                </li>
              )
            }
          </ul>
        </div>

        <div className="page_area">
          <ul>
            <li><a href="#">&lt;&lt;</a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">&gt;&gt;</a></li>
          </ul>
        </div>

      </div>
    </article>
  )
}