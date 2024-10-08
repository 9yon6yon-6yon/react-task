import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import MovieSection from "./components/MovieSection";
import NavSection from "./components/NavSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <Router>
      <div className="font-BebasNeue">
        <NavSection />
        <HeroSection />
        <AboutSection />
        {/* <MovieSection /> */}
        <ServicesSection />
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;
