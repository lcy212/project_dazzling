import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import '../style/notice/NoticeBox.scss';

export default function Notice(){

  const noticeData = './data/noticeData.json';
  const [noticeList, setNoticeList] = useState([]);
  const nav = useNavigate(); // link의 to같은 기능
  const {linkTo} = useParams(); // 인식하는 기능

  useEffect(() => {
    (async () => {
      const rel = await axios.get(noticeData);
      setNoticeList(rel.data);
    })()
  }, []);

  useEffect(() => {
    console.log(linkTo)
  }, [linkTo])

  const filterData = noticeList.filter((notice, idx) => idx < 6);


  return (
    <article id="noticeBox">
      <div className="notice_inner">

        <div className="title_area">
          <h2>공지사항</h2>
          <p>다즐링 잡화점의 공지사항 및 이벤트를 안내드립니다.</p>
        </div>

        <div className="notice_area">
          <ul>
            {filterData.map((notice, idx) => 
              <li key={idx}>
                <div className="num_part">{notice.id}</div>
                <div className="title_part">
                  {/* <a href="#" onClick={() => {nav(notice.title)}}>
                    <dl>
                      <dt>{notice.title}</dt>
                      <dd>{notice.date}</dd>
                    </dl>
                  </a> */}
                  <button type="button" onClick={() => {nav(notice.titleId)}}>
                    <dl>
                      <dt>{notice.title}</dt>
                      <dd>{notice.date}</dd>
                    </dl>
                  </button>
                </div>
                <div className="category_part">
                  <p>{notice.category}</p>
                </div>
              </li>
            )}
          </ul>
          <Outlet />
        </div>
        
        <div className="page_area">
          <ul>
            <li><a href="#">&lt;&lt;</a></li>
            <li><a href="#">1</a></li>
            <li><a href="#">&gt;&gt;</a></li>
          </ul>
        </div>

        <div className="img_area">
          <div className="img_top"></div>
          <div className="img_bottom"></div>
        </div>

      </div>
    </article>
  )
}