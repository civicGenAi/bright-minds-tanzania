import ScrollReveal from "@/components/ScrollReveal";
import embraceImg from "@/assets/embrace-dyslexia.jpg";

const EmbraceDyslexiaSection = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch">
          {/* Left content */}
          <ScrollReveal direction="left">
            <div className="flex flex-col justify-center h-full pr-0 lg:pr-12">
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">
                All support to them
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
                Embrace <span className="text-primary">Dyslexia</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                It is important to understand that dyslexia is not a sign of laziness or lack of intelligence, 
                but rather a learning difference that requires a different approach to teaching.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Early identification and intervention can be critical in helping dyslexic individuals 
                to overcome challenges and reach their full potential.
              </p>
            </div>
          </ScrollReveal>

          {/* Right image on primary background */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative mt-8 lg:mt-0">
              {/* Primary colored background block */}
              <div className="absolute top-8 right-0 bottom-0 left-8 bg-primary rounded-3xl" />
              {/* Decorative dots */}
              <div className="absolute -top-4 -left-4 grid grid-cols-4 gap-2 opacity-20 z-10">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                ))}
              </div>
              {/* Decorative circle */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border-4 border-secondary opacity-30" />
              {/* Image sitting on top */}
              <img
                src={embraceImg}
                alt="Children learning together in Tanzania"
                className="relative z-10 rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default EmbraceDyslexiaSection;
