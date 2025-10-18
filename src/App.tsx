import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SpotlightCursor from './components/SpotlightCursor';

function App() {
  return (
    <div className="bg-dark text-secondary min-h-screen cursor-none">
      <SpotlightCursor />
      <Header />
      
      {/* Main layout container */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Fixed left section - Hero & Footer - Hidden on mobile, shown on desktop */}
        <div className="hidden lg:flex fixed left-0 top-0 h-screen w-1/2 flex-col justify-between py-20 px-6 xl:px-12 z-30">
          <div className="flex-1 flex items-center">
            <Hero />
          </div>
          <Footer />
        </div>

        {/* Mobile Hero Section - Shown only on mobile */}
        <div className="lg:hidden px-6 pt-24 pb-12">
          <Hero />
        </div>

        {/* Scrollable right section - All other components */}
        <div className="lg:ml-[50%] lg:w-1/2 w-full relative z-20">
          <div className="px-6 lg:px-12">
            <About />
            <Experience />
            <Projects />
            <Contact />
          </div>

          {/* Mobile Footer - Shown only on mobile */}
          <div className="lg:hidden px-6 py-8">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;