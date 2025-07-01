import Header from "@/components/header";
import { Poppins } from "next/font/google";
import HeroSection from "@/components/hero-section";
import PartnerSection from "@/components/partners-section";
import ServicesSection from "@/components/services-section";
import BestCareSection from "@/components/BestCareSection";
import Footer from "@/components/footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <div className="min-h-screen bg-white ${poppins.className}">
      <Header />
      <HeroSection />
      <PartnerSection />
      <ServicesSection />
      <BestCareSection />
      <Footer />
   
    </div>
  )
}
