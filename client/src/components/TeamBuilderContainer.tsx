import "./TeamBuilderContainer.css";
import Ahri from "../icons/ahri.png";
import Ez from "../icons/ezreal.png";
import Kindred from "../icons/Kindred.png";
import Yuumi from "../icons/yuumi.png";
import Ksante from "../icons/K'sante.png";
import Top from "../icons/Position_Plat-Top.png";
import Jungle from "../icons/Position_Plat-Jungle.png";
import Mid from "../icons/Position_Plat-Mid.png";
import Bot from "../icons/Position_Plat-Bot.png";
import Support from "../icons/Position_Plat-Support.png";
import Fav from "../icons/favourites.png";
import { Champions } from "./Champions";
import { useEffect, useState } from "react";

function TeamBuilderContainer() {
  // 164 champs total
  const [objectOfChamps, setObjectOfChamps] = useState(
    {} as Record<string, Record<string, Array<string> | string>>
  );
  useEffect(() => {
    const fetchChampions = async () => {
      const response = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/13.23.1/data/en_US/champion.json`
      );
      const data = await response.json();
      const champs = data;
      const keys = Object.keys(champs.data);
      const newObjectOfChamps = {} as any;
      for (let i = 0; i < keys.length; i++) {
        newObjectOfChamps[`Champ-${i}`] = {
          name: champs.data[keys[i]].name,
          lanes: [],
        };
      }
      setObjectOfChamps(newObjectOfChamps);
    };
    fetchChampions();
  }, []);
  console.log(objectOfChamps);
  console.log("help:", Object.keys(objectOfChamps));
  console.log(objectOfChamps["Champ-1"]);

  const handleChampions = () => {
    const allChamps = [];
    for (let i = 0; i < Object.keys(objectOfChamps).length; i++) {
      allChamps.push(
        <Champions key={i} champ={objectOfChamps[`Champ-${i}`]}></Champions>
      );
    }
    return allChamps;
  };

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
        {handleChampions()}
      </div>
    </div>
  );
}

export { TeamBuilderContainer };
