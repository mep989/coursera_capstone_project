import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Footer from "components/Common/Footer/Footer";
import format from "date-fns/format";

import "./BookingConfirmation.scss";

function BookingConfirmation() {
  const { state } = useLocation();

  const message = !state?.reservationData
    ? `Oops, looks like you aren't supposed to be here. Please navigate back to home to continue.`
    : `Your reservation is made for ${format(
        state?.reservationData?.resDate,
        "MMMM d, yyyy",
      )} at ${state?.reservationData?.resTime}. See you there!`;

  return (
    <>
      <div className="fill-remainder">
        <header className="confirmation-view fade-in">
          <Container>
            <Row>
              <Col>
                <h1>
                  {!state?.reservationData
                    ? "An error occurred:"
                    : "Booking Successful!"}
                </h1>
              </Col>
            </Row>
          </Container>
        </header>
        <main className="confirmation-view fade-in">
          <Container>
            <Row>
              <Col>
                <p>{message}</p>
              </Col>
            </Row>
          </Container>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default BookingConfirmation;
