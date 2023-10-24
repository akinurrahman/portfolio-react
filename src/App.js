import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutMe />
      <Education />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
