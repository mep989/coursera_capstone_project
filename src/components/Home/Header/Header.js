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
    <header id="page-top" className="home-view fade-in">
      <div className="float-background" />
      <Container>
        <Row>
          <Col xs={12} sm={7}>
            <section>
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <pre className="header-description">{headerDescrip}</pre>
              <Button>
                <span>Reserve a Table</span>
              </Button>
            </section>
          </Col>
          <Col className="shrink-image" xs={12} sm={5}>
            <div className="right-align">
              <img src={restaurantFood} alt="Reserve a Table" />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
