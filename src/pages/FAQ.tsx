import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import faqCartoon from "@/assets/nav/faq-cartoon.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is dyslexia?",
    a: "Dyslexia is a learning difference that primarily affects reading, writing, and spelling. It is neurological in nature and is not related to intelligence. People with dyslexia often have average or above-average intelligence.",
  },
  {
    q: "How can I tell if my child has dyslexia?",
    a: "Common signs include difficulty with reading, trouble spelling, slow reading speed, and difficulty with phonics. If you suspect your child may have dyslexia, we recommend getting a professional screening through our community programs.",
  },
  {
    q: "Is dyslexia curable?",
    a: "Dyslexia is a lifelong condition, but with proper support, intervention, and teaching strategies, individuals with dyslexia can learn to read and write effectively and achieve great success.",
  },
  {
    q: "How can I volunteer with Dyslexia Tanzania?",
    a: "We welcome volunteers! You can help with our screening programs, teacher training workshops, community outreach events, and administrative support. Visit our Contact page or reach out via email to get started.",
  },
  {
    q: "Does Dyslexia Tanzania offer screening services?",
    a: "Yes! We run free community screening programs in schools across Tanzania. Our trained professionals use validated tools to identify children who may benefit from additional learning support.",
  },
  {
    q: "How can I support Dyslexia Tanzania financially?",
    a: "You can make a donation through our Donate page via bank transfer or mobile money. Every contribution goes directly toward screening programs, teacher training, and educational resources.",
  },
  {
    q: "What programs do you offer for teachers?",
    a: "We offer comprehensive teacher training workshops that equip educators with knowledge and tools to identify and support dyslexic students in mainstream classrooms. These include hands-on strategies and ongoing mentorship.",
  },
  {
    q: "Can adults be diagnosed with dyslexia?",
    a: "Yes, dyslexia can be identified at any age. Many adults discover they have dyslexia later in life. Our organization can help connect you with appropriate assessment resources.",
  },
];

const FAQ = () => {
  return (
    <main>
      <PageHero
        badge="Questions & Answers"
        title={<>Frequently Asked <span className="text-secondary">Questions</span></>}
        description="Get to know the answers to common questions asked about dyslexia and our organization."
        backgroundImage={faqCartoon}
      />

      {/* FAQ Accordion */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <ScrollReveal>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-lg transition-shadow"
                >
                  <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Find Us</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-4">
                Our <span className="text-secondary">Location</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: MapPin,
                title: "Address",
                detail: "Tanzanite Street, House Number 13, nearby Canossa Primary, Arusha Tanzania",
              },
              {
                icon: Phone,
                title: "Phone",
                detail: "+255 123 456 789",
              },
              {
                icon: Mail,
                title: "Email",
                detail: "info@dyslexiatanzania.org",
              },
              {
                icon: Clock,
                title: "Working Hours",
                detail: "Mon – Fri: 8:00 AM – 5:00 PM",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl border border-border p-6 text-center card-hover h-full relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-sky-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
