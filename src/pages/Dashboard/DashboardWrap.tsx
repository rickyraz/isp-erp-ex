// import SideNav from "@/components/Nav/SideNav";
import SideNav2 from "@/components/Nav/SideNav";
import TableContainer from "@/components/Table/y-shadcn-table";
// import { Button } from "@/components/ui/button";

import { Outlet } from "@tanstack/react-router";

function Dashboard() {
  return (
    <div className="flex ">
      {/* <SimpleTable /> */}
      {/* <SideNav /> */}
      <SideNav2 />
      <section>
        <TableContainer />
        <Outlet />
      </section>
    </div>
  );
}

export default Dashboard;
