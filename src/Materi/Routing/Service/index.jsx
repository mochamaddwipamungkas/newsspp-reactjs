import { Link, Outlet } from "react-router-dom";

const Service = () => {
    return (
        <div>
            <h2>Service Page</h2>
            <ul>
                <li><Link to="/service/computer">Computer</Link></li>
                <li><Link to="/service/mobile">Mobile</Link></li>
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}

export default Service;