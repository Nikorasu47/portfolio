
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__brand">FORT Nicolas</Link>
        <nav className="header__nav">
          <Link to="/services" className="header__link">SERVICES</Link>
          <Link to="/technologies" className="header__link">TECHNOLOGIES</Link>
          <Link to="/portfolio" className="header__link">PORTFOLIO</Link>
          <Link to="/contact" className="header__link">CONTACT</Link>
        </nav>
        <button className="header__lang">
          FR <span className="material-icons">language</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
