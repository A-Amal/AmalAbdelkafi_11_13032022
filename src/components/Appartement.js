import {Link} from "react-router-dom";

function Appartement({item, index}){
    return(
        <>
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
        </>
    )
}
export default Appartement
