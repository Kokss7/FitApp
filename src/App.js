import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Spinner from "./components/Spinner";
import Home from "./Home";
import Feature from "./pages/Feature";
import Footer from "./components/Footer";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <Router>
      {/* <div className="container-xxl bg-white p-0"> */}
        <Spinner />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Feature />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      {/* </div> */}
      <Footer />
    </Router>
  );
}

export default App;
