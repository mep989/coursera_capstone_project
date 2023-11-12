import { Button, Container, Row, Col } from "react-bootstrap";
import restaurantFood from "images/restaurant_food.jpg";

import "./Header.scss";

function Header() {
  const headerDescrip = `We are a family owned 
Mediterranean restaurant, 
focused on traditional 
recipes served with a modern 
twist.`;

  return (
    <header id="page-top">
      <Container>
        <Row>
          <Col>
            <section>
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <pre className="header-description">{headerDescrip}</pre>
              <Button>
                <span>Reserve a Table</span>
              </Button>
            </section>
          </Col>
          <Col>
            <div className="right-align">
              <img src={restaurantFood} alt="Reserve a Table" width="400" />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
