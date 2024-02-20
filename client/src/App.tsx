import "./App.css";
import { Header } from "./components/Header";
import { TeamBuilderContainer } from "./components/TeamBuilderContainer";
import "semantic-ui-css/semantic.min.css";
import { PlayerData } from "./components/PlayerData";
import { Routes, Route, HashRouter } from "react-router-dom";
import { useState } from "react";
import { playerContext } from "./components/utilities/useContext";

function App() {
  const [inputName, setInputName] = useState("NigHToWL#8512");
  const [champion, setChampion] = useState({ lane: "mid", name: "Ahri" });
  const [location, setLocation] = useState(
    window.location.hostname === "localhost" ? "stage" : "production"
  );
  const value = {
    inputName,
    setInputName,
    champion,
    setChampion,
    location,
    setLocation,
  };

  return (
    <>
      <playerContext.Provider value={value}>
        <div className="app-container">
          <HashRouter basename="/">
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
          </HashRouter>
        </div>
      </playerContext.Provider>
    </>
  );
}

export default App;
