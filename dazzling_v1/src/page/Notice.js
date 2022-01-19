import React from 'react';
import '../style/notice/NoticeBox.scss';

export default function Notice(){

  const noticeData = [
    { id:"5", title:"공지사항 제목을 입력하세요.", date:"2022년 00월 00일" },
    { id:"4", title:"공지사항 제목을 입력하세요.", date:"2022년 00월 00일" },
    { id:"3", title:"공지사항 제목을 입력하세요.", date:"2022년 00월 00일" },
    { id:"2", title:"공지사항 제목을 입력하세요.", date:"2022년 00월 00일" },
    { id:"1", title:"공지사항 제목을 입력하세요.", date:"2022년 00월 00일" },
  ]



  return (
    <article id="noticeBox">
      <div className="notice_inner">

        <div className="title_area">
          <h2>공지사항</h2>
          <p>다즐링 잡화점의 안내사항, 이벤트 및 공지사항을 안내드립니다.</p>
        </div>

        <div className="notice_area">
          <ul>
            {noticeData.map((data) => {
              return (
                <li key={data.id}>
                  <div className="num_part">{data.id}</div>
                  <a href="#">
                    <dl>
                      <dt>{data.title}</dt>
                      <dd>{data.date}</dd>
                    </dl>
                  </a>
                </li>
              )
            })}
          </ul>
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