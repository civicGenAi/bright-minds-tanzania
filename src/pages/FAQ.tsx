import { useState } from "react";
import { Search, MapPin, Phone, Mail, Clock, MessageSquare, Plus, Minus, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import faqCartoon from "@/assets/nav/faq-cartoon.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";

const categories = ["All", "About Dyslexia", "Our Work", "Support Us"];

const faqs = [
  {
    q: "What is dyslexia?",
    a: "Dyslexia is a learning difference that primarily affects reading, writing, and spelling. It is neurological in nature and is not related to intelligence. People with dyslexia often have average or above-average intelligence.",
    category: "About Dyslexia"
  },
  {
    q: "How can I tell if my child has dyslexia?",
    a: "Common signs include difficulty with reading, trouble spelling, slow reading speed, and difficulty with phonics. If you suspect your child may have dyslexia, we recommend getting a professional screening through our community programs.",
    category: "About Dyslexia"
  },
  {
    q: "Is dyslexia curable?",
    a: "Dyslexia is a lifelong condition, but with proper support, intervention, and teaching strategies, individuals with dyslexia can learn to read and write effectively and achieve great success.",
    category: "About Dyslexia"
  },
  {
    q: "How can I volunteer with Dyslexia Tanzania?",
    a: "We welcome volunteers! You can help with our screening programs, teacher training workshops, community outreach events, and administrative support. Visit our Contact page or reach out via email to get started.",
    category: "Support Us"
  },
  {
    q: "Does Dyslexia Tanzania offer screening services?",
    a: "Yes! We run free community screening programs in schools across Tanzania. Our trained professionals use validated tools to identify children who may benefit from additional learning support.",
    category: "Our Work"
  },
  {
    q: "How can I support Dyslexia Tanzania financially?",
    a: "You can make a donation through our Donate page via bank transfer or mobile money. Every contribution goes directly toward screening programs, teacher training, and educational resources.",
    category: "Support Us"
  },
  {
    q: "What programs do you offer for teachers?",
    a: "We offer comprehensive teacher training workshops that equip educators with knowledge and tools to identify and support dyslexic students in mainstream classrooms. These include hands-on strategies and ongoing mentorship.",
    category: "Our Work"
  },
  {
    q: "Can adults be diagnosed with dyslexia?",
    a: "Yes, dyslexia can be identified at any age. Many adults discover they have dyslexia later in life. Our organization can help connect you with appropriate assessment resources.",
    category: "About Dyslexia"
  },
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="FAQ"
        description="Find answers to frequently asked questions about dyslexia, our screening programs, and how you can support our mission in Tanzania."
      />
      <PageHero
        badge="Questions & Answers"
        title={<>Frequently Asked <span className="text-secondary">Questions</span></>}
        description="Empowering you with knowledge about dyslexia and how we're making a difference."
        backgroundImage={faqCartoon}
        imageAlt="Illustration for Frequently Asked Questions"
      />

      <section className="section-padding relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none hidden md:block" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none hidden md:block" />

        <div className="container-wide relative">
          <div className="max-w-4xl mx-auto">
            {/* Search and Filters */}
            <div className="mb-12 space-y-8">
              <ScrollReveal>
                <div className="relative group max-w-2xl mx-auto">
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl group-focus-within:bg-primary/10 transition-colors" />
                  <div className="relative bg-card/50 backdrop-blur-md border border-border rounded-2xl flex items-center px-6 py-4 transition-all focus-within:ring-2 focus-within:ring-primary/20">
                    <Search className="text-muted-foreground mr-4" size={20} />
                    <input
                      type="text"
                      placeholder="Search questions or keywords..."
                      className="bg-transparent border-none outline-none w-full text-lg placeholder:text-muted-foreground/60"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="flex flex-wrap justify-center gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === category
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 translate-y-[-2px]"
                        : "bg-muted hover:bg-muted/80 text-muted-foreground"
                        }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* FAQ List */}
            <div className="min-h-[400px]">
              <AnimatePresence mode="wait">
                {filteredFaqs.length > 0 ? (
                  <motion.div
                    key={activeCategory + searchTerm}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Accordion type="single" collapsible className="space-y-4">
                      {filteredFaqs.map((faq, i) => (
                        <AccordionItem
                          key={i}
                          value={`item-${i}`}
                          className="group border-none"
                        >
                          <div className="bg-card hover:bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                            <AccordionTrigger className="px-8 py-6 text-left hover:no-underline font-bold text-lg md:text-xl [&[data-state=open]>div>svg]:rotate-180">
                              <div className="flex items-center justify-between w-full pr-4">
                                <span>{faq.q}</span>
                                <div className="ml-4 p-2 rounded-full bg-muted group-hover:bg-primary/10 transition-colors">
                                  <Plus className="w-5 h-5 text-primary transition-transform duration-500" />
                                </div>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-8 pb-8 pt-2">
                              <div className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                                {faq.a}
                                <div className="mt-6 flex items-center gap-2">
                                  <span className="text-xs font-bold uppercase tracking-widest text-primary/40">Category:</span>
                                  <span className="text-xs font-bold uppercase tracking-widest text-primary">{faq.category}</span>
                                </div>
                              </div>
                            </AccordionContent>
                          </div>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                  >
                    <div className="bg-muted/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <Search className="text-muted-foreground w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">No questions found</h3>
                    <p className="text-muted-foreground">Try adjusting your search or category filters.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Location Section */}
      <section className="section-padding relative">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Connect With Us</span>
              <h2 className="text-3xl md:text-5xl font-black text-foreground mt-4 mb-6 tracking-tight">
                Our <span className="text-secondary">Mission Base</span>
              </h2>
              <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <ScrollReveal direction="left">
              <div className="h-full space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Visit Us",
                      detail: "Tanzanite Street, House 13, Near Canossa Primary, Arusha",
                      color: "primary"
                    },
                    {
                      icon: Phone,
                      title: "Call Us",
                      detail: "+255 123 456 789",
                      color: "secondary"
                    },
                    {
                      icon: Mail,
                      title: "Email Us",
                      detail: "info@dyslexiatanzania.org",
                      color: "primary"
                    },
                    {
                      icon: Clock,
                      title: "Open Hours",
                      detail: "Mon – Fri: 8:00 AM – 5:00 PM",
                      color: "secondary"
                    },
                  ].map((item, i) => (
                    <div
                      key={item.title}
                      className="group bg-card/40 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
                    >
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${item.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                        }`}>
                        <item.icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-primary rounded-[2.5rem] p-10 text-primary-foreground relative overflow-hidden group">
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors" />
                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md">
                      <MessageSquare className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Need direct help?</h3>
                      <p className="text-primary-foreground/80 mb-6">Our team is ready to support you with any specific queries you may have.</p>
                      <button className="bg-white text-primary font-bold px-8 py-3 rounded-full hover:shadow-xl hover:scale-105 transition-all">
                        Contact Support
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative h-full min-h-[500px] rounded-[3rem] overflow-hidden border-8 border-card shadow-2xl group">
                <div className="absolute inset-0 bg-muted/20 flex items-center justify-center">
                  {/* Placeholder for real map */}
                  <div className="text-center px-10">
                    <div className="bg-primary/10 p-6 rounded-full inline-block mb-6 animate-pulse">
                      <MapPin className="w-12 h-12 text-primary" />
                    </div>
                    <h4 className="text-2xl font-bold mb-4">Interactive Map View</h4>
                    <p className="text-muted-foreground mb-8">View our location in Arusha and get step-by-step directions to our office.</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-foreground text-background font-bold px-10 py-5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-500 shadow-xl"
                    >
                      Get Directions <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                {/* Decorative overlay */}
                <div className="absolute inset-0 pointer-events-none border-[20px] border-background/20 rounded-[2.5rem]" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
