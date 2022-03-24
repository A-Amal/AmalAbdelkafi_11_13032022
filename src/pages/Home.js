import homeImg from '../assets/home.jpg'
import data from '../assets/data.json'
import '../styles/Home.css'
import {Link} from "react-router-dom";

function Home(){
    return(
        <div className="page-home">
            <div className="page-home-header">
                <img src={homeImg} alt="landscape" />
                <h1 className="page-home-header-title">Chez vous, partout et ailleurs</h1>
            </div>
            <div className="page-home-list">
                {data.map((item, index) => (
                    <Link to={`/appartement/${item.id}`} key={index} state={item}>
                        <div className="card">
                            <div className="card-image">
                                <img src={item.cover} alt={item.title} />
                            </div>
                            <div className="card-title">
                                {item.title}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}
export default Home;
