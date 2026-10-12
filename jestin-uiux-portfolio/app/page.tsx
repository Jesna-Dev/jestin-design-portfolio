import About from "./components/About";
import Blog from "./components/Blog";
import Clients from "./components/Clients";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Works from "./components/Works";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Works />
        <Services />
        <Process />
        <Testimonials />
        <Clients />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
