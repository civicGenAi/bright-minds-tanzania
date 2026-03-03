import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const CTASection = () => {
  return (
    <section className="section-padding py-32 bg-background relative overflow-hidden">
      {/* Decorative Aura */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(var(--primary-rgb),0.1),transparent_70%)]" />

      <div className="container-wide relative z-10 text-center">
        <ScrollReveal>
          <div className="bg-foreground text-background rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden group">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-4xl mx-auto">
              <Sparkles size={48} className="text-primary mx-auto mb-10 group-hover:rotate-12 transition-transform" />
              <h2 className="text-3xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter">
                Be the Spark in a <span className="text-primary">Child's Education</span>
              </h2>
              <p className="text-background/70 text-lg md:text-xl mb-12 leading-relaxed font-medium">
                Whether you're a parent seeking support, an educator looking for training, or a champion for children's rights — your journey starts here.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:shadow-[0_20px_40px_rgba(var(--primary-rgb),0.4)] hover:scale-105 transition-all group"
                >
                  Join the Community <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/donate"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 text-white backdrop-blur-md border border-white/20 px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all group"
                >
                  <Heart size={20} className="group-hover:scale-125 transition-transform fill-transparent hover:fill-current" /> Donate Now
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
