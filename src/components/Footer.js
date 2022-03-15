import "../styles/Footer.css"
import {Link} from "react-router-dom";
import LogoFooter from "../assets/LogoFooter.svg"



function Footer(){
    return(
        <footer className="footer">
            <section className="footer-container">
                <Link to="/">
                    <h2 className="footer-logo">
                        <img src={LogoFooter} alt="Kasa Logo" />
                    </h2>
                </Link>
                <p className="footer-copyright">© 2020 Kasa. All rights reserved</p>
            </section>
        </footer>
    )
}


export default Footer
