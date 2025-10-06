// "use client"


import Stickyroll from "@/components/stickyroll";
import Herosection from "@/components/Herosection";
import Cards from "@/components/cards";
import Testimonals from "@/components/testimonals";
import Upcoming from "@/components/upcoming";
import Educators from "@/components/educators";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

      <Herosection />
      <Cards/>
      <Stickyroll />
      <Testimonals />
      <Upcoming/>
      <Educators />
      <Footer />
      

    </main>
  );
}
