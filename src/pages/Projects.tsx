import { BookOpen, Users, GraduationCap, HeartHandshake } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    icon: BookOpen,
    title: "Community Screening Program",
    description: "Free dyslexia screening events in schools across Dar es Salaam and beyond, reaching over 500 children annually.",
    status: "Ongoing",
  },
  {
    icon: GraduationCap,
    title: "Teacher Training Initiative",
    description: "Equipping primary school teachers with knowledge and tools to identify and support dyslexic students in mainstream classrooms.",
    status: "Ongoing",
  },
  {
    icon: Users,
    title: "Parent Support Network",
    description: "Monthly meetups and online groups connecting families of children with dyslexia for shared learning and emotional support.",
    status: "Ongoing",
  },
  {
    icon: HeartHandshake,
    title: "Policy Advocacy Campaign",
    description: "Working with the Ministry of Education to integrate dyslexia accommodations into national education policies.",
    status: "In Progress",
  },
];

const Projects = () => {
  return (
    <main className="pt-20">
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Impact</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mt-2 mb-6">
                Projects & <span className="text-secondary">Initiatives</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover the programs that are making a real difference for dyslexic children and families in Tanzania.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-8 border border-border card-hover h-full">
                  <div className="flex items-start gap-5">
                    <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center shrink-0">
                      <project.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                        <span className="text-xs font-semibold text-leaf-green bg-leaf-green/10 px-2 py-0.5 rounded-full">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
