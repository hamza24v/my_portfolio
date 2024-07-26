import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import SocialHandle from "./components/ui/SocialHandle";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="relative z-50 ">
          <Navbar />
        </div>
        <section id="about" className="">
          <div className="flex flex-col items-center justify-center min-h-screen">
            <About />
            <SocialHandle />
          </div>
        </section>
        <section className=" relative z-30" id="experience">
          <Experience />
        </section>
        <section className=" relative z-30" id="testimonials">
          <Testimonials />
        </section>
        <section className=" relative z-30" id="projects">
          <Projects />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
