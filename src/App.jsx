// src/App.jsx
import { useState } from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import HeaderForApp from "./components/Header.jsx";
import Footer from "./components/footer.jsx";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("home"); // Track current page

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with callback to change page */}
      <HeaderForApp setActivePage={setActivePage} />

      {/* Main content */}
      <main className="flex-grow pt-20">
        {activePage === "home" && <Home />}
        {activePage === "about" && <About />}
        {/* Add other pages similarly if needed */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
