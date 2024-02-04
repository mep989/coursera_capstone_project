import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { fetchAPI } from "utils/fakeApi";
import { format } from "date-fns";
import Main from "./Main";

const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

test("initializeTimes returns the expected result", async () => {
  await act(() => render(<Main />));
  const date = new Date();
  const expectedOutput = JSON.parse(fetchAPI(date)).availableTimes;
  expectedOutput.forEach((time) => {
    expect(screen.getByRole("option", { name: time })).toBeInTheDocument();
  });
});

test("updateTimes returns the expected result", async () => {
  await act(() => render(<Main />));
  await act(() =>
    fireEvent.change(screen.getByLabelText("Choose date:"), {
      target: { value: "2050-01-01" },
    }),
  );

  const response = await fetchAPI(new Date(2050, 0, 1));
  const expectedOutput = JSON.parse(response).availableTimes;

  expectedOutput.forEach((time) => {
    expect(screen.getByRole("option", { name: time })).toBeInTheDocument();
  });
});

test("The selected date must be a valid date", async () => {
  await act(() => render(<Main />));
  const dateInput = screen.getByLabelText("Choose date:");

  // Simulate a change event with an invalid date
  await act(() =>
    fireEvent.change(dateInput, { target: { value: "invalid-date" } }),
  );

  // Wait for the validation error message to be displayed
  await waitFor(() => {
    expect(
      screen.getByText("Reservation date is required"),
    ).toBeInTheDocument();
  });
});

test("The selected date must be in the future", async () => {
  await act(() => render(<Main />));
  const dateInput = screen.getByLabelText("Choose date:");

  // Simulate a change event with a past date
  await act(() =>
    fireEvent.change(dateInput, { target: { value: "1998-01-01" } }),
  );

  // Wait for the validation error message to be displayed
  await waitFor(() => {
    expect(
      screen.getByText("Reservation date must be in the future"),
    ).toBeInTheDocument();
  });
});

test("The selected time is required", async () => {
  await act(() => render(<Main />));
  const timeInput = screen.getByLabelText("Choose time:");

  // Simulate a change event with an empty value
  await act(() => fireEvent.change(timeInput, { target: { value: "" } }));

  // Wait for the validation error message to be displayed
  await waitFor(() => {
    expect(
      screen.getByText("Reservation time is required"),
    ).toBeInTheDocument();
  });
});

test("The selected time must be in the future", async () => {
  await act(async () => {
    render(<Main />);
  });
  const now = new Date();
  const dateInput = screen.getByLabelText("Choose date:");
  const timeInput = screen.getByLabelText("Choose time:");
  const todaysDate = format(now, "yyyy-MM-dd");
  await act(async () => {
    fireEvent.change(dateInput, { target: { value: todaysDate } });
  });
  const initialTimeSelectedString = timeInput.value;
  const hours = initialTimeSelectedString.split(":")[0];
  const minutes = initialTimeSelectedString.split(":")[1];
  const selectedTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    parseInt(hours, 10),
    parseInt(minutes, 10),
  );

  // Wait for the validation error message to be displayed
  await waitFor(() => {
    if (selectedTime <= now) {
      expect(
        screen.getByText("Reservation time must be in the future"),
      ).toBeInTheDocument();
    } else {
      expect(
        screen.queryByText("Reservation time must be in the future"),
      ).not.toBeInTheDocument();
    }
  });
});

test("The number of guests is required", async () => {
  await act(() => render(<Main />));
  const dateInput = screen.getByLabelText("Choose date:");
  const guestsInput = screen.getByLabelText("Number of guests:");

  // Simulate a change event with an empty value
  await act(() => {
    fireEvent.change(dateInput, { target: { value: "2050-01-01" } });
    fireEvent.change(guestsInput, { target: { value: null } });
  });

  // Wait for the validation error message to be displayed
  await waitFor(() => {
    expect(
      screen.getByText("Number of guests is required"),
    ).toBeInTheDocument();
  });
});

test("The number of guests must be at least 1", async () => {
  await act(() => render(<Main />));
  const dateInput = screen.getByLabelText("Choose date:");
  const guestsInput = screen.getByLabelText("Number of guests:");

  // Simulate a change event with a value of 0
  await act(() => {
    fireEvent.change(dateInput, { target: { value: "2050-01-01" } });
    fireEvent.change(guestsInput, { target: { value: 0 } });
  });

  // Wait for the validation error message to be displayed
  await waitFor(() => {
    expect(screen.getByText("Must be at least 1")).toBeInTheDocument();
  });
});

test("The number of guests must be at most 10", async () => {
  await act(() => render(<Main />));
  const dateInput = screen.getByLabelText("Choose date:");
  const guestsInput = screen.getByLabelText("Number of guests:");

  // Simulate a change event with a value of 11
  await act(() => {
    fireEvent.change(dateInput, { target: { value: "2050-01-01" } });
    fireEvent.change(guestsInput, { target: { value: 11 } });
  });

  // Wait for the validation error message to be displayed
  await waitFor(() => {
    expect(screen.getByText("Must be at most 10")).toBeInTheDocument();
  });
});

test("The occasion is required", async () => {
  await act(() => render(<Main />));
  const dateInput = screen.getByLabelText("Choose date:");
  const occasionInput = screen.getByLabelText("Occasion:");

  // Simulate a change event with an empty value
  await act(() => {
    fireEvent.change(dateInput, { target: { value: "2050-01-01" } });
    fireEvent.change(occasionInput, { target: { value: "" } });
  });

  // Wait for the validation error message to be displayed
  await waitFor(() => {
    expect(screen.getByText("Occasion is required")).toBeInTheDocument();
  });
});

test("The selected date is a valid date", async () => {
  await act(() => render(<Main />));
  const dateInput = screen.getByLabelText("Choose date:");

  // Simulate a change event with a valid date
  await act(() =>
    fireEvent.change(dateInput, { target: { value: "2050-01-01" } }),
  );

  // Wait for the validation error message to be displayed
  await waitFor(() => {
    expect(
      screen.queryByText("Reservation date is required"),
    ).not.toBeInTheDocument();
  });
});

test("The selected date is in the future", async () => {
  await act(() => render(<Main />));
  const dateInput = screen.getByLabelText("Choose date:");

  // Simulate a change event with a future date
  await act(() =>
    fireEvent.change(dateInput, { target: { value: "2050-01-01" } }),
  );

  // Wait for the validation error message to be displayed
  await waitFor(() => {
    expect(
      screen.queryByText("Reservation date must be in the future"),
    ).not.toBeInTheDocument();
  });
});

test("The selected time exists", async () => {
  await act(() => render(<Main />));
  const timeInput = screen.getByLabelText("Choose time:");

  // Simulate a change event with the initial value
  await act(() =>
    fireEvent.change(timeInput, { target: { value: timeInput.value } }),
  );

  // Wait for the validation error message to be displayed
  await waitFor(() => {
    expect(
      screen.queryByText("Reservation time is required"),
    ).not.toBeInTheDocument();
  });
});

test("The selected time is in the future", async () => {
  await act(async () => {
    render(<Main />);
  });
  const now = new Date();
  const tomorrow = now.getDate() + 1;
  const dateInput = screen.getByLabelText("Choose date:");
  const tomorrowsDate = format(tomorrow, "yyyy-MM-dd");
  await act(async () => {
    fireEvent.change(dateInput, { target: { value: tomorrowsDate } });
  });

  // Wait for the validation error message to be displayed
  await waitFor(() => {
    expect(
      screen.queryByText("Reservation time must be in the future"),
    ).not.toBeInTheDocument();
  });
});

test("The number of guests is set correctly", async () => {
  await act(() => render(<Main />));
  const dateInput = screen.getByLabelText("Choose date:");
  const guestsInput = screen.getByLabelText("Number of guests:");

  // Simulate a change event with a value between 1 and 10
  await act(() => {
    fireEvent.change(dateInput, { target: { value: "2050-01-01" } });
    fireEvent.change(guestsInput, { target: { value: 5 } });
  });

  // Wait for the validation error message to be displayed
  await waitFor(() => {
    expect(
      screen.queryByText("Number of guests is required"),
    ).not.toBeInTheDocument();
  });
});

test("The number of guests is at least 1", async () => {
  await act(() => render(<Main />));
  const dateInput = screen.getByLabelText("Choose date:");
  const guestsInput = screen.getByLabelText("Number of guests:");

  // Simulate a change event with a value of 1
  await act(() => {
    fireEvent.change(dateInput, { target: { value: "2050-01-01" } });
    fireEvent.change(guestsInput, { target: { value: 1 } });
  });

  // Wait for the validation error message to be displayed
  await waitFor(() => {
    expect(screen.queryByText("Must be at least 1")).not.toBeInTheDocument();
  });
});

test("The number of guests is at most 10", async () => {
  await act(() => render(<Main />));
  const dateInput = screen.getByLabelText("Choose date:");
  const guestsInput = screen.getByLabelText("Number of guests:");

  // Simulate a change event with a value of 10
  await act(() => {
    fireEvent.change(dateInput, { target: { value: "2050-01-01" } });
    fireEvent.change(guestsInput, { target: { value: 10 } });
  });

  // Wait for the validation error message to be displayed
  await waitFor(() => {
    expect(screen.queryByText("Must be at most 10")).not.toBeInTheDocument();
  });
});

test("The occasion is set correctly", async () => {
  await act(() => render(<Main />));
  const dateInput = screen.getByLabelText("Choose date:");
  const occasionInput = screen.getByLabelText("Occasion:");

  // Simulate a change event with a correct value
  await act(() => {
    fireEvent.change(dateInput, { target: { value: "2050-01-01" } });
    fireEvent.change(occasionInput, { target: { value: "Birthday" } });
  });

  // Wait for the validation error message to be displayed
  await waitFor(() => {
    expect(screen.queryByText("Occasion is required")).not.toBeInTheDocument();
  });
});
