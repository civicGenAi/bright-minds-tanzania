import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-deep-navy text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <img src={logo} alt="Dyslexia Tanzania" className="h-16 w-auto brightness-110" />
            <p className="text-sm opacity-80 leading-relaxed">
              Empowering every child with dyslexia in Tanzania through awareness, education, and equal learning opportunities.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["About Us", "Projects", "News", "FAQ", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get Involved</h4>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <Link to="/contact" className="hover:opacity-100 transition-opacity">Volunteer With Us</Link>
              <Link to="/contact" className="hover:opacity-100 transition-opacity">Become a Member</Link>
              <Link to="/contact" className="hover:opacity-100 transition-opacity">Partner With Us</Link>
              <Link to="/donate" className="hover:opacity-100 transition-opacity">Make a Donation</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="flex flex-col gap-3 text-sm opacity-70">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@dyslexiatanzania.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+255 123 456 789</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                <span>Tanzanite Street, House No. 13, Arusha Tanzania</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Dar es Salaam, Tanzania</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-60">
            © 2026 Dyslexia Tanzania. All rights reserved.
          </p>
          <p className="text-sm opacity-60 flex items-center gap-1">
            Made with <Heart size={14} className="text-secondary" /> for equal learning
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
