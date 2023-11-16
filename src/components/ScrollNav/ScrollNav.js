import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./ScrollNav.scss";

function ScrollNav() {
  useEffect(() => {
    // Navbar shrink function
    const navbarShrink = () => {
      const navbarCollapsible = document.body.querySelector("#main-nav");
      if (!navbarCollapsible) {
        return;
      }
      if (window.scrollY < 10) {
        navbarCollapsible.classList.remove("navbar-shrink");
      } else {
        navbarCollapsible.classList.add("navbar-shrink");
      }
    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener("scroll", navbarShrink);
  }, []);

  return (
    <Navbar id="main-nav" expand="lg" className="scroll-nav">
      <Container>
        <Navbar.Brand href="/home#page-top">
          <img
            className="navbar-logo"
            src="assets/img/logo.svg"
            alt="Company logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="/reservations">Reservations</Nav.Link>
            <Nav.Link href="/order-online">Order Online</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ScrollNav;
