import { useState, useEffect } from "react";
import { BookOpen, Users, GraduationCap, ArrowRight, Target, Heart, Handshake, Info, X, DollarSign, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";
import awarenessRunImg from "@/assets/awareness-run.jpg";
import talentShowImg from "@/assets/talent-show.jpg";
import annualReportImg from "@/assets/annual-report.png";

const projects = [
  {
    id: 1, icon: Users, title: "Dyslexia Awareness Run",
    description: "An annual community event that brings together families, supporters and advocates to raise awareness about dyslexia through a fun run.",
    fullDescription: "The Dyslexia Awareness Run is our flagship fundraising and awareness event. Participants from all walks of life come together to run, walk, and show solidarity with dyslexic children. The event features educational booths, live performances, and community engagement activities.",
    status: "Annual Event", category: "Awareness",
    image: awarenessRunImg,
    impact: { label: "Participants", value: 500, icon: Users },
    goal: "Reach 1,000 participants by 2027",
    report: "The 2023 Awareness Run attracted over 500 participants and raised significant funds for screening programs. Media coverage reached an estimated 50,000 people across Tanzania."
  },
  {
    id: 2, icon: GraduationCap, title: "Talent Show – What's Your Story?",
    description: "A platform for dyslexic children to showcase their unique talents and abilities, proving that dyslexia is a different ability, not a disability.",
    fullDescription: "Our annual Talent Show gives dyslexic children center stage to express themselves through dance, music, art, and storytelling. This empowering event builds confidence, celebrates neurodiversity, and educates the community about the strengths of dyslexic individuals.",
    status: "Annual Event", category: "Empowerment",
    image: talentShowImg,
    impact: { label: "Children Featured", value: 120, icon: Heart },
    goal: "Expand to 5 regions by 2026",
    report: "The Talent Show has become a beloved community tradition, with 120+ children having performed. Post-event surveys show 95% of parents report increased confidence in their children."
  },
  {
    id: 3, icon: BookOpen, title: "2023 Annual Report",
    description: "A comprehensive look at our impact, achievements, financial transparency, and the milestones reached in advancing dyslexia-friendly education across Tanzania.",
    fullDescription: "Our Annual Report details the organization's progress across all programs including screening, teacher training, advocacy, and community support. It provides full financial transparency and outlines our strategic direction for the coming years.",
    status: "Published", category: "Reports",
    image: annualReportImg,
    impact: { label: "Pages of Impact", value: 48, icon: FileText },
    goal: "Full transparency in operations",
    report: "The 2023 report shows a 40% increase in children screened, 85% teacher satisfaction rate, and successful policy advocacy meetings with government officials."
  },
];

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
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <SEO title="Projects" description="Discover our projects and initiatives including the Dyslexia Awareness Run, Talent Show, and annual impact reports." />
      <PageHero
        badge="Our Impact"
        title={<>Projects & <span className="text-secondary">Initiatives</span></>}
        description="Driven by purpose, scaled by community. Discover how we're reshaping education."
      />

      <section className="section-padding relative">
        <div className="container-wide">
          {/* Projects Grid - mobile optimized */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
            {projects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.1}>
                <div className="group bg-card rounded-2xl md:rounded-3xl border border-border/50 overflow-hidden transition-all duration-500 hover:shadow-xl h-full flex flex-col hover:border-primary/20">
                  {/* Image */}
                  <div className="relative h-44 md:h-56 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3 md:top-4 md:left-4">
                      <span className={`px-2.5 py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-wider shadow-lg font-oswald ${project.status === 'Annual Event' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
                      <div className="flex items-center gap-2">
                        <div className="bg-white/20 backdrop-blur-xl p-2 rounded-lg">
                          <project.icon className="text-white w-4 h-4" />
                        </div>
                        <h3 className="text-base md:text-lg font-bold text-white leading-tight font-oswald">{project.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-6 flex flex-col flex-1">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{project.description}</p>

                    {/* Impact Stat */}
                    <div className="bg-muted/50 rounded-xl p-3 md:p-4 mb-4 flex items-center gap-3">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <project.impact.icon size={18} />
                      </div>
                      <div>
                        <p className="text-[9px] md:text-xs font-bold text-muted-foreground uppercase tracking-wider font-oswald">{project.impact.label}</p>
                        <p className="text-lg md:text-xl font-black text-foreground font-oswald"><Counter value={project.impact.value} />+</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center justify-center gap-1.5 bg-foreground text-background font-bold py-3 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-wider text-[9px] md:text-xs font-oswald"
                      >
                        <Info size={13} /> Details
                      </button>
                      <Link
                        to="/donate"
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

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="relative w-full md:max-w-3xl max-h-[90vh] bg-card border border-border rounded-t-2xl md:rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Modal Image */}
              <div className="relative h-40 md:h-64 overflow-hidden">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white/20 backdrop-blur-xl text-white"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-4 md:p-10 overflow-y-auto max-h-[55vh] md:max-h-[60vh]">
                <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full font-oswald">
                  {selectedProject.category}
                </span>

                <h2 className="text-xl md:text-3xl font-black text-foreground mt-3 mb-3 md:mb-6 font-oswald">{selectedProject.title}</h2>

                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4 md:mb-6">{selectedProject.fullDescription}</p>

                {/* Report */}
                <div className="bg-muted/50 rounded-xl p-4 mb-4 md:mb-6 border border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText size={16} className="text-primary" />
                    <h4 className="font-bold text-sm uppercase tracking-wider text-primary font-oswald">Project Report</h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{selectedProject.report}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to="/donate"
                    onClick={() => setSelectedProject(null)}
                    className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-3 rounded-xl text-sm font-oswald"
                  >
                    <Heart size={16} /> Donate
                  </Link>
                  <Link
                    to="/volunteer"
                    onClick={() => setSelectedProject(null)}
                    className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-bold py-3 rounded-xl text-sm font-oswald"
                  >
                    <Handshake size={16} /> Volunteer
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide text-center">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto bg-card rounded-2xl md:rounded-3xl p-6 md:p-16 border border-border shadow-xl">
              <Target className="text-primary w-10 h-10 md:w-14 md:h-14 mx-auto mb-4 md:mb-6" />
              <h2 className="text-xl md:text-3xl lg:text-4xl font-black mb-3 md:mb-6 font-oswald">Have an idea to collaborate?</h2>
              <p className="text-sm md:text-lg text-muted-foreground mb-6 md:mb-8">We're always looking for partners and schools to join our mission.</p>
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
