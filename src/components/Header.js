import Button from "react-bootstrap/Button";

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
      <img src="../images/reserve.png" alt="Reserve a Table" />
    </header>
  );
}

export default Header;
