import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import ScrollReveal from "@/components/ScrollReveal";

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
    <main className="pt-20">
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get in Touch</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mt-2 mb-6">
                Contact <span className="text-secondary">Us</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have questions or want to get involved? We'd love to hear from you.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

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
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                        <Mail size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Email</p>
                        <p className="text-sm text-muted-foreground">info@dyslexiatanzania.org</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                        <Phone size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Phone</p>
                        <p className="text-sm text-muted-foreground">+255 123 456 789</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                        <MapPin size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Location</p>
                        <p className="text-sm text-muted-foreground">Dar es Salaam, Tanzania</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/10 rounded-2xl p-6 border border-secondary/20">
                  <h3 className="text-lg font-bold text-foreground mb-2">Become a Member</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
