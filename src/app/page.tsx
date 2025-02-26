import Faqs from "@/components/Faqs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import TryIt from "@/components/Try-It";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TryIt />
      <Features />
      <Pricing />
      <Faqs />
      <Footer />
    </>
  )
}
