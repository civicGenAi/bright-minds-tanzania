import { ArrowRight, Users, BookOpen, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const perks = [
  { icon: BookOpen, text: "Access to resources & workshops" },
  { icon: Users, text: "Connect with the community" },
  { icon: Lightbulb, text: "Training programs & support" },
];

const CommunitySection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="text-xs md:text-sm font-semibold text-primary uppercase tracking-wider">
              Welcome to our community
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-foreground mt-2 mb-3 md:mb-4">
              Become a Member of <span className="text-secondary">Our Community</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mb-6 md:mb-10">
              Get access to resources, workshops, and training programs that will help you build 
              your knowledge and skills in supporting dyslexics.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-6 mb-6 md:mb-10">
              {perks.map((perk) => (
                <div
                  key={perk.text}
                  className="flex items-center gap-2 bg-card rounded-xl px-4 py-2.5 border border-border"
                >
                  <perk.icon size={18} className="text-primary shrink-0" />
                  <span className="text-xs md:text-sm font-medium text-foreground">{perk.text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold text-primary-foreground transition-all hover:shadow-xl hover:scale-105"
              >
                Join the Community <ArrowRight size={16} />
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary bg-transparent px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold text-primary transition-all hover:bg-primary/5"
              >
                View FAQs
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
