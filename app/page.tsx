import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import Benchmarks from "@/components/Benchmarks";
import UseCases from "@/components/UseCases";
import Architecture from "@/components/Architecture";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-node-black text-node-white overflow-x-hidden">
      <div className="grain" />
      <Navbar />
      <Hero />
      <Capabilities />
      <Benchmarks />
      <UseCases />
      <Architecture />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
