import { useState } from "react";
import { Search, MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, Plus } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import faqCartoon from "@/assets/nav/faq-cartoon.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";

const categories = ["All", "About Dyslexia", "Our Work", "Support Us"];

const faqs = [
  { q: "What is dyslexia?", a: "Dyslexia is a learning difference that primarily affects reading, writing, and spelling. It is neurological in nature and is not related to intelligence.", category: "About Dyslexia" },
  { q: "How can I tell if my child has dyslexia?", a: "Common signs include difficulty with reading, trouble spelling, slow reading speed, and difficulty with phonics. We recommend getting a professional screening.", category: "About Dyslexia" },
  { q: "Is dyslexia curable?", a: "Dyslexia is a lifelong condition, but with proper support and teaching strategies, individuals can learn to read and write effectively.", category: "About Dyslexia" },
  { q: "How can I volunteer with Dyslexia Tanzania?", a: "We welcome volunteers! Help with screening programs, teacher training, community outreach, and more. Visit our Volunteer page to apply.", category: "Support Us" },
  { q: "Does Dyslexia Tanzania offer screening services?", a: "Yes! We run free community screening programs in schools across Tanzania using validated tools.", category: "Our Work" },
  { q: "How can I support financially?", a: "You can donate through our Donate page via bank transfer or mobile money. Every contribution goes directly toward programs.", category: "Support Us" },
  { q: "What programs do you offer for teachers?", a: "We offer comprehensive teacher training workshops with hands-on strategies and ongoing mentorship.", category: "Our Work" },
  { q: "Can adults be diagnosed with dyslexia?", a: "Yes, dyslexia can be identified at any age. Our organization can help connect you with assessment resources.", category: "About Dyslexia" },
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || faq.a.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-background">
      <SEO title="FAQ" description="Find answers to frequently asked questions about dyslexia and our programs." />
      <PageHero
        badge="Questions & Answers"
        title={<>Frequently Asked <span className="text-secondary">Questions</span></>}
        description="Empowering you with knowledge about dyslexia and how we're making a difference."
        backgroundImage={faqCartoon}
        imageAlt="FAQ illustration"
      />

      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none hidden md:block" />

        <div className="container-wide relative">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 md:mb-12 space-y-4 md:space-y-8">
              <ScrollReveal>
                <div className="relative max-w-2xl mx-auto">
                  <div className="relative bg-card/50 backdrop-blur-md border border-border rounded-xl md:rounded-2xl flex items-center px-4 md:px-6 py-3 md:py-4 transition-all focus-within:ring-2 focus-within:ring-primary/20">
                    <Search className="text-muted-foreground mr-3" size={18} />
                    <input
                      type="text"
                      placeholder="Search questions..."
                      className="bg-transparent border-none outline-none w-full text-sm md:text-lg placeholder:text-muted-foreground/60"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${activeCategory === category
                        ? "bg-primary text-primary-foreground shadow-lg -translate-y-0.5"
                        : "bg-muted hover:bg-muted/80 text-muted-foreground"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="min-h-[300px]">
              <AnimatePresence mode="wait">
                {filteredFaqs.length > 0 ? (
                  <motion.div key={activeCategory + searchTerm} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.3 }}>
                    <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
                      {filteredFaqs.map((faq, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="border-none">
                          <div className="bg-card hover:bg-card/80 backdrop-blur-sm rounded-xl md:rounded-2xl border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-lg">
                            <AccordionTrigger className="px-4 md:px-8 py-4 md:py-6 text-left hover:no-underline font-bold text-sm md:text-xl [&[data-state=open]>div>svg]:rotate-180">
                              <div className="flex items-center justify-between w-full pr-2 md:pr-4">
                                <span>{faq.q}</span>
                                <div className="ml-3 p-1.5 md:p-2 rounded-full bg-muted shrink-0">
                                  <Plus className="w-4 h-4 md:w-5 md:h-5 text-primary transition-transform duration-500" />
                                </div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 md:px-8 pb-4 md:pb-8 pt-1 md:pt-2">
                              <div className="text-muted-foreground text-sm md:text-lg leading-relaxed max-w-3xl">
                                {faq.a}
                                <div className="mt-4 flex items-center gap-2">
                                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Category:</span>
                                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{faq.category}</span>
                                </div>
                              </div>
                            </AccordionContent>
                          </div>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </motion.div>
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
                    <div className="bg-muted/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Search className="text-muted-foreground w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">No questions found</h3>
                    <p className="text-muted-foreground text-sm">Try adjusting your search or filters.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding relative">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
              <span className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest">Connect With Us</span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-foreground mt-3 mb-4 md:mb-6 tracking-tight">
                Our <span className="text-secondary">Mission Base</span>
              </h2>
              <div className="w-16 h-1.5 bg-primary mx-auto rounded-full" />
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-stretch">
            <ScrollReveal direction="left">
              <div className="h-full space-y-4 md:space-y-6">
                <div className="grid grid-cols-2 gap-3 md:gap-6">
                  {[
                    { icon: MapPin, title: "Visit Us", detail: "Tanzanite St, House 13, Arusha", color: "primary" },
                    { icon: Phone, title: "Call Us", detail: "+255 688 535 848", color: "secondary" },
                    { icon: Mail, title: "Email Us", detail: "info@dyslexiatanzania.org", color: "primary" },
                    { icon: Clock, title: "Open Hours", detail: "Mon – Fri: 8AM – 5PM", color: "secondary" },
                  ].map((item) => (
                    <div key={item.title} className="group bg-card/40 backdrop-blur-sm rounded-xl md:rounded-3xl p-4 md:p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg">
                      <div className={`w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 ${item.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                        <item.icon size={20} />
                      </div>
                      <h3 className="text-sm md:text-xl font-bold text-foreground mb-1 md:mb-3">{item.title}</h3>
                      <p className="text-muted-foreground text-xs md:text-base leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-primary rounded-xl md:rounded-[2.5rem] p-5 md:p-10 text-primary-foreground relative overflow-hidden group">
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-40 md:w-64 h-40 md:h-64 bg-white/10 rounded-full blur-3xl" />
                  <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                    <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
                      <MessageSquare className="w-7 h-7 md:w-10 md:h-10" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">Need direct help?</h3>
                      <p className="text-primary-foreground/80 text-sm mb-3 md:mb-6">Our team is ready to support you.</p>
                      <button className="bg-white text-primary font-bold px-6 py-2.5 md:py-3 rounded-full hover:shadow-xl text-sm transition-all">
                        Contact Support
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative h-[300px] md:h-full min-h-[300px] md:min-h-[500px] rounded-2xl md:rounded-[3rem] overflow-hidden border-4 md:border-8 border-card shadow-xl">
                <div className="absolute inset-0 bg-muted/20 flex items-center justify-center">
                  <div className="text-center px-6 md:px-10">
                    <div className="bg-primary/10 p-4 md:p-6 rounded-full inline-block mb-4 md:mb-6 animate-pulse">
                      <MapPin className="w-8 h-8 md:w-12 md:h-12 text-primary" />
                    </div>
                    <h4 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">Interactive Map</h4>
                    <p className="text-muted-foreground text-sm mb-4 md:mb-8">View our location in Arusha.</p>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-foreground text-background font-bold px-6 md:px-10 py-3 md:py-5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all shadow-xl text-sm">
                      Directions <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
