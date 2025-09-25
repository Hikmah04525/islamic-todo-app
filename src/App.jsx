import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

// Pages
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Explore from "./pages/Explore";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-800">
        {/* Navbar */}
        <Header />

        {/* Page content */}
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

