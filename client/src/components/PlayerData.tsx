import "./PlayerData.css";
//import poroIcon from "../icons/3009.png";
import Ksante from "../icons/ksante.png";
//import { useState } from "react";

function PlayerData({ profileName }: any) {
  let riotName = profileName.split("#")[0];
  let riotTagLine = profileName.split("#")[1];
  console.log(riotName, riotTagLine);
  //const apiKey = "";
  // const [iconId, setIconId] = useState(0);
  //let accountLink = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${profileName}?api_key=RGAPI-${apiKey}`;
  let riotAccountLink = `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/NightOwl/8512?api_key=RGAPI-`;
  let summonerIcon = `https://ddragon.leagueoflegends.com/cdn/10.18.1/img/profileicon/0.png`;
  //const [summonerName, setSummonerName] = useState("");
  //const [summonerLevel, setSummonerLevel] = useState(0);
  async function data() {
    const main = await fetch(riotAccountLink, {
      method: "GET",
      headers: {
        "X-Requested-With": "XMLHttpRequest", // Add your custom headers here
      },
    });
    // .then((main) => {
    //   if (!main.ok) {
    //     throw new Error("Error");
    //   }
    //   return main.json();
    // });
    // const info = await main;
    const info = await main.json();
    console.log(info);
    //setIconId(info.profileIconId);
    //setSummonerName(info.name);
    //setSummonerLevel(info.summonerLevel);
  }
  data();
  console.log(/*iconId*/);
  console.log("playerdata was rendered");
  return (
    <div className="player-container">
      <div className="summoner">
        <img src={summonerIcon} alt="" />
        <h1 className="summoner-name">{/*summonerName*/}</h1>
        <h1 className="summoner-level">Lv. {/*summonerLevel*/}</h1>
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
