// src/App.jsx
import { useState } from 'react';
import Home from './pages/Home.jsx';
import HeaderForApp from './components/header.jsx';
import Footer from './components/footer.jsx';
import './App.css'; // Tailwind CSS styles

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <HeaderForApp />

      {/* Main Content */}
      <main className="flex-grow">
        <Home />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
