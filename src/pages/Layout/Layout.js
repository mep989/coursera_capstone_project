import { Outlet } from "react-router-dom";
import ScrollNav from "components/ScrollNav/ScrollNav";

function Layout() {
  return (
    <>
      <ScrollNav />
      <Outlet />
    </>
  );
}

export default Layout;
