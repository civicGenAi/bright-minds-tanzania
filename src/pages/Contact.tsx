import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";

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
      <PageHero
        badge="Get in Touch"
        title={<>Contact <span className="text-secondary">Us</span></>}
        description="Have questions or want to get involved? We'd love to hear from you."
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-[1fr_380px] gap-12 max-w-5xl">
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    maxLength={100}
                    className="w-full rounded-lg border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    maxLength={255}
                    className="w-full rounded-lg border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    maxLength={1000}
                    className="w-full rounded-lg border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell us how you'd like to get involved..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:shadow-xl hover:scale-105 disabled:opacity-50"
                >
                  <Send size={18} />
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Mail, label: "Email", value: "info@dyslexiatanzania.org" },
                      { icon: Phone, label: "Phone", value: "+255 123 456 789" },
                      { icon: MapPin, label: "Location", value: "Dar es Salaam, Tanzania" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-3 group">
                        <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                          <item.icon size={18} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{item.label}</p>
                          <p className="text-sm text-muted-foreground">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-secondary/10 rounded-2xl p-6 border border-secondary/20 relative overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-secondary/10" />
                  <h3 className="text-lg font-bold text-foreground mb-2 relative">Become a Member</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed relative">
                    Join our growing community of advocates, educators, and supporters committed to equal learning opportunities for all.
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
