import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import "./index.scss";
import { useEffect } from "react";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
