import { useContext } from "react";
import "./MatchHistory.css";
import { TempData } from "./utilities/consts";
import { playerContext } from "./utilities/useContext";

const dummyGameData = {
  championName: "Ahri",
  kills: 8,
  deaths: 2,
  assists: 3,
  win: "victory",
  gameMode: "ARAM",
};

function MatchHistory({ gameDataDefault }: { gameDataDefault?: TempData }) {
  const { location } = useContext(playerContext);
  const game = gameDataDefault ? gameDataDefault : dummyGameData;
  let kda = "";

  if (game.deaths === 0) {
    kda = "Perfect";
  } else {
    kda = ((game.kills + game.assists) / game.deaths).toFixed(2);
  }

  return (
    <div className="match">
      <div className="image-container">
        <img
          className="match-img"
          src={
            location === "stage"
              ? `../public/icons/${game.championName}.png`
              : `/team-builder/icons/${game.championName}.png`
          }
        />
      </div>
      <div className="match-stats">
        <div className="kda">
          <div className="real-kda">{`${game.kills} / ${game.deaths} / ${game.assists}`}</div>
          <div className="avg-kda">{kda} KDA</div>
        </div>
        <div className="result">{game.win}</div>
        <div className="info">{game.gameMode}</div>
      </div>
    </div>
  );
}

export { MatchHistory };
