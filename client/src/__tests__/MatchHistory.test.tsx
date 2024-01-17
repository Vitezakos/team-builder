import { MatchHistory } from "../components/MatchHistory";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { playerContext } from "../components/utilities/useContext";

describe("Champions", () => {
  it("should render a champion", () => {
    const renderComponent = render(
      <playerContext.Provider
        value={{
          inputName: "NightOwl#8512",
          setInputName: jest.fn(),
          champion: { lane: "mid", name: "Ahri" },
          setChampion: jest.fn(),
        }}
      >
        <MatchHistory
          gameDataDefault={{
            championName: "Ahri",
            kills: 8,
            deaths: 2,
            assists: 3,
            win: "victory",
            gameMode: "ARAM",
          }}
        ></MatchHistory>
      </playerContext.Provider>
    );
    expect(renderComponent).toBeTruthy();
  });
});
