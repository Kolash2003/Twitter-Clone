import React from "react";
import Leftsidebar from "./Leftsidebar";
import Rightsidebar from "./Rightsidebar";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="flex justify-between w-[80%] mx-auto">
      <Leftsidebar />
      <Outlet />
      <Rightsidebar />
    </div>
  );
}

export default Home;
