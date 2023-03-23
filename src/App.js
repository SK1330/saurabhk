import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
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
    </div>
  );
}

export default App;
