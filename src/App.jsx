import { Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import Projects from './pages/Project';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutMe from './pages/About'; 

function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutMe/>
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/aboutMe" element={<AboutMe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
