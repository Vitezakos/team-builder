import "./TeamBuilderContainer.css";
import { Champions } from "./Champions";
import { useEffect, useState } from "react";
import { TeamComp } from "./TeamComp";
import { Sorting } from "./Sorting";
import { Champs } from "./utilities/consts";

function TeamBuilderContainer() {
  const [objectOfChamps, setObjectOfChamps] = useState({} as Array<Champs>);

  useEffect(() => {
    const fetchChampions = async () => {
      const response = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/13.23.1/data/en_US/champion.json`
      );
      const data = await response.json();
      const champs = data;
      const keys = Object.keys(champs.data);
      const newObjectOfChamps = [];
      for (let i = 0; i < keys.length; i++) {
        newObjectOfChamps.push({
          name: champs.data[keys[i]].name as string,
        });
      }
      setObjectOfChamps(newObjectOfChamps);
    };
    fetchChampions();
  }, []);

  const handleChampions = () => {
    const allChamps = [];
    for (let i = 0; i < Object.keys(objectOfChamps).length; i++) {
      allChamps.push(<Champions key={i} champ={objectOfChamps[i]}></Champions>);
    }
    return allChamps;
  };

  return (
    <div className="teambuilder-container">
      <TeamComp></TeamComp>
      <Sorting></Sorting>
      <div className="champ-list">{handleChampions()}</div>
    </div>
  );
}

export { TeamBuilderContainer };
