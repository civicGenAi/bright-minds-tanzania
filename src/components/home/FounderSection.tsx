import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import founderImg from "@/assets/founder.jpg";

const FounderSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="bg-gradient-to-br from-primary to-deep-navy rounded-2xl md:rounded-3xl p-5 md:p-14 overflow-hidden relative">
          <div className="grid md:grid-cols-[1fr_280px] gap-6 md:gap-10 items-center">
            <ScrollReveal>
              <div>
                <Quote size={36} className="text-hope-yellow mb-4 md:mb-6 opacity-80" />
                <blockquote className="text-base md:text-2xl lg:text-3xl font-semibold text-primary-foreground leading-relaxed mb-4 md:mb-8">
                  "Every child deserves the right to learn in a way that works for them. Dyslexia is not a disability — it is a different ability."
                </blockquote>
                <div>
                  <p className="text-base md:text-lg font-bold text-hope-yellow">Caudence Ayoti</p>
                  <p className="text-xs md:text-sm text-primary-foreground/70">Founder, Dyslexia Tanzania</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="hidden md:block">
                <img
                  src={founderImg}
                  alt="Caudence Ayoti, Founder of Dyslexia Tanzania"
                  className="rounded-2xl shadow-2xl w-full aspect-square object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
