import { Outlet } from "react-router-dom";
import FooterLayout from "./shared/Footer";

function Layout() {
  return (
    <>
      <Outlet />
      <FooterLayout />
    </>
  );
}

export default Layout;
