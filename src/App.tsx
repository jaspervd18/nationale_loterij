import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Vote from "./components/Vote";
import Footer from "./components/Footer";
import Ranking from "./components/Ranking";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-slate-50">
        <div className="container py-8 grow px-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/vote" element={<Vote />} />
            <Route path="/ranking" element={<Ranking />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
