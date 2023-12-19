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
          topName: "Garen",
          setTopName: jest.fn(),
          jgName: "Rammus",
          setJgName: jest.fn(),
          midName: "Anivia",
          setMidName: jest.fn(),
          botName: "Ashe",
          setBotName: jest.fn(),
          suppName: "Sona",
          setSuppName: jest.fn(),
        }}
      >
        <MatchHistory></MatchHistory>
      </playerContext.Provider>
    );
    expect(renderComponent).toBeTruthy();
  });
});
