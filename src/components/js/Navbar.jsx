import { Link } from "react-router-dom";
import '../css/Navbar.css';
import logo from '../images/jobshub-logo.png';

export default function Navbar() {
  return (
    <nav className="navbar" id="navbar">
        <div className="navbar-left">
            <ul>
                <li>
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="JobsHub logo"/></Link>
                    </div>
                </li>
                <li><Link to="/">Página Inicial</Link></li>
                <li><Link to="/categoria">Categoria</Link></li>
                <li></li>
            </ul>
        </div>
            <div className="navbar-content">
                <div className="ct-navbar">
                    <a href="#">Página inicial</a>
                </div>
                
                <div className="ct-navbar categoria-content">
                    <a href="#" className="categoria">Categorias</a>
                    <div className="trabalho-categoria">
                        <a href="#" className="trabalho">Trabalho digital</a>
                        <a href="#" className="trabalho">Trabalho Manual</a>
                    </div>
                </div>
                
                <div className="ct-navbar">
                    <a href="#">Dúvidas</a>
                </div>
                
                <div className="ct-navbar">
                    <a href="#">Contatos</a>
                </div>
                
                <div className="perfil-icon">
                    <a href="./signInPage.html">
                        <div className="img-signIn">
                            <img src="./img/perfil-icon.png" alt="" classNameName="icon-perfil" />
                        </div>
                    </a>
                </div>
            </div>
            
        </nav>
  );
}
