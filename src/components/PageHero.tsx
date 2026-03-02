import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  badge: string;
  title: ReactNode;
  description: string;
}

const PageHero = ({ badge, title, description }: PageHeroProps) => {
  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/5 blur-3xl translate-y-1/2 -translate-x-1/2" />
        {/* Dot grid */}
        <div className="absolute top-32 right-[10%] grid grid-cols-4 gap-3 opacity-[0.07]">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary" />
          ))}
        </div>
        {/* Accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="section-padding relative">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3"
            >
              {badge}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              {description}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
