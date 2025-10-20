// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import HeaderForApp from "./components/header";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <HeaderForApp />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Add other routes like Booking, Services, Gallery */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
