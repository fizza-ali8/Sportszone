import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import Header from '../components/header';
import { ThemeProvider } from '../components/ThemeContext';

const Layout = () => {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Navbar />
        <Outlet />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
