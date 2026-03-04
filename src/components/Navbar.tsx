import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "News", path: "/news" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-1.5 md:py-2" : "py-2 md:py-6"}`}
    >
      <div className="container-wide px-3 sm:px-6 lg:px-8">
        <div
          className={`relative flex items-center justify-between transition-all duration-500 px-3 md:px-6 rounded-xl md:rounded-[1.5rem] ${isScrolled
            ? "bg-white/70 dark:bg-black/70 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] h-12 md:h-16"
            : "bg-transparent h-14 md:h-20"
          }`}
        >
          <Link to="/" className="relative z-10 flex items-center gap-2 group">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <img
                src={logo}
                alt="Dyslexia Tanzania"
                className={`transition-all duration-500 ${isScrolled ? "h-7 md:h-10" : "h-9 md:h-13"}`}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 bg-muted/20 backdrop-blur-sm p-1.5 rounded-2xl border border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 lg:px-4 py-2 text-xs lg:text-sm font-bold uppercase tracking-widest transition-all rounded-xl ${location.pathname === item.path
                  ? "text-primary-foreground"
                  : "text-foreground/70 hover:text-foreground hover:bg-white/10"
                }`}
              >
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-primary rounded-xl -z-10 shadow-lg shadow-primary/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/donate"
              className="group relative inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 lg:px-7 py-2.5 lg:py-3 rounded-xl font-black uppercase tracking-widest text-xs overflow-hidden transition-all hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <Heart size={16} className="fill-current" />
              </motion.div>
              <span className="relative z-10">Donate</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-10 p-2 text-foreground bg-muted/40 backdrop-blur-md border border-white/10 rounded-lg"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[-1] md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="absolute top-full left-3 right-3 mt-2 md:hidden bg-card/95 backdrop-blur-2xl border border-white/20 rounded-2xl p-4 shadow-2xl overflow-hidden"
            >
              <div className="relative z-10 space-y-1.5">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2.5 px-4 text-base font-bold uppercase tracking-widest rounded-xl transition-all ${location.pathname === item.path
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.03 }}
                  className="pt-2"
                >
                  <Link
                    to="/donate"
                    onClick={() => setIsOpen(false)}
                    className="flex w-full items-center justify-center gap-2 bg-secondary text-secondary-foreground py-3.5 rounded-xl text-base font-black uppercase tracking-widest shadow-lg"
                  >
                    <Heart size={20} className="fill-current" />
                    Donate Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
