import { Target, Eye, Heart, Users, HandHeart, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import founderImg from "@/assets/founder.jpg";
import heroChildrenImg from "@/assets/hero-children.jpg";

const values = [
  { icon: Heart, title: "Equality", description: "Every child deserves equal access to education regardless of learning differences." },
  { icon: Users, title: "Inclusivity", description: "We embrace diverse learners and create spaces where everyone belongs." },
  { icon: Target, title: "Fairness in Education", description: "We advocate for policies that ensure fair treatment for dyslexic students." },
  { icon: Eye, title: "Positivity", description: "We believe in the strength and potential of every dyslexic child." },
];

const whatWeAddress = [
  "Advocate for equal learning opportunities for dyslexic children",
  "Create awareness about dyslexia in communities and schools",
  "Train teachers to identify and support dyslexic learners",
  "Provide screening and early intervention programs",
  "Connect families with resources and support networks",
];

const About = () => {
  return (
    <main>
      <PageHero
        badge="About Us"
        title={<>Extend a Supportive Hand <span className="text-secondary">to Them</span></>}
        description="Join our community to make a positive impact on the lives of dyslexic children."
      />

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="bg-card rounded-2xl p-8 border border-border h-full relative overflow-hidden group card-hover">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-sky-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary/5" />
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                  <Target size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Empower dyslexic children through creating awareness and advocating for dyslexia friendly-education.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="bg-card rounded-2xl p-8 border border-border h-full relative overflow-hidden group card-hover">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-hope-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-secondary/5" />
                <div className="bg-secondary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                  <Eye size={24} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Equal opportunities in education for dyslexic children.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We Address */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <ScrollReveal direction="left">
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Welcome to our team</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-4">
                  What We Address Within <span className="text-primary">Our Community</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Our main purpose is to advocate for equal learning opportunities for dyslexic children and creating awareness about dyslexia.
                </p>
                <ul className="space-y-3">
                  {whatWeAddress.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative">
                <div className="absolute top-8 right-0 bottom-0 left-8 bg-primary rounded-3xl" />
                <img
                  src={heroChildrenImg}
                  alt="Children learning together"
                  className="relative z-10 rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Principles</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-4">
                Our <span className="text-secondary">Values</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-6 border border-border card-hover text-center h-full relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-sky-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
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

      {/* CTA - Stand for dyslexic children */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              {/* Decorations */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
              <div className="absolute top-8 left-8 grid grid-cols-3 gap-2 opacity-10">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-white" />
                ))}
              </div>

              <div className="relative z-10">
                <HandHeart size={40} className="text-primary-foreground mx-auto mb-4 opacity-80" />
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
                  Let's Stand for Dyslexic Children
                </h2>
                <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
                  We stand with teachers, parents and guardians to make a difference.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors shadow-lg"
                >
                  Join Our Team <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default About;
