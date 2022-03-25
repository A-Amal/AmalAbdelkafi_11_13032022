import chevronDown from '../assets/chevron-down.svg'
import '../styles/Dropdown.css'
import {useState} from "react";


function Dropdown({title, children}){
    const [show, setShow] =useState(false)
    return(
        <div className="dropdown">
            <div className="dropdown-header" >
                <span>{title}</span>
                <img className={show ? 'down' : 'up'} src={chevronDown} alt="Chevron" onClick={()=>setShow(!show)}/>
            </div>
            <div className={show ? 'dropdown-content active' : 'dropdown-content'}>
                <div className="dropdown-content-wrapper">{children}</div>
            </div>
        </div>
    )
}
 export default Dropdown

