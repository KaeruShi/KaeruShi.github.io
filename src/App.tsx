import Navbar from "./components/Navbar.tsx";
import Home from "./components/section/Home.tsx";
import About from "./components/section/About.tsx";
import Projects from "./components/section/Projects.tsx";
import Contact from "./components/section/Contact.tsx";

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

      <footer className="mt-16 flex items-center justify-center py-4">
        <p>&copy; 2026 KaeruShi Portofolio Page</p>
      </footer>
    </>
  );
}

export default App;
