import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home.js';
import NoPage from './pages/NoPage';
import News from './pages/News';
import SubCard from './components/SubCard';
import Matches from './pages/Matches';
import Sports from './pages/Sports';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/subcard" element={<SubCard />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
