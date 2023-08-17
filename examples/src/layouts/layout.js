import { Outlet, Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Layout() {
  return (
    <>
      <Container>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/axios">Axios</Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
