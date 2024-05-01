"use client";
import AboutusSection from "@/components/aboutusComponent/AboutusSection";
import FeaturedSection from "@/components/featuredComponent/FeaturedSection";
import FooterSection from "@/components/footerComponent/FooterSection";
import HeroSection from "@/components/heroComponent/HeroSection";
import IntroductionSection from "@/components/IntroductionComponent/IntroductionSection";
import NavBar from "@/components/NavBar";
import PromotionSection from "@/components/promotionComponent/PromotionSection";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <main className="">
      <NavBar />
      <HeroSection />
      <IntroductionSection />
      <PromotionSection />
      <FeaturedSection />
      <AboutusSection />
      <FooterSection />
    </main>
  );
}
