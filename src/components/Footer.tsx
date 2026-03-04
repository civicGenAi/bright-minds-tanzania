import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-deep-navy text-primary-foreground">
      <div className="container-wide px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-24">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          <div className="col-span-2 md:col-span-1 space-y-3 md:space-y-4">
            <img src={logo} alt="Dyslexia Tanzania" className="h-12 md:h-16 w-auto brightness-110" />
            <p className="text-xs md:text-sm opacity-80 leading-relaxed">
              Empowering every child with dyslexia in Tanzania through awareness, education, and equal learning opportunities.
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h4 className="text-sm md:text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-1.5 md:gap-2">
              {["About Us", "Projects", "News", "FAQ", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-xs md:text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h4 className="text-sm md:text-lg font-semibold">Get Involved</h4>
            <div className="flex flex-col gap-1.5 md:gap-2 text-xs md:text-sm opacity-70">
              <Link to="/volunteer" className="hover:opacity-100 transition-opacity">Volunteer With Us</Link>
              <Link to="/contact" className="hover:opacity-100 transition-opacity">Become a Member</Link>
              <Link to="/contact" className="hover:opacity-100 transition-opacity">Partner With Us</Link>
              <Link to="/donate" className="hover:opacity-100 transition-opacity">Make a Donation</Link>
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h4 className="text-sm md:text-lg font-semibold">Contact</h4>
            <div className="flex flex-col gap-2 md:gap-3 text-xs md:text-sm opacity-70">
              <div className="flex items-center gap-2">
                <Mail size={14} className="shrink-0" />
                <span>info@dyslexiatanzania.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="shrink-0" />
                <span>+255 688 535 848</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                <span>Tanzanite street, House 13, Arusha, Tanzania.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex flex-wrap gap-4 text-[10px] md:text-xs opacity-50">
            <Link to="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link to="/terms" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
          </div>
          <p className="text-[10px] md:text-sm opacity-60">
            © 2026 Dyslexia Tanzania. All rights reserved.
          </p>
          <p className="text-[10px] md:text-sm opacity-60 flex items-center gap-1">
            Made with <Heart size={12} className="text-secondary" /> for equal learning
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
