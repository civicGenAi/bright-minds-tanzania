import { Target, Eye, Heart, Users, HandHeart, CheckCircle, ArrowRight, Award, Zap, Shield, Sparkles, Milestone, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import founderImg from "@/assets/founder.jpg";
import heroChildrenImg from "@/assets/hero-children.jpg";
import aboutCartoon from "@/assets/nav/aboutus-cartoon.png";
import { motion } from "framer-motion";

const values = [
  { icon: Heart, title: "Equality", description: "Every child deserves equal access to education regardless of learning differences.", color: "text-red-500", bg: "bg-red-50" },
  { icon: Users, title: "Inclusivity", description: "We embrace diverse learners and create spaces where everyone belongs.", color: "text-blue-500", bg: "bg-blue-50" },
  { icon: Zap, title: "Fairness", description: "We advocate for policies that ensure fair treatment for dyslexic students.", color: "text-yellow-500", bg: "bg-yellow-50" },
  { icon: Sparkles, title: "Positivity", description: "We believe in the strength and potential of every dyslexic child.", color: "text-purple-500", bg: "bg-purple-50" },
];

const milestones = [
  { year: "2021", title: "Inception", description: "Founded in Arusha with a mission to bring dyslexia awareness to Tanzania." },
  { year: "2022", title: "First 100", description: "Successfully screened 100 children and held our first teacher training workshop." },
  { year: "2023", title: "Expansion", description: "Extended our programs to Dar es Salaam and partnered with international organizations." },
  { year: "2024", title: "Policy Advocacy", description: "Initiated dialogues with the Ministry of Education for national assessment reforms." },
  { year: "2025", title: "Looking Forward", description: "Launching full-scale nationwide mobile screening clinics and digital support tools." },
];

const About = () => {
  return (
    <main className="bg-background overflow-hidden">
      <PageHero
        badge="Who We Are"
        title={<>Bridging the Gap <span className="text-secondary">for Dyslexic Learners</span></>}
        description="We are a community-driven organization dedicated to transforming the educational landscape for children with learning differences in Tanzania."
        backgroundImage={aboutCartoon}
      />

      {/* Asymmetric Mission & Vision */}
      <section className="section-padding relative">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <ScrollReveal direction="left">
                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
                  <div className="bg-card border border-border/50 rounded-[4rem] p-12 md:p-16 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                    <Target size={48} className="text-primary mb-8" />
                    <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                      Our <span className="text-primary">Mission</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6 font-medium italic">
                      "Empower dyslexic children through creating awareness and advocating for dyslexia friendly-education."
                    </p>
                    <div className="w-20 h-2 bg-primary rounded-full" />
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-5 lg:-ml-20 z-10">
              <ScrollReveal direction="right" delay={0.2}>
                <div className="bg-secondary rounded-[3rem] p-12 text-secondary-foreground shadow-2xl relative">
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
                  <Eye size={40} className="mb-6 opacity-80" />
                  <h3 className="text-3xl font-black mb-6">Our Vision</h3>
                  <p className="text-xl leading-relaxed opacity-90">
                    Equal opportunities in education for dyslexic children across every region of Tanzania.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-sm font-black text-primary uppercase tracking-[0.3em]">Our Journey</span>
              <h2 className="text-4xl md:text-6xl font-black mt-4 mb-8">How We <span className="text-secondary">Grew</span></h2>
              <p className="text-muted-foreground text-lg">From a small idea in Arusha to a national movement of education reform.</p>
            </div>
          </ScrollReveal>

          <div className="relative max-w-5xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 hidden md:block" />

            <div className="space-y-12 md:space-y-0">
              {milestones.map((milestone, i) => (
                <ScrollReveal key={milestone.year} direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex-1 w-full" />
                    <div className="relative z-10 w-20 h-20 bg-primary rounded-full border-8 border-background flex items-center justify-center shadow-xl my-6 md:my-0">
                      <span className="text-primary-foreground font-black text-xs">{milestone.year}</span>
                    </div>
                    <div className="flex-1 w-full md:px-12">
                      <div className="bg-card p-8 rounded-[2.5rem] border border-border shadow-lg hover:shadow-2xl transition-all duration-500">
                        <h4 className="text-2xl font-black mb-3 text-primary">{milestone.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Creative Values Grid */}
      <section className="section-padding overflow-visible">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="max-w-xl">
                <span className="text-sm font-black text-secondary uppercase tracking-[0.3em]">Our DNA</span>
                <h2 className="text-4xl md:text-6xl font-black mt-4 mb-8">What We <span className="text-primary">Stand For</span></h2>
                <p className="text-muted-foreground text-xl leading-relaxed mb-12">
                  Our principles aren't just words on a wall — they are the engine behind every screening, every workshop, and every policy meeting we conduct.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/donate" className="bg-primary text-primary-foreground font-black px-10 py-5 rounded-full hover:shadow-2xl hover:scale-105 transition-all text-sm uppercase tracking-widest">
                    Support Our Cause
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <div className="relative py-10 md:py-20 lg:py-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                {values.map((v, i) => (
                  <ScrollReveal key={v.title} delay={i * 0.1}>
                    <div className={`group bg-card p-10 rounded-[3rem] border border-border/50 shadow-xl hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 h-full flex flex-col items-center text-center ${i % 2 !== 0 ? 'sm:mt-10' : ''}`}>
                      <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 rotate-3 group-hover:rotate-12 transition-all duration-500 ${v.bg} ${v.color}`}>
                        <v.icon size={36} />
                      </div>
                      <h3 className="text-2xl font-black mb-4">{v.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{v.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              {/* Decorative splat */}
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-[120px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Polished Founder Section */}
      <section className="section-padding bg-muted/20 relative">
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <ScrollReveal direction="left">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary rounded-[4rem] opacity-20 group-hover:opacity-30 transition-opacity blur-2xl" />
                <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl aspect-[4/5]">
                  <img
                    src={founderImg}
                    alt="Caudence Ayoti"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black via-black/20 to-transparent">
                    <p className="text-white text-3xl font-black mb-1">Caudence Ayoti</p>
                    <p className="text-primary font-bold uppercase tracking-widest text-sm italic">Founder & Visionary</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <Award size={48} className="text-secondary mb-8" />
                <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8">From Pain to <span className="text-primary">Purpose</span></h2>
                <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
                  <p>
                    Caudence Ayoti founded Dyslexia Tanzania driven by a deep belief that every child can succeed when given
                    the right tools. Her work has been instrumental in bringing dyslexia awareness to national discourse.
                  </p>
                  <p>
                    "Our goal is not just to teach children to read, but to help them discover that their different way of thinking is actually their greatest strength. In Tanzania, we are pioneering a future where no child is left behind because of how they learn."
                  </p>
                  <div className="flex items-center gap-8 pt-6">
                    <div className="text-center">
                      <p className="text-3xl font-black text-foreground">15+</p>
                      <p className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Awards</p>
                    </div>
                    <div className="w-px h-12 bg-border" />
                    <div className="text-center">
                      <p className="text-3xl font-black text-foreground">10k+</p>
                      <p className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Impacted</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Redesigned CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="bg-primary rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden group">
              {/* Animated Decorations */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <HandHeart size={64} className="text-primary-foreground mx-auto mb-10 opacity-80" />
                <h2 className="text-4xl md:text-7xl font-black text-primary-foreground mb-10 tracking-tight leading-tight">
                  Be the Catalyst <span className="text-hope-yellow">for Change</span>
                </h2>
                <p className="text-primary-foreground/80 text-xl md:text-2xl mb-12 leading-relaxed">
                  Your support fuels early intervention, teacher training, and policy shifts. Every donation transforms a child's educational future.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link
                    to="/donate"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-primary font-black px-12 py-6 rounded-full hover:bg-hope-yellow transition-all shadow-2xl text-lg uppercase tracking-widest group"
                  >
                    Donate Now <Heart size={20} className="group-hover:scale-125 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary-foreground/10 text-primary-foreground font-black px-12 py-6 rounded-full hover:bg-white/10 transition-all border border-white/20 text-lg uppercase tracking-widest"
                  >
                    Join Our Team
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default About;
