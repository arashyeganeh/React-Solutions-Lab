import { Link } from "react-router-dom";

function Sidebar() {
    return <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/axios">Axios</Link>
        </li>
    </ul>;
}

export default Sidebar;