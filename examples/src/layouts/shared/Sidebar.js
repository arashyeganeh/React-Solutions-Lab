import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/axios">Axios</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
