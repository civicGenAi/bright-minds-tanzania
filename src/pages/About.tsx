import { Target, Eye, Heart, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import founderImg from "@/assets/founder.jpg";

const values = [
  { icon: Heart, title: "Empathy", description: "We lead with compassion and understanding for every child and family." },
  { icon: Target, title: "Advocacy", description: "We fight for policy change and awareness at every level of society." },
  { icon: Eye, title: "Awareness", description: "We educate communities about dyslexia to break stigma and misconceptions." },
  { icon: Users, title: "Inclusion", description: "We believe every learner deserves access to quality, adapted education." },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Us</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mt-2 mb-6">
                Our Mission for <span className="text-secondary">Equal Learning</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dyslexia Tanzania was founded in 2017 by Caudence Ayoti with a single mission: to ensure that no child 
                in Tanzania is denied their right to learn because of dyslexia. We work tirelessly to raise awareness, 
                train educators, and provide support to families.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-12 text-center">
              Our <span className="text-primary">Core Values</span>
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-6 border border-border card-hover text-center h-full">
                  <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <v.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="grid md:grid-cols-[280px_1fr] gap-10 items-center max-w-4xl mx-auto">
            <ScrollReveal direction="left">
              <img src={founderImg} alt="Caudence Ayoti" className="rounded-2xl shadow-xl w-full aspect-square object-cover" />
            </ScrollReveal>
            <ScrollReveal>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Founder</span>
              <h2 className="text-3xl font-extrabold text-foreground mt-2 mb-4">Caudence Ayoti</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Caudence Ayoti founded Dyslexia Tanzania driven by a deep belief that every child can succeed when given 
                the right tools. Her work has been instrumental in bringing dyslexia awareness to national discourse.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Under her leadership, the organization has screened hundreds of children, trained dozens of teachers, 
                and partnered with both local and international organizations to drive change.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
