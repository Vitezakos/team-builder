import { useContext, useEffect, useState } from "react";
import { playerContext } from "./utilities/useContext";

interface ProfileName {
  name?: string;
  tagLine?: string;
}

const useProfileState = () => {
  const apiKey = "RGAPI-14f1cc28-69c1-44af-994d-60916d87d0dc";
  const [currentGames, setCurrentGames] = useState([] as Array<{}>);
  const [currentNameAndTagLine, setCurrentNameAndTagLine] = useState(
    {} as ProfileName
  );
  const [iconIdAndSummonerLevel, setIconIdAndSummonerLevel] = useState({
    icon: 10,
    level: 0,
  });
  const { inputName } = useContext(playerContext);

  useEffect(() => {
    let riotName = inputName.split("#")[0];
    let riotTagLine = inputName.split("#")[1];
    let riotAccountLink = `/riot-api/riot/account/v1/accounts/by-riot-id/${riotName}/${riotTagLine}?api_key=${apiKey}`;
    handleCurrentGames(riotAccountLink);
  }, [inputName]);

  const handleCurrentGames = async (riotApiCall: string) => {
    const result: any = await fetchData(riotApiCall);
    setCurrentGames(result);
  };

  const fetchData = async function data(argument: string) {
    try {
      const response = await fetch(argument);
      const data = await response.json();
      setCurrentNameAndTagLine({
        name: data.gameName,
        tagLine: data.tagLine + "",
      });
      const currentPuuid = data.puuid;
      const puuidCall = `/riot-api/lol/match/v5/matches/by-puuid/${currentPuuid}/ids?start=0&count=20&api_key=${apiKey}`;
      const puuidResponse = await fetch(puuidCall);
      const puuidData = await puuidResponse.json();
      const currentMatchHistory = puuidData;
      const currentGames = await handleLeagueGames(
        currentMatchHistory,
        currentPuuid
      );
      const summonerInfoCall = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${currentPuuid}?api_key=${apiKey}`;
      const summonerInfoResponse = await fetch(summonerInfoCall);
      const summonerInfoData = await summonerInfoResponse.json();
      setIconIdAndSummonerLevel({
        icon: summonerInfoData.profileIconId,
        level: summonerInfoData.summonerLevel,
      });
      return currentGames;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleLeagueGames = async (gameIds: Array<{}>, puuid: string) => {
    const gamesInfo = [] as Array<{}>;
    for (let i = 0; i < 10; i++) {
      try {
        const response = await fetch(
          `/riot-api/lol/match/v5/matches/${gameIds[i]}?api_key=${apiKey}`
        );
        const data = await response.json();
        let tempData = {} as any;
        tempData.gameMode = data.info.gameMode;
        for (let j = 0; j < data.info.participants.length; j++) {
          if (data.info.participants[j].puuid == puuid) {
            tempData.championName =
              data.info.participants[j].championName.toLowerCase();
            tempData.kills = data.info.participants[j].kills;
            tempData.deaths = data.info.participants[j].deaths;
            tempData.assists = data.info.participants[j].assists;
            if (data.info.participants[j].win) {
              tempData.win = "Victory";
            } else {
              tempData.win = "Defeat";
            }
            gamesInfo.push(tempData);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    return gamesInfo;
  };

  return {
    currentGames,
    iconIdAndSummonerLevel,
    currentNameAndTagLine,
  };
};
export { useProfileState };

//custom hook
