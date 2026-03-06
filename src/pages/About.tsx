import { Target, Eye, Heart, Users, HandHeart, Zap, Sparkles, Award } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import founderImg from "@/assets/founder.png";
import aboutCartoon from "@/assets/nav/aboutus-cartoon.png";
import SEO from "@/components/SEO";

const values = [
  { icon: Heart, title: "Equality", description: "Every child deserves equal access to education.", color: "text-red-500", bg: "bg-red-50" },
  { icon: Users, title: "Inclusivity", description: "We embrace diverse learners and create belonging.", color: "text-blue-500", bg: "bg-blue-50" },
  { icon: Zap, title: "Fairness", description: "We advocate for fair treatment in education.", color: "text-yellow-500", bg: "bg-yellow-50" },
  { icon: Sparkles, title: "Positivity", description: "We believe in every dyslexic child's potential.", color: "text-purple-500", bg: "bg-purple-50" },
];

const milestones = [
  { year: "2021", title: "Inception", description: "Founded in Arusha with a mission to bring dyslexia awareness to Tanzania." },
  { year: "2022", title: "First 100", description: "Successfully screened 100 children and held our first teacher training workshop." },
  { year: "2023", title: "Expansion", description: "Extended programs to Dar es Salaam and partnered with international organizations." },
  { year: "2024", title: "Policy Advocacy", description: "Initiated dialogues with the Ministry of Education for reforms." },
  { year: "2025", title: "Looking Forward", description: "Launching nationwide mobile screening clinics and digital tools." },
];

const About = () => {
  return (
    <main className="bg-background overflow-hidden">
      <SEO title="About Us" description="Learn about Dyslexia Tanzania's mission, vision, and values." />
      <PageHero
        badge="Who We Are"
        title={<>Bridging the Gap <span className="text-secondary">for Dyslexic Learners</span></>}
        description="We are a community-driven organization dedicated to transforming the educational landscape for children with learning differences in Tanzania."
        backgroundImage={aboutCartoon}
        imageAlt="Illustration of community support for dyslexia"
      />

      {/* Mission & Vision */}
      <section className="section-padding relative">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-6 md:gap-12 items-center">
            <div className="lg:col-span-7">
              <ScrollReveal direction="left">
                <div className="bg-card border border-border/50 rounded-2xl md:rounded-[3rem] p-5 md:p-14 shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 hidden md:block" />
                  <Target size={32} className="text-primary mb-4 md:mb-6" />
                  <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 leading-tight">
                    Our <span className="text-primary">Mission</span>
                  </h2>
                  <p className="text-base md:text-xl text-muted-foreground leading-relaxed mb-4 font-medium italic">
                    "Empower dyslexic children through creating awareness and advocating for dyslexia friendly-education."
                  </p>
                  <div className="w-12 md:w-16 h-1.5 bg-primary rounded-full" />
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-5 lg:-ml-20 z-10">
              <ScrollReveal direction="right" delay={0.2}>
                <div className="bg-secondary rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 text-secondary-foreground shadow-xl relative">
                  <Eye size={28} className="mb-3 md:mb-5 opacity-80" />
                  <h3 className="text-xl md:text-2xl font-black mb-3">Our Vision</h3>
                  <p className="text-sm md:text-lg leading-relaxed opacity-90">
                    Equal opportunities in education for dyslexic children across every region of Tanzania.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-20">
              <span className="text-xs md:text-sm font-black text-primary uppercase tracking-widest">Our Journey</span>
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-black mt-3 mb-4 md:mb-8">How We <span className="text-secondary">Grew</span></h2>
              <p className="text-muted-foreground text-sm md:text-lg">From a small idea in Arusha to a national movement.</p>
            </div>
          </ScrollReveal>

          <div className="relative max-w-5xl mx-auto">
            {/* Center Line - hidden on mobile */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-border md:-translate-x-1/2" />

            <div className="space-y-6 md:space-y-0">
              {milestones.map((milestone, i) => (
                <ScrollReveal key={milestone.year} direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={`relative flex items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} pl-14 md:pl-0`}>
                    <div className="hidden md:block flex-1 w-full" />
                    <div className="absolute left-0 md:relative z-10 w-12 h-12 md:w-20 md:h-20 bg-primary rounded-full border-4 md:border-8 border-background flex items-center justify-center shadow-lg">
                      <span className="text-primary-foreground font-black text-[10px] md:text-xs">{milestone.year}</span>
                    </div>
                    <div className="flex-1 w-full md:px-8 lg:px-12">
                      <div className="bg-card p-4 md:p-8 rounded-xl md:rounded-[2rem] border border-border shadow-lg">
                        <h4 className="text-base md:text-xl font-black mb-1 md:mb-2 text-primary">{milestone.title}</h4>
                        <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding overflow-visible">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="max-w-xl">
                <span className="text-xs md:text-sm font-black text-secondary uppercase tracking-widest">Our DNA</span>
                <h2 className="text-2xl md:text-4xl lg:text-6xl font-black mt-3 mb-4 md:mb-8">What We <span className="text-primary">Stand For</span></h2>
                <p className="text-muted-foreground text-sm md:text-xl leading-relaxed mb-6 md:mb-12">
                  Our principles are the engine behind every screening, workshop, and policy meeting.
                </p>
                <Link to="/donate" className="bg-primary text-primary-foreground font-black px-6 md:px-10 py-3 md:py-5 rounded-full hover:shadow-xl hover:scale-105 transition-all text-xs md:text-sm uppercase tracking-widest inline-block">
                  Support Our Cause
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-3 md:gap-6">
              {values.map((v, i) => (
                <ScrollReveal key={v.title} delay={i * 0.1}>
                  <div className={`group bg-card p-4 md:p-8 rounded-xl md:rounded-[2.5rem] border border-border/50 shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center text-center ${i % 2 !== 0 ? 'sm:mt-4 md:mt-8' : ''}`}>
                    <div className={`w-10 h-10 md:w-16 md:h-16 rounded-lg md:rounded-[1.5rem] flex items-center justify-center mb-3 md:mb-6 ${v.bg} ${v.color}`}>
                      <v.icon size={20} />
                    </div>
                    <h3 className="text-sm md:text-xl font-black mb-1 md:mb-3">{v.title}</h3>
                    <p className="text-muted-foreground text-[11px] md:text-sm leading-relaxed">{v.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="container-wide relative z-10">
          <div className="bg-card border border-border/50 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 shadow-2xl max-w-6xl mx-auto overflow-hidden relative">
            <div className="grid lg:grid-cols-[200px_1fr] md:grid-cols-[250px_1fr] gap-8 md:gap-16 items-center">
              <ScrollReveal direction="left">
                <div className="relative group mx-auto">
                  <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all" />
                  <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-8 border-white shadow-2xl overflow-hidden bg-muted">
                    <img src={founderImg} alt="Caudence Ayoti" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="absolute -bottom-2 right-4 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    Founder
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="relative">
                  <Award size={48} className="text-secondary/20 absolute -top-10 -right-4 md:-top-16 md:right-0 opacity-50" />
                  <h2 className="text-2xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                    From Pain to <span className="text-primary italic">Purpose</span>
                  </h2>
                  <div className="space-y-6">
                    <p className="text-base md:text-2xl font-medium text-muted-foreground leading-relaxed italic border-l-4 border-primary/30 pl-6">
                      "Our goal is not just to teach children to read, but to help them discover that their different way of thinking is actually their greatest strength."
                    </p>
                    <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                      Caudence Ayoti founded Dyslexia Tanzania driven by a deep belief that every child can succeed when given the right tools and understanding.
                    </p>

                    <div className="flex flex-wrap items-center gap-6 md:gap-12 pt-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <Award size={24} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-xl md:text-2xl font-black text-foreground">15+</p>
                          <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Awards</p>
                        </div>
                      </div>
                      <div className="w-px h-12 bg-border hidden sm:block" />
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                          <Users size={24} className="text-secondary" />
                        </div>
                        <div>
                          <p className="text-xl md:text-2xl font-black text-foreground">10k+</p>
                          <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">Impacted</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="bg-primary rounded-2xl md:rounded-[3rem] p-6 md:p-20 text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <HandHeart size={40} className="text-primary-foreground mx-auto mb-4 md:mb-8 opacity-80" />
                <h2 className="text-xl md:text-3xl lg:text-5xl font-black text-primary-foreground mb-4 md:mb-8 leading-tight">
                  Be the Catalyst <span className="text-hope-yellow">for Change</span>
                </h2>
                <p className="text-primary-foreground/80 text-sm md:text-xl mb-6 md:mb-10 leading-relaxed">
                  Your support fuels early intervention, teacher training, and policy shifts.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-5">
                  <Link to="/donate" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-primary font-black px-6 md:px-10 py-3 md:py-5 rounded-full hover:bg-hope-yellow transition-all shadow-xl text-sm md:text-base uppercase tracking-widest">
                    Donate Now <Heart size={16} />
                  </Link>
                  <Link to="/volunteer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-foreground/10 text-primary-foreground font-black px-6 md:px-10 py-3 md:py-5 rounded-full hover:bg-white/10 transition-all border border-white/20 text-sm md:text-base uppercase tracking-widest">
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
