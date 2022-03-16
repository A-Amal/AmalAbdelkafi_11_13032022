import about from '../assets/about.jpg'
import '../styles/About.css'
import Dropdown from "../components/Dropdown";

function About(){
    return(
        <div className="page-about">
            <div className="page-about-header">
                <img src={about} alt="landscape" />
            </div>
            <div className="page-about-us-content">
                <Dropdown title="Fiabilité">
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                </Dropdown>
                <Dropdown title="Respect">
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </Dropdown>
                <Dropdown title="Service">
                    Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                </Dropdown>
                <Dropdown title="Responsabilité">
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </Dropdown>
            </div>
        </div>
    )
}
export default About
