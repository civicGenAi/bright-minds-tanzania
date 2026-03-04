import ScrollReveal from "@/components/ScrollReveal";
import cadetAcademy from "@/assets/partners/cadet-academy.png";
import dewDrops from "@/assets/partners/dew-drops.png";
import africaDyslexicsUnited from "@/assets/partners/africa-dyslexics-united.png";
import nourishedMind from "@/assets/partners/nourished-mind.png";
import dyslexiaHelpAfrica from "@/assets/partners/dyslexia-help-africa.png";
import africaDyslexiaOrg from "@/assets/partners/africa-dyslexia-org.png";
import ableFoundation from "@/assets/partners/able-foundation.png";
import dyslexiaOrgKenya from "@/assets/partners/dyslexia-org-kenya.png";
import { motion } from "framer-motion";

const partners = [
  { name: "C.A.D.E.T. Academy", logo: cadetAcademy },
  { name: "Dew Drops", logo: dewDrops },
  { name: "Africa Dyslexics United", logo: africaDyslexicsUnited },
  { name: "Nourished Mind", logo: nourishedMind },
  { name: "Dyslexia Help Africa", logo: dyslexiaHelpAfrica },
  { name: "Africa Dyslexia Org", logo: africaDyslexiaOrg },
  { name: "Able Foundation", logo: ableFoundation },
  { name: "Dyslexia Org Kenya", logo: dyslexiaOrgKenya },
];

const marqueePartners = [...partners, ...partners];

const CollaboratorsSection = () => {
  return (
    <section className="py-12 md:py-24 bg-card/30 border-y border-border/50 overflow-hidden">
      <div className="container-wide mb-8 md:mb-16 px-4">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
            <div className="max-w-xl">
              <span className="text-secondary font-black uppercase tracking-widest text-[9px] md:text-[10px] mb-2 block">
                Our Ecosystem
              </span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight">
                Trusted <span className="text-primary italic">Collaborators</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-sm md:text-lg max-w-md">
              Working alongside organizations to transform education for dyslexic children.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 md:gap-12 whitespace-nowrap min-w-max"
        >
          {marqueePartners.map((partner, i) => (
            <div key={`${partner.name}-${i}`} className="flex items-center gap-3 md:gap-6 px-4 md:px-12 py-4 md:py-8 bg-card rounded-xl md:rounded-[2.5rem] border border-border/50 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/30 group/item">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 md:h-20 w-auto object-contain grayscale group-hover/item:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
              <span className="text-[10px] md:text-sm font-black text-muted-foreground uppercase tracking-widest group-hover/item:text-foreground hidden sm:inline">
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CollaboratorsSection;
