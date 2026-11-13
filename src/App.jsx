import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="wrap">
        <About />
        <Experience />
        <Projects />
        <Skill />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}