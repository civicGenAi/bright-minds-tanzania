import { Heart, HandHeart, Users, UserPlus, ArrowRight, Sparkles, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const actions = [
  {
    icon: Heart,
    title: "Donate",
    description: "Your contribution directly supports dyslexia screening programs and educational resources across Tanzania.",
    color: "bg-[#FF6B6B]",
    textColor: "text-[#FF6B6B]",
    link: "/donate",
    size: "lg"
  },
  {
    icon: HandHeart,
    title: "Support",
    description: "Advocate for dyslexia awareness in your community. Share knowledge and help break the stigma.",
    color: "bg-primary",
    textColor: "text-primary",
    link: "/about",
    size: "sm"
  },
  {
    icon: Users,
    title: "Volunteer",
    description: "Join our team of dedicated volunteers helping families and educators understand dyslexia.",
    color: "bg-[#4ECDC4]",
    textColor: "text-[#4ECDC4]",
    link: "/contact",
    size: "sm"
  },
  {
    icon: UserPlus,
    title: "Membership",
    description: "Become a member and be part of a growing community committed to equal learning opportunities.",
    color: "bg-[#FFE66D]",
    textColor: "text-[#FFE66D]",
    link: "/contact",
    size: "lg"
  },
];

const ActionHubSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-wide relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest mb-6">
              <Zap size={14} />
              Take Action
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-foreground leading-[1.1] mb-6">
              Every Action <span className="text-secondary">Creates a Ripple</span> of Change
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              We provide the platform, you provide the passion. Together, we're building a dyslexia-friendly future for every child in Tanzania.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {/* Main Large Card 1 */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
              <div className="group relative bg-[#FF6B6B] rounded-[2.5rem] p-10 text-white h-[450px] md:h-[520px] flex flex-col justify-between overflow-hidden shadow-2xl shadow-[#FF6B6B]/20 transition-all duration-700 hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 rotate-3 group-hover:rotate-12 transition-all">
                    <Heart size={28} className="fill-white" />
                  </div>
                  <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">Support Our <br />Mission Through <br />Donation</h3>
                  <p className="text-white/80 text-base leading-relaxed max-w-xs transition-opacity group-hover:opacity-100">
                    Screening a single child costs less than a cup of coffee. Your gift changes an entire educational journey.
                  </p>
                </div>
                <Link to="/donate" className="inline-flex items-center gap-2.5 bg-white text-[#FF6B6B] px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs w-fit hover:bg-black hover:text-white transition-all shadow-xl">
                  Donate Now <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Small Card 1 */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="group bg-card border border-border/50 rounded-[2rem] p-8 h-[240px] flex flex-col justify-between hover:border-primary/30 hover:shadow-2xl transition-all duration-500">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <HandHeart size={20} />
                  </div>
                  <h4 className="text-xl font-black mb-1">Advocate</h4>
                  <p className="text-muted-foreground text-[13px] leading-relaxed">Share knowledge and help break the dyslexia stigma in schools.</p>
                </div>
                <Link to="/about" className="text-primary font-black uppercase tracking-widest text-[9px] flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn Ways <ArrowRight size={12} />
                </Link>
              </div>
            </ScrollReveal>

            {/* Small Card 2 */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="group bg-card border border-border/50 rounded-[2rem] p-8 h-[240px] flex flex-col justify-between hover:border-[#4ECDC4]/50 hover:shadow-2xl transition-all duration-500 sm:mt-8">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#4ECDC4]/10 flex items-center justify-center mb-5 group-hover:bg-[#4ECDC4] group-hover:text-white transition-all text-[#4ECDC4]">
                    <Users size={20} />
                  </div>
                  <h4 className="text-xl font-black mb-1">Volunteer</h4>
                  <p className="text-muted-foreground text-[13px] leading-relaxed">Join our hands-on team during community screening events.</p>
                </div>
                <Link to="/contact" className="text-[#4ECDC4] font-black uppercase tracking-widest text-[9px] flex items-center gap-2 group-hover:gap-4 transition-all">
                  Get Involved <ArrowRight size={12} />
                </Link>
              </div>
            </ScrollReveal>

            {/* Large Horizontal Card */}
            <div className="sm:col-span-2">
              <ScrollReveal direction="right" delay={0.4}>
                <div className="group relative bg-[#FFE66D] rounded-[2.5rem] p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl hover:shadow-2xl transition-all duration-700">
                  <div className="absolute -top-10 left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative z-10 max-w-lg">
                    <div className="inline-flex items-center gap-2 text-black/40 font-black uppercase tracking-widest text-[9px] mb-3">
                      <Sparkles size={14} /> Global Community
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-black leading-tight mb-3">Become a Member of Dyslexia Tanzania</h3>
                    <p className="text-black/60 font-semibold text-sm">Get exclusive access to training, certified resources, and a supportive network of educators and parents across Africa.</p>
                  </div>
                  <Link to="/contact" className="relative z-10 bg-black text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-2xl whitespace-nowrap">
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
