import { useState, useEffect } from "react";
import { BookOpen, Users, GraduationCap, ArrowRight, Target, Users2, ShieldCheck, Heart, Users as UsersIcon, Handshake, Globe, Info, X, DollarSign, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import projectsCartoon from "@/assets/nav/projects-cartoon.png";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";

const categories = ["All", "Screening", "Training", "Support", "Advocacy"];

const projects = [
  {
    id: 1, icon: BookOpen, title: "Community Screening Program",
    description: "Free dyslexia screening events in schools across Dar es Salaam and beyond, reaching over 500 children annually.",
    fullDescription: "Our flagship program focuses on early identification. We organize mobile screening clinics that visit primary schools, providing free assessments using international standard tools adapted for the Tanzanian context.",
    status: "Ongoing", category: "Screening",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=500&fit=crop",
    impact: { label: "Children Screened", value: 1200, icon: Users2 },
    goal: "Reach 5,000 children by 2027",
    report: "Annual screening data shows 15% of assessed children display signs of dyslexia, highlighting the critical need for early identification programs."
  },
  {
    id: 2, icon: GraduationCap, title: "Teacher Training Initiative",
    description: "Equipping teachers with knowledge and tools to identify and support dyslexic students in classrooms.",
    fullDescription: "We provide intensive 3-day workshops for public and private school teachers, focusing on recognizing signs of dyslexia and implementing multi-sensory teaching strategies.",
    status: "Ongoing", category: "Training",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=500&fit=crop",
    impact: { label: "Teachers Trained", value: 250, icon: ShieldCheck },
    goal: "Certify 1,000 teachers nationwide",
    report: "Post-training evaluations show 85% of teachers feel significantly more confident in identifying and supporting dyslexic students."
  },
  {
    id: 3, icon: UsersIcon, title: "Parent Support Network",
    description: "Monthly meetups and online groups connecting families for shared learning and emotional support.",
    fullDescription: "Our support network provides a safe space for parents to share experiences, learn from experts, and advocate for their children's needs.",
    status: "Ongoing", category: "Support",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=500&fit=crop",
    impact: { label: "Families Supported", value: 380, icon: Heart },
    goal: "Establish nodes in 5 major regions",
    report: "Parent satisfaction surveys indicate 92% feel more equipped to support their children after joining our network."
  },
  {
    id: 4, icon: Globe, title: "Policy Advocacy Campaign",
    description: "Working with the Ministry of Education to integrate dyslexia accommodations into national policies.",
    fullDescription: "We work closely with government stakeholders to push for better accommodation standards in national examinations.",
    status: "In Progress", category: "Advocacy",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=500&fit=crop",
    impact: { label: "Policy Meetings", value: 15, icon: Handshake },
    goal: "National examination accommodations",
    report: "15 formal policy meetings completed with Ministry officials. Draft accommodation guidelines are now under review."
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
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = projects.filter(p => activeCategory === "All" || p.category === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      <SEO title="Projects" description="Discover our current projects and initiatives for dyslexia screening, teacher training, and advocacy in Tanzania." />
      <PageHero
        badge="Our Impact"
        title={<>Projects & <span className="text-secondary">Initiatives</span></>}
        description="Driven by purpose, scaled by community. Discover how we're reshaping education."
        backgroundImage={projectsCartoon}
        imageAlt="Illustration of educational projects"
      />

      <section className="section-padding relative">
        <div className="container-wide">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-8 md:mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 md:px-8 py-2 md:py-3 rounded-xl md:rounded-2xl text-xs md:text-sm font-black uppercase tracking-widest transition-all ${activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-lg -translate-y-0.5"
                  : "bg-card text-muted-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 max-w-6xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`${i % 2 !== 0 ? 'md:mt-8' : ''}`}
                >
                  <div className="group bg-card rounded-2xl md:rounded-[3rem] border border-border/50 overflow-hidden transition-all duration-500 hover:shadow-xl h-full flex flex-col hover:border-primary/20">
                    <div className="relative h-48 md:h-72 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                      <div className="absolute top-4 md:top-8 left-4 md:left-8">
                        <span className={`px-3 py-1 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest shadow-lg ${project.status === 'Ongoing' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8">
                        <div className="flex items-center gap-2 md:gap-4">
                          <div className="bg-white/20 backdrop-blur-xl p-2 md:p-3 rounded-lg md:rounded-2xl">
                            <project.icon className="text-white w-4 h-4 md:w-6 md:h-6" />
                          </div>
                          <h3 className="text-lg md:text-2xl font-black text-white leading-tight">{project.title}</h3>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 md:p-10 flex flex-col flex-1">
                      <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mb-4 md:mb-10 flex-1">{project.description}</p>

                      {/* Impact Stat */}
                      <div className="bg-muted/50 rounded-xl md:rounded-3xl p-4 md:p-6 mb-4 md:mb-10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <project.impact.icon size={20} />
                          </div>
                          <div>
                            <p className="text-[9px] md:text-xs font-black text-muted-foreground uppercase tracking-widest">{project.impact.label}</p>
                            <p className="text-xl md:text-2xl font-black text-foreground"><Counter value={project.impact.value} />+</p>
                          </div>
                        </div>
                        <div className="text-right hidden sm:block">
                          <p className="text-[9px] font-black text-primary uppercase tracking-widest mb-0.5">Target</p>
                          <p className="text-[11px] font-bold text-muted-foreground">{project.goal}</p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="grid grid-cols-2 gap-2 md:gap-4">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="flex items-center justify-center gap-1.5 bg-foreground text-background font-black py-3 md:py-4 rounded-xl md:rounded-2xl hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-widest text-[9px] md:text-xs"
                        >
                          <Info size={14} /> Details
                        </button>
                        <Link
                          to="/donate"
                          className="flex items-center justify-center gap-1.5 bg-secondary text-secondary-foreground font-black py-3 md:py-4 rounded-xl md:rounded-2xl hover:shadow-lg transition-all uppercase tracking-widest text-[9px] md:text-xs"
                        >
                          <DollarSign size={14} /> Support
                        </Link>
                      </div>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="mt-2 md:mt-4 flex items-center justify-center gap-1.5 border border-border text-muted-foreground font-black py-3 md:py-4 rounded-xl md:rounded-2xl hover:border-primary hover:text-primary transition-all uppercase tracking-widest text-[9px] md:text-xs"
                      >
                        <Handshake size={14} /> Get Involved
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
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
              className="relative w-full md:max-w-4xl max-h-[90vh] bg-card border border-border rounded-t-2xl md:rounded-[3rem] shadow-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-48 md:h-full overflow-hidden">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 left-4 p-2 rounded-full bg-white/20 backdrop-blur-xl md:hidden"
                  >
                    <X className="text-white" size={20} />
                  </button>
                </div>

                <div className="p-5 md:p-14 overflow-y-auto max-h-[60vh] md:max-h-[80vh]">
                  <div className="flex justify-between items-start mb-4 md:mb-8">
                    <span className="bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                      {selectedProject.category}
                    </span>
                    <button onClick={() => setSelectedProject(null)} className="hidden md:block p-2 rounded-full hover:bg-muted transition-colors">
                      <X size={24} />
                    </button>
                  </div>

                  <h2 className="text-xl md:text-3xl font-black text-foreground mb-4 md:mb-6 leading-tight">{selectedProject.title}</h2>

                  <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mb-4 md:mb-8">{selectedProject.fullDescription}</p>

                  {/* Project Report */}
                  <div className="bg-muted/50 rounded-xl p-4 mb-4 md:mb-8 border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText size={16} className="text-primary" />
                      <h4 className="font-black text-sm uppercase tracking-widest text-primary">Project Report</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{selectedProject.report}</p>
                  </div>

                  <div className="space-y-3">
                    <Link
                      to="/donate"
                      className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-black py-3 md:py-4 rounded-xl hover:shadow-xl transition-all text-sm"
                    >
                      <Heart size={18} /> Donate to this Project
                    </Link>
                    <Link
                      to="/volunteer"
                      className="w-full flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-black py-3 md:py-4 rounded-xl hover:shadow-xl transition-all text-sm"
                    >
                      <Handshake size={18} /> Become a Volunteer
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <section className="section-padding bg-muted/30">
        <div className="container-wide text-center">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto bg-card rounded-2xl md:rounded-[3rem] p-6 md:p-20 border border-border shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <Target className="text-primary w-10 h-10 md:w-16 md:h-16 mx-auto mb-4 md:mb-8" />
                <h2 className="text-xl md:text-3xl lg:text-5xl font-black mb-4 md:mb-6">Have an idea to collaborate?</h2>
                <p className="text-sm md:text-xl text-muted-foreground mb-6 md:mb-10">We're always looking for partners and schools to join our mission.</p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-foreground text-background font-black px-6 md:px-10 py-3 md:py-5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all text-xs md:text-sm uppercase tracking-widest shadow-xl">
                  Start a Conversation <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Projects;
