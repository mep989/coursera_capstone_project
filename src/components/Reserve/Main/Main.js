import { useState, useReducer } from "react";
import { Container, Row, Col } from "react-bootstrap";
import seatingMap from "images/small-restaurant-seating-plan.png";
import BookingForm from "../BookingForm/BookingForm";

import "./Main.scss";

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [submitResponse, setSubmitResponse] = useState(null);

  function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }

  function updateTimes(state, action) {
    return ["15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];
  }

  const onSubmit = (data) => {
    console.log(data);
    setSubmitResponse("Reservation Submitted!");
  };

  return (
    <main className="reserve-view fade-in">
      <Container>
        <Row>
          <Col md={5} lg={4}>
            <BookingForm
              availableTimes={availableTimes}
              dispatchTimes={dispatch}
              onSubmit={onSubmit}
              submitResponse={submitResponse}
            />
          </Col>
          <Col md={7} lg={8}>
            <img id="seating-map" src={seatingMap} alt="Seating Map" />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Main;
