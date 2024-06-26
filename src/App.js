import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills/>
      <Services/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
