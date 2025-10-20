import { useState } from 'react';
import Home from './pages/Home.jsx';
import './App.css'; // Import Tailwind CSS styles

function App() {
  return (
    <>
      <Home />
      <div className="max-w-2xl mx-auto p-6 text-center">
        <p className="text-red-600 mb-4">
          This is a test paragraph! You can change its color and style using Tailwind classes.
        </p>
        <p className="text-blue-600/75 dark:text-sky-400/75">
          Another paragraph with opacity and dark mode support.
        </p>
      </div>
    </>
  );
}

export default App;
