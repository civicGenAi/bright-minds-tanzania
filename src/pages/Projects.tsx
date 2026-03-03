import { useState, useEffect } from "react";
import { BookOpen, Users, GraduationCap, HeartHandshake, ArrowRight, Target, Users2, ShieldCheck, Heart, Users as UsersIcon, Handshake, Globe, Info, X, DollarSign, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import projectsCartoon from "@/assets/nav/projects-cartoon.png";
import { motion, AnimatePresence, useSpring, useTransform, motionValue } from "framer-motion";

const categories = ["All", "Screening", "Training", "Support", "Advocacy"];

const projects = [
  {
    id: 1,
    icon: BookOpen,
    title: "Community Screening Program",
    description: "Free dyslexia screening events in schools across Dar es Salaam and beyond, reaching over 500 children annually.",
    fullDescription: "Our flagship program focuses on early identification. We organize mobile screening clinics that visit primary schools, providing free assessments using international standard tools adapted for the Tanzanian context. Early detection is the first step toward transforming a child's educational experience.",
    status: "Ongoing",
    category: "Screening",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=500&fit=crop",
    impact: { label: "Children Screened", value: 1200, icon: Users2 },
    goal: "Reach 5,000 children by 2027"
  },
  {
    id: 2,
    icon: GraduationCap,
    title: "Teacher Training Initiative",
    description: "Equipping primary school teachers with knowledge and tools to identify and support dyslexic students in mainstream classrooms.",
    fullDescription: "We believe that every classroom should be an inclusive environment. This initiative provides intensive 3-day workshops for public and private school teachers, focusing on recognizing signs of dyslexia and implementing multi-sensory teaching strategies that benefit all students.",
    status: "Ongoing",
    category: "Training",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=500&fit=crop",
    impact: { label: "Teachers Trained", value: 250, icon: ShieldCheck },
    goal: "Certify 1,000 teachers nationwide"
  },
  {
    id: 3,
    icon: UsersIcon,
    title: "Parent Support Network",
    description: "Monthly meetups and online groups connecting families of children with dyslexia for shared learning and emotional support.",
    fullDescription: "Navigating learning differences can be isolating for families. Our support network provides a safe space for parents to share experiences, learn from experts, and advocate for their children's needs within the school system and local community.",
    status: "Ongoing",
    category: "Support",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=500&fit=crop",
    impact: { label: "Families Supported", value: 380, icon: Heart },
    goal: "Establish nodes in 5 major regions"
  },
  {
    id: 4,
    icon: Globe,
    title: "Policy Advocacy Campaign",
    description: "Working with the Ministry of Education to integrate dyslexia accommodations into national education policies.",
    fullDescription: "Systemic change requires policy shifts. We work closely with government stakeholders to push for better accommodation standards in national examinations and the integration of specialized learning support within the general curriculum framework.",
    status: "In Progress",
    category: "Advocacy",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=500&fit=crop",
    impact: { label: "Policy Meetings", value: 15, icon: Handshake },
    goal: "National examination accommodations"
  },
];

const Counter = ({ value }: { value: number }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    let timer: any;

    const updateCounter = () => {
      start += Math.ceil(end / 100);
      if (start >= end) {
        setDisplayValue(end);
        clearInterval(timer);
      } else {
        setDisplayValue(start);
      }
    };

    timer = setInterval(updateCounter, duration / 100);
    return () => clearInterval(timer);
  }, [value]);

  return <span>{displayValue.toLocaleString()}</span>;
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = projects.filter(p =>
    activeCategory === "All" || p.category === activeCategory
  );

  return (
    <main className="min-h-screen bg-background">
      <PageHero
        badge="Our Impact"
        title={<>Projects & <span className="text-secondary">Initiatives</span></>}
        description="Driven by purpose, scaled by community. Discover how we're reshaping education."
        backgroundImage={projectsCartoon}
      />

      <section className="section-padding relative">
        <div className="container-wide">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-2xl text-sm font-black uppercase tracking-widest transition-all ${activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20 -translate-y-1"
                    : "bg-card text-muted-foreground hover:bg-muted"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Asymmetric Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`${i % 2 !== 0 ? 'md:mt-12' : ''}`}
                >
                  <div className="group bg-card rounded-[3rem] border border-border/50 overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] h-full flex flex-col hover:border-primary/20">
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      <div className="absolute top-8 left-8">
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg ${project.status === 'Ongoing' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                          }`}>
                          {project.status}
                        </span>
                      </div>

                      <div className="absolute bottom-8 left-8 right-8">
                        <div className="flex items-center gap-4">
                          <div className="bg-white/20 backdrop-blur-xl p-3 rounded-2xl">
                            <project.icon className="text-white w-6 h-6" />
                          </div>
                          <h3 className="text-2xl font-black text-white leading-tight">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="p-10 flex flex-col flex-1">
                      <p className="text-muted-foreground text-lg leading-relaxed mb-10 flex-1">
                        {project.description}
                      </p>

                      {/* Impact Stat */}
                      <div className="bg-muted lg:bg-muted/50 rounded-3xl p-6 mb-10 flex items-center justify-between group-hover:bg-primary/5 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <project.impact.icon size={24} />
                          </div>
                          <div>
                            <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">{project.impact.label}</p>
                            <p className="text-2xl font-black text-foreground">
                              <Counter value={project.impact.value} />+
                            </p>
                          </div>
                        </div>
                        <div className="text-right hidden sm:block">
                          <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Target</p>
                          <p className="text-xs font-bold text-muted-foreground">{project.goal}</p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="flex items-center justify-center gap-2 bg-foreground text-background font-black py-4 rounded-2xl hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-widest text-xs"
                        >
                          <Info size={16} /> Details
                        </button>
                        <Link
                          to="/donate"
                          className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-black py-4 rounded-2xl hover:shadow-xl hover:scale-105 transition-all uppercase tracking-widest text-xs"
                        >
                          <DollarSign size={16} /> Support
                        </Link>
                      </div>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="mt-4 flex items-center justify-center gap-2 border border-border text-muted-foreground font-black py-4 rounded-2xl hover:border-primary hover:text-primary transition-all uppercase tracking-widest text-xs"
                      >
                        <Handshake size={16} /> Get Involved
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
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-card border border-border rounded-[3rem] shadow-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-full overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 left-6 p-2 rounded-full bg-white/20 backdrop-blur-xl md:hidden"
                  >
                    <X className="text-white" />
                  </button>
                </div>

                <div className="p-10 md:p-14 overflow-y-auto max-h-[80vh]">
                  <div className="flex justify-between items-start mb-8">
                    <span className="bg-primary/10 text-primary text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full">
                      {selectedProject.category}
                    </span>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="hidden md:block p-2 rounded-full hover:bg-muted transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6 leading-tight">
                    {selectedProject.title}
                  </h2>

                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div className="space-y-4 pt-6">
                    <Link
                      to="/donate"
                      className="w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground font-black py-4 rounded-2xl hover:shadow-2xl transition-all"
                    >
                      <Heart size={20} /> Donate to this Project
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full flex items-center justify-center gap-3 bg-secondary text-secondary-foreground font-black py-4 rounded-2xl hover:shadow-2xl transition-all"
                    >
                      <Handshake size={20} /> Become a Volunteer
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
            <div className="max-w-3xl mx-auto bg-card rounded-[3rem] p-12 md:p-20 border border-border shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <Target className="text-primary w-16 h-16 mx-auto mb-8" />
                <h2 className="text-3xl md:text-5xl font-black mb-6">Have an idea to collaborate?</h2>
                <p className="text-xl text-muted-foreground mb-10">We're always looking for partners, researchers, and schools to join our mission of dyslexia-friendly education.</p>
                <Link to="/contact" className="inline-flex items-center gap-3 bg-foreground text-background font-black px-10 py-5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all text-sm uppercase tracking-widest shadow-xl">
                  Start a Conversation <ArrowRight size={20} />
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
