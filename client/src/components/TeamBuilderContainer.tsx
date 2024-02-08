import "./TeamBuilderContainer.css";
import { Champions } from "./Champions";
import { useEffect, useState } from "react";
import { TeamComp } from "./TeamComp";
import { Sorting } from "./Sorting";
import { Champs } from "./utilities/consts";

function TeamBuilderContainer() {
  const [objectOfChamps, setObjectOfChamps] = useState<Array<Champs>>([]);

  useEffect(() => {
    const fetchChampions = async () => {
      const response = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/13.23.1/data/en_US/champion.json`
      );
      const data = await response.json();
      const champs = data;
      const newObjectOfChamps = Object.values(champs.data).map(
        (champ: any) => ({
          name: champ.name as string,
        })
      );
      setObjectOfChamps(newObjectOfChamps);
    };
    try {
      fetchChampions();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const handleChampions = () => {
    return objectOfChamps.map((champion, index) => (
      <Champions key={index} champ={champion}></Champions>
    ));
  };

  return (
    <div className="teambuilder-container">
      <TeamComp></TeamComp>
      <Sorting></Sorting>
      <div className="champ-list">{handleChampions()}</div>
      <div className="footer"></div>
    </div>
  );
}

export { TeamBuilderContainer };
