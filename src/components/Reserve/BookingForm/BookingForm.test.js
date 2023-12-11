import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the date label", () => {
  render(
    <BookingForm
      availableTimes={["test", "1", "2", "3"]}
      dispatchTimes={() => {}}
    />,
  );
  const labelElement = screen.getByText("Choose date:");
  expect(labelElement).toBeInTheDocument();
});

test("Renders the time label", () => {
  render(
    <BookingForm
      availableTimes={["test", "1", "2", "3"]}
      dispatchTimes={() => {}}
    />,
  );
  const labelElement = screen.getByText("Choose time:");
  expect(labelElement).toBeInTheDocument();
});

test("Renders the guests label", () => {
  render(
    <BookingForm
      availableTimes={["test", "1", "2", "3"]}
      dispatchTimes={() => {}}
    />,
  );
  const labelElement = screen.getByText("Number of guests:");
  expect(labelElement).toBeInTheDocument();
});

test("Renders the occasion label", () => {
  render(
    <BookingForm
      availableTimes={["test", "1", "2", "3"]}
      dispatchTimes={() => {}}
    />,
  );
  const labelElement = screen.getByText("Occasion:");
  expect(labelElement).toBeInTheDocument();
});

test("Renders the submit button text", () => {
  render(
    <BookingForm
      availableTimes={["test", "1", "2", "3"]}
      dispatchTimes={() => {}}
    />,
  );
  const labelElement = screen.getByText("Make Your Reservation");
  expect(labelElement).toBeInTheDocument();
});
