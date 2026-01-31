import Navbar from "./components/Navbar.tsx";
import Home from "./components/section/Home.tsx";
import About from "./components/section/About.tsx";
import Projects from "./components/section/Projects.tsx";
import Contact from "./components/section/Contact.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
