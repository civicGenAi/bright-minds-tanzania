import { BookOpen, Users, GraduationCap, HeartHandshake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";

const projects = [
  {
    icon: BookOpen,
    title: "Community Screening Program",
    description: "Free dyslexia screening events in schools across Dar es Salaam and beyond, reaching over 500 children annually.",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
  },
  {
    icon: GraduationCap,
    title: "Teacher Training Initiative",
    description: "Equipping primary school teachers with knowledge and tools to identify and support dyslexic students in mainstream classrooms.",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop",
  },
  {
    icon: Users,
    title: "Parent Support Network",
    description: "Monthly meetups and online groups connecting families of children with dyslexia for shared learning and emotional support.",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop",
  },
  {
    icon: HeartHandshake,
    title: "Policy Advocacy Campaign",
    description: "Working with the Ministry of Education to integrate dyslexia accommodations into national education policies.",
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop",
  },
];

const Projects = () => {
  return (
    <main>
      <PageHero
        badge="Our Impact"
        title={<>Projects & <span className="text-secondary">Initiatives</span></>}
        description="Discover the programs that are making a real difference for dyslexic children and families in Tanzania."
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.1}>
                <article className="bg-card rounded-2xl overflow-hidden border border-border card-hover h-full flex flex-col group relative">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-3xl z-10 pointer-events-none" />

                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                    <span className="absolute bottom-3 left-4 inline-block text-xs font-semibold text-primary-foreground bg-primary rounded-full px-3 py-1">
                      {project.status}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                        <project.icon size={20} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed flex-1">{project.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-primary font-semibold text-sm">
                      Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
