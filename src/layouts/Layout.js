import { Outlet } from "react-router-dom";
import FooterPartialLayout from "./shared/Footer";

function Layout() {
  return (
    <>
      <Outlet />
      <FooterPartialLayout />
    </>
  );
}

export default Layout;
