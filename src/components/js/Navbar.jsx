import { Link } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../images/jobshub-logo.png";
import { FaUserCircle } from "react-icons/fa";
import Login from "./Login";

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
          <div clasName="item-div">
            <Link to="/">Página Inicial</Link>
          </div>
          <div clasName="item-div">
            <Link to="/categoria">Categoria</Link>
          </div>
          <div clasName="item-div">
            <Link to="/contato">Contato</Link>
          </div>
          <div clasName="item-div">
            <Link to="/sobre">Sobre</Link>
          </div>
        </div>
      </div>
      <Link to="/login" className="navbar-right">
        <p>Jorge Eduardo</p>
        <FaUserCircle className="perfil-icon"/>
      </Link>
    </nav>
  );
}
