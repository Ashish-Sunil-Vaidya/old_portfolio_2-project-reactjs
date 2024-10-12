import "./App.css";
import Navbar from "./components/0-Navbar/Navbar";
import Home from "./components/1-Home/Home";
import About from "./components/2-About/About";
import Resume from "./components/3-Resume/Resume";
import Projects from "./components/4-Projects/Projects";
import Contact from "./components/5-Contact/Contact";
import "./components/0-Navbar/Navbar.css";
import "./components/1-Home/Home.css";
import "./components/2-About/About.css";
import "./components/3-Resume/Resume.css";
import "./components/4-Projects/Projects.css";
import "./components/5-Contact/Contact.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
