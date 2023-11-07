"use client";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Certificate from "./components/certificates";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Certificate/>
      <Skills />
      <Project />
      <Contact />
      <Footer />
   
     
    </div>

  );
};

export default App;
