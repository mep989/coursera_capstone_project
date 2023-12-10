import { Container, Row, Col } from "react-bootstrap";
import seatingMap from "images/small-restaurant-seating-plan.png";
import BookingForm from "../BookingForm/BookingForm";

import "./Main.scss";

function Main() {
  return (
    <main className="reserve-view fade-in">
      <Container>
        <Row>
          <Col md={5} lg={4}>
            <BookingForm />
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
