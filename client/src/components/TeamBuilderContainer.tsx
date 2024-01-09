import "./TeamBuilderContainer.css";
import { Champions } from "./Champions";
import { useEffect, useState } from "react";
import { TeamComp } from "./TeamComp";
import { Sorting } from "./Sorting";

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
    <div className="teambuilder-container">
      <TeamComp></TeamComp>
      <Sorting></Sorting>
      <div className="champ-list">{handleChampions()}</div>
    </div>
  );
}

export { TeamBuilderContainer };
