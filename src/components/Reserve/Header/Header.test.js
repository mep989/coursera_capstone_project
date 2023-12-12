import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("Renders the Reserve Page heading", () => {
  render(<Header />);
  const headingElement = screen.getByText("Table Reservation");
  expect(headingElement).toBeInTheDocument();
});

test("Renders the Reserve Page sub-heading", () => {
  render(<Header />);
  const headingElement = screen.getByText("At Little Lemon");
  expect(headingElement).toBeInTheDocument();
});

test("Renders the Reserve Page instructions", () => {
  render(<Header />);
  const instructionsElement = screen.getByText(
    "Please fill out the following information to make your reservation. We look forward to having you!",
  );
  expect(instructionsElement).toBeInTheDocument();
});
