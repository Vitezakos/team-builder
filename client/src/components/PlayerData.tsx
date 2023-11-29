import "./PlayerData.css";
import Ksante from "../icons/ksante.png";
import { useProfileState } from "./useProfileState";

function PlayerData() {
  const {
    leagueName,
    summonerLevel,
    iconId,
    gameMode,
    championName,
    kills,
    deaths,
    assists,
    win,
    hashtag,
  } = useProfileState();
  let summonerIcon = `https://ddragon.leagueoflegends.com/cdn/10.18.1/img/profileicon/${iconId}.png`;

  return (
    <div className="player-container">
      <div className="summoner">
        <img src={summonerIcon} alt="" />
        <h1 className="summoner-name">{leagueName + "#" + hashtag}</h1>
        <h1 className="summoner-level">Lv. {summonerLevel}</h1>
      </div>
      <div className="match">
        <img src={`../src/icons/${championName}.png`} />
        <div className="kda">
          <div className="real-kda">{`${kills} / ${deaths} / ${assists}`}</div>
          <div className="avg-kda">
            {((kills + assists) / deaths).toFixed(2)} KDA
          </div>
        </div>
        <div className="result">{win}</div>
        <div className="info">{gameMode}</div>
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
