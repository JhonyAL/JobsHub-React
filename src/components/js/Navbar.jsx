import { Link } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../images/jobshub-logo.png";

export default function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-left">
        <div className="items">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="JobsHub logo" />
            </Link>
          </div>
          <Link to="/">
            <div>Página Inicial</div>
            <i className="item-navbar"></i>
          </Link>
          <Link to="/categoria">
            <div>Categoria</div>
          </Link>
          <Link to="/contato">
            <div>Contato</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
