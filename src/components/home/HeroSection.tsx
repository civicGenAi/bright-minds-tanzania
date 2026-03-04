import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, ChevronRight, Play, Star } from "lucide-react";
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
    image: founderImg,
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
    <section className="relative min-h-[85vh] md:min-h-[80vh] flex items-center overflow-hidden bg-[#050505]">
      {/* Dynamic Animated Background Shapes - hidden on mobile for performance */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-primary/20 rounded-full blur-[80px] md:blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-secondary/20 rounded-full blur-[60px] md:blur-[100px]"
        />
      </div>

      {/* Background images */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img src={slide.image} alt="Hero background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/20 opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
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
                <div className="inline-flex items-center gap-2 px-3 md:px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-4 md:mb-8">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                    <Star size={14} className="text-hope-yellow fill-hope-yellow" />
                  </motion.div>
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-white/90">
                    {slide.subtitle}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1] md:leading-[0.95] mb-4 md:mb-6 tracking-tight md:tracking-tighter">
                  {slide.title.map((line, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.08 }}
                      className={`block ${i === 1 ? "text-primary italic md:-skew-x-6" : ""}`}
                    >
                      {line}
                    </motion.span>
                  ))}
                </h1>

                <p className="text-sm md:text-lg text-white/70 max-w-xl mb-6 md:mb-10 leading-relaxed">
                  {slide.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-6 items-start sm:items-center">
                  <Link
                    to="/about"
                    className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-xl font-black uppercase tracking-widest text-[10px] md:text-xs transition-all hover:scale-105 active:scale-95 shadow-lg"
                  >
                    <span>Discover More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    to="/contact"
                    className="group flex items-center gap-2 text-white hover:text-primary transition-colors py-2.5 px-4 rounded-xl border border-white/10 hover:border-primary/40 bg-white/5 backdrop-blur-sm"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-all">
                      <Play size={12} className="fill-current ml-0.5" />
                    </div>
                    <span className="font-bold uppercase tracking-widest text-[9px] md:text-[10px]">Our Impact Film</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Stats - compact on mobile */}
          <div className="lg:col-span-4 lg:self-end lg:pb-20">
            <div className="flex lg:flex-col gap-3 md:gap-6 mt-4 lg:mt-0">
              <motion.div
                key={`stats-${current}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-[2rem] p-4 md:p-8 shadow-2xl flex-1 lg:flex-none"
              >
                <p className="text-primary font-black uppercase tracking-widest text-[8px] md:text-[10px] mb-1">Current Impact</p>
                <p className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-none">{slide.stats.value}</p>
                <p className="text-white/60 font-bold uppercase tracking-widest text-[8px] md:text-[9px] mt-1">{slide.stats.label}</p>
              </motion.div>

              <div className="grid grid-cols-2 gap-2 md:gap-3 flex-1 lg:flex-none">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-[1.5rem] p-3 md:p-5 text-center">
                  <p className="text-lg md:text-xl font-black text-secondary">2017</p>
                  <p className="text-[8px] md:text-[9px] font-bold text-white/40 uppercase tracking-widest mt-0.5">Founded</p>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-[1.5rem] p-3 md:p-5 text-center">
                  <p className="text-lg md:text-xl font-black text-hope-yellow">15+</p>
                  <p className="text-[8px] md:text-[9px] font-bold text-white/40 uppercase tracking-widest mt-0.5">Regions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation - mobile optimized */}
        <div className="mt-8 md:mt-20 flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-10">
          <div className="flex items-center gap-3 md:gap-6">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className="group flex flex-col items-start gap-1 md:gap-2">
                <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-colors ${i === current ? 'text-white' : 'text-white/30'}`}>
                  0{i + 1}
                </span>
                <div className="relative w-12 md:w-20 h-1 bg-white/10 rounded-full overflow-hidden">
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

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all"
            >
              {isPaused ? <Play size={16} className="fill-current" /> : <div className="flex gap-0.5"><div className="w-0.5 md:w-1 h-3 md:h-4 bg-white" /><div className="w-0.5 md:w-1 h-3 md:h-4 bg-white" /></div>}
            </button>
            <button
              onClick={next}
              className="px-5 md:px-8 h-10 md:h-14 rounded-full bg-white text-black font-black uppercase tracking-widest text-[10px] md:text-xs flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all shadow-xl"
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
