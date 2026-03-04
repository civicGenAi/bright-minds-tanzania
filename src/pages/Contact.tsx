import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import contactCartoon from "@/assets/nav/contactus-cartoon.png";
import SEO from "@/components/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      toast.success("Thank you! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <main>
      <SEO title="Contact Us" description="Get in touch with Dyslexia Tanzania." />
      <PageHero
        badge="Get in Touch"
        title={<>Contact <span className="text-secondary">Us</span></>}
        description="Have questions or want to get involved? We'd love to hear from you."
        backgroundImage={contactCartoon}
        imageAlt="Illustration for Contact Us"
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-[1fr_340px] gap-6 md:gap-12 max-w-5xl">
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    maxLength={100}
                    className="w-full rounded-lg border border-input bg-card px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    maxLength={255}
                    className="w-full rounded-lg border border-input bg-card px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    maxLength={1000}
                    className="w-full rounded-lg border border-input bg-card px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell us how you'd like to get involved..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 md:px-8 py-3 text-sm md:text-base font-semibold text-primary-foreground transition-all hover:shadow-xl hover:scale-105 disabled:opacity-50"
                >
                  <Send size={16} />
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-4 md:space-y-8">
                <div>
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-3 md:mb-4">Contact Information</h3>
                  <div className="space-y-3 md:space-y-4">
                    {[
                      { icon: Mail, label: "Email", value: "info@dyslexiatanzania.org" },
                      { icon: Phone, label: "Phone", value: "+255 688 535 848" },
                      { icon: MapPin, label: "Location", value: "Tanzanite St, House 13, Arusha" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-3 group">
                        <div className="bg-primary/10 w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center shrink-0">
                          <item.icon size={16} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-xs md:text-sm font-medium text-foreground">{item.label}</p>
                          <p className="text-xs md:text-sm text-muted-foreground">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-secondary/10 rounded-xl md:rounded-2xl p-4 md:p-6 border border-secondary/20 relative overflow-hidden">
                  <h3 className="text-sm md:text-lg font-bold text-foreground mb-1.5 md:mb-2">Become a Member</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Join our growing community of advocates, educators, and supporters.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
