import "./PlayerData.css";
//import poroIcon from "../icons/3009.png";
import Ksante from "../icons/ksante.png";
import { useState } from "react";

function PlayerData({ profileName }: any) {
  console.log(profileName);
  const apiKey = "";
  let name = profileName;
  const [iconId, setIconId] = useState(0);
  let accountLink = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=RGAPI-${apiKey}`;
  let summonerIcon = `https://ddragon.leagueoflegends.com/cdn/10.18.1/img/profileicon/${iconId}.png`;
  const [summonerName, setSummonerName] = useState("");
  const [summonerLevel, setSummonerLevel] = useState(0);
  async function data() {
    const main = await fetch(accountLink);
    // .then((main) => {
    //   if (!main.ok) {
    //     throw new Error("Error");
    //   }
    //   return main.json();
    // });
    // const info = await main;
    const info = await main.json();
    setIconId(info.profileIconId);
    setSummonerName(info.name);
    setSummonerLevel(info.summonerLevel);
    console.log(info);
  }
  data();
  console.log(iconId);
  console.log("playerdata was rendered");
  return (
    <div className="player-container">
      <div className="summoner">
        <img src={summonerIcon} alt="" />
        <h1 className="summoner-name">{summonerName}</h1>
        <h1 className="summoner-level">Lv. {summonerLevel}</h1>
      </div>
      <div className="match">
        <img src={Ksante} />
        <div className="kda">
          <div className="real-kda">1/52/13</div>
          <div className="avg-kda">0.27 Kda</div>
        </div>
        <div className="result">Victory</div>
        <div className="info">Normal Draft</div>
      </div>
      <div className="match">
        <img src={Ksante} />
        <div className="kda">
          <div className="real-kda">1/52/13</div>
          <div className="avg-kda">0.27 Kda</div>
        </div>
        <div className="result">Victory</div>
        <div className="info">Normal Draft</div>
      </div>
      <div className="match">
        <img src={Ksante} />
        <div className="kda">
          <div className="real-kda">1/52/13</div>
          <div className="avg-kda">0.27 Kda</div>
        </div>
        <div className="result">Victory</div>
        <div className="info">Normal Draft</div>
      </div>
      <div className="match">
        <img src={Ksante} />
        <div className="kda">
          <div className="real-kda">1/52/13</div>
          <div className="avg-kda">0.27 Kda</div>
        </div>
        <div className="result">Victory</div>
        <div className="info">Normal Draft</div>
      </div>
    </div>
  );
}

export { PlayerData };
