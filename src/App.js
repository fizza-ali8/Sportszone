import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home.js';
import NoPage from './pages/NoPage';
import News from './pages/News';
import SubCard from './components/SubCard';
import Matches from './pages/Matches';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';
import LiveUpdates from './components/LiveUpdates.js'; // Import LiveUpdates component

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="matches" element={<Matches />} />
          <Route path="subcard" element={<SubCard />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="live-updates" element={<LiveUpdates />} /> {/* Add LiveUpdates route */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
