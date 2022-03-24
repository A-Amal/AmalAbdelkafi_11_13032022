import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "../styles/Home.css"
import Dropdown from "../components/Dropdown";


function Apartment(){
    const params = useParams()
    const [houseDetails, setHouseDetails] = useState({})
    const [error, setError] = useState(null)
    //const [hostData, setHostData] = useState(null)
    const [isDataLoading, setDataLoading] = useState(false)

    useEffect(async () => {

       await  fetchIdData()
    }, [])
    async function fetchIdData() {
        try {
            const response = await fetch('../api/data.json')
            const dataList = await response.json()
            console.log(dataList)
            const houseDetails = dataList.find(object => object.id === params.id)
            console.log(params.id)
            console.log(houseDetails)
            setHouseDetails(houseDetails)
        } catch (error) {
            console.error(error);
            setError(error)
        } finally {
        }
    }

    if (error) {
        return <span>Oups, il y a eu un problème.</span>
    }
    const { title, pictures, description, host, rating, location, equipments, tags} = houseDetails
    return (
                <div className="page-apartment">

                    <div className="apartment-header">
                        <div className="apartment-header-1">
                            <h1 className="apartment-header-title">{title}</h1>
                            <p className="apartment-header-secondary">{location}</p>
                            <ul className="apartment-header-tags">
                                {tags && tags.map((tag, index) => (
                                    <li className="apartment-header-tag" key={`tag-${index}`}>{tag}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="apartment-header-2">
                            <div className="apartment-header-host">
                                <div className="apartment-header-host-name">{host && host.name}</div>
                                <div className="apartment-header-host-picture">
                                    <img src={host && host.picture} alt={host && host.name}/>
                                </div>
                            </div>
                            {/*
                        <Rating stars={getResult.rating} />

    */}

                        </div>
                    </div>

                    <div className="apartment-content">
                        <div className="apartment-content-description">
                            <Dropdown title="Description">
                                {description}
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
