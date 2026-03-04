import { useState } from "react";
import { toast } from "sonner";
import { Heart, Send, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";

const Volunteer = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", area: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) { toast.error("Please fill in required fields."); return; }
    setSending(true);
    setTimeout(() => { toast.success("Application submitted! We'll be in touch."); setForm({ name: "", email: "", phone: "", area: "", message: "" }); setSending(false); }, 1000);
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO title="Volunteer" description="Join our team of volunteers making a difference for dyslexic children in Tanzania." />
      <PageHero badge="Get Involved" title={<>Become a <span className="text-secondary">Volunteer</span></>} description="Join hands with us to create inclusive education opportunities for every child." />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_380px] gap-6 md:gap-12 max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="bg-card rounded-2xl border border-border p-5 md:p-10">
                <h2 className="text-xl md:text-2xl font-black mb-4 md:mb-6">Volunteer Application</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs md:text-sm font-medium mb-1.5">Full Name *</label>
                      <input type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} maxLength={100} required className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-xs md:text-sm font-medium mb-1.5">Email *</label>
                      <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} maxLength={255} required className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs md:text-sm font-medium mb-1.5">Phone Number</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} maxLength={20} className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="+255..." />
                    </div>
                    <div>
                      <label className="block text-xs md:text-sm font-medium mb-1.5">Area of Interest</label>
                      <select value={form.area} onChange={(e) => setForm({...form, area: e.target.value})} className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                        <option value="">Select area</option>
                        <option value="screening">Screening Programs</option>
                        <option value="training">Teacher Training</option>
                        <option value="outreach">Community Outreach</option>
                        <option value="admin">Administrative Support</option>
                        <option value="fundraising">Fundraising</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-medium mb-1.5">Why do you want to volunteer?</label>
                    <textarea value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} rows={4} maxLength={1000} className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Tell us about yourself..." />
                  </div>
                  <button type="submit" disabled={sending} className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50">
                    <Send size={16} /> {sending ? "Submitting..." : "Submit Application"}
                  </button>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-primary to-deep-navy rounded-2xl p-5 md:p-8 text-primary-foreground">
                  <Heart size={28} className="mb-3 opacity-80" />
                  <h3 className="text-lg font-bold mb-3">Why Volunteer?</h3>
                  <div className="space-y-3">
                    {["Make a direct impact on children's lives", "Gain experience in education & advocacy", "Join a passionate community", "Flexible time commitments", "Certificate of participation"].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-hope-yellow shrink-0 mt-0.5" />
                        <span className="text-sm text-primary-foreground/80">{item}</span>
                      </div>
                    ))}
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

export default Volunteer;
