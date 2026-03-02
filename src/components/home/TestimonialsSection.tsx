import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-muted/50 overflow-hidden">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
              Voices of <span className="text-secondary">Hope</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative max-w-3xl mx-auto">
          {/* Decorative background */}
          <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-primary/5 blur-xl" />
          <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-secondary/5 blur-xl" />

          <div className="bg-card rounded-3xl border border-border p-8 md:p-12 relative overflow-hidden min-h-[280px] flex items-center">
            {/* Decorative quote mark */}
            <Quote size={120} className="absolute top-4 right-4 text-primary/5" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative z-10 w-full"
              >
                <blockquote className="text-lg md:text-xl lg:text-2xl text-foreground font-medium leading-relaxed mb-8">
                  "{testimonials[current].quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-sky-blue flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {testimonials[current].name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonials[current].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)}
              className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} className="text-foreground" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${i === current ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/30"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrent((p) => (p + 1) % testimonials.length)}
              className="p-2 rounded-full border border-border bg-card hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} className="text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
