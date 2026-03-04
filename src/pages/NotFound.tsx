import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search, Heart } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg mx-auto"
      >
        <div className="relative mb-6">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-8xl md:text-[10rem] font-black text-primary/10 leading-none"
          >
            404
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-primary/10 p-4 rounded-full">
              <Search size={32} className="text-primary" />
            </div>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-black text-foreground mb-3">Page Not Found</h1>
        <p className="text-sm md:text-base text-muted-foreground mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-xl hover:shadow-xl hover:scale-105 transition-all text-sm">
            <Home size={16} /> Go Home
          </Link>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-bold px-6 py-3 rounded-xl hover:bg-muted transition-all text-sm">
            <ArrowLeft size={16} /> Contact Us
          </Link>
          <Link to="/donate" className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-bold px-6 py-3 rounded-xl hover:shadow-xl transition-all text-sm">
            <Heart size={16} /> Donate
          </Link>
        </div>
      </motion.div>
    </main>
  );
};

export default NotFound;
