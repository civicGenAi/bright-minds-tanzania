import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";

const Privacy = () => (
  <main className="min-h-screen bg-background">
    <SEO title="Privacy Policy" description="Dyslexia Tanzania privacy policy - how we collect, use, and protect your data." />
    <PageHero badge="Legal" title="Privacy Policy" description="How we collect, use, and protect your personal information." />
    <section className="section-padding">
      <div className="container-wide max-w-3xl mx-auto prose prose-sm md:prose-lg dark:prose-invert">
        <p className="text-muted-foreground"><strong>Last updated:</strong> March 1, 2026</p>

        <h2>Information We Collect</h2>
        <p>We collect information you voluntarily provide, such as your name, email address, and phone number when you contact us, donate, volunteer, or register for our programs.</p>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To process donations and send receipts</li>
          <li>To communicate about our programs and events</li>
          <li>To respond to inquiries and support requests</li>
          <li>To improve our services and website</li>
        </ul>

        <h2>Data Protection</h2>
        <p>We implement appropriate security measures to protect your personal data. We do not sell, trade, or share your personal information with third parties without your consent.</p>

        <h2>Cookies</h2>
        <p>Our website may use cookies to enhance your experience. You can control cookie preferences through your browser settings.</p>

        <h2>Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal data. Contact us at info@dyslexiatanzania.org for any data-related requests.</p>

        <h2>Contact Us</h2>
        <p>For privacy-related questions, email us at <strong>info@dyslexiatanzania.org</strong> or visit our office at Tanzanite Street, House 13, Arusha, Tanzania.</p>
      </div>
    </section>
  </main>
);

export default Privacy;
