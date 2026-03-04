import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  { quote: "Before Dyslexia Tanzania, we didn't know why our son struggled with reading. Now he has the support he needs to thrive.", name: "Grace Mwangi", role: "Parent, Dar es Salaam" },
  { quote: "The teacher training workshop transformed how I approach reading instruction. I can now identify and help students who learn differently.", name: "Joseph Kimaro", role: "Primary School Teacher" },
  { quote: "Being part of the parent support network gave me hope. I'm no longer alone in this journey with my daughter.", name: "Amina Hassan", role: "Parent, Mwanza" },
  { quote: "The screening program caught my child's dyslexia early. Without it, she would have fallen further behind in school.", name: "Peter Ndosi", role: "Parent, Arusha" },
  { quote: "Dyslexia Tanzania's advocacy work is changing how our education system sees and supports diverse learners.", name: "Dr. Sarah Komba", role: "Education Researcher, UDSM" },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-muted/20 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-widest mb-4 border border-secondary/20">
              <Star size={12} className="fill-secondary" />
              Community Voices
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-foreground mt-2 leading-tight">
              Voices of <span className="text-primary italic">Transformation</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[200px] md:h-[400px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            {/* Quote marks - hidden on mobile */}
            <div className="hidden lg:block absolute -left-16 top-8">
              <Quote size={80} className="text-primary/10 rotate-180" />
            </div>

            <div className="bg-card rounded-2xl md:rounded-[2.5rem] border border-border shadow-xl p-6 md:p-14 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center"
                >
                  <p className="text-lg md:text-2xl lg:text-3xl font-bold text-foreground leading-snug md:leading-[1.3] mb-6 md:mb-10 italic">
                    "{testimonials[current].quote}"
                  </p>

                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[2rem] bg-gradient-to-br from-primary to-secondary p-0.5 rotate-3 shadow-lg">
                      <div className="w-full h-full rounded-[0.65rem] md:rounded-[1.8rem] bg-card flex items-center justify-center text-primary font-black text-lg md:text-2xl">
                        {testimonials[current].name[0]}
                      </div>
                    </div>
                    <div>
                      <p className="font-black text-base md:text-xl text-foreground uppercase tracking-widest leading-none mb-1">{testimonials[current].name}</p>
                      <p className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest">{testimonials[current].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 md:gap-8 mt-6 md:mt-16">
            <button
              onClick={() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2 md:gap-4">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className="h-6 flex items-center px-0.5">
                  <div className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-8 md:w-12 bg-primary" : "w-3 md:w-4 bg-border"}`} />
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrent((p) => (p + 1) % testimonials.length)}
              className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
