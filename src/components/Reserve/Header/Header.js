import { Container, Row, Col } from "react-bootstrap";
import restaurant from "images/restaurant.jpg";

import "./Header.scss";

function Header() {
  const headerDescrip = `Please fill out the following information to
make your reservation. We look forward to
having you!`;

  return (
    <header id="page-top" className="reserve-view fade-in">
      <Container>
        <Row>
          <Col>
            <section>
              <h1>Table Reservation</h1>
              <h2>At Little Lemon</h2>
            </section>
          </Col>
        </Row>
        <Row>
          <Col className="shrink-image" xs={12}>
            <img src={restaurant} alt="Reserve a Table" />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <p className="header-description">{headerDescrip}</p>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
