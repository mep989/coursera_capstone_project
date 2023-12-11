import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { format } from "date-fns";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PropTypes from "prop-types";

import "./BookingForm.scss";

const ReserveSchema = yup.object().shape({
  resDate: yup
    .date("Must be a valid date")
    .required("Reservation date is required")
    .typeError("Reservation date is required"),
  resTime: yup
    .string()
    .required("Reservation time is required")
    .typeError("Reservation time is required"),
  guests: yup
    .number("Must be a number")
    .required("Number of guests is required")
    .typeError("Number of guests is required")
    .min(1, "Must be at least 1")
    .max(10, "Must be at most 10"),
  occasion: yup.string().required("Occasion is required"),
});

function BookingForm(props) {
  const { availableTimes, dispatchTimes } = props;

  if (!Array.isArray(availableTimes))
    throw new Error("availableTimes is not an array");
  if (typeof dispatchTimes != "function")
    throw new Error("dispatchTimes is not a function");

  const todaysDate = {
    target: {
      value: format(new Date(), "yyyy-MM-dd"),
    },
  };
  const [resDate, setResDate] = useState(todaysDate);

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
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ReserveSchema),
  });

  const onDateUpdate = (e) => {
    setResDate({ target: { value: e.target.value } });
    dispatchTimes({ payload: resDate.target.value });
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <article className="reservation-card">
      <section>
        <Form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="resDate">Choose date:</Form.Label>
            <Form.Control
              id="resDate"
              type="date"
              {...register("resDate")}
              value={resDate.target.value}
              onChange={onDateUpdate}
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
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Form.Select
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                  isInvalid={errors.resTime}
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
              type="number"
              placeholder="1"
              min="1"
              max="10"
              {...register("guests")}
              defaultValue={1}
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
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Form.Select
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                  isInvalid={errors.occasion}
                >
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                </Form.Select>
              )}
            />
          </Form.Group>
          <Button varient="primary" type="submit" value="Make Your reservation">
            <span>Make Your Reservation</span>
          </Button>
        </Form>
      </section>
    </article>
  );
}

BookingForm.propTypes = {
  availableTimes: PropTypes.array.isRequired,
  dispatchTimes: PropTypes.func.isRequired,
};

export default BookingForm;
