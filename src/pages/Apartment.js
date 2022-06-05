import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "../styles/Home.css"
import "../styles/Apartement.css"
import Dropdown from "../components/Dropdown";
import Stars from "../components/Stars";
import SlideShow from "../components/SlideShow";
import Error from "./Error";
import {useNavigate} from 'react-router'


function Apartment() {
    const params = useParams()
    const [houseDetails, setHouseDetails] = useState({})
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    useEffect(async () => {

        await fetchIdData()
    }, [houseDetails])

    async function fetchIdData() {
        try {
            const response = await fetch('../api/data.json')
            const dataList = await response.json()
            console.log(dataList)
            const houseDetails = dataList.find(object => object.id === params.id)
            console.log(params.id)
            console.log(houseDetails)
            houseDetails ? setHouseDetails(houseDetails) : navigate('/404');

        } catch (error) {
            console.error(error);
            setError(true)
        } finally {
        }
    }
    const {title, pictures, description, host, rating, location, equipments, tags} = houseDetails
    return (
        <div className="page-apartment">
            {pictures && <SlideShow pictures={pictures}/>}
            <div className="apartment-header">
                <div className="apartment-header-1">
                    <h1 className="apartment-header-title">
                        {title}
                    </h1>
                    <p className="apartment-header-secondary">
                        {location}
                    </p>
                    <ul className="apartment-header-tags">
                        {tags && tags.map((tag, index) => (
                            <li className="apartment-header-tag" key={`tag-${index}`}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className="apartment-header-2">
                    <div className="apartment-header-host">
                        <div className="apartment-header-host-name">
                            {host && host.name}
                        </div>
                        <div className="apartment-header-host-picture">
                            <img src={host && host.picture} alt={host && host.name}/>
                        </div>
                    </div>
                    <Stars rating={rating}/>
                </div>
            </div>

            <div className="apartment-content">
                <div className="apartment-content-description">
                    <Dropdown title="Description">
                        {description && description}
                    </Dropdown>
                </div>
                <div className="apartment-content-equipments">
                    <Dropdown title="Équipements">
                        <ul>
                            {equipments && equipments.map((equipment, index) => (
                                <li key={`equipment-${index}`} className="apartment-content-equipment">
                                    {equipment}
                                </li>
                            ))}
                        </ul>
                    </Dropdown>
                </div>
            </div>

        </div>
    )
}

export default Apartment
