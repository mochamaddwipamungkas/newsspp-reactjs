import { Link } from "react-router-dom";
import "./index.css"

const Navigation = () => {
    return (
        <div className="sidebar">
            <Link className="linka" to="/"> <i className="fa fa-fw fa-home"></i> Home</Link>
            <Link className="linka" to="service"> <i className="fa fa-fw fa-wrench"></i> Service</Link>
            <Link className="linka" to="clients"> <i className="fa fa-fw fa-user"></i> Clients</Link>
            <Link className="linka" to="contact"> <i className="fa fa-fw fa-envelope"></i> Contact</Link>
        </div>
    )
}

export default Navigation;