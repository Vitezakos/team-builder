import "./PlayerData.css";
import { useProfileState } from "./useProfileState";
import { MatchHistory } from "./MatchHistory";

function PlayerData() {
  const { currentGames, iconIdAndSummonerLevel, currentNameAndTagLine } =
    useProfileState();
  let summonerIcon = `https://ddragon.leagueoflegends.com/cdn/10.18.1/img/profileicon/${iconIdAndSummonerLevel.icon}.png`;

  const handleMatchHistory = () => {
    return currentGames.map((gameData, index) => (
      <MatchHistory key={index} gameDataDefault={gameData}></MatchHistory>
    ));
  };

  return (
    <div className="player-container">
      <div className="summoner">
        <img className="playerdata-img" src={summonerIcon} alt="" />
        <h1 className="summoner-name">
          {currentNameAndTagLine.name + "#" + currentNameAndTagLine.tagLine}
        </h1>
        <h1 className="summoner-level">Lv. {iconIdAndSummonerLevel.level}</h1>
      </div>
      <div className="matches">{handleMatchHistory()}</div>
    </div>
  );
}

export { PlayerData };
