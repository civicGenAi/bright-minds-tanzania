import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const CTASection = () => {
  return (
    <section className="section-padding py-16 md:py-32 bg-background relative overflow-hidden">
      <div className="container-wide relative z-10 text-center">
        <ScrollReveal>
          <div className="bg-foreground text-background rounded-2xl md:rounded-[2.5rem] p-6 md:p-16 relative overflow-hidden group">
            <div className="absolute -top-32 -right-32 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000" />
            <div className="absolute -bottom-32 -left-32 w-64 md:w-96 h-64 md:h-96 bg-secondary/20 rounded-full blur-[80px]" />

            <div className="relative z-10 max-w-4xl mx-auto">
              <Sparkles size={36} className="text-primary mx-auto mb-6 md:mb-10" />
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-black mb-4 md:mb-8 leading-tight tracking-tight">
                Be the Spark in a <span className="text-primary">Child's Education</span>
              </h2>
              <p className="text-background/70 text-sm md:text-xl mb-6 md:mb-12 leading-relaxed">
                Whether you're a parent seeking support, an educator looking for training, or a champion for children's rights — your journey starts here.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm hover:scale-105 transition-all"
                >
                  Join the Community <ArrowRight size={18} />
                </Link>
                <Link
                  to="/donate"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white backdrop-blur-md border border-white/20 px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm hover:bg-white hover:text-black transition-all"
                >
                  <Heart size={18} /> Donate Now
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
