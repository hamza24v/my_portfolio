import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <section id='about'>
          <About />
        </section>
        <section id='experience'>
          <Experience />
        </section>
        <section id='testimonials'>
          <Testimonials />
        </section>
        <section id='projects'>
          <Projects />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
