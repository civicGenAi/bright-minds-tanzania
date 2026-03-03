import ScrollReveal from "@/components/ScrollReveal";
import cadetAcademy from "@/assets/partners/cadet-academy.png";
import dewDrops from "@/assets/partners/dew-drops.png";
import africaDyslexicsUnited from "@/assets/partners/africa-dyslexics-united.png";
import nourishedMind from "@/assets/partners/nourished-mind.png";
import dyslexiaHelpAfrica from "@/assets/partners/dyslexia-help-africa.png";
import africaDyslexiaOrg from "@/assets/partners/africa-dyslexia-org.png";
import ableFoundation from "@/assets/partners/able-foundation.png";
import dyslexiaOrgKenya from "@/assets/partners/dyslexia-org-kenya.png";

const partners = [
  { name: "C.A.D.E.T. Academy", logo: cadetAcademy },
  { name: "Dew Drops Community Centre", logo: dewDrops },
  { name: "Africa Dyslexics United", logo: africaDyslexicsUnited },
  { name: "Nourished Mind", logo: nourishedMind },
  { name: "Dyslexia Help Africa", logo: dyslexiaHelpAfrica },
  { name: "Africa Dyslexia Organisation", logo: africaDyslexiaOrg },
  { name: "Able Foundation", logo: ableFoundation },
  { name: "Dyslexia Organisation Kenya", logo: dyslexiaOrgKenya },
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

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
          {partners.map((partner, i) => (
            <ScrollReveal key={partner.name} delay={i * 0.08}>
              <div className="bg-card rounded-2xl border border-border p-6 flex flex-col items-center justify-center card-hover h-40 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-sky-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-20 h-20 object-contain mb-3 group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
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
