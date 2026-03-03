import { Calendar, ArrowRight, Zap, ArrowLeft, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const stories = [
  {
    id: 1,
    title: "New Screening Program Launches in Dar es Salaam",
    excerpt: "Over 200 children screened in the first month of our new community partnership program across major primary schools.",
    date: "Feb 15, 2026",
    category: "Programs",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop",
    readTime: "4 min read"
  },
  {
    id: 2,
    title: "Teacher Training Workshop Success in Arusha",
    excerpt: "50 teachers trained on recognizing and supporting dyslexic students in mainstream classrooms using multi-sensory tools.",
    date: "Jan 28, 2026",
    category: "Education",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "International Dyslexia Day Celebrations",
    excerpt: "Tanzania joins the global community in raising awareness and celebrating neurodiversity with a national walk.",
    date: "Jan 10, 2026",
    category: "Events",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=600&fit=crop",
    readTime: "3 min read"
  },
  {
    id: 4,
    title: "Advocating for Policy Change in Education",
    excerpt: "Our team met with Ministry officials to discuss accommodations for dyslexic students in national examinations.",
    date: "Dec 20, 2025",
    category: "Advocacy",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=600&fit=crop",
    readTime: "5 min read"
  },
];

const ImpactStoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-muted/30 overflow-hidden relative">
      <div className="container-wide">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] text-xs mb-4">
                <Zap size={14} className="fill-current" /> Latest Updates
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-foreground leading-none">
                News & <span className="text-secondary italic">Insights</span>
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={next}
                className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all group"
              >
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link to="/news" className="hidden sm:inline-flex items-center gap-3 bg-foreground text-background font-black px-8 py-4 rounded-2xl hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-widest text-xs ml-4 shadow-lg">
                View All <MoveRight size={16} />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <div className="relative group/slider">
          <motion.div
            className="flex gap-8"
            animate={{ x: `-${currentIndex * 33.333}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ width: `${(stories.length / 3) * 100}%` }}
          >
            {stories.map((story) => (
              <div key={story.id} className="w-full md:w-[450px] shrink-0">
                <ScrollReveal>
                  <article className="bg-card rounded-[2rem] overflow-hidden border border-border/50 hover:border-primary/20 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] h-full flex flex-col group/card">
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                      />
                      <div className="absolute top-6 left-6">
                        <span className="bg-white/20 backdrop-blur-xl text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/20">
                          {story.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                    </div>

                    <div className="p-10 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-6">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={12} />
                          {story.date}
                        </div>
                        <div className="w-1 h-1 bg-border rounded-full" />
                        <span>{story.readTime}</span>
                      </div>

                      <h3 className="text-2xl font-black text-foreground mb-4 leading-tight group-hover/card:text-primary transition-colors">
                        {story.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed mb-8 flex-1 line-clamp-3">
                        {story.excerpt}
                      </p>

                      <Link
                        to={`/news`}
                        className="inline-flex items-center gap-3 text-foreground font-black uppercase tracking-widest text-[10px] group/link"
                      >
                        Read Full Story
                        <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-primary-foreground group-hover/link:border-primary transition-all">
                          <ArrowRight size={14} />
                        </div>
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile View All button */}
        <div className="mt-12 text-center sm:hidden">
          <Link to="/news" className="inline-flex items-center gap-3 bg-foreground text-background font-black px-10 py-5 rounded-2xl hover:bg-primary transition-all uppercase tracking-widest text-sm shadow-xl">
            View All Insights <MoveRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImpactStoriesSection;
