import { Outlet } from "react-router-dom";
import SidebarPartialLayout from "./shared/Sidebar";
import FooterPartialLayout from "./shared/Footer";

function Layout() {
  return (
    <>
      <div className="flex">
        <div className="bg-gray-100 w-1/5 p-5">
          <SidebarPartialLayout />
        </div>
        <div className="w-4/5 p-5">
          <Outlet />
        </div>
      </div>
      <FooterPartialLayout />
    </>
  );
}

export default Layout;
