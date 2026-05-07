import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="main-wrapper">
      <Navbar />
      
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left Column */}
        <section className="lg:col-span-7 p-8 lg:p-12 space-y-24 border-r border-white/5">
          <Hero />
          <About />
        </section>

        {/* Right Column */}
        <section className="lg:col-span-5 p-8 lg:p-12 space-y-16 bg-[#0c0c0c]">
          <Experience />
          <Services />
          <Skills />
          <Testimonials />
        </section>
      </main>

      <Footer />
    </div>
  );
}
