import starFull from "../assets/star-full.svg"
import starEmpty from "../assets/star-empty.svg"
import "../styles/Stars.css"


function Stars({rating}){
   const rate = []
    for(let i = 1; i <= 5; i++) {
        rate.push(i <= rating)
    }
    return (
        <ul className="rating">
            { rate.map((star, index) => (
                <li className={star ? 'rating-star active' : 'rating-star'} key={`star-${index}`}>
                    <img src={star ? starFull : starEmpty} alt={star ? 'Star full' : 'Star empty'} />
                </li>
            ))}
        </ul>
    )
}
export default Stars
