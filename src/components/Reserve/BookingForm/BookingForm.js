import { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
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
  const todaysDate = {
    target: {
      value: format(new Date(), "yyyy-MM-dd"),
    },
  };
  const [date, setDate] = useState(todaysDate);

  const {
    register,
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
        <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <label htmlFor="resDate">Choose date:</label>
              </Col>
              <Col xs={12} md={6}>
                <input
                  type="date"
                  {...register("resDate")}
                  value={date.target.value}
                  onChange={setDate}
                />
                <p>{errors.resDate?.message}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <label htmlFor="res-time">Choose time:</label>
              </Col>
              <Col xs={12} md={6}>
                <select id="res-time ">
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                  <option>21:00</option>
                  <option>22:00</option>
                </select>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <label htmlFor="guests">Number of guests:</label>
              </Col>
              <Col xs={12} md={6}>
                <input
                  type="number"
                  placeholder="1"
                  min="1"
                  max="10"
                  id="guests"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <label htmlFor="occasion">Occasion:</label>
              </Col>
              <Col xs={12} md={6}>
                <select id="occasion">
                  <option>Birthday</option>
                  <option>Anniversary</option>
                </select>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4} />
              <Col xs={12} md={8}>
                <Button
                  varient="primary"
                  type="submit"
                  value="Make Your reservation"
                >
                  <span>Make Your Reservation</span>
                </Button>
              </Col>
            </Row>
          </Container>
        </form>
      </section>
    </article>
  );
}

export default BookingForm;
