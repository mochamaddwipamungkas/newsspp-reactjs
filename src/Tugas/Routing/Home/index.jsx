import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h2>Home Page</h2>
            <ul>
                <li><Link to="/satu">satu</Link> </li>
                <li><Link to="/dua">dua</Link> </li>
                <li><Link to="/tiga">tiga</Link> </li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique possimus quaerat illo cumque omnis nihil natus earum temporibus ab. Quia ex amet facere perferendis corrupti suscipit numquam dolores, aliquid sit?</p>
        </div>
    )
}

export default Home;