import { useState } from "react";
import { Calendar, ArrowRight, Search, Clock, ThumbsUp, Share2, MessageSquare, X, Bookmark } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import newsCartoon from "@/assets/nav/news-cartoon.png";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Programs", "Education", "Events", "Research", "Reports"];

const articles = [
  {
    id: 1,
    title: "New Screening Program Launches in Dar es Salaam",
    excerpt: "Over 200 children screened in the first month of our new community partnership program with local schools.",
    content: "We are thrilled to announce the successful launch of our comprehensive dyslexia screening program in Dar es Salaam. In just the first month, our team of dedicated professionals has screened over 200 children across five primary schools. This initiative aims to identify learning differences early, providing parents and teachers with the tools they need to support every child's unique educational journey. The feedback from the community has been overwhelmingly positive, and we are already planning to expand to more districts in the coming months.",
    date: "Feb 15, 2026",
    category: "Programs",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=500&fit=crop",
    readTime: "4 min read",
    likes: 124,
    comments: 12
  },
  {
    id: 2,
    title: "Teacher Training Workshop Reaches Milestone",
    excerpt: "50 teachers across 12 schools trained on recognizing and supporting dyslexic students in mainstream classrooms.",
    content: "Our latest teacher training workshop has reached a significant milestone, with 50 educators now certified in dyslexia-friendly teaching methodologies. These teachers represent 12 different schools, bringing inclusive education practices to hundreds of students. The workshop focused on multi-sensory learning techniques, early identification cues, and classroom environmental adjustments that benefit all learners, not just those with dyslexia. We believe that empowering teachers is the most sustainable way to create a dyslexia-friendly education system in Tanzania.",
    date: "Jan 28, 2026",
    category: "Education",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=500&fit=crop",
    readTime: "6 min read",
    likes: 89,
    comments: 8
  },
  {
    id: 3,
    title: "International Dyslexia Day Celebrations in Tanzania",
    excerpt: "Tanzania joins the global community in raising awareness and celebrating neurodiversity on October 8th.",
    content: "International Dyslexia Day was celebrated with vibrant energy across Tanzania this year. From interactive workshops in Arusha to awareness walks in Dar es Salaam, the message was clear: Dyslexia is a different way of thinking, not a disability to be hidden. We were honored to host guest speakers, including successful dyslexic professionals who shared their inspiring journeys. These celebrations play a crucial role in breaking the stigma associated with learning differences and fostering a more inclusive society for everyone.",
    date: "Jan 10, 2026",
    category: "Events",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=500&fit=crop",
    readTime: "3 min read",
    likes: 210,
    comments: 24
  },
  {
    id: 4,
    title: "Partnership with University of Dar es Salaam",
    excerpt: "A new research collaboration to study dyslexia prevalence and develop culturally-relevant screening tools.",
    content: "In a landmark move for educational research in Tanzania, we have officially partnered with the University of Dar es Salaam's Department of Education. This collaboration will focus on two key areas: conducting a large-scale study on the prevalence of dyslexia in Tanzanian primary schools and developing screening tools that are linguistically and culturally adapted for the local context. This data-driven approach will provide the foundation for evidence-based policy advocacy and more effective intervention strategies nationwide.",
    date: "Dec 5, 2025",
    category: "Research",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=800&h=500&fit=crop",
    readTime: "5 min read",
    likes: 156,
    comments: 15
  },
  {
    id: 5,
    title: "Annual Report 2025: A Year of Growth",
    excerpt: "Looking back at a year of milestones — from expanded screening to national policy advocacy.",
    content: "Our 2025 Annual Report is now available, highlighting a year of unprecedented growth and impact. Over the past twelve months, we have reached 30% more children through our screening programs and doubled the number of teachers in our training network. We also made significant strides in policy advocacy, meeting with key officials from the Ministry of Education to discuss inclusive education reforms. None of this would be possible without our dedicated supporters and partners. Read the full report to see how your contributions are changing lives.",
    date: "Nov 20, 2025",
    category: "Reports",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    readTime: "8 min read",
    likes: 92,
    comments: 5
  },
];

const News = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredArticles = articles.filter(article =>
    activeCategory === "All" || article.category === activeCategory
  );

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
      <PageHero
        badge="Stay Updated"
        title={<>News & <span className="text-secondary">Insights</span></>}
        description="Exploring the latest stories, research, and impact of our work across Tanzania."
        backgroundImage={newsCartoon}
      />

      <section className="section-padding relative">
        <div className="container-wide">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`group relative px-6 py-2 text-sm font-bold transition-all ${activeCategory === category ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="categoryLine"
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article, i) => (
                <motion.div
                  key={article.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <article
                    className="group bg-card rounded-[2.5rem] overflow-hidden border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 cursor-pointer h-full flex flex-col"
                    onClick={() => openArticle(article)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity" />
                      <div className="absolute top-6 left-6">
                        <span className="bg-white/95 backdrop-blur-md text-primary text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-xl">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-10 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-primary" />
                          <span>{article.date}</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-border" />
                        <div className="flex items-center gap-1.5">
                          <Clock size={14} className="text-primary" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>

                      <h2 className="text-2xl font-black text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-6 border-t border-border/50">
                        <div className="flex items-center gap-2 font-black text-primary group-hover:gap-4 transition-all uppercase tracking-widest text-sm">
                          Read More <ArrowRight size={18} />
                        </div>
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <ThumbsUp size={14} />
                            <span className="text-xs font-bold">{article.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquare size={14} />
                            <span className="text-xs font-bold">{article.comments}</span>
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
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeArticle}
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl h-full max-h-[90vh] bg-card border border-border rounded-[3rem] shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-10 py-6 border-b border-border/50 bg-card/80 backdrop-blur-md sticky top-0 z-10">
                <div className="flex items-center gap-4">
                  <span className="bg-primary/10 text-primary text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full">
                    {selectedArticle.category}
                  </span>
                  <div className="hidden md:flex items-center gap-3 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    <span>{selectedArticle.date}</span>
                    <div className="w-1 h-1 rounded-full bg-border" />
                    <span>{selectedArticle.readTime}</span>
                  </div>
                </div>
                <button
                  onClick={closeArticle}
                  className="p-3 rounded-full hover:bg-muted transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="relative h-[400px]">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                <div className="px-10 py-12 max-w-4xl mx-auto">
                  <h1 className="text-4xl md:text-5xl font-black text-foreground mb-8 leading-tight">
                    {selectedArticle.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-6 mb-12 py-6 border-y border-border/50">
                    <button className="flex items-center gap-2 group">
                      <div className="p-3 rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <ThumbsUp size={20} />
                      </div>
                      <span className="font-bold">{selectedArticle.likes} Likes</span>
                    </button>
                    <button className="flex items-center gap-2 group">
                      <div className="p-3 rounded-full bg-secondary/5 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all">
                        <Share2 size={20} />
                      </div>
                      <span className="font-bold">Share</span>
                    </button>
                    <button className="flex items-center gap-2 group">
                      <div className="p-3 rounded-full bg-muted text-muted-foreground group-hover:bg-foreground group-hover:text-background transition-all">
                        <Bookmark size={20} />
                      </div>
                      <span className="font-bold">Save</span>
                    </button>
                  </div>

                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-xl text-muted-foreground leading-relaxed mb-8 italic border-l-4 border-primary pl-6">
                      {selectedArticle.excerpt}
                    </p>
                    <div className="text-lg text-foreground/90 leading-relaxed space-y-6">
                      {selectedArticle.content.split('\n').map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                      <p>
                        Our commitment continues to grow as we see the tangible results of these programs. The stories of individual students finding their confidence and teachers feeling equipped to make a difference are what drive us forward every day.
                      </p>
                    </div>
                  </div>

                  {/* Comments Section Placeholder */}
                  <div className="mt-20 pt-12 border-t border-border/50">
                    <div className="flex items-center gap-3 mb-10">
                      <MessageSquare className="text-primary" size={28} />
                      <h3 className="text-2xl font-black">Comments ({selectedArticle.comments})</h3>
                    </div>

                    <div className="space-y-8">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-muted shrink-0" />
                        <div className="flex-1">
                          <textarea
                            placeholder="Leave a thought..."
                            className="w-full bg-muted/50 border border-border rounded-2xl p-4 text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none h-32"
                          />
                          <button className="mt-4 bg-primary text-primary-foreground font-bold px-8 py-3 rounded-full hover:shadow-xl transition-all">
                            Post Comment
                          </button>
                        </div>
                      </div>
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
