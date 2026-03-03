import { useState } from "react";
import { Heart, CreditCard, Building2, Smartphone, ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import donateCartoon from "@/assets/nav/donate-cartoon.png";
import SEO from "@/components/SEO";

const donationAmounts = [10, 25, 50, 100, 250, 500];

const bankDetails = [
  {
    bank: "CRDB Bank",
    accountName: "Dyslexia Tanzania",
    accountNumber: "0150 1234 5678 00",
    branch: "Arusha Branch",
    swiftCode: "CORUTZTZ",
  },
  {
    bank: "NMB Bank",
    accountName: "Dyslexia Tanzania",
    accountNumber: "2110 9876 5432 00",
    branch: "Arusha Branch",
    swiftCode: "NMIBTZTZ",
  },
];

const mobileMoneyOptions = [
  { provider: "M-Pesa (Vodacom)", number: "+255 123 456 789", name: "Dyslexia Tanzania" },
  { provider: "Tigo Pesa", number: "+255 987 654 321", name: "Dyslexia Tanzania" },
  { provider: "Airtel Money", number: "+255 111 222 333", name: "Dyslexia Tanzania" },
];

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = selectedAmount || Number(customAmount);
    if (!amount || amount <= 0) {
      toast.error("Please select or enter a donation amount.");
      return;
    }
    toast.success(`Thank you for your generous donation of $${amount}! We'll be in touch.`);
  };

  return (
    <main>
      <SEO
        title="Donate"
        description="Support our mission to empower children with dyslexia in Tanzania. Your contribution directly funds screening, training, and advocacy."
      />
      <PageHero
        badge="Make a Difference"
        title={<>Support Our <span className="text-secondary">Mission</span></>}
        description="Your donation directly supports dyslexia screening programs, teacher training, and educational resources across Tanzania."
        backgroundImage={donateCartoon}
        imageAlt="Illustration for Support Our Mission"
      />

      {/* Quick Donate */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 max-w-5xl">
            <ScrollReveal>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-secondary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                    <Heart size={24} className="text-secondary" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-foreground">Choose Your Amount</h2>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => { setSelectedAmount(amount); setCustomAmount(""); }}
                      className={`rounded-xl border-2 py-4 text-lg font-bold transition-all ${selectedAmount === amount
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-card text-foreground hover:border-primary/40"
                        }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-foreground mb-2">Or enter a custom amount (USD)</label>
                  <input
                    type="number"
                    min="1"
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                    placeholder="Enter amount"
                    className="w-full rounded-lg border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <form onSubmit={handleDonate} className="space-y-4">
                  <input
                    type="text"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="Your name (optional)"
                    maxLength={100}
                    className="w-full rounded-lg border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <input
                    type="email"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    placeholder="Email for receipt (optional)"
                    maxLength={255}
                    className="w-full rounded-lg border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-8 py-4 text-lg font-bold text-secondary-foreground transition-all hover:shadow-xl hover:scale-[1.02]"
                  >
                    <Heart size={20} />
                    Donate {selectedAmount ? `$${selectedAmount}` : customAmount ? `$${customAmount}` : "Now"}
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Impact sidebar */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-gradient-to-br from-primary to-deep-navy rounded-3xl p-8 text-primary-foreground h-fit">
                <h3 className="text-xl font-bold mb-6">Your Impact</h3>
                <div className="space-y-5">
                  {[
                    { amount: "$10", impact: "Screens one child for dyslexia" },
                    { amount: "$25", impact: "Provides learning materials for a student" },
                    { amount: "$50", impact: "Sponsors a teacher training session" },
                    { amount: "$100", impact: "Funds a community awareness workshop" },
                    { amount: "$250", impact: "Supports a school screening program" },
                    { amount: "$500", impact: "Sponsors a full training workshop" },
                  ].map((item) => (
                    <div key={item.amount} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-hope-yellow shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-hope-yellow">{item.amount}</span>
                        <span className="text-primary-foreground/80 ml-2 text-sm">{item.impact}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bank Transfer */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Building2 size={28} className="text-primary" />
                <h2 className="text-3xl font-extrabold text-foreground">Bank Transfer</h2>
              </div>
              <p className="text-muted-foreground text-lg">
                Donate directly via bank transfer using the details below.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {bankDetails.map((bank, i) => (
              <ScrollReveal key={bank.bank} delay={i * 0.1}>
                <div className="bg-card rounded-2xl border border-border p-6 card-hover relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-sky-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <CreditCard size={20} className="text-primary" />
                    {bank.bank}
                  </h3>
                  <div className="space-y-2 text-sm">
                    {[
                      ["Account Name", bank.accountName],
                      ["Account Number", bank.accountNumber],
                      ["Branch", bank.branch],
                      ["SWIFT Code", bank.swiftCode],
                    ].map(([label, value]) => (
                      <div key={label} className="flex justify-between">
                        <span className="text-muted-foreground">{label}</span>
                        <span className="font-semibold text-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Money */}
      <section className="section-padding">
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Smartphone size={28} className="text-primary" />
                <h2 className="text-3xl font-extrabold text-foreground">Mobile Money</h2>
              </div>
              <p className="text-muted-foreground text-lg">
                Quick and easy donations via mobile money — perfect for local supporters.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {mobileMoneyOptions.map((option, i) => (
              <ScrollReveal key={option.provider} delay={i * 0.1}>
                <div className="bg-card rounded-2xl border border-border p-6 text-center card-hover relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-hope-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="bg-secondary/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Smartphone size={24} className="text-secondary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{option.provider}</h3>
                  <p className="text-lg font-bold text-primary mb-1">{option.number}</p>
                  <p className="text-sm text-muted-foreground">{option.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Donate;
