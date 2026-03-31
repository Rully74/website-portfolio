import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <main className="page-container">
        <Hero />
        <Experience />
        <Projects />
      </main>
    </>
  );
}

export default App;
