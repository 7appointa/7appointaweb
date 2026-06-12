import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import CareersPage from './pages/CareersPage';

export default function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  // Simple hash-based routing
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#careers') setPage('careers');
      else setPage('home');
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigate = (p) => {
    window.location.hash = p === 'home' ? '' : p;
    setPage(p);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar navigate={navigate} currentPage={page} />
      <main style={{ flex: 1 }} className="page-enter" key={page}>
        {page === 'home'    && <LandingPage navigate={navigate} />}
        {page === 'careers' && <CareersPage />}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}
