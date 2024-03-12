import HeroSection from "@/components/heroComponent/HeroSection";
import IntroductionSection from "@/components/IntroductionComponent/IntroductionSection";
import PromotionSection from "@/components/promotionComponent/PromotionSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntroductionSection />
      <PromotionSection />
    </main>
  );
}
