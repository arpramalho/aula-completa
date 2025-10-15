import HeroSection from "@/components/landing/hero-section";
import BenefitsSection from "@/components/landing/benefits-section";
import AIDemoSection from "@/components/landing/ai-demo-section";
import TestimonialsSection from "@/components/landing/testimonials-section";
import CTASection from "@/components/landing/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <AIDemoSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}