import { Container, Row, Col } from "react-bootstrap";
import BookingForm from "../BookingForm/BookingForm";

import "./Main.scss";

function Main() {
  return (
    <main className="reserve-view fade-in">
      <Container>
        <Row>
          <Col>
            <BookingForm />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Main;
