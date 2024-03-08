import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import About from "./components/About";
import Vote from "./components/Vote";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-slate-50">
        <div className="container py-16 grow">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/vote" element={<Vote />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
