import homeImg from '../assets/home.jpg'
import data from '../assets/data.json'
import '../styles/Home.css'
import CardApartement from "../components/CardApartement";

function Home(){
    return(
        <div className="page-home">
            <div className="page-home-header">
                <img src={homeImg} alt="landscape" />
                <h1 className="page-home-header-title">Chez vous, partout et ailleurs</h1>
            </div>
            <div className="page-home-list">
                {data.map((item, index) => (
                    <CardApartement item={item} index={index} key={index}/>
                ))}
            </div>

        </div>
    )
}
export default Home;
