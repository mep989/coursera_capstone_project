import { Container, Row, Col } from "react-bootstrap";
import MainCard from "../MainCard/MainCard";

import "./Main.scss";

function Main() {
  return (
    <main className="reserve-view fade-in">
      <Container>
        <Row className="bottom-row gx-4">
          <Col>
            <MainCard />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Main;
