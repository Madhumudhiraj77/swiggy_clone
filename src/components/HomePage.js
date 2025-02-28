import React from "react";
import Header from "./Header";
import Body from "./Body";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Header />
      {/* <Body /> */}
        <Outlet/>
    </div>
  );
};

export default HomePage;
