import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    quote: "Before Dyslexia Tanzania, we didn't know why our son struggled with reading. Now he has the support he needs to thrive.",
    name: "Grace Mwangi",
    role: "Parent, Dar es Salaam",
  },
  {
    quote: "The teacher training workshop transformed how I approach reading instruction. I can now identify and help students who learn differently.",
    name: "Joseph Kimaro",
    role: "Primary School Teacher",
  },
  {
    quote: "Being part of the parent support network gave me hope. I'm no longer alone in this journey with my daughter.",
    name: "Amina Hassan",
    role: "Parent, Mwanza",
  },
  {
    quote: "The screening program caught my child's dyslexia early. Without it, she would have fallen further behind in school.",
    name: "Peter Ndosi",
    role: "Parent, Arusha",
  },
  {
    quote: "Dyslexia Tanzania's advocacy work is changing how our education system sees and supports diverse learners.",
    name: "Dr. Sarah Komba",
    role: "Education Researcher, UDSM",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-muted/20 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-widest mb-6 border border-secondary/20">
              <Star size={12} className="fill-secondary" />
              Community Voices
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-foreground mt-2 mb-8 leading-tight">
              Voices of <span className="text-primary italic">Transformation</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated Background Aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-[1fr_auto_1fr] items-center gap-12 md:gap-20">
            {/* Quote Mark Decoration */}
            <div className="hidden lg:block">
              <Quote size={120} className="text-primary/10 rotate-180" />
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="bg-card rounded-[2.5rem] border border-border shadow-2xl p-8 md:p-14 relative overflow-hidden flex flex-col items-center text-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.05, y: -20 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full"
                  >
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-[1.3] mb-10 italic">
                      "{testimonials[current].quote}"
                    </p>

                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 rounded-[2rem] bg-gradient-to-br from-primary to-secondary p-1 rotate-3 hover:rotate-12 transition-transform duration-500 shadow-xl shadow-primary/20">
                        <div className="w-full h-full rounded-[1.8rem] bg-card flex items-center justify-center text-primary font-black text-2xl">
                          {testimonials[current].name[0]}
                        </div>
                      </div>
                      <div>
                        <p className="font-black text-xl text-foreground uppercase tracking-widest leading-none mb-1">{testimonials[current].name}</p>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">{testimonials[current].role}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="hidden lg:block">
              <Quote size={120} className="text-primary/10" />
            </div>
          </div>

          {/* Premium Controls */}
          <div className="flex items-center justify-center gap-8 mt-16">
            <button
              onClick={() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)}
              className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center gap-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="group relative h-8 flex items-center px-1"
                >
                  <div className={`h-1.5 rounded-full transition-all duration-700 ${i === current ? "w-12 bg-primary" : "w-4 bg-border group-hover:bg-muted-foreground/30"}`} />
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrent((p) => (p + 1) % testimonials.length)}
              className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
