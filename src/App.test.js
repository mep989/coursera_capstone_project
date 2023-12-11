import { render, screen } from "@testing-library/react";
import App from "App";

test("Renders the home page and displays the Little Lemon name", () => {
  render(<App />);
  const element = screen.getByText("Little Lemon");
  expect(element).toBeInTheDocument();
});
