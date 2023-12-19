import { render } from "@testing-library/react";
import { Header } from "../components/Header";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";

describe("Champions", () => {
  it("should render a champion", () => {
    const renderComponent = render(
      <Router>
        <Header></Header>
      </Router>
    );
    expect(renderComponent).toBeTruthy();
  });
});
