import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

// Pages
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Completed from "./pages/Completed";
import Incompleted from "./pages/Incompleted";
import About from "./pages/About";
import Explore from "./pages/Explore";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/incompleted" element={<Incompleted />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
