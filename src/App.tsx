import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import VPSPage from './pages/VPSPage';
import DedicatedPage from './pages/DedicatedPage';
import GameServersPage from './pages/GameServersPage';
import ColocationPage from './pages/ColocationPage';
import AboutPage from './pages/AboutPage';
import DataCenterPage from './pages/DataCenterPage';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% ${scrollY * 0.1}%, rgba(99, 102, 241, 0.15), transparent 50%)`,
        }}
      />

      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vps" element={<VPSPage />} />
        <Route path="/dedicated" element={<DedicatedPage />} />
        <Route path="/game-servers" element={<GameServersPage />} />
        <Route path="/colocation" element={<ColocationPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/data-center" element={<DataCenterPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
