import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
    return (
        <motion.a
            href="https://wa.me/255688535848"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[60] group flex items-center gap-3 bg-[#25D366] text-white p-3 sm:px-6 sm:py-3 rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-all border border-white/20"
        >
            <div className="hidden sm:flex flex-col items-end">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-80 leading-none">Need Assistance?</span>
                <span className="text-xs font-black whitespace-nowrap">Let's act on WhatsApp</span>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle size={20} className="fill-current sm:size-[22px]" />
            </div>
        </motion.a>
    );
};

export default WhatsAppButton;
