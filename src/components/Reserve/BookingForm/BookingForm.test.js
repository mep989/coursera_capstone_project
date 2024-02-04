import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { startOfDay } from "date-fns";
import BookingForm from "./BookingForm";

test("Renders the date label", async () => {
  await act(async () =>
    render(
      <BookingForm
        availableTimes={["test", "1", "2", "3"]}
        dispatchTimes={() => {}}
        onSubmit={() => {}}
        submitResponse={null}
      />,
    ),
  );
  const labelElement = screen.getByText("Choose date:");
  expect(labelElement).toBeInTheDocument();
});

test("Renders the time label", async () => {
  await act(async () =>
    render(
      <BookingForm
        availableTimes={["test", "1", "2", "3"]}
        dispatchTimes={() => {}}
        onSubmit={() => {}}
        submitResponse={null}
      />,
    ),
  );
  const labelElement = screen.getByText("Choose time:");
  expect(labelElement).toBeInTheDocument();
});

test("Renders the guests label", async () => {
  await act(async () =>
    render(
      <BookingForm
        availableTimes={["test", "1", "2", "3"]}
        dispatchTimes={() => {}}
        onSubmit={() => {}}
        submitResponse={null}
      />,
    ),
  );
  const labelElement = screen.getByText("Number of guests:");
  expect(labelElement).toBeInTheDocument();
});

test("Renders the occasion label", async () => {
  await act(async () =>
    render(
      <BookingForm
        availableTimes={["test", "1", "2", "3"]}
        dispatchTimes={() => {}}
        onSubmit={() => {}}
        submitResponse={null}
      />,
    ),
  );
  const labelElement = screen.getByText("Occasion:");
  expect(labelElement).toBeInTheDocument();
});

test("Renders the submit button text", async () => {
  await act(async () =>
    render(
      <BookingForm
        availableTimes={["test", "1", "2", "3"]}
        dispatchTimes={() => {}}
        onSubmit={() => {}}
        submitResponse={null}
      />,
    ),
  );
  const buttonElement = screen.getByText("Make Your Reservation");
  expect(buttonElement).toBeInTheDocument();
});

test("The form can be submitted and return the expected result", async () => {
  const handleSubmit = jest.fn();
  await act(async () =>
    render(
      <BookingForm
        availableTimes={["test", "1", "2", "3"]}
        dispatchTimes={() => {}}
        onSubmit={handleSubmit}
        submitResponse={null}
      />,
    ),
  );
  await act(async () =>
    fireEvent.change(screen.getByLabelText("Choose date:"), "01/01/1998"),
  );
  const formElement = screen.getByTestId("booking-form");
  await act(async () => fireEvent.submit(formElement));

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
