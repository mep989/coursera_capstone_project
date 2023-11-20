import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

import "./MainCard.scss";

function Card({ title, imageSrc, description, price }) {
  Card.propTypes = {
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  };

  return (
    <article className="main-card">
      <img src={imageSrc} alt={title} />
      <section>
        <h3>{title}</h3>
        <p>{price}</p>
      </section>
      <p>{description}</p>
      <Button variant="link">
        Order a delivery <FontAwesomeIcon icon={faTruck} />
      </Button>
    </article>
  );
}

export default Card;
