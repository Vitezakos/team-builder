import "./PlayerData.css";
//import poroIcon from "../icons/3009.png";
import Ksante from "../icons/ksante.png";
import { useEffect, useState } from "react";

function PlayerData({ profileName }: any) {
  let riotName = profileName.split("#")[0];
  let riotTagLine = profileName.split("#")[1];
  console.log(riotName, riotTagLine);
  const apiKey = "4beb3645-a899-48b7-8fbd-c12c81b3ff2b";
  const [iconId, setIconId] = useState(0);
  let riotAccountLink = `/riot-api/riot/account/v1/accounts/by-riot-id/${riotName}/${riotTagLine}?api_key=RGAPI-${apiKey}`;
  let summonerIcon = `https://ddragon.leagueoflegends.com/cdn/10.18.1/img/profileicon/${iconId}.png`;
  const [leagueName, setLeagueName] = useState("");
  const [summonerLevel, setSummonerLevel] = useState(0);
  let [puuid, setPuuid] = useState("");
  async function data() {
    try {
      const response = await fetch(riotAccountLink);
      const data = await response.json();

      console.log("Data:", data);
      setPuuid(data.puuid);
      setLeagueName(data.gameName);
      // Do something with the data
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle errors appropriately
    }
  }
  data();

  async function summonerData(ar: string) {
    try {
      const response = await fetch(ar);
      const data = await response.json();

      console.log("summonerData:", data);
      setIconId(data.profileIconId);
      setSummonerLevel(data.summonerLevel);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    if (!(puuid == "")) {
      let puuidLink = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=RGAPI-${apiKey}`;
      summonerData(puuidLink);
    }
  });

  console.log("playerdata was rendered");
  return (
    <div className="player-container">
      <div className="summoner">
        <img src={summonerIcon} alt="" />
        <h1 className="summoner-name">{leagueName + "#" + riotTagLine}</h1>
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
