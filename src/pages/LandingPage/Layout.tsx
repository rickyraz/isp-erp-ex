import Header from "@/components/Main/Header";
import { Outlet } from "@tanstack/react-router";
function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
