import { Link } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../images/jobshub-logo.png";
import { FaUserCircle } from "react-icons/fa";
import Login from "./Login";
import perfilIcon from "../images/perfil-icon.png";
import { useState } from "react";

export default function Navbar() {
  // const openLogin = () => {
  //   const login = document.querySelector(".login-page");
  //   login.innerHTML = "<Login />";
  // };

  const [login, setLogin] = useState(false);

  const loginOpen = () => {
    console.log("Chegou");
    setLogin(!login);
  };
  return (
    <nav className="navbar" id="navbar">
      {function login() {
        if (login) {
          return <Login />;
        } else {
          return <div></div>;
        }
        login()
      }
      }
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
      <div className="navbar-right" onClick={() => loginOpen()}>
        <p>Lucca Vinicius</p>
        <img src={perfilIcon} alt="" className="perfil-icon" />
      </div>
    </nav>
  );
}
