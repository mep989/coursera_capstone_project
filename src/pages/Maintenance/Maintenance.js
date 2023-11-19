import { Container, Row, Col } from "react-bootstrap";
import Footer from "components/Footer/Footer";

import "./Maintenance.scss";

function Maintenance() {
  return (
    <>
      <header className="maintenance-page">
        <Container>
          <Row>
            <Col>
              <h1>Under Construction</h1>
            </Col>
          </Row>
        </Container>
      </header>
      <main className="maintenance-page fill-remaining">
        <Container>
          <Row>
            <Col>
              <p>This page is currently undergoing maintenance.</p>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default Maintenance;
