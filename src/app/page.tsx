import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-6 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:text-white focus:outline-2 focus:outline-offset-2 focus:outline-accent"
      >
        Перейти к основному содержимому
      </a>
      <ScrollRevealObserver />
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
        className="bg-background font-sans text-primary"
      >
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
