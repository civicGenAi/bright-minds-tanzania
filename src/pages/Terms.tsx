import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";

const Terms = () => (
  <main className="min-h-screen bg-background">
    <SEO title="Terms of Service" description="Dyslexia Tanzania terms of service for website usage." />
    <PageHero badge="Legal" title="Terms of Service" description="Terms and conditions for using the Dyslexia Tanzania website." />
    <section className="section-padding">
      <div className="container-wide max-w-3xl mx-auto prose prose-sm md:prose-lg dark:prose-invert">
        <p className="text-muted-foreground"><strong>Last updated:</strong> March 1, 2026</p>

        <h2>Acceptance of Terms</h2>
        <p>By accessing and using the Dyslexia Tanzania website, you agree to be bound by these terms and conditions.</p>

        <h2>Use of Website</h2>
        <p>This website is provided for informational purposes about dyslexia awareness, education, and our programs in Tanzania. You may not use this website for any unlawful purpose.</p>

        <h2>Donations</h2>
        <p>All donations are voluntary and non-refundable. Donation receipts will be provided for eligible contributions. Funds are used solely for our mission of dyslexia awareness and education.</p>

        <h2>Volunteer Participation</h2>
        <p>Volunteers participate on a voluntary basis. Dyslexia Tanzania reserves the right to accept or decline volunteer applications based on program needs.</p>

        <h2>Intellectual Property</h2>
        <p>All content on this website, including text, images, and logos, is the property of Dyslexia Tanzania and may not be reproduced without written permission.</p>

        <h2>Limitation of Liability</h2>
        <p>Dyslexia Tanzania provides information on this website in good faith but makes no warranties about the completeness or accuracy of the content.</p>

        <h2>Contact</h2>
        <p>For questions about these terms, contact us at <strong>info@dyslexiatanzania.org</strong>.</p>
      </div>
    </section>
  </main>
);

export default Terms;
