import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, Play, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg1 from "@/assets/hero1.png";
import heroImg2 from "@/assets/hero2.png";
import heroImg3 from "@/assets/hero3.png";

const slides = [
  {
    image: heroImg1,
    subtitle: "Equal Learning Opportunities",
    title: ["Empowering Every", "Dyslexic Child", "in Tanzania"],
    description: "We champion awareness, education, and support so that no child is left behind because of how they learn differently.",
    stats: { label: "Success Rate", value: "98%" }
  },
  {
    image: heroImg2,
    subtitle: "Early Screening Saves Futures",
    title: ["Identify.", "Support.", "Transform Lives."],
    description: "Our community screening programs reach hundreds of children every year, giving them the tools they need to succeed.",
    stats: { label: "Children Screened", value: "1,200+" }
  },
  {
    image: heroImg3,
    subtitle: "Building a Movement",
    title: ["Join the Fight", "for Inclusive", "Education"],
    description: "From policy advocacy to teacher training, we're building a Tanzania where every child can learn without barriers.",
    stats: { label: "Teachers Trained", value: "250+" }
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const slide = slides[current];

  return (
    <section className="relative min-h-[75vh] md:min-h-[80vh] flex items-center overflow-hidden bg-[#050505]">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px]"
        />
      </div>

      {/* Background images */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img src={slide.image} alt="Hero background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
        </motion.div>
      </AnimatePresence>

      <div className="relative container-wide px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-8 md:pb-20 z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-6 md:gap-12 items-center">
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${current}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >

                {/* Title - optimized for mobile readability */}
                <h1 className="text-[1.75rem] leading-[1.1] sm:text-3xl md:text-5xl lg:text-6xl font-black text-white md:leading-[0.95] mb-3 md:mb-6 font-oswald tracking-tight">
                  {slide.title.map((line, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.08 }}
                      className={`block ${i === 1 ? "text-secondary" : ""}`}
                    >
                      {line}
                    </motion.span>
                  ))}
                </h1>

                {/* Description - hidden on very small screens for cleaner look */}
                <p className="hidden sm:block text-sm md:text-lg text-white/70 max-w-xl mb-6 md:mb-10 leading-relaxed">
                  {slide.description}
                </p>

                {/* CTAs */}
                <div className="flex flex-row gap-3 items-center">
                  <Link
                    to="/about"
                    className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 md:px-8 py-3 md:py-4 rounded-xl font-bold uppercase tracking-wider text-[10px] md:text-xs transition-all hover:scale-105 active:scale-95 shadow-lg font-oswald"
                  >
                    <span>Discover More</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/contact"
                    className="group flex items-center gap-2 text-white hover:text-primary transition-colors py-2.5 px-3 md:px-4 rounded-xl border border-white/10 hover:border-primary/40 bg-white/5 backdrop-blur-sm"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-all">
                      <Play size={12} className="fill-current ml-0.5" />
                    </div>
                    <span className="font-bold uppercase tracking-wider text-[9px] md:text-[10px] font-oswald hidden sm:inline">Our Impact</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Stats - compact on mobile, hidden detail */}
          <div className="lg:col-span-4 lg:self-end lg:pb-20">
            <div className="flex lg:flex-col gap-3 md:gap-6 mt-2 lg:mt-0">
              <motion.div
                key={`stats-${current}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3 md:p-8 shadow-2xl flex-1 lg:flex-none"
              >
                <p className="text-secondary font-bold uppercase tracking-widest text-[8px] md:text-[10px] mb-0.5 font-oswald">Current Impact</p>
                <p className="text-xl md:text-4xl lg:text-5xl font-black text-white leading-none font-oswald">{slide.stats.value}</p>
                <p className="text-white/60 font-bold uppercase tracking-widest text-[8px] md:text-[9px] mt-0.5 font-oswald">{slide.stats.label}</p>
              </motion.div>

              <div className="grid grid-cols-2 gap-2 md:gap-3 flex-1 lg:flex-none">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-2.5 md:p-5 text-center">
                  <p className="text-base md:text-xl font-black text-secondary font-oswald">2017</p>
                  <p className="text-[7px] md:text-[9px] font-bold text-white/40 uppercase tracking-widest">Founded</p>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-2.5 md:p-5 text-center">
                  <p className="text-base md:text-xl font-black text-brand-green font-oswald">15+</p>
                  <p className="text-[7px] md:text-[9px] font-bold text-white/40 uppercase tracking-widest">Regions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation - slim on mobile */}
        <div className="mt-6 md:mt-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 md:gap-6">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className="group flex flex-col items-start gap-1">
                <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-colors font-oswald ${i === current ? 'text-white' : 'text-white/30'}`}>
                  0{i + 1}
                </span>
                <div className="relative w-10 md:w-20 h-1 bg-white/10 rounded-full overflow-hidden">
                  {i === current && (
                    <motion.div
                      layoutId="hero-progress"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 7, ease: "linear" }}
                      className="absolute inset-0 bg-primary"
                    />
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="w-9 h-9 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all"
            >
              {isPaused ? <Play size={14} className="fill-current" /> : <div className="flex gap-0.5"><div className="w-0.5 h-3 bg-white" /><div className="w-0.5 h-3 bg-white" /></div>}
            </button>
            <button
              onClick={next}
              className="px-4 md:px-8 h-9 md:h-14 rounded-full bg-white text-black font-bold uppercase tracking-wider text-[9px] md:text-xs flex items-center gap-1 hover:bg-primary hover:text-primary-foreground transition-all shadow-xl font-oswald"
            >
              Next <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
