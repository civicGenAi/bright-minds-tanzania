import { Brain, Eye, BookOpen, Lightbulb } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import about1 from "@/assets/about1.png";
import about2 from "@/assets/about2.png";
import { motion } from "framer-motion";

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
          <div className="relative pt-12 pb-12 pr-12 lg:pr-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-0"
            >
              <img
                src={about1}
                alt="Understanding Dyslexia 1"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, 0]
              }}
              transition={{
                duration: 1,
                delay: 0.3,
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -top-4 -right-4 md:-top-10 md:-right-10 w-[60%] z-10"
            >
              <img
                src={about2}
                alt="Understanding Dyslexia 2"
                className="rounded-2xl shadow-2xl border-4 border-white object-cover aspect-square"
              />
            </motion.div>

            <div className="absolute -bottom-4 -left-4 md:-bottom-4 md:-left-8 bg-secondary rounded-xl md:rounded-2xl p-3 md:p-5 shadow-lg z-20">
              <p className="text-2xl md:text-3xl font-extrabold text-secondary-foreground">10%</p>
              <p className="text-[10px] md:text-sm font-medium text-secondary-foreground/80">globally affected</p>
            </div>
          </div>

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
