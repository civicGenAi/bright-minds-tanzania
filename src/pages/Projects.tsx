import { useState, useEffect } from "react";
import { BookOpen, Users, GraduationCap, ArrowRight, Target, Heart, Handshake, Info, X, DollarSign, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";
import projectsCartoon from "@/assets/nav/projects-cartoon.png";

import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projectsData";

const Counter = ({ value }: { value: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    const timer = setInterval(() => {
      start += Math.ceil(end / 60);
      if (start >= end) { setDisplayValue(end); clearInterval(timer); }
      else setDisplayValue(start);
    }, 20);
    return () => clearInterval(timer);
  }, [value]);
  return <span>{displayValue.toLocaleString()}</span>;
};

const Projects = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background">
      <SEO title="Projects" description="Discover our projects and initiatives including the Dyslexia Awareness Run, Talent Show, and annual impact reports." />
      <PageHero
        badge="Our Impact"
        title={<>Projects & <span className="text-secondary">Initiatives</span></>}
        description="Driven by purpose, scaled by community. Discover how we're reshaping education."
        backgroundImage={projectsCartoon}
      />

      <section className="section-padding relative">
        <div className="container-wide">
          {/* Projects Grid - mobile optimized */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
            {projects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.1}>
                <div
                  className="group bg-card rounded-2xl md:rounded-3xl border border-border/50 overflow-hidden transition-all duration-500 hover:shadow-xl h-full flex flex-col hover:border-primary/20 cursor-pointer"
                  onClick={() => navigate(`/projects/${project.id}`)}
                >
                  {/* Image */}
                  <div className="relative h-44 md:h-56 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3 md:top-4 md:left-4">
                      <span className="px-2.5 py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-wider shadow-lg bg-primary text-primary-foreground font-oswald">
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
                      <h3 className="text-base md:text-lg font-bold text-white leading-tight font-oswald">{project.title}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-6 flex flex-col flex-1">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{project.excerpt}</p>

                    {/* Impact Stat */}
                    <div className="bg-muted/50 rounded-xl p-3 md:p-4 mb-4 flex items-center gap-3">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Users size={18} />
                      </div>
                      <div>
                        <p className="text-[9px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider font-oswald">{project.impactLabel}</p>
                        <p className="text-lg md:text-xl font-black text-foreground font-oswald"><Counter value={project.impactValue || 0} />+</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        className="flex items-center justify-center gap-1.5 bg-foreground text-background font-bold py-3 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-wider text-[9px] md:text-xs font-oswald"
                      >
                        <Info size={13} /> Learn More
                      </button>
                      <Link
                        to="/donate"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center gap-1.5 bg-secondary text-secondary-foreground font-bold py-3 rounded-xl hover:shadow-lg transition-all uppercase tracking-wider text-[9px] md:text-xs font-oswald"
                      >
                        <DollarSign size={13} /> Support
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide text-center">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto bg-card rounded-2xl md:rounded-3xl p-6 md:p-16 border border-border shadow-xl">
              <Target className="text-primary w-10 h-10 md:w-14 md:h-14 mx-auto mb-4 md:mb-6" />
              <h2 className="text-xl md:text-3xl lg:text-4xl font-black mb-3 md:mb-6 font-oswald uppercase tracking-tight">Have an idea to collaborate?</h2>
              <p className="text-sm md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-lg mx-auto leading-relaxed">We're always looking for partners, sponsors and schools to join our mission of inclusivity.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-foreground text-background font-bold px-6 md:px-10 py-3 md:py-4 rounded-full hover:bg-primary hover:text-primary-foreground transition-all text-xs md:text-sm uppercase tracking-wider shadow-xl font-oswald">
                Start a Conversation <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Projects;
