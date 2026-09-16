import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white font-sans text-gray-950">
        <Hero />
        <About />
        <Services />
      </main>
    </>
  );
}
