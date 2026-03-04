import { Brain, Eye, BookOpen, Lightbulb } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import heroReading from "@/assets/hero-reading.jpg";

const facts = [
  { icon: Brain, title: "Neurological Difference", description: "Dyslexia is a brain-based learning difference that affects reading, writing, and spelling." },
  { icon: Eye, title: "1 in 10 People", description: "Approximately 10% of the global population has dyslexia." },
  { icon: BookOpen, title: "Early Detection Matters", description: "With the right support and early identification, children with dyslexia can thrive." },
  { icon: Lightbulb, title: "Unique Strengths", description: "People with dyslexia often excel in creative thinking and problem-solving." },
];

const WhatIsDyslexiaSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <img
                src={heroReading}
                alt="Child reading a book"
                className="rounded-xl md:rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-secondary rounded-xl md:rounded-2xl p-3 md:p-5 shadow-lg">
                <p className="text-2xl md:text-3xl font-extrabold text-secondary-foreground">10%</p>
                <p className="text-[10px] md:text-sm font-medium text-secondary-foreground/80">globally affected</p>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <span className="text-xs md:text-sm font-semibold text-primary uppercase tracking-wider">Understanding Dyslexia</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground mt-2 mb-4 md:mb-6">
                What is <span className="text-primary">Dyslexia?</span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
                Dyslexia is a common learning difference that primarily affects reading and language-related skills. 
                It is not a sign of low intelligence — many of the world's greatest innovators are dyslexic.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {facts.map((fact, i) => (
                <ScrollReveal key={fact.title} delay={i * 0.1}>
                  <div className="bg-card rounded-xl p-3 md:p-5 card-hover border border-border h-full">
                    <fact.icon size={20} className="text-primary mb-2 md:mb-3" />
                    <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">{fact.title}</h3>
                    <p className="text-[11px] md:text-sm text-muted-foreground leading-relaxed">{fact.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsDyslexiaSection;
