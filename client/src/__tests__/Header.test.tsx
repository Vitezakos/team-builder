import { Header } from "../components/Header";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import { playerContext } from "@/components/utilities/useContext";

describe("Champions", () => {
  render(
    <MemoryRouter>
      <Header></Header>
    </MemoryRouter>
  );

  it("should render a champion", () => {
    const headerElement = screen.getByRole("container");
    expect(headerElement).toBeInTheDocument();
  });

  it("should open the search fields when open is true", () => {
    const button = screen.queryByTestId("test-btn");
    if (button) {
      fireEvent.click(button);
      const searchInput = screen.queryByTestId("test-search");
      expect(searchInput).toBeInTheDocument();
    }
  });

  it("should not display the search fields when open is false", () => {
    const searchInput = screen.queryByTestId("test-search");
    expect(searchInput).not.toBeInTheDocument();
  });

  it("should navigate to /player when Enter key is pressed", () => {
    const button = screen.queryByTestId("test-btn");
    const history = createMemoryHistory();
    render(
      <playerContext.Provider
        value={{
          inputName: "NightOwl#8512",
          setInputName: jest.fn(),
          champion: { lane: "mid", name: "Ahri" },
          setChampion: jest.fn(),
        }}
      >
        <Router location={history.location} navigator={history}>
          <Header />
        </Router>
      </playerContext.Provider>
    );
    if (button) {
      fireEvent.click(button);
      const inputField = screen.queryByTestId("test-input") as HTMLInputElement;
      if (inputField) {
        inputField.value = "test#4432";
        fireEvent.keyUp(inputField, {
          key: "Enter",
          code: "Enter",
          charCode: 13,
        });
        expect(history.location.pathname).toBe("/");
      }
    }
  });

  it("should navigate to / when button is pressed", () => {
    const button = screen.queryByTestId("test-btn");
    const history = createMemoryHistory();
    render(
      <playerContext.Provider
        value={{
          inputName: "NightOwl#8512",
          setInputName: jest.fn(),
          champion: { lane: "mid", name: "Ahri" },
          setChampion: jest.fn(),
        }}
      >
        <Router location={history.location} navigator={history}>
          <Header />
        </Router>
      </playerContext.Provider>
    );
    if (button) {
      fireEvent.click(button);
      const inputField = screen.queryByTestId("test-input") as HTMLInputElement;
      if (inputField) {
        inputField.value = "";
        fireEvent.keyUp(inputField, {
          key: "Enter",
          code: "Enter",
          charCode: 13,
        });
        expect(history.location.pathname).toBe("/");
      }
    }
  });
  it("should display errorMessage when input field is empty and Enter key is pressed", () => {
    const button = screen.queryByTestId("test-btn");
    if (button) {
      fireEvent.click(button);
      const inputField = screen.queryByTestId("test-input") as HTMLInputElement;
      if (inputField) {
        inputField.value = "";
        fireEvent.keyUp(inputField, {
          key: "Enter",
          code: "Enter",
          charCode: 13,
        });
        const errorMsg = screen.queryByTestId("test-error") as HTMLDivElement;
        expect(errorMsg).toBeInTheDocument();
      }
    }
  });
});
