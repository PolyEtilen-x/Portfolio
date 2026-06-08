import { Routes, Route } from 'react-router-dom';
import Hero from './pages/Hero';
import Projects from './pages/Project';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutMe from './pages/About';
import BandBuilderProject from './pages/BandBuilderProject';
import LearnityProject from './pages/LearnityProject';
import CVViewer from './pages/CVViewer';

function App() {
  return (
    <div className="font-sans text-zinc-100">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutMe />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/project/bandbuilder" element={<BandBuilderProject />} />
        <Route path="/project/learnity" element={<LearnityProject />} />
        <Route path="/cv" element={<CVViewer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
