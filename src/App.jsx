import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Experience } from "./components/Experience/Experience";

function App() {
  return (
    <>
      <Navbar />
      <main className="page-container">
        <Hero />
        <Experience />
      </main>
    </>
  );
}

export default App;
