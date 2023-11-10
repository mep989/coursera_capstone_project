import Button from "react-bootstrap/Button";
import restaurantFood from "../images/restaurant_food.jpg";

function Header() {
  return (
    <header>
      <section>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Button>Reserve a Table</Button>
      </section>
      <img src={restaurantFood} alt="Reserve a Table" width="400" />
    </header>
  );
}

export default Header;
