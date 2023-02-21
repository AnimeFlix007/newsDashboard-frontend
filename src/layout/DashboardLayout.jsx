import React from "react";
import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/shared/Sidebar";

const DashboardLayout = ({ childrem }) => {
  return (
    <div>
      {/* <Navbar /> */}
      {childrem}
      {/* <Sidebar /> */}
    </div>
  );
};

export default DashboardLayout;
