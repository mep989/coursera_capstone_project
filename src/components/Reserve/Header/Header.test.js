import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Header from "./Header";

test("Renders the Reserve Page heading", async () => {
  await act(async () => render(<Header />));
  const headingElement = screen.getByText("Table Reservation");
  expect(headingElement).toBeInTheDocument();
});

test("Renders the Reserve Page sub-heading", async () => {
  await act(async () => render(<Header />));
  const headingElement = screen.getByText("At Little Lemon");
  expect(headingElement).toBeInTheDocument();
});

test("Renders the Reserve Page instructions", async () => {
  await act(async () => render(<Header />));
  const instructionsElement = screen.getByText(
    "Please fill out the following information to make your reservation. We look forward to having you!",
  );
  expect(instructionsElement).toBeInTheDocument();
});
