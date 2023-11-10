import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

function Main() {
  return (
    <main>
      <section className="top_section">
        <h1>This weeks specials!</h1>
        <Button>Online Menu</Button>
      </section>
      <section className="bottom_section">
        <article className="bottom">
          <img src="../images/greek_salad.png" alt="Greek salad" />
          <h3>Greek salad</h3>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <Button variant="link">
            Order a delivery <FontAwesomeIcon icon={faTruck} />
          </Button>
        </article>
        <article className="bottom">
          <img src="../images/bruchetta.png" alt="Bruchetta" />
          <h3>Bruchetta</h3>
          <p>
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
          <Button variant="link">
            Order a delivery <FontAwesomeIcon icon={faTruck} />
          </Button>
        </article>
        <article className="bottom">
          <img src="images/lemon_dessert" alt="Lemon Dessert" />
          <h3>Lemon Dessert</h3>
          <p>
            This comes straight from grandma&apos;s recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <Button variant="link">
            Order a delivery <FontAwesomeIcon icon={faTruck} />
          </Button>
        </article>
      </section>
    </main>
  );
}

export default Main;
