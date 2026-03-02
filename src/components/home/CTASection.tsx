import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const CTASection = () => {
  return (
    <section className="section-padding bg-soft-cream">
      <div className="container-wide text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 max-w-3xl mx-auto">
            Join Us in Creating <span className="text-primary">Equal Learning</span> Opportunities
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Whether you're a parent, educator, or supporter — there's a place for you in our community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-xl hover:scale-105"
            >
              Become a Member
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground transition-all hover:shadow-xl hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
