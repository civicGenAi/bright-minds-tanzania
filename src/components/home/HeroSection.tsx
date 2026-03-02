import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg1 from "@/assets/hero-children.jpg";
import heroImg2 from "@/assets/hero-reading.jpg";
import founderImg from "@/assets/founder.jpg";

const slides = [
  {
    image: heroImg1,
    subtitle: "Equal Learning Opportunities",
    title: ["Empowering Every", "Dyslexic Child", "in Tanzania"],
    description: "We champion awareness, education, and support so that no child is left behind because of how they learn differently.",
  },
  {
    image: heroImg2,
    subtitle: "Early Screening Saves Futures",
    title: ["Identify.", "Support.", "Transform Lives."],
    description: "Our community screening programs reach hundreds of children every year, giving them the tools they need to succeed.",
  },
  {
    image: founderImg,
    subtitle: "Building a Movement",
    title: ["Join the Fight", "for Inclusive", "Education"],
    description: "From policy advocacy to teacher training, we're building a Tanzania where every child can learn without barriers.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background images with crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </motion.div>
      </AnimatePresence>

      {/* Floating decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[15%] w-24 h-24 rounded-full bg-hope-yellow/10 blur-xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-[10%] w-32 h-32 rounded-full bg-sky-blue/10 blur-xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-[5%] w-16 h-16 rounded-full bg-secondary/10 blur-lg"
        />
        {/* Geometric dots */}
        <div className="absolute top-40 left-[5%] grid grid-cols-3 gap-2 opacity-20">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
          ))}
        </div>
      </div>

      {/* Slide arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full p-2 md:p-3 text-primary-foreground hover:bg-primary-foreground/20 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full p-2 md:p-3 text-primary-foreground hover:bg-primary-foreground/20 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      <div className="relative container-wide px-4 sm:px-6 lg:px-8 pt-20 z-10">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${current}`}
              initial={{ opacity: 0, x: direction * 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 30 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 px-4 py-2 mb-6"
            >
              <BookOpen size={16} className="text-hope-yellow" />
              <span className="text-sm font-medium text-primary-foreground">{slide.subtitle}</span>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${current}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, staggerChildren: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-6"
            >
              {slide.title.map((line, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={`block ${i === 1 ? "text-hope-yellow" : ""}`}
                >
                  {line}
                </motion.span>
              ))}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${current}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-10 leading-relaxed"
            >
              {slide.description}
            </motion.p>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-base font-semibold text-secondary-foreground transition-all hover:shadow-xl hover:scale-105"
            >
              Learn More
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 px-6 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/20"
            >
              Get Involved
            </Link>
          </motion.div>
        </div>

        {/* Slide indicators */}
        <div className="flex items-center gap-3 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-10 bg-hope-yellow" : "w-4 bg-primary-foreground/30 hover:bg-primary-foreground/50"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 bg-primary-foreground/5 backdrop-blur-md rounded-2xl border border-primary-foreground/10 p-6 md:p-8"
        >
          {[
            { number: "10%", label: "Of population affected" },
            { number: "500+", label: "Families supported" },
            { number: "15+", label: "Programs running" },
            { number: "2017", label: "Year founded" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-hope-yellow">{stat.number}</div>
              <div className="text-xs md:text-sm text-primary-foreground/70 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
