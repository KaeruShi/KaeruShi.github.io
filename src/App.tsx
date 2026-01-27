import Navbar from "./components/Navbar.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Contact from "./components/Contact.tsx";

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
