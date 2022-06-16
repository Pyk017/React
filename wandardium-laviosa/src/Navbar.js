const Navbar = () => {
  return (
    <div className="navbar container">
      <div className="nav-main d-flex">
        <div className="nav-header">
          <header>Wandardium-Leviosa</header>
          <div
            className="hamburger-icon"
            onClick={() =>
              document.querySelector(".menu").classList.toggle("show-menu")
            }
          ></div>
        </div>
        <ul className="menu">
          <li>
            <a href="/">Number Generator</a>
          </li>
          <li>
            <a href="/">Personal Leaderboard</a>
          </li>
          <li>
            <a href="/">World Country Data</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
