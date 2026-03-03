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
    <section className="relative min-h-[75vh] md:min-h-[80vh] flex items-center overflow-hidden bg-[#050505]">
      {/* Dynamic Animated Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px]"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* Background images with Parallax & Crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.15, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        </motion.div>
      </AnimatePresence>

      <div className="relative container-wide px-4 sm:px-6 lg:px-8 pt-32 pb-20 z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${current}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8 overflow-hidden group">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <Star size={16} className="text-hope-yellow fill-hope-yellow" />
                  </motion.div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/90">
                    {slide.subtitle}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] mb-6 tracking-tighter">
                  {slide.title.map((line, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className={`block ${i === 1 ? "text-primary italic transform -skew-x-6" : ""}`}
                    >
                      {line}
                    </motion.span>
                  ))}
                </h1>

                <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed font-medium">
                  {slide.description}
                </p>

                <div className="flex flex-wrap gap-6 items-center">
                  <Link
                    to="/about"
                    className="group relative inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_-10px_rgba(var(--primary),0.5)]"
                  >
                    <span className="relative z-10">Discover More</span>
                    <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </Link>

                  <Link
                    to="/contact"
                    className="group flex items-center gap-3 text-white hover:text-primary transition-colors py-3 px-5 rounded-xl border border-white/10 hover:border-primary/40 bg-white/5 backdrop-blur-sm"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-all">
                      <Play size={14} className="fill-current ml-1" />
                    </div>
                    <span className="font-black uppercase tracking-[0.2em] text-[10px]">Our Impact Film</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-4 self-end lg:pb-20">
            {/* Redesigned Floating Stats */}
            <div className="space-y-6">
              <motion.div
                key={`stats-${current}`}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.9 }}
                className="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <p className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-1">Current Impact</p>
                <p className="text-4xl md:text-5xl font-black text-white mb-2 leading-none">{slide.stats.value}</p>
                <p className="text-white/60 font-bold uppercase tracking-widest text-[9px]">{slide.stats.label}</p>
              </motion.div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-5 text-center">
                  <p className="text-xl font-black text-secondary">2017</p>
                  <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest mt-1">Founded</p>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-5 text-center">
                  <p className="text-xl font-black text-hope-yellow">15+</p>
                  <p className="text-[9px] font-bold text-white/40 uppercase tracking-widest mt-1">Regions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Navigation & Progress */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="group relative flex flex-col items-start gap-2"
              >
                <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${i === current ? 'text-white' : 'text-white/30 group-hover:text-white/60'}`}>
                  0{i + 1}
                </span>
                <div className="relative w-20 h-1 bg-white/10 rounded-full overflow-hidden">
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

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all group"
            >
              {isPaused ? <Play size={20} className="fill-current" /> : <div className="flex gap-1"><div className="w-1 h-4 bg-white" /><div className="w-1 h-4 bg-white" /></div>}
            </button>
            <button
              onClick={next}
              className="px-8 h-14 rounded-full bg-white text-black font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-primary hover:text-primary-foreground transition-all shadow-xl"
            >
              Next Chapter <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
