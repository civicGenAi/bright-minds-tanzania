import { Heart, HandHeart, Users, UserPlus, ArrowRight, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const ActionHubSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container-wide relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mb-10 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4">
              <Zap size={12} /> Take Action
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-4">
              Every Action <span className="text-secondary">Creates a Ripple</span> of Change
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed max-w-2xl">
              We provide the platform, you provide the passion. Together, we're building a dyslexia-friendly future.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-8 items-start">
          {/* Main Large Card */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
              <div className="group relative bg-[#FF6B6B] rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 text-white min-h-[280px] md:min-h-[520px] flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-700 hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-40 md:w-64 h-40 md:h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
                <div>
                  <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 md:mb-6 rotate-3 group-hover:rotate-12 transition-all">
                    <Heart size={22} className="fill-white" />
                  </div>
                  <h3 className="text-xl md:text-3xl font-black mb-2 md:mb-4 uppercase tracking-tight">Support Our Mission</h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xs">
                    Screening a single child costs less than a cup of coffee. Your gift changes an entire educational journey.
                  </p>
                </div>
                <Link to="/donate" className="mt-4 inline-flex items-center gap-2 bg-white text-[#FF6B6B] px-6 md:px-8 py-3 md:py-4 rounded-xl font-black uppercase tracking-widest text-[10px] md:text-xs w-fit hover:bg-black hover:text-white transition-all shadow-xl">
                  Donate Now <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-3 md:gap-8">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="group bg-card border border-border/50 rounded-xl md:rounded-[2rem] p-4 md:p-8 min-h-[160px] md:min-h-[240px] flex flex-col justify-between hover:border-primary/30 hover:shadow-xl transition-all duration-500">
                <div>
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <HandHeart size={18} />
                  </div>
                  <h4 className="text-base md:text-xl font-black mb-1">Advocate</h4>
                  <p className="text-muted-foreground text-[11px] md:text-[13px] leading-relaxed">Share knowledge and break stigma.</p>
                </div>
                <Link to="/about" className="text-primary font-black uppercase tracking-widest text-[8px] md:text-[9px] flex items-center gap-1 mt-2">
                  Learn Ways <ArrowRight size={10} />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="group bg-card border border-border/50 rounded-xl md:rounded-[2rem] p-4 md:p-8 min-h-[160px] md:min-h-[240px] flex flex-col justify-between hover:border-[#4ECDC4]/50 hover:shadow-xl transition-all duration-500 sm:mt-8">
                <div>
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#4ECDC4]/10 flex items-center justify-center mb-3 md:mb-5 group-hover:bg-[#4ECDC4] group-hover:text-white transition-all text-[#4ECDC4]">
                    <Users size={18} />
                  </div>
                  <h4 className="text-base md:text-xl font-black mb-1">Volunteer</h4>
                  <p className="text-muted-foreground text-[11px] md:text-[13px] leading-relaxed">Join community screening events.</p>
                </div>
                <Link to="/volunteer" className="text-[#4ECDC4] font-black uppercase tracking-widest text-[8px] md:text-[9px] flex items-center gap-1 mt-2">
                  Get Involved <ArrowRight size={10} />
                </Link>
              </div>
            </ScrollReveal>

            {/* Large Horizontal Card */}
            <div className="col-span-2">
              <ScrollReveal direction="right" delay={0.4}>
                <div className="group relative bg-[#FFE66D] rounded-xl md:rounded-[2.5rem] p-5 md:p-12 overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8 shadow-xl">
                  <div className="absolute -top-10 left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative z-10 max-w-lg">
                    <div className="inline-flex items-center gap-1 text-black/40 font-black uppercase tracking-widest text-[8px] md:text-[9px] mb-2">
                      <Sparkles size={12} /> Global Community
                    </div>
                    <h3 className="text-lg md:text-2xl lg:text-3xl font-black text-black leading-tight mb-2">Become a Member</h3>
                    <p className="text-black/60 font-semibold text-xs md:text-sm">Get access to training, resources, and a supportive network.</p>
                  </div>
                  <Link to="/contact" className="relative z-10 bg-black text-white px-6 md:px-8 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] md:text-xs hover:scale-105 transition-all shadow-xl whitespace-nowrap">
                    Join Today
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionHubSection;
