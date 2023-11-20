// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header";
import { TeamBuilderContainer } from "./components/TeamBuilderContainer";
import "semantic-ui-css/semantic.min.css";
import { PlayerData } from "./components/PlayerData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useProfileState } from "./components/useProfileState";

function App() {
  const { profileName, setprofileName } = useProfileState();
  return (
    <>
      <div className="app-container">
        <BrowserRouter>
          <Routes>
            <Route
              index
              path="/"
              element={
                <div className="wrapper-page">
                  <Header setprofileName={setprofileName} />
                  <TeamBuilderContainer />
                </div>
              }
            ></Route>
            <Route
              path="player"
              element={
                <div className="wrapper-page">
                  <Header setprofileName={setprofileName} />
                  <PlayerData profileName={profileName} />
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
