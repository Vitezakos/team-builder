import Top from "../icons/Position_Plat-Top.png";
import Jungle from "../icons/Position_Plat-Jungle.png";
import Mid from "../icons/Position_Plat-Mid.png";
import Bot from "../icons/Position_Plat-Bot.png";
import Support from "../icons/Position_Plat-Support.png";
import { FillIcon } from "../../public/icons/Fillsvg";
import "./Sorting.css";
import { topLane, jungle, midLane, adc, support } from "./utilities/consts";

function Sorting() {
  const btn = document.getElementsByClassName("btn-container");

  const showAllChamps = () => {
    for (let i = 0; i < btn.length; i++) {
      btn[i].classList.remove("hidden");
    }
  };

  const handleLaneSelection = (lane: string[]) => {
    for (let i = 0; i < btn.length; i++) {
      btn[i].classList.remove("hidden");
      if (!lane.includes(btn[i].children[0].className)) {
        btn[i].classList.toggle("hidden");
      }
    }
  };

  return (
    <div className="lane-selection">
      <ul className="lane-icons">
        <li>
          <img
            className="sorting-img"
            onClick={() => handleLaneSelection(topLane)}
            src={Top}
          />
        </li>
        <li>
          <img
            className="sorting-img"
            onClick={() => handleLaneSelection(jungle)}
            src={Jungle}
          />
        </li>
        <li>
          <img
            className="sorting-img"
            onClick={() => handleLaneSelection(midLane)}
            src={Mid}
          />
        </li>
        <li>
          <img
            className="sorting-img"
            onClick={() => handleLaneSelection(adc)}
            src={Bot}
          />
        </li>
        <li>
          <img
            className="sorting-img"
            onClick={() => handleLaneSelection(support)}
            src={Support}
          />
        </li>
        <li>
          <div className="all-champs" onClick={showAllChamps}>
            <FillIcon />
          </div>
        </li>
      </ul>
    </div>
  );
}
export { Sorting };
