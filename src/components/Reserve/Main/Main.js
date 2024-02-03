import { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import seatingMap from "images/small-restaurant-seating-plan.png";
import { fetchAPI, submitAPI } from "utils/fakeApi";
import BookingForm from "../BookingForm/BookingForm";

import "./Main.scss";

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [submitResponse, setSubmitResponse] = useState(null);
  const navigate = useNavigate();

  function initializeTimes() {
    const date = new Date();
    const initData = fetchAPI(date);
    const parsedData = JSON.parse(initData);
    return parsedData.availableTimes;
  }

  function updateTimes(state, action) {
    // Return state if action.payload is null or undefined
    if (!action.payload) return state;
    const dateSplit = action.payload.split("-");
    const updateDate = new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]);
    // Check if updateDate is a valid date. Return state if not.
    if (isNaN(updateDate.getTime())) return state;
    const updateData = fetchAPI(updateDate);
    const parsedData = JSON.parse(updateData);
    return parsedData.availableTimes;
  }

  const onSubmit = (data) => {
    const response = JSON.parse(submitAPI(data));
    setSubmitResponse(response);
    if (response.type === "success")
      setTimeout(
        () =>
          navigate("/booking-confirmation", {
            state: { reservationData: data },
          }),
        2000,
      );
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
