import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import News from './pages/News';
import SubCard from './components/SubCard';
import Footer from './components/Footer';

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="subcard" element={<SubCard />} /> {/* Ensure this matches the Card navigation */}
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
};

export default App;
