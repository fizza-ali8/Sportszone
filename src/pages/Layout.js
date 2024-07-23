import React from 'react';
import Navbar from ".././components/navbar";
import Header from ".././components/header";
import { Outlet} from "react-router-dom";
const Layout = () => {
  return(
    <div>
    <Header/>
    <Navbar />
    <Outlet />
    </div> 
  );
};

export default Layout;
