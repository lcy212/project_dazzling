import '../style/main/ViewBox.scss';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ViewBox(){
  return (
    <section id="viewBox">
      <div className="btn_area">
       
        <button type="button" className="next">
          <img alt="next" src="img/next.png" />
        </button>
        <button type="button" className="prev">
          <img alt="prev" src="img/prev.png" />
        </button>
      </div>
    </section>
  )
}