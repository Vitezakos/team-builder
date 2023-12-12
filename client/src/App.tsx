// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header";
import { TeamBuilderContainer } from "./components/TeamBuilderContainer";
import "semantic-ui-css/semantic.min.css";
import { PlayerData } from "./components/PlayerData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { playerContext } from "./components/utilities/useContext";

function App() {
  const [inputName, setInputName] = useState("NigHToWL#8512");
  const [topName, setTopName] = useState("K'sante");
  const [jgName, setJgName] = useState("Kindred");
  const [midName, setMidName] = useState("Ahri");
  const [botName, setBotName] = useState("Ezreal");
  const [suppName, setSuppName] = useState("Yuumi");
  const value = {
    inputName,
    setInputName,
    topName,
    setTopName,
    jgName,
    setJgName,
    midName,
    setMidName,
    botName,
    setBotName,
    suppName,
    setSuppName,
  };
  return (
    <>
      <playerContext.Provider value={value}>
        <div className="app-container">
          <BrowserRouter>
            <Routes>
              <Route
                index
                path="/"
                element={
                  <div className="wrapper-page">
                    <Header />
                    <TeamBuilderContainer />
                  </div>
                }
              ></Route>
              <Route
                path="player"
                element={
                  <div className="wrapper-page">
                    <Header />
                    <PlayerData />
                  </div>
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      </playerContext.Provider>
    </>
  );
}

export default App;
