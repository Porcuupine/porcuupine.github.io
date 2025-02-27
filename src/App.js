import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import logo from "./components/logo_transparent.png";

import "./App.css";

// Function to handle smooth scrolling when navigating
const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};

// Single Page Layout with All Sections
const MainPage = () => {
  return (
    <div>
      <Header />
      <div className="logo">
        <a href="/">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
      </div>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/#services">Our services include</Link>
          </li>
          <li>
            <Link to="/#gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/#testimonials">Customer reviews</Link>
          </li>
          <li>
            <Link to="/#features">Special features</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <ScrollToSection />
      <main>
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

// App Component with Routes
const App = () => (
  <Router>
    <Routes>
      <Route path="/*" element={<MainPage />} />
    </Routes>
  </Router>
);

export default App;
