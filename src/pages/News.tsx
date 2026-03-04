import { useState } from "react";
import { Calendar, ArrowRight, Clock, ThumbsUp, MessageSquare, X, Bookmark, Share2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import newsCartoon from "@/assets/nav/news-cartoon.png";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";

const categories = ["All", "Programs", "Education", "Events", "Research", "Reports"];

const articles = [
  { id: 1, title: "New Screening Program Launches in Dar es Salaam", excerpt: "Over 200 children screened in the first month of our community partnership program.", content: "We are thrilled to announce the successful launch of our comprehensive dyslexia screening program in Dar es Salaam. In just the first month, our team has screened over 200 children across five primary schools.", date: "Feb 15, 2026", category: "Programs", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=500&fit=crop", readTime: "4 min", likes: 124, comments: 12 },
  { id: 2, title: "Teacher Training Workshop Reaches Milestone", excerpt: "50 teachers across 12 schools trained on supporting dyslexic students.", content: "Our latest teacher training workshop has reached a significant milestone, with 50 educators now certified in dyslexia-friendly teaching methodologies.", date: "Jan 28, 2026", category: "Education", image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=500&fit=crop", readTime: "6 min", likes: 89, comments: 8 },
  { id: 3, title: "International Dyslexia Day Celebrations", excerpt: "Tanzania joins the global community in raising awareness and celebrating neurodiversity.", content: "International Dyslexia Day was celebrated with vibrant energy across Tanzania this year with interactive workshops and awareness walks.", date: "Jan 10, 2026", category: "Events", image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=500&fit=crop", readTime: "3 min", likes: 210, comments: 24 },
  { id: 4, title: "Partnership with University of Dar es Salaam", excerpt: "A new research collaboration to study dyslexia prevalence in Tanzania.", content: "We have officially partnered with the University of Dar es Salaam's Department of Education to conduct large-scale dyslexia research.", date: "Dec 5, 2025", category: "Research", image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=800&h=500&fit=crop", readTime: "5 min", likes: 156, comments: 15 },
  { id: 5, title: "Annual Report 2025: A Year of Growth", excerpt: "Looking back at milestones — expanded screening to national policy advocacy.", content: "Our 2025 Annual Report highlights a year of unprecedented growth. We reached 30% more children and doubled our teacher training network.", date: "Nov 20, 2025", category: "Reports", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop", readTime: "8 min", likes: 92, comments: 5 },
];

const News = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredArticles = articles.filter(a => activeCategory === "All" || a.category === activeCategory);

  const openArticle = (article: typeof articles[0]) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeArticle = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO title="News & Insights" description="Stay updated with the latest news and stories from Dyslexia Tanzania." />
      <PageHero
        badge="Stay Updated"
        title={<>News & <span className="text-secondary">Insights</span></>}
        description="Exploring the latest stories, research, and impact of our work across Tanzania."
        backgroundImage={newsCartoon}
        imageAlt="Illustration of news"
      />

      <section className="section-padding relative">
        <div className="container-wide">
          {/* Category Tabs - scrollable on mobile */}
          <div className="flex gap-2 md:gap-4 mb-8 md:mb-16 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:justify-center md:flex-wrap scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 md:px-6 py-2 text-xs md:text-sm font-bold transition-all whitespace-nowrap shrink-0 ${activeCategory === category ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div layoutId="categoryLine" className="absolute -bottom-1 left-0 right-0 h-0.5 md:h-1 bg-primary rounded-full" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                )}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article, i) => (
                <motion.div key={article.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3, delay: i * 0.05 }}>
                  <article
                    className="group bg-card rounded-xl md:rounded-[2.5rem] overflow-hidden border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-xl cursor-pointer h-full flex flex-col"
                    onClick={() => openArticle(article)}
                  >
                    <div className="relative h-40 md:h-64 overflow-hidden">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                      <div className="absolute top-3 md:top-6 left-3 md:left-6">
                        <span className="bg-white/95 backdrop-blur-md text-primary text-[9px] md:text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">{article.category}</span>
                      </div>
                    </div>

                    <div className="p-4 md:p-10 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-[9px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2 md:mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={12} className="text-primary" />
                          <span>{article.date}</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-border" />
                        <div className="flex items-center gap-1">
                          <Clock size={12} className="text-primary" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      <h2 className="text-base md:text-2xl font-black text-foreground mb-2 md:mb-4 leading-tight group-hover:text-primary transition-colors">{article.title}</h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 md:mb-8 flex-1 line-clamp-2 md:line-clamp-3">{article.excerpt}</p>

                      <div className="flex items-center justify-between pt-3 md:pt-6 border-t border-border/50">
                        <div className="flex items-center gap-1 font-black text-primary text-xs md:text-sm uppercase tracking-widest">
                          Read More <ArrowRight size={14} />
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <ThumbsUp size={12} />
                            <span className="text-[10px] md:text-xs font-bold">{article.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquare size={12} />
                            <span className="text-[10px] md:text-xs font-bold">{article.comments}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Article Modal */}
      <AnimatePresence>
        {isModalOpen && selectedArticle && (
          <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeArticle} className="absolute inset-0 bg-background/80 backdrop-blur-xl" />

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="relative w-full md:max-w-5xl max-h-[95vh] md:max-h-[90vh] bg-card border border-border rounded-t-2xl md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-4 md:px-10 py-3 md:py-6 border-b border-border/50 bg-card/80 backdrop-blur-md sticky top-0 z-10">
                <div className="flex items-center gap-2 md:gap-4">
                  <span className="bg-primary/10 text-primary text-[10px] md:text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full">{selectedArticle.category}</span>
                  <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    <span>{selectedArticle.date}</span>
                    <span className="hidden md:inline">• {selectedArticle.readTime}</span>
                  </div>
                </div>
                <button onClick={closeArticle} className="p-2 rounded-full hover:bg-muted transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="relative h-48 md:h-[400px]">
                  <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                <div className="px-4 md:px-10 py-6 md:py-12 max-w-4xl mx-auto">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 md:mb-8 leading-tight">{selectedArticle.title}</h1>

                  <div className="flex flex-wrap items-center gap-3 md:gap-6 mb-6 md:mb-12 py-4 md:py-6 border-y border-border/50">
                    <button className="flex items-center gap-2 group">
                      <div className="p-2 md:p-3 rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <ThumbsUp size={16} />
                      </div>
                      <span className="font-bold text-sm">{selectedArticle.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 group">
                      <div className="p-2 md:p-3 rounded-full bg-secondary/5 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all">
                        <Share2 size={16} />
                      </div>
                      <span className="font-bold text-sm">Share</span>
                    </button>
                    <button className="flex items-center gap-2 group">
                      <div className="p-2 md:p-3 rounded-full bg-muted text-muted-foreground group-hover:bg-foreground group-hover:text-background transition-all">
                        <Bookmark size={16} />
                      </div>
                      <span className="font-bold text-sm">Save</span>
                    </button>
                  </div>

                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-base md:text-xl text-muted-foreground leading-relaxed mb-6 italic border-l-4 border-primary pl-4 md:pl-6">{selectedArticle.excerpt}</p>
                    <div className="text-sm md:text-lg text-foreground/90 leading-relaxed space-y-4 md:space-y-6">
                      <p>{selectedArticle.content}</p>
                      <p>Our commitment continues to grow as we see the tangible results of these programs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default News;
