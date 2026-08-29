import React from "react";
import Hero from "@/components/home/Hero";
import CampusTicker from "@/components/home/CampusTicker";
import ValuePillars from "@/components/home/ValuePillars";
import InteractiveShowcase from "@/components/home/InteractiveShowcase";
import HowItWorks from "@/components/home/HowItWorks";
import EscrowSecurity from "@/components/home/EscrowSecurity";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CampusTicker />
      <ValuePillars />
      <InteractiveShowcase />
      <HowItWorks />
      <EscrowSecurity />
      <Testimonials />
      <CTABanner />
    </>
  );
}
