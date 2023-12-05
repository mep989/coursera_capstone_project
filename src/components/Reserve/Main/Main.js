import { Container, Row, Col } from "react-bootstrap";
import seatingMap from "images/small-restaurant-seating-plan.png";
import BookingForm from "../BookingForm/BookingForm";

import "./Main.scss";

function Main() {
  return (
    <main className="reserve-view fade-in">
      <Container>
        <Row>
          <Col md={4} lg={5}>
            <img id="seating-map" src={seatingMap} alt="Seating Map" />
          </Col>
          <Col md={8} lg={7}>
            <BookingForm />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Main;
