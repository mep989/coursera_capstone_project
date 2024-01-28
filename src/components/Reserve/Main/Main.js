import { useState, useReducer } from "react";
import { Container, Row, Col } from "react-bootstrap";
import seatingMap from "images/small-restaurant-seating-plan.png";
import { fetchAPI, submitAPI } from "utils/fakeApi";
import BookingForm from "../BookingForm/BookingForm";

import "./Main.scss";

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [submitResponse, setSubmitResponse] = useState(null);

  function initializeTimes() {
    const date = new Date();
    const initData = fetchAPI(date);
    const parsedData = JSON.parse(initData);
    return parsedData.availableTimes;
  }

  function updateTimes(state, action) {
    const dateSplit = action.payload.split("-");
    const updateData = fetchAPI(
      new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]),
    );
    const parsedData = JSON.parse(updateData);
    return parsedData.availableTimes;
  }

  const onSubmit = (data) => {
    const response = JSON.parse(submitAPI(data));
    setSubmitResponse(response);
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
