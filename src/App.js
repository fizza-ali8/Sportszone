import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home.js';
import NoPage from './pages/NoPage';
import News from './pages/News';
import NewsDetails from './components/NewsDetails.js';
import Matches from './pages/Matches';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';
import LiveUpdates from './components/LiveUpdates';
import Sports from './pages/Sports';
import International from './pages/International.js';
import Article from './pages/Articles';
import ArticleDetail from './components/ArticleDetail';
import LiveScreen from './pages/LiveScreen.js';
import SubCard from './components/NewsDetails'; // Ensure this import is correct and the file exists

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/live-updates" element={<LiveUpdates />} />
        <Route path="/NewsDetails" element={< NewsDetails/>} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/International" element={<International />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="/LiveScreen" element={<LiveScreen />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
