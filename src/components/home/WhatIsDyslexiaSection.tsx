import { Brain, Eye, BookOpen, Lightbulb } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import heroReading from "@/assets/hero-reading.jpg";

const facts = [
  {
    icon: Brain,
    title: "Neurological Difference",
    description: "Dyslexia is a brain-based learning difference that affects reading, writing, and spelling. It is not related to intelligence.",
  },
  {
    icon: Eye,
    title: "1 in 10 People",
    description: "Approximately 10% of the global population has dyslexia, making it the most common learning difficulty worldwide.",
  },
  {
    icon: BookOpen,
    title: "Early Detection Matters",
    description: "With the right support and early identification, children with dyslexia can thrive academically and personally.",
  },
  {
    icon: Lightbulb,
    title: "Unique Strengths",
    description: "People with dyslexia often excel in creative thinking, problem-solving, and big-picture reasoning.",
  },
];

const WhatIsDyslexiaSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <img
                src={heroReading}
                alt="Child reading a book"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary rounded-2xl p-5 shadow-lg">
                <p className="text-3xl font-extrabold text-secondary-foreground">10%</p>
                <p className="text-sm font-medium text-secondary-foreground/80">globally affected</p>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Understanding Dyslexia</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-6">
                What is <span className="text-primary">Dyslexia?</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Dyslexia is a common learning difference that primarily affects reading and language-related skills. 
                It is not a sign of low intelligence — many of the world's greatest innovators, artists, and leaders are dyslexic.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {facts.map((fact, i) => (
                <ScrollReveal key={fact.title} delay={i * 0.1}>
                  <div className="bg-card rounded-xl p-5 card-hover border border-border">
                    <fact.icon size={24} className="text-primary mb-3" />
                    <h3 className="font-semibold text-foreground mb-1">{fact.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{fact.description}</p>
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
