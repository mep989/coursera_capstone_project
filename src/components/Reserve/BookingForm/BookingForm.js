import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { format, startOfDay } from "date-fns";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PropTypes from "prop-types";

import "./BookingForm.scss";

// Get current date and time
const now = new Date();
// Get start of current day
const startOfToday = startOfDay(new Date());

// Format current date and time to 'yyyy-MM-dd' and 'HH:mm' respectively
const todaysDate = format(now, "yyyy-MM-dd");
const currentTime = format(now, "HH:mm");

const ReserveSchema = yup.object().shape({
  resDate: yup
    .date("Must be a valid date")
    .required("Reservation date is required")
    .typeError("Reservation date is required")
    .min(startOfToday, "Reservation date must be in the future"),
  resTime: yup
    .string()
    .required("Reservation time is required")
    .typeError("Reservation time is required")
    .test(
      "is-greater",
      "Reservation time must be in the future",
      function testDateAndTime(value) {
        const { resDate } = this.parent;
        if (!resDate || isNaN(Date.parse(resDate))) return true;
        const dateString = format(resDate, "yyyy-MM-dd");
        const dateSplit = dateString.split("-");
        const updateDate = new Date(
          dateSplit[0],
          dateSplit[1] - 1,
          dateSplit[2],
        );
        if (isNaN(updateDate?.getTime())) return true;
        return !(dateString === todaysDate && value <= currentTime);
      },
    ),
  guests: yup
    .number("Must be a number")
    .required("Number of guests is required")
    .typeError("Number of guests is required")
    .min(1, "Must be at least 1")
    .max(10, "Must be at most 10"),
  occasion: yup.string().required("Occasion is required"),
});

function BookingForm(props) {
  const {
    availableTimes,
    dispatchTimes,
    onSubmit,
    submitResponse = null,
  } = props;

  if (!Array.isArray(availableTimes))
    throw new Error("availableTimes is not an array");
  if (typeof dispatchTimes != "function")
    throw new Error("dispatchTimes is not a function");

  const [resDate, setResDate] = useState(todaysDate);
  const [resTime, setResTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  function createTimeOptions() {
    return availableTimes.map((time) => {
      return (
        <option key={time} value={time} data-testid="options">
          {time}
        </option>
      );
    });
  }

  const {
    trigger,
    control,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm({
    resolver: yupResolver(ReserveSchema),
  });

  useEffect(() => {
    setResTime(availableTimes?.[0]);
    setValue("resTime", availableTimes?.[0]);
    setValue("resDate", resDate);
    setValue("guests", guests);
    setValue("occasion", occasion);
  }, [availableTimes, resDate, guests, occasion, setValue]);

  const onDateUpdate = () => {
    const dateString = document.getElementById("resDate").value;
    setResDate(dateString ?? null);
    dispatchTimes({ payload: dateString });
    setValue("resDate", dateString);
    trigger();
  };

  useEffect(() => {
    trigger();
  }, [trigger, resDate, resTime, guests, occasion]);

  return (
    <article className="reservation-card">
      <section>
        <Form
          className="booking-form"
          onSubmit={handleSubmit(onSubmit)}
          data-testid="booking-form"
        >
          <Form.Group className="mb-3">
            <Form.Label htmlFor="resDate">Choose date:</Form.Label>
            <Form.Control
              id="resDate"
              type="date"
              value={resDate ?? todaysDate}
              onChange={(e) => {
                onDateUpdate();
              }}
              data-testid="resDate"
            />
            <Form.Text className="text-danger">
              {errors.resDate?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="resTime">Choose time:</Form.Label>
            <Controller
              control={control}
              name="resTime"
              defaultValue="17:00"
              render={({
                field: { onChange, onBlur, value = resTime, ref },
              }) => (
                <Form.Select
                  id="resTime"
                  onChange={(e) => {
                    setResTime(e.target.value);
                    onChange(e);
                    trigger();
                  }}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                  isInvalid={errors.resTime}
                  data-testid="resTime"
                >
                  {createTimeOptions()}
                </Form.Select>
              )}
            />
            <Form.Text className="text-danger">
              {errors.resTime?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="guests">Number of guests:</Form.Label>
            <Form.Control
              id="guests"
              type="number"
              placeholder="1"
              min="1"
              max="10"
              value={guests}
              onChange={(e) => {
                setValue("guests", e.target.value);
                setGuests(e.target.value);
              }}
              data-testid="guests"
            />
            <Form.Text className="text-danger">
              {errors.guests?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="occasion">Occasion:</Form.Label>
            <Controller
              control={control}
              name="occasion"
              defaultValue="Birthday"
              render={({
                field: { onChange, onBlur, value = occasion, ref },
              }) => (
                <Form.Select
                  id="occasion"
                  onChange={(e) => {
                    setOccasion(e.target.value);
                    onChange(e);
                  }}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                  isInvalid={errors.occasion}
                  data-testid="occasion"
                >
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                </Form.Select>
              )}
            />
            <Form.Text className="text-danger">
              {errors.occasion?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="text-center">
            <Button
              varient="primary"
              type="submit"
              value="Make Your reservation"
              className="mb-3"
              disabled={!isValid}
            >
              <span>Make Your Reservation</span>
            </Button>
            <Form.Text
              className={
                submitResponse?.type === "success"
                  ? "text-success"
                  : "text-danger"
              }
            >
              {submitResponse?.message}
            </Form.Text>
          </Form.Group>
        </Form>
      </section>
    </article>
  );
}

BookingForm.propTypes = {
  availableTimes: PropTypes.array.isRequired,
  dispatchTimes: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitResponse: PropTypes.object,
};

BookingForm.defaultProps = {
  submitResponse: null,
};

export default BookingForm;
