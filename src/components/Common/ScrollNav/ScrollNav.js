import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";

import "./ScrollNav.scss";

function ScrollNav() {
  const currentUrl = useLocation();

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

  // Scroll to #page-top
  const scrollToTop = (toUrl) => {
    const pageTop = document.body.querySelector("#page-top");
    let behavior = "smooth";
    if (toUrl !== currentUrl.pathname) behavior = "instant";

    window.scrollTo({
      top: pageTop,
      behavior,
    });
  };

  return (
    <Navbar id="main-nav" expand="lg" className="scroll-nav">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand onClick={() => scrollToTop("/")}>
            <img
              className="navbar-logo"
              src="assets/img/logo.svg"
              alt="Company logo"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <LinkContainer to="/" onClick={() => scrollToTop("/")}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/under-maintenance">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/under-maintenance">
              <Nav.Link>Menu</Nav.Link>
            </LinkContainer>
            <LinkContainer
              to="/reserve"
              onClick={() => scrollToTop("/reserve")}
            >
              <Nav.Link>Reservations</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/under-maintenance">
              <Nav.Link>Order Online</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/under-maintenance">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ScrollNav;
