import { fireEvent, render, screen } from "@testing-library/react";
import { Champions } from "../components/Champions";
import "@testing-library/jest-dom";

describe("Champions", () => {
  const dummyChampion = { name: "Garen" };
  const renderComponent = render(<Champions champ={dummyChampion}></Champions>);
  it("should render a champion", () => {
    expect(renderComponent).toBeTruthy;
  });
  it(`renders when it's closed`, () => {
    const openBtns = screen.queryByTestId("open");
    expect(openBtns).not.toBeInTheDocument();
  });
  it(`renders  when it's open and contains the lane buttons`, () => {
    const btn = screen.queryByTestId("champ-button");
    fireEvent.click(btn!);
    const openBtns = screen.queryByTestId("open");
    expect(openBtns).toBeInTheDocument();
  });
});
