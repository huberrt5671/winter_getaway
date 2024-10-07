import Navbar from "@/components/Navbar";
import Image from "next/image";
import Hero from "./Hero";
import Destination from "./Destination";
import PopularGetaway from "./PopularGetaway";
import About from "./About";
import CustomerReview from "./CustomerReview";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <Hero />
        <Destination />
        <PopularGetaway />
        <About />
        <CustomerReview />
        <Subscribe />
        <Footer />
      </div>
    </main>
  );
}
