import LogoHeader from "../assets/LogoHeader.svg"
import "../styles/Header.css"
import {Link} from "react-router-dom";

function Header(){
    return(
        <header className= "header">
            <nav className="header-nav">
                <div className="header-logo">
                    <Link to="/">
                        <img src={LogoHeader} alt="Kasa logo" />
                    </Link>
                </div>
                <ul className="header-menu">
                    <Link to="/">
                        <li className="header-menu-link">Accueil</li>
                    </Link>
                    <Link to="/a-propos">
                        <li className="header-menu-link">A Propos</li>
                    </Link>
                </ul>

            </nav>
        </header>
    )
}


export default Header
