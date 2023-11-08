import "./TeamBuilderContainer.css";
import Ahri from "../icons/ahri.png";
import Ez from "../icons/ez.png";
import Kindred from "../icons/Kindred.png";
import Yuumi from "../icons/yuumi.png";
import Ksante from "../icons/Ksante.png";
import Top from "../icons/Position_Plat-Top.png";
import Jungle from "../icons/Position_Plat-Jungle.png";
import Mid from "../icons/Position_Plat-Mid.png";
import Bot from "../icons/Position_Plat-Bot.png";
import Support from "../icons/Position_Plat-Support.png";
import Fav from "../icons/favourites.png";

function TeamBuilderContainer() {
  return (
    <div className="teamBuilderContainer">
      <div className="teamcompWrapper">
        <div className="top">
          <div>Your teamcomp:</div>
          <div>
            <ul className="teamIcons">
              <li>
                <img src={Ahri} />
              </li>
              <li>
                <img src={Ez} />
              </li>
              <li>
                <img src={Kindred} />
              </li>
              <li>
                <img src={Yuumi} />
              </li>
              <li>
                <img src={Ksante} />
              </li>
            </ul>
          </div>
        </div>
        <div>Bar placeholder</div>
      </div>
      <div className="recommendationsWrapper">Recommendations:</div>
      <div className="laneSelection">
        <ul className="laneIcons">
          <li>
            <img src={Top} />
          </li>
          <li>
            <img src={Jungle} />
          </li>
          <li>
            <img src={Mid} />
          </li>
          <li>
            <img src={Bot} />
          </li>
          <li>
            <img src={Support} />
          </li>
          <li>
            <img src={Fav} />
          </li>
        </ul>
      </div>
      <div className="champList">
        <ul>Every champion here</ul>
      </div>
    </div>
  );
}

export { TeamBuilderContainer };
