import React, { useState } from 'react';
import '../../style/main/ViewBox.scss';

export default function ViewBox(){

  const listData = ["view_01", "view_02", "view_03"];
  const [num, setNum] = useState(0);
  const addClass = (i) => {
    const ON = (i === num) ? 'on' : '';
    return ON;
  }

  return (
    <section id="viewBox">

      <div className="btn_area">
        <button type="button" className="next" onClick={() => {setNum(num >= 2 ? 0 : num + 1)}}>
          <img alt="next" src="img/next.png" />
        </button>
        <button type="button" className="prev" onClick={() => {setNum(num <= 0 ? 2 : num - 1)}}>
          <img alt="prev" src="img/prev.png" />
        </button>
      </div>

      <div className="view_area">
      <ul>
          {listData.map( (list, idx) => <li className={addClass(idx)} key={idx}>{list}</li>)}
        </ul>
      </div>

    </section>
  )
}