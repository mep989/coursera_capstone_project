function Nav() {
  return (
    <nav id="page-top">
      <a href="#page-top">
        <img
          className="navbar-logo"
          src="assets/img/logo.svg"
          alt="Company logo"
        />
      </a>
      <ul>
        <li>
          <a href="/home">HOME</a>
        </li>
        <li>
          <a href="/about">ABOUT</a>
        </li>
        <li>
          <a href="/menu">MENU</a>
        </li>
        <li>
          <a href="/reservations">RESERVATIONS</a>
        </li>
        <li>
          <a href="/order-online">ORDER ONLINE</a>
        </li>
        <li>
          <a href="/login">LOGIN</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
