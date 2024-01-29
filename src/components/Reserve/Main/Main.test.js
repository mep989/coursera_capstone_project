import { fireEvent, render, screen } from "@testing-library/react";
import { fetchAPI } from "utils/fakeApi";
import Main from "./Main";

const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

test("initializeTimes returns the expected result", () => {
  render(<Main />);
  const date = new Date();
  const expectedOutput = JSON.parse(fetchAPI(date)).availableTimes;
  expectedOutput.forEach((time) => {
    expect(screen.getByRole("option", { name: time })).toBeInTheDocument();
  });
});

test("updateTimes returns the expected result", async () => {
  const { getByLabelText } = render(<Main />);
  fireEvent.change(getByLabelText("Choose date:"), {
    target: { value: "2050-01-01" },
  });

  const response = await fetchAPI(new Date(2050, 0, 1));
  const expectedOutput = JSON.parse(response).availableTimes;

  expectedOutput.forEach((time) => {
    expect(screen.getByRole("option", { name: time })).toBeInTheDocument();
  });
});
