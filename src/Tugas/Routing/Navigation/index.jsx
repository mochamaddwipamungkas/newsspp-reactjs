import { Link } from "react-router-dom";
import "./index.css"

const Navigation = () => {
    return (
        <div className="sidebar">
            <Link to="/"> <i className="fa fa-fw fa-home"></i> Home</Link>
            <Link to="form"> <i className="fa fa-fw fa-angle-right"></i> Form</Link>
            <Link to="hook"> <i className="fa fa-fw fa-angle-right"></i> Hook</Link>
            <Link to="component"> <i className="fa fa-fw fa-angle-right"></i> Component</Link>
            <Link to="lifecycle"> <i className="fa fa-fw fa-angle-right"></i> Lifecycle</Link>
            <Link to="rendering"> <i className="fa fa-fw fa-angle-right"></i> Rendering</Link>
            <Link to="reusable"> <i className="fa fa-fw fa-angle-right"></i> Reusable</Link>
            <Link to="styling"> <i className="fa fa-fw fa-angle-right"></i> Styling</Link>
            <Link to="newapps"> <i className="fa fa-fw fa-angle-right"></i> New Apps</Link>

        </div>
    )
}

export default Navigation;