import { Heart, HandHeart, Users, UserPlus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const actions = [
  {
    icon: Heart,
    title: "Donate",
    description: "Your contribution directly supports dyslexia screening programs and educational resources across Tanzania.",
    color: "bg-warm-orange",
    link: "/contact",
  },
  {
    icon: HandHeart,
    title: "Support",
    description: "Advocate for dyslexia awareness in your community. Share knowledge and help break the stigma.",
    color: "bg-primary",
    link: "/about",
  },
  {
    icon: Users,
    title: "Volunteer",
    description: "Join our team of dedicated volunteers helping families and educators understand dyslexia.",
    color: "bg-leaf-green",
    link: "/contact",
  },
  {
    icon: UserPlus,
    title: "Membership",
    description: "Become a member and be part of a growing community committed to equal learning opportunities.",
    color: "bg-sky-blue",
    link: "/contact",
  },
];

const ActionHubSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Take Action</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2 mb-4">
              How You Can <span className="text-secondary">Make a Difference</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Every action counts. Choose how you'd like to support dyslexic children in Tanzania.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, i) => (
            <ScrollReveal key={action.title} delay={i * 0.1}>
              <Link
                to={action.link}
                className="group block bg-card rounded-2xl p-6 border border-border card-hover h-full"
              >
                <div className={`${action.color} w-14 h-14 rounded-xl flex items-center justify-center mb-5`}>
                  <action.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{action.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{action.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={16} />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActionHubSection;
