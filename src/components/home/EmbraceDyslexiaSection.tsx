import ScrollReveal from "@/components/ScrollReveal";
import communityImg from "@/assets/community.png";

const EmbraceDyslexiaSection = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-0 items-stretch">
          <ScrollReveal direction="left">
            <div className="flex flex-col justify-center h-full pr-0 lg:pr-12">
              <span className="text-xs md:text-sm font-semibold text-secondary uppercase tracking-wider mb-2 font-oswald">
                All support to them
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-foreground mb-3 md:mb-6 font-oswald">
                Embrace <span className="text-primary">Dyslexia</span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-3">
                It is important to understand that dyslexia is not a sign of laziness or lack of intelligence, 
                but rather a learning difference that requires a different approach to teaching.
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Early identification and intervention can be critical in helping dyslexic individuals 
                to overcome challenges and reach their full potential.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="absolute top-3 md:top-8 right-0 bottom-0 left-3 md:left-8 bg-primary rounded-xl md:rounded-3xl" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full border-4 border-secondary opacity-30 hidden md:block" />
              <img
                src={communityImg}
                alt="Community support for dyslexic children in Tanzania"
                className="relative z-10 rounded-xl md:rounded-2xl shadow-2xl w-full aspect-[3/4] md:aspect-[4/3] object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default EmbraceDyslexiaSection;
