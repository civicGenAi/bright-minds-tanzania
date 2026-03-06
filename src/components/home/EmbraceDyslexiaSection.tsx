import ScrollReveal from "@/components/ScrollReveal";
import inspirationImg from "@/assets/inspiration.png";
import { motion } from "framer-motion";

const EmbraceDyslexiaSection = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-0 items-stretch">
          <ScrollReveal direction="left">
            <div className="flex flex-col justify-center h-full pr-0 lg:pr-12">
              <span className="text-xs md:text-sm font-semibold text-secondary uppercase tracking-wider mb-2 font-oswald">
                All support to them
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-foreground mb-3 md:mb-6 font-oswald">
                Embrace <span className="text-primary">Dyslexia</span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-3">
                It is important to understand that dyslexia is not a sign of laziness or lack of intelligence,
                but rather a learning difference that requires a different approach to teaching.
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Early identification and intervention can be critical in helping dyslexic individuals
                to overcome challenges and reach their full potential.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative flex items-center justify-center p-4">
              {/* Styled Animation at the back */}
              <div className="absolute inset-0 z-0">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 rounded-full blur-3xl px-8"
                />
                <motion.div
                  animate={{
                    scale: [1.1, 1, 1.1],
                    rotate: [0, -5, 0],
                    opacity: [0.1, 0.15, 0.1]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-secondary/10 rounded-full blur-2xl"
                />
              </div>

              {/* Image Container */}
              <div className="relative z-10 w-full group">
                <div className="absolute -top-4 -left-4 w-12 md:w-20 h-12 md:h-20 border-t-4 border-l-4 border-secondary rounded-tl-2xl z-20 transition-all group-hover:-top-6 group-hover:-left-6" />
                <div className="absolute -bottom-4 -right-4 w-12 md:w-20 h-12 md:h-20 border-b-4 border-r-4 border-primary rounded-br-2xl z-20 transition-all group-hover:-bottom-6 group-hover:-right-6" />

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl border border-white/10"
                >
                  <img
                    src={inspirationImg}
                    alt="Inspiration for Dyslexia Support"
                    className="w-full aspect-[3/4] md:aspect-[4/3] object-cover"
                  />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-8 right-10 bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/20 hidden md:block"
                >
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">Inspiration</span>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default EmbraceDyslexiaSection;
