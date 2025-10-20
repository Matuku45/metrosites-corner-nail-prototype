// src/App.jsx
import { useState } from 'react';
import Home from './pages/Home.jsx';
import HeaderForApp from './components/header.jsx';
import Footer from './components/footer.jsx';
import './App.css'; // Tailwind CSS styles

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-gray-100 shadow-md">
        <HeaderForApp />
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <Home />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-6">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
