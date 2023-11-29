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
import { testContext } from "./components/utilities/useContext";

function App() {
  const [test, setTest] = useState("NigHToWL#8512");
  const [leagueName, setLeagueName] = useState("bob");
  const value = { test, setTest, leagueName, setLeagueName };
  return (
    <>
      <testContext.Provider value={value}>
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
      </testContext.Provider>
    </>
  );
}

export default App;
