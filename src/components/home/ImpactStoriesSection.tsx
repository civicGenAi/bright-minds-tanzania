import { Calendar, ArrowRight, Zap, ArrowLeft, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const stories = [
  {
    id: 1,
    title: "New Screening Program Launches in Dar es Salaam",
    excerpt: "Over 200 children screened in the first month of our new community partnership program.",
    date: "Feb 15, 2026",
    category: "Programs",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop",
    readTime: "4 min"
  },
  {
    id: 2,
    title: "Teacher Training Workshop Success in Arusha",
    excerpt: "50 teachers trained on recognizing and supporting dyslexic students in classrooms.",
    date: "Jan 28, 2026",
    category: "Education",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=600&fit=crop",
    readTime: "6 min"
  },
  {
    id: 3,
    title: "International Dyslexia Day Celebrations",
    excerpt: "Tanzania joins the global community in raising awareness and celebrating neurodiversity.",
    date: "Jan 10, 2026",
    category: "Events",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=600&fit=crop",
    readTime: "3 min"
  },
  {
    id: 4,
    title: "Advocating for Policy Change in Education",
    excerpt: "Meeting with Ministry officials to discuss dyslexic student accommodations.",
    date: "Dec 20, 2025",
    category: "Advocacy",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=600&fit=crop",
    readTime: "5 min"
  },
];

const ImpactStoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, stories.length - cardsPerView);

  const next = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const cardWidth = 100 / cardsPerView;
  const gapPx = cardsPerView === 1 ? 0 : 16;

  return (
    <section className="section-padding bg-muted/30 overflow-hidden relative">
      <div className="container-wide">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 md:mb-16 gap-4">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px] mb-2 md:mb-4">
                <Zap size={12} className="fill-current" /> Latest Updates
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-foreground leading-none">
                News & <span className="text-secondary italic">Insights</span>
              </h2>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <button onClick={prev} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <ArrowLeft size={16} />
              </button>
              <button onClick={next} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <ArrowRight size={16} />
              </button>
              <Link to="/news" className="hidden sm:inline-flex items-center gap-2 bg-foreground text-background font-black px-4 md:px-6 py-2.5 md:py-3 rounded-xl hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-widest text-[9px] md:text-[10px] ml-2 shadow-lg">
                View All <MoveRight size={12} />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * cardWidth}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.5 }}
            style={{ gap: `${gapPx}px` }}
          >
            {stories.map((story) => (
              <div
                key={story.id}
                className="shrink-0"
                style={{ width: `calc(${cardWidth}% - ${gapPx * (cardsPerView - 1) / cardsPerView}px)` }}
              >
                <article className="bg-card rounded-xl md:rounded-[2rem] overflow-hidden border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-xl h-full flex flex-col group/card">
                  <div className="relative h-48 md:h-72 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/20 backdrop-blur-xl text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20">
                        {story.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 md:p-10 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-[9px] md:text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3 md:mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar size={11} />
                        {story.date}
                      </div>
                      <div className="w-1 h-1 bg-border rounded-full" />
                      <span>{story.readTime}</span>
                    </div>

                    <h3 className="text-base md:text-2xl font-black text-foreground mb-2 md:mb-4 leading-tight group-hover/card:text-primary transition-colors">
                      {story.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 md:mb-8 flex-1 line-clamp-2 md:line-clamp-3">
                      {story.excerpt}
                    </p>

                    <Link to="/news" className="inline-flex items-center gap-2 text-foreground font-black uppercase tracking-widest text-[9px] md:text-[10px]">
                      Read More
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-border flex items-center justify-center">
                        <ArrowRight size={12} />
                      </div>
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress dots - mobile */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {stories.map((_, i) => (
            <button key={i} onClick={() => setCurrentIndex(i)} className={`h-1.5 rounded-full transition-all ${i === currentIndex ? 'w-8 bg-primary' : 'w-3 bg-border'}`} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link to="/news" className="inline-flex items-center gap-2 bg-foreground text-background font-black px-8 py-4 rounded-xl hover:bg-primary transition-all uppercase tracking-widest text-xs shadow-xl">
            View All <MoveRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ImpactStoriesSection;
