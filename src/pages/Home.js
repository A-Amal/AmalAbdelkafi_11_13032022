import homeImg from '../assets/home.jpg'
import data from '../assets/data.json'
import '../styles/Home.css'
import {Link} from "react-router-dom";
import Appartement from "../components/Appartement";

function Home(){
    return(
        <div className="page-home">
            <div className="page-home-header">
                <img src={homeImg} alt="landscape" />
                <h1 className="page-home-header-title">Chez vous, partout et ailleurs</h1>
            </div>
            <div className="page-home-list">
                {data.map((item, index) => (
                    <Appartement item={item} index={index}/>
                ))}
            </div>

        </div>
    )
}
export default Home;
