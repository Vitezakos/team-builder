import { Champions } from "./Champions";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

describe("Champions", () => {
  it("should render a champion", () => {
    console.log("hello");
    const dummyChampion = "Garen";
    const renderComponent = shallow(
      <Champions champ={dummyChampion}></Champions>
    );
    //expect(renderComponent).toBeInTheDocument();
    expect(renderComponent).toBe(true);
  });
});
