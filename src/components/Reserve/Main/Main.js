import { useState, useEffect, useReducer } from "react";
import { Container, Row, Col } from "react-bootstrap";
import seatingMap from "images/small-restaurant-seating-plan.png";
import { fetchAPI } from "utils/fakeApi";
import BookingForm from "../BookingForm/BookingForm";

import "./Main.scss";

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [submitResponse, setSubmitResponse] = useState(null);

  function initializeTimes() {
    const date = new Date();
    console.log(date);
    const data = fetchAPI(date);
    const parsedData = JSON.parse(data);
    return parsedData.availableTimes;
  }

  function updateTimes(state, action) {
    const data = fetchAPI(new Date(action.payload));
    const parsedData = JSON.parse(data);
    return parsedData.availableTimes;
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
