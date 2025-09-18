import HeroSection from "@/app/components/ui/HeroSection";
import HomeContact from "@/app/components/ui/HomeContact";
import HomeGallery from "@/app/components/ui/HomeGallery";
import InventorySection from "@/app/components/ui/InventorySection";
import ServicesInfoSection from "@/app/components/ui/ServicesInfoSection";
import TestimonialSection from "@/app/components/ui/TestimonialSection";
import WelcomeSection from "@/app/components/ui/WelcomeSection";

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