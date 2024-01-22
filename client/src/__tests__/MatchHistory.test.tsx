import { MatchHistory } from "../components/MatchHistory";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { playerContext } from "../components/utilities/useContext";

describe("Champions", () => {
  const gameStats = {
    championName: "Renekton",
    kills: 1,
    deaths: 13,
    assists: 2,
    win: "defeat",
    gameMode: "CLASSIC",
  };

  it("should display the mocked stats when value is provided", () => {
    render(
      <playerContext.Provider
        value={{
          inputName: "NightOwl#8512",
          setInputName: jest.fn(),
          champion: { lane: "mid", name: "Ahri" },
          setChampion: jest.fn(),
        }}
      >
        <MatchHistory gameDataDefault={gameStats}></MatchHistory>
      </playerContext.Provider>
    );
    expect(
      screen.getByText(
        `${gameStats.kills} / ${gameStats.deaths} / ${gameStats.assists}`
      )
    ).toBeInTheDocument();
    expect(screen.getByText(gameStats.win)).toBeInTheDocument();
    expect(screen.getByText(gameStats.gameMode)).toBeInTheDocument();
  });

  it("should display the default game stats when no value is provided", () => {
    render(<MatchHistory></MatchHistory>);
    expect(screen.getByText(`8 / 2 / 3`)).toBeInTheDocument();
    expect(screen.getByText("victory")).toBeInTheDocument();
    expect(screen.getByText("ARAM")).toBeInTheDocument();
  });
});
