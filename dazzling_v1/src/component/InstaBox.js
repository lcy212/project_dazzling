import '../style/main/InstaBox.scss';

export default function InstaBox(){
  return (
    <section id="instaBox">
      <div className="insta_inner">
        <h2>인스타그램</h2>
        <div className="content_area">
          <ul>
            <li><a href="#"><span className="blind">인스타_1</span></a></li>
            <li><a href="#"><span className="blind">인스타_2</span></a></li>
            <li><a href="#"><span className="blind">인스타_3</span></a></li>
            <li><a href="#"><span className="blind">인스타_4</span></a></li>
            <li><a href="#"><span className="blind">인스타_5</span></a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}