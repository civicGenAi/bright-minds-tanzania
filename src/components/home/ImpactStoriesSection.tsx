import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const stories = [
  {
    title: "New Screening Program Launches in Dar es Salaam",
    excerpt: "Over 200 children screened in the first month of our new community partnership program.",
    date: "Feb 15, 2026",
    category: "Programs",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
  },
  {
    title: "Teacher Training Workshop Success",
    excerpt: "50 teachers trained on recognizing and supporting dyslexic students in mainstream classrooms.",
    date: "Jan 28, 2026",
    category: "Education",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop",
  },
  {
    title: "International Dyslexia Day Celebrations",
    excerpt: "Tanzania joins the global community in raising awareness and celebrating neurodiversity.",
    date: "Jan 10, 2026",
    category: "Events",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop",
  },
];

const ImpactStoriesSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-wide">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Latest Updates</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
                News & <span className="text-secondary">Insights</span>
              </h2>
            </div>
            <Link to="/news" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              View all news <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <ScrollReveal key={story.title} delay={i * 0.15}>
              <article className="bg-card rounded-2xl overflow-hidden border border-border card-hover h-full flex flex-col group relative">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-3xl z-10 pointer-events-none" />
                
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                  <span className="absolute bottom-3 left-4 inline-block text-xs font-semibold text-primary-foreground bg-primary rounded-full px-3 py-1">
                    {story.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">{story.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{story.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar size={14} />
                      <span>{story.date}</span>
                    </div>
                    <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStoriesSection;
