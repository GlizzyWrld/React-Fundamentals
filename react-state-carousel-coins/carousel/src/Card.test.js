import { render } from "@testing-library/react";
import Card from "./Card";
import App from "./App";


it("renders without crashing", function() {
    render(<App />);
  });
  
  it("matches snapshot", function() {
    const {asFragment} = render(<Card/>);
    expect(asFragment()).toMatchSnapshot();
  });