import { Calendar, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const articles = [
  {
    title: "New Screening Program Launches in Dar es Salaam",
    excerpt: "Over 200 children screened in the first month of our new community partnership program with local schools.",
    date: "Feb 15, 2026",
    category: "Programs",
  },
  {
    title: "Teacher Training Workshop Reaches Milestone",
    excerpt: "50 teachers across 12 schools trained on recognizing and supporting dyslexic students in mainstream classrooms.",
    date: "Jan 28, 2026",
    category: "Education",
  },
  {
    title: "International Dyslexia Day Celebrations in Tanzania",
    excerpt: "Tanzania joins the global community in raising awareness and celebrating neurodiversity on October 8th.",
    date: "Jan 10, 2026",
    category: "Events",
  },
  {
    title: "Partnership with University of Dar es Salaam",
    excerpt: "A new research collaboration to study dyslexia prevalence and develop culturally-relevant screening tools.",
    date: "Dec 5, 2025",
    category: "Research",
  },
  {
    title: "Annual Report 2025: A Year of Growth",
    excerpt: "Looking back at a year of milestones — from expanded screening to national policy advocacy.",
    date: "Nov 20, 2025",
    category: "Reports",
  },
];

const News = () => {
  return (
    <main className="pt-20">
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Stay Updated</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mt-2 mb-6">
                News & <span className="text-secondary">Insights</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The latest updates, stories, and insights from our work across Tanzania.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-6 max-w-3xl">
            {articles.map((article, i) => (
              <ScrollReveal key={article.title} delay={i * 0.08}>
                <article className="bg-card rounded-2xl p-6 md:p-8 border border-border card-hover group cursor-pointer">
                  <div className="flex items-start justify-between gap-4">
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
                    <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors mt-2 shrink-0" />
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
