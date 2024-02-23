import { useContext, useEffect, useState } from "react";
import { playerContext } from "./utilities/useContext";
import { TempData } from "./utilities/consts";

interface ProfileName {
  name?: string;
  tagLine?: string;
}

interface Participant {
  puuid: string;
}

const useProfileState = () => {
  const apiKey = "RGAPI-041b2831-67db-4d5e-a42f-c2d30772facb";
  const [currentGames, setCurrentGames] = useState<TempData[]>([]);
  const [currentNameAndTagLine, setCurrentNameAndTagLine] =
    useState<ProfileName>({ name: "", tagLine: "" });
  const [iconIdAndSummonerLevel, setIconIdAndSummonerLevel] = useState({
    icon: 10,
    level: 0,
  });
  const { inputName } = useContext(playerContext);
  const { location } = useContext(playerContext);

  useEffect(() => {
    const [riotName, riotTagLine] = inputName.split("#");
    let riotAccountLink = `/riot-api/riot/account/v1/accounts/by-riot-id/${riotName}/${riotTagLine}?api_key=${apiKey}`;
    if (location === "stage") {
      handleCurrentGames(riotAccountLink);
    } else {
      handleProductionCall(riotName, riotTagLine);
    }
  }, [inputName]);

  const handleCurrentGames = async (riotApiCall: string) => {
    const result = (await fetchData(riotApiCall)) as Array<TempData>;
    setCurrentGames(result);
  };

  const handleProductionCall = async (name: string, tag: string) => {
    const result = (await fetchDataProd(name, tag)) as Array<TempData>;
    setCurrentGames(result);
  };

  const fetchData = async function data(argument: string) {
    try {
      const response = await fetch(argument);
      const data = await response.json();
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
      setCurrentNameAndTagLine({
        name: data.gameName,
        tagLine: data.tagLine + "",
      });
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
        let tempData = {} as TempData;
        tempData.gameMode = data.info.gameMode;

        const x = data.info.participants.filter(
          (participant: Participant) => participant.puuid == puuid
        );
        x.map((game: TempData) => {
          tempData.championName = game.championName.toLowerCase();
          tempData.kills = game.kills;
          tempData.deaths = game.deaths;
          tempData.assists = game.assists;
          if (game.win) {
            tempData.win = "Victory";
          } else {
            tempData.win = "Defeat";
          }
          gamesInfo.push(tempData);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    return gamesInfo;
  };

  const fetchDataProd = async (name: string, tag: string) => {
    const gamesInfo = [] as Array<{}>;
    try {
      const response = await fetch(
        `https://maryslair.com/riot-api?username=${name}&tag=${tag}`
      );
      const data = await response.json();
      const puuid = data.summonerData.puuid;
      setIconIdAndSummonerLevel({
        icon: data.summonerData.profileIconId,
        level: data.summonerData.summonerLevel,
      });
      setCurrentNameAndTagLine({
        name: data.summonerData.gameName,
        tagLine: data.summonerData.tagLine + "",
      });
      let tempGameData = {} as TempData;
      tempGameData.gameMode = data.gamesData.info.gameMode;
      for (let i = 0; i < data.gamesData.length; i++) {
        const x = data.gamesData.info.participants.filter(
          (participant: Participant) => participant.puuid == puuid
        );
        x.map((game: TempData) => {
          tempGameData.championName = game.championName.toLowerCase();
          tempGameData.kills = game.kills;
          tempGameData.deaths = game.deaths;
          tempGameData.assists = game.assists;
          if (game.win) {
            tempGameData.win = "Victory";
          } else {
            tempGameData.win = "Defeat";
          }
          gamesInfo.push(tempGameData);
        });
      }
      return gamesInfo;
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  return {
    currentGames,
    iconIdAndSummonerLevel,
    currentNameAndTagLine,
  };
};
export { useProfileState };
