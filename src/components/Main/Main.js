import { v4 } from "uuid";
import { Button, Container, Row, Col } from "react-bootstrap";
import greekSalad from "images/greek_salad.jpg";
import bruchetta from "images/bruchetta.svg";
import lemonDessert from "images/lemon_dessert.jpg";
import Card from "../MainCard/MainCard";

import "./Main.scss";

const cardValues = [
  {
    title: "Greek salad",
    imageSrc: greekSalad,
    description: `The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.`,
    price: "$12.99",
  },
  {
    title: "Bruchetta",
    imageSrc: bruchetta,
    description: `Our Bruschetta is made from grilled bread that has been
                  smeared with garlic and seasoned with salt and olive oil.`,
    price: "$5.99",
  },
  {
    title: "Lemon Dessert",
    imageSrc: lemonDessert,
    description: `This comes straight from grandma&apos;s recipe book, every
                  last ingredient has been sourced and is as authentic as can be
                  imagined.`,
    price: "$5.00",
  },
];

const cards = cardValues.map((props) => {
  return (
    <Col key={v4()}>
      <Card {...props} />
    </Col>
  );
});

function Main() {
  return (
    <main>
      <Container>
        <Row>
          <Col xs={7}>
            <h1>This weeks specials!</h1>
          </Col>
          <Col className="right-align">
            <Button>
              <span>Online Menu</span>
            </Button>
          </Col>
        </Row>
        <Row className="bottom-row">{cards}</Row>
      </Container>
    </main>
  );
}

export default Main;
