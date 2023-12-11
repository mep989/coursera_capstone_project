import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Main from "./Main";

test("initializeTimes returns the expected result", () => {
  render(<Main />);
  const expectedOutput = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  expectedOutput.forEach((time) => {
    expect(screen.getByRole("option", { name: time })).toBeInTheDocument();
  });
});

test("updateTimes returns the expected result", () => {
  const { getByLabelText } = render(<Main />);
  fireEvent.change(getByLabelText("Choose date:"), {
    target: { value: "01/01/1998" }
  });
  const expectedOutput = ["15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];
  expectedOutput.forEach((time) => {
    expect(screen.getByRole("option", { name: time })).toBeInTheDocument();
  });
});
