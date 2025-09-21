import HeroSection from "@/components/ui/HeroSection";
import InventorySection from "@/components/ui/InventorySection";
import ServicesInfoSection from "@/components/ui/ServicesInfoSection";
import WelcomeSection from "@/components/ui/WelcomeSection";
import TestimonialSection from "@/components/ui/TestimonialSection";
import HomeGallery from "@/components/ui/HomeGallery";
import HomeContact from "@/components/ui/HomeContact";

export default function Home() {
  
  return (
    <div className="min-h-screen">
  
      <HeroSection />
      <WelcomeSection />
      <InventorySection />
      <ServicesInfoSection />
      <TestimonialSection />
      <HomeGallery />
      <HomeContact />
    </div>
  );
}