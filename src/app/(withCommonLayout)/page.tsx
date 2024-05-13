import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import Specialist from "@/components/HomePage/Specialist/Specialist";
import TopRatedDoctors from "@/components/HomePage/TopRatedDocotrs/TopRatedDoctors";
import WhyUs from "@/components/HomePage/WhyUs/WhyUs";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
      <WhyUs/>
    </>
  );
}
