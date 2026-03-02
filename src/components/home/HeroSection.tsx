import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-children.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Children reading together in a classroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative container-wide px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 px-4 py-2 mb-6"
          >
            <BookOpen size={16} className="text-hope-yellow" />
            <span className="text-sm font-medium text-primary-foreground">Equal Learning Opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-6"
          >
            Empowering Every
            <span className="block text-hope-yellow">Dyslexic Child</span>
            in Tanzania
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-10 leading-relaxed"
          >
            We champion awareness, education, and support so that no child is left behind because of how they learn differently.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
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

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 bg-primary-foreground/5 backdrop-blur-md rounded-2xl border border-primary-foreground/10 p-6 md:p-8"
        >
          {[
            { number: "10%", label: "Of population affected" },
            { number: "500+", label: "Families supported" },
            { number: "15+", label: "Programs running" },
            { number: "2017", label: "Year founded" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-hope-yellow">{stat.number}</div>
              <div className="text-xs md:text-sm text-primary-foreground/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
