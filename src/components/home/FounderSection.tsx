import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import founderImg from "@/assets/founder.png";

const FounderSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="bg-[#0a0a0a] rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 overflow-hidden relative border border-white/10">
          {/* Animated Background Pulse */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="relative mb-8 md:mb-10">
                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/30 p-1 bg-white/5 overflow-hidden">
                  <img
                    src={founderImg}
                    alt="Caudence Ayoti, Founder"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-hope-yellow text-black p-2 rounded-full shadow-lg">
                  <Quote size={16} className="fill-current" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <blockquote className="text-xl md:text-3xl lg:text-4xl font-black text-white italic leading-tight tracking-tight">
                  <span className="text-primary">"</span>Every child deserves the right to learn in a way that works for them. Dyslexia is not a disability — it is a <span className="text-secondary">different ability.</span><span className="text-primary">"</span>
                </blockquote>

                <div className="pt-4">
                  <div className="inline-block py-2 px-6 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
                    <p className="text-lg md:text-xl font-black text-white font-oswald tracking-wide">Caudence Ayoti</p>
                    <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] mt-0.5">Founder, Dyslexia Tanzania</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
