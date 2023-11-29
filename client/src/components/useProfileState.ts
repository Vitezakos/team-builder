import { useContext, useEffect, useRef, useState } from "react";
import { testContext } from "./utilities/useContext";

const useProfileState = () => {
  const apiKey = "";
  const [profileName, setprofileName] = useState("");
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
  const [hashtag, setHashtag] = useState("");
  const [everyGameId, setEveryGameId] = useState([] as string[]);
  const [everyGame, setEveryGame] = useState([] as any[][]);
  const { test } = useContext(testContext);

  const fetchData = async function data(argument: string) {
    try {
      const response = await fetch(argument);
      const data = await response.json();

      setPuuid(data.puuid);
      //return data.gameName;
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
      setEveryGameId(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const fetchAllGames = async function handleAllGames(ar: string) {
    try {
      const response = await fetch(ar);
      const data = await response.json();

      let gameToParse = data;
      gameToParse = {};
      gameToParse.gameMode = data.info.gameMode;
      for (let i = 0; i < data.info.participants.length; i++) {
        if (data.info.participants[i].puuid == puuid) {
          gameToParse.championName =
            data.info.participants[i].championName.toLowerCase();
          gameToParse.kills = data.info.participants[i].kills;
          gameToParse.deaths = data.info.participants[i].deaths;
          gameToParse.assists = data.info.participants[i].assists;
          if (data.info.participants[i].win) {
            gameToParse.win = "Victory";
          } else {
            gameToParse.win = "Def  eat";
          }
        }
        setEveryGame((value) => {
          return [...value, gameToParse];
        });
        console.log(everyGame);
      }
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
          setChampionName(data.info.participants[i].championName.toLowerCase()); //.championId maybe
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

  const isInitialMount = useRef(true);

  // useEffect(() => {
  //   if (isInitialMount.current) {
  //     isInitialMount.current = false;
  //   }
  //   let riotName = test.split("#")[0];
  //   let riotTagLine = test.split("#")[1];
  //   setHashtag(riotTagLine);
  //   let riotAccountLink = `/riot-api/riot/account/v1/accounts/by-riot-id/${riotName}/${riotTagLine}?api_key=${apiKey}`;
  //   fetchData(riotAccountLink);
  // }, [test]);

  const handleNameChange = (test: string) => {
    console.log("name changed");
    let riotName = test.split("#")[0];
    let riotTagLine = test.split("#")[1];
    setHashtag(riotTagLine);
    let riotAccountLink = `/riot-api/riot/account/v1/accounts/by-riot-id/${riotName}/${riotTagLine}?api_key=${apiKey}`;
    fetchData(riotAccountLink);
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (puuid == "") {
      return;
    }
    let puuidLink = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${apiKey}`;
    fetchSummonerData(puuidLink);
    let matchHistory = `/riot-api/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${apiKey}`;
    fetchMatchHistory(matchHistory);
  }, [puuid]);

  // useEffect(() => {
  //   if (isInitialMount.current) {
  //     isInitialMount.current = false;
  //   }
  //   if (matchId == "") {
  //     return;
  //   }
  //   let singleMatch = `/riot-api/lol/match/v5/matches/${matchId}?api_key=${apiKey}`;
  //   fetchSingleGame(singleMatch);
  // }, [puuid, matchId]);

  // useEffect(() => {
  //   if (isInitialMount.current) {
  //     isInitialMount.current = false;
  //   }
  //   console.log("whatishappening:", everyGameId[1]);
  //   for (let i = 0; i < 3; i++) {
  //     fetchAllGames(
  //       `/riot-api/lol/match/v5/matches/${everyGameId[i]}?api_key=${apiKey}`
  //     );
  //   }
  // }, [everyGameId]); // PLURAL MANY GAMES

  console.log("how many");

  return {
    summonerLevel,
    iconId,
    gameMode,
    championName,
    kills,
    deaths,
    assists,
    win,
    hashtag,
    handleNameChange,
    setprofileName,
    leagueName,
  };
};
export { useProfileState };

//custom hook
