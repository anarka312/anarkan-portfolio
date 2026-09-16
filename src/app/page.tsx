import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white font-sans text-gray-950">
        <Hero />
        <About />
      </main>
    </>
  );
}
