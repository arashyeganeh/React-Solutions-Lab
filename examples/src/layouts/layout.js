import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import SidebarPartialLayout from "./shared/Sidebar";

function Layout() {
  return (
    <>
      <Container>
        <div className="row">
          <div className="col-2">
            <SidebarPartialLayout />
          </div>
          <div className="col-10">
            <Outlet />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Layout;
