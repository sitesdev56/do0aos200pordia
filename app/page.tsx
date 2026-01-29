import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { BenefitsSection } from "@/components/benefits-section"
import { PlatformsSection } from "@/components/platforms-section"
import { CTASection } from "@/components/cta-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <PlatformsSection />
      <CTASection />
      <FooterSection />
    </main>
  )
}
