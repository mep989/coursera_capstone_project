import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { startOfDay } from "date-fns";
import BookingForm from "./BookingForm";

test("Renders the date label", () => {
  render(
    <BookingForm
      availableTimes={["test", "1", "2", "3"]}
      dispatchTimes={() => {}}
      onSubmit={() => {}}
      submitResponse={null}
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
      onSubmit={() => {}}
      submitResponse={null}
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
      onSubmit={() => {}}
      submitResponse={null}
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
      onSubmit={() => {}}
      submitResponse={null}
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
      onSubmit={() => {}}
      submitResponse={null}
    />,
  );
  const buttonElement = screen.getByText("Make Your Reservation");
  expect(buttonElement).toBeInTheDocument();
});

test("The form can be submitted and return the expected result", async () => {
  const handleSubmit = jest.fn();
  const { getByTestId } = render(
    <BookingForm
      availableTimes={["test", "1", "2", "3"]}
      dispatchTimes={() => {}}
      onSubmit={handleSubmit}
      submitResponse={null}
    />,
  );
  fireEvent.change(screen.getByLabelText("Choose date:"), "01/01/1998");
  const formElement = getByTestId("booking-form");
  fireEvent.submit(formElement);

  const todaysDate = startOfDay(new Date());
  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        resDate: todaysDate,
        resTime: "test",
        guests: 1,
        occasion: "Birthday",
      }),
      expect.anything(),
    ),
  );
});
