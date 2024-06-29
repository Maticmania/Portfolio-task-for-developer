import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills from "./components/MySkills";
import About from "./pages/About";
import ContactForm from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimony";

function App() {
  return (
    <>
    <div>
      <Header/>
      <Home/>
      <Skills/>
      <About/>
      <Portfolio/>
      <Testimonials/>
      <ContactForm/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
