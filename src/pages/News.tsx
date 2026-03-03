import { Calendar, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import newsCartoon from "@/assets/nav/news-cartoon.png";

const articles = [
  {
    title: "New Screening Program Launches in Dar es Salaam",
    excerpt: "Over 200 children screened in the first month of our new community partnership program with local schools.",
    date: "Feb 15, 2026",
    category: "Programs",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
  },
  {
    title: "Teacher Training Workshop Reaches Milestone",
    excerpt: "50 teachers across 12 schools trained on recognizing and supporting dyslexic students in mainstream classrooms.",
    date: "Jan 28, 2026",
    category: "Education",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop",
  },
  {
    title: "International Dyslexia Day Celebrations in Tanzania",
    excerpt: "Tanzania joins the global community in raising awareness and celebrating neurodiversity on October 8th.",
    date: "Jan 10, 2026",
    category: "Events",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop",
  },
  {
    title: "Partnership with University of Dar es Salaam",
    excerpt: "A new research collaboration to study dyslexia prevalence and develop culturally-relevant screening tools.",
    date: "Dec 5, 2025",
    category: "Research",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&h=400&fit=crop",
  },
  {
    title: "Annual Report 2025: A Year of Growth",
    excerpt: "Looking back at a year of milestones — from expanded screening to national policy advocacy.",
    date: "Nov 20, 2025",
    category: "Reports",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
];

const News = () => {
  return (
    <main>
      <PageHero
        badge="Stay Updated"
        title={<>News & <span className="text-secondary">Insights</span></>}
        description="The latest updates, stories, and insights from our work across Tanzania."
        backgroundImage={newsCartoon}
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-6 max-w-4xl">
            {articles.map((article, i) => (
              <ScrollReveal key={article.title} delay={i * 0.08}>
                <article className="bg-card rounded-2xl overflow-hidden border border-border card-hover group cursor-pointer relative">
                  {/* Decorative accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-3xl pointer-events-none" />

                  <div className="flex flex-col sm:flex-row">
                    {/* Image */}
                    <div className="sm:w-56 h-48 sm:h-auto shrink-0 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-6 md:p-8 flex-1 flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <span className="inline-block text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
                          {article.category}
                        </span>
                        <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-3">{article.excerpt}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar size={14} />
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors mt-2 shrink-0 hidden sm:block" />
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

export default News;
