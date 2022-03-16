import LogoHeader from "../assets/LogoHeader.svg"
import "../styles/Header.css"
import {Link, NavLink} from "react-router-dom";

function Header(){
    return(
        <header className= "header">
            <nav className="header-nav">
                <div className="header-logo">
                    <NavLink to="/">
                        <img src={LogoHeader} alt="Kasa logo" />
                    </NavLink>
                </div>
                <ul className="header-menu">
                    <NavLink to="/">
                        <li className="header-menu-link">Accueil</li>
                    </NavLink>
                    <NavLink to="/about">
                        <li className="header-menu-link">A Propos</li>
                    </NavLink>
                </ul>

            </nav>
        </header>
    )
}


export default Header
