import "./Navbar.css"
import {Link} from 'react-router-dom'

const Nitem =({title, to})=>{
    return(
        <li>
           <Link to={to}>{title}</Link> 
        </li>
    )
}
const Navbar  = ({children, logo})=>{
    return(
        <nav className="Navbar">
            <img src={logo} alt="logo"/>
            <ul>
                {children}
            </ul>
        </nav>
    )
}

export {Navbar, Nitem}