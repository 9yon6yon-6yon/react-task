import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import MovieSection from "./components/MovieSection";
import NavSection from "./components/NavSection";
import ServicesSection from "./components/ServicesSection";
import HomePage from "./components/User/HomePage";

function App() {
  return (
    <Router>
    <div className="font-BebasNeue">
      {/* Define your routes */}
      <Routes>
        {/* Default route to show your main page */}
        <Route
          path="/"
          element={
            <>
              <NavSection />
              <HeroSection />
              <AboutSection />
              <MovieSection />
              <ServicesSection />
              <FooterSection />
            </>
          }
        />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
