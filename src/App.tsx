import { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'dashboard'>('landing');

  return (
    <div className="min-h-screen">
      {currentPage === 'landing' ? (
        <LandingPage onNavigate={() => setCurrentPage('dashboard')} />
      ) : (
        <Dashboard onNavigate={() => setCurrentPage('landing')} />
      )}
    </div>
  );
}

export default App;
