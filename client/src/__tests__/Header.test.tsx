import { Header } from "../components/Header";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";

describe("Champions", () => {
  it("should render a champion", () => {
    render(
      <Router>
        <Header></Header>
      </Router>
    );
    const headerElement = screen.getByRole("container");
    expect(headerElement).toBeInTheDocument();
  });
});
