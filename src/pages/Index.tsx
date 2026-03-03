import HeroSection from "@/components/home/HeroSection";
import WhatIsDyslexiaSection from "@/components/home/WhatIsDyslexiaSection";
import EmbraceDyslexiaSection from "@/components/home/EmbraceDyslexiaSection";
import ActionHubSection from "@/components/home/ActionHubSection";
import ImpactStoriesSection from "@/components/home/ImpactStoriesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CollaboratorsSection from "@/components/home/CollaboratorsSection";
import CTASection from "@/components/home/CTASection";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <main>
      <SEO
        title="Home"
        description="Empowering every child with dyslexia in Tanzania through awareness, education, and equal learning opportunities. Join our mission today."
      />
      <HeroSection />
      <WhatIsDyslexiaSection />
      <EmbraceDyslexiaSection />
      <ActionHubSection />
      <ImpactStoriesSection />
      <TestimonialsSection />
      <CollaboratorsSection />
      <CTASection />
    </main>
  );
};

export default Index;
