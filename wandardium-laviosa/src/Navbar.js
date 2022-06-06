const Navbar = () => {
  return (
    <div className="navbar container">
      <div class="nav-main d-flex">
        <div class="nav-header">
          <header>Wandardium-Leviosa</header>
          <div
            className="hamburger-icon"
            onClick={() =>
              document.querySelector(".menu").classList.toggle("show-menu")
            }
          ></div>
        </div>
        <ul class="menu show-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
