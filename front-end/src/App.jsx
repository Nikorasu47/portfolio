import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./layout/header/header";
import Footer from "./layout/footer/footer";
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import Technologies from "./pages/technologies/technologies";
import Services from "./pages/services/services.jsx";
import Portfolio from "./pages/portfolio/portfolio";

function App() {
  return (
    <div>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/portfolio" element={<Portfolio />} />
          
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
