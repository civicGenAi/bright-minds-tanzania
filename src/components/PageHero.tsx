import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  badge: string;
  title: ReactNode;
  description: string;
  backgroundImage?: string;
  imageAlt?: string;
}

const PageHero = ({ badge, title, description, backgroundImage, imageAlt }: PageHeroProps) => {
  return (
    <section className="relative pt-20 overflow-hidden">
      {backgroundImage && (
        <div
          className="absolute inset-0 pointer-events-none"
          role="img"
          aria-label={imageAlt || "Background decorative image"}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
            opacity: 0.12,
          }}
        />
      )}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-32 md:w-64 h-32 md:h-64 rounded-full bg-secondary/5 blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-32 right-[10%] hidden md:grid grid-cols-4 gap-3 opacity-[0.07]">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary" />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-24 relative">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="inline-block text-xs md:text-sm font-semibold text-primary uppercase tracking-wider mb-2 md:mb-3"
            >
              {badge}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-4xl lg:text-6xl font-extrabold text-foreground mb-3 md:mb-6"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-sm md:text-lg lg:text-xl text-muted-foreground leading-relaxed"
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
