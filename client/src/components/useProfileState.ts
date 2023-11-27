import { useEffect, useState } from "react";

const useProfileState = () => {
  const [profileName, setprofileName] = useState("NiGHt oWL#8512");
  const [leagueName, setLeagueName] = useState("");
  const [puuid, setPuuid] = useState("");
  const [summonerLevel, setSummonerLevel] = useState(0);
  const [iconId, setIconId] = useState(0);
  const [matchId, setMatchId] = useState("");
  const [gameMode, setGameMode] = useState(""); // string
  const [championName, setChampionName] = useState(""); //championId, setChampionId maybe
  const [kills, setKills] = useState(0); //int
  const [deaths, setDeaths] = useState(0); //int
  const [assists, setAssists] = useState(0); //int
  const [win, setWin] = useState(""); //string

  const fetchData = async function data(argument: string) {
    try {
      const response = await fetch(argument);
      const data = await response.json();

      setPuuid(data.puuid);
      setLeagueName(data.gameName);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchSummonerData = async function summonerData(ar: string) {
    try {
      const response = await fetch(ar);
      const data = await response.json();

      setIconId(data.profileIconId);
      setSummonerLevel(data.summonerLevel);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchMatchHistory = async function handleMatchHistory(ar: string) {
    try {
      const response = await fetch(ar);
      const data = await response.json();

      setMatchId(data[0]);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const fetchSingleGame = async function handleSingleMatch(ar: string) {
    try {
      const response = await fetch(ar);
      const data = await response.json();
      setGameMode(data.info.gameMode); // HARAM
      for (let i = 0; i < data.info.participants.length; i++) {
        if (data.info.participants[i].puuid == puuid) {
          setChampionName(data.info.participants[i].championName); //.championId maybe
          setKills(data.info.participants[i].kills);
          setDeaths(data.info.participants[i].deaths);
          setAssists(data.info.participants[i].assists);
          if (data.info.participants[i].win) {
            setWin("Victory");
          } else {
            setWin("Defeat");
          }
        }
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  let riotName = profileName.split("#")[0];
  let riotTagLine = profileName.split("#")[1];
  const apiKey = "RGAPI-3f2ede33-cdbd-460b-badf-3e6677a7429d";

  let riotAccountLink = `/riot-api/riot/account/v1/accounts/by-riot-id/${riotName}/${riotTagLine}?api_key=${apiKey}`;

  useEffect(() => {
    let riotAccountLink2 = `/riot-api/riot/account/v1/accounts/by-riot-id/${
      profileName.split("#")[0]
    }/${profileName.split("#")[1]}?api_key=${apiKey}`;
    fetchData(riotAccountLink2);
    console.log("profilename changed");
  }, [profileName]);

  useEffect(() => {
    if (puuid == "") {
      return;
    }
    let puuidLink = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${apiKey}`;
    fetchSummonerData(puuidLink);
    let matchHistory = `/riot-api/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${apiKey}`;
    fetchMatchHistory(matchHistory);
  }, [puuid]);

  useEffect(() => {
    let singleMatch = `/riot-api/lol/match/v5/matches/${matchId}?api_key=${apiKey}`;
    fetchSingleGame(singleMatch);
  }, [matchId]);

  return {
    profileName,
    setprofileName,
    fetchData,
    leagueName,
    puuid,
    fetchSummonerData,
    summonerLevel,
    iconId,
    fetchMatchHistory,
    matchId,
    fetchSingleGame,
    gameMode,
    championName,
    kills,
    deaths,
    assists,
    win,
    riotTagLine,
  };
};
export { useProfileState };

//custom hook
