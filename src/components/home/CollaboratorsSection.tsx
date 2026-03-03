import ScrollReveal from "@/components/ScrollReveal";

const partners = [
  { name: "UNICEF Tanzania", initials: "UT" },
  { name: "Ministry of Education", initials: "ME" },
  { name: "University of Dar es Salaam", initials: "UD" },
  { name: "British Council", initials: "BC" },
  { name: "Aga Khan Foundation", initials: "AK" },
  { name: "Tanzania Education Authority", initials: "TE" },
];

const CollaboratorsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Our Partners
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-4">
              Trusted <span className="text-secondary">Collaborators</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We work alongside leading organizations to amplify our impact for dyslexic children in Tanzania.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, i) => (
            <ScrollReveal key={partner.name} delay={i * 0.08}>
              <div className="bg-card rounded-2xl border border-border p-6 flex flex-col items-center justify-center card-hover h-32 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-sky-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/15 transition-colors">
                  <span className="text-lg font-bold text-primary">{partner.initials}</span>
                </div>
                <span className="text-xs font-medium text-muted-foreground text-center leading-tight">
                  {partner.name}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaboratorsSection;
