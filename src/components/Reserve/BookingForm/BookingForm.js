import { Button, Form } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { format } from "date-fns";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./BookingForm.scss";

const ReserveSchema = yup.object().shape({
  resDate: yup
    .date("Must be a valid date")
    .required("Reservation date is required")
    .typeError("Reservation date is required"),
});

function BookingForm() {
  const todaysDate = format(new Date(), "yyyy-MM-dd");

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ReserveSchema),
  });

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
              type="date"
              {...register("resDate")}
              defaultValue={todaysDate}
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
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <Form.Select
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                  isInvalid={errors.resTime}
                >
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                  <option value="22:00">22:00</option>
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

export default BookingForm;
