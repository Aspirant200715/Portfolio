import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, Research, Achievements, Education, StarsCanvas } from "./components";
import ProfessionalBackground from "./components/ProfessionalBackground";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <BrowserRouter>
      <CustomCursor />
      <div className='relative z-0 bg-primary'>
        <ProfessionalBackground />
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Experience />
        <Tech />
        <Works />
        <Research />
        <Achievements />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
