import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projectsData";
import {
    Calendar,
    ArrowLeft,
    ThumbsUp,
    MessageSquare,
    Share2,
    Heart,
    Mail,
    Twitter,
    Facebook,
    Instagram,
    Linkedin,
    Clock3,
    CheckCircle2,
    Trophy,
    Users
} from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === Number(id));

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-black mb-4 uppercase font-oswald">Project Not Found</h1>
                    <Link to="/projects" className="text-primary hover:underline font-bold">Back to Projects</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-background">
            <SEO title={project.title} description={project.excerpt} />

            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute inset-0 flex items-end pb-12 md:pb-24">
                    <div className="container-wide px-4">
                        <ScrollReveal>
                            <div className="max-w-4xl">
                                <div className="flex flex-wrap items-center gap-3 mb-4 md:mb-6">
                                    <span className="bg-primary text-primary-foreground text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full font-oswald shadow-lg">
                                        {project.category}
                                    </span>
                                    {project.status && (
                                        <span className="bg-white/20 backdrop-blur-md text-white text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/20 shadow-lg">
                                            {project.status}
                                        </span>
                                    )}
                                </div>
                                <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 md:mb-8 uppercase font-oswald tracking-tight">
                                    {project.title}
                                </h1>
                                <div className="flex flex-wrap items-center gap-6 text-white/80 font-bold uppercase tracking-widest text-[10px] md:text-xs font-oswald">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={14} className="text-secondary" />
                                        {project.date}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock3 size={14} className="text-secondary" />
                                        {project.readTime} Read
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <section className="section-padding lg:py-24">
                <div className="container-wide">
                    <div className="grid lg:grid-cols-12 gap-12 md:gap-20">
                        {/* Main Content */}
                        <div className="lg:col-span-8">
                            <ScrollReveal>
                                <Link to="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-black uppercase tracking-widest text-[10px] md:text-xs mb-8 md:mb-12 font-oswald group">
                                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
                                </Link>

                                <div className="prose prose-lg dark:prose-invert max-w-none">
                                    <p className="text-lg md:text-2xl text-foreground font-medium leading-relaxed mb-8 md:mb-12 italic border-l-4 border-primary pl-6">
                                        {project.excerpt}
                                    </p>
                                    <div className="whitespace-pre-wrap text-muted-foreground text-sm md:text-lg leading-relaxed space-y-6 md:space-y-8">
                                        {project.content}
                                    </div>

                                    {project.registrationLink && (
                                        <div className="mt-12 p-8 md:p-14 bg-muted/50 rounded-[2.5rem] border border-border/50 text-center relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700" />
                                            <Trophy size={40} className="mx-auto mb-6 text-secondary" />
                                            {project.status === "Passed Event" ? (
                                                <>
                                                    <h3 className="text-xl md:text-3xl font-black mb-4 uppercase font-oswald text-muted-foreground">Registration Closed</h3>
                                                    <p className="text-muted-foreground mb-10 max-w-md mx-auto italic">
                                                        This event has passed. Subscribe to our newsletter or follow us on social media to get updates on when the next registration window opens!
                                                    </p>
                                                    <Button
                                                        onClick={() => document.getElementById('newsletter-section')?.scrollIntoView({ behavior: 'smooth' })}
                                                        size="lg"
                                                        className="rounded-full px-12 h-16 uppercase tracking-widest font-black text-xs md:text-sm shadow-xl hover:scale-105 transition-all"
                                                    >
                                                        Stay Updated
                                                    </Button>
                                                </>
                                            ) : (
                                                <>
                                                    <h3 className="text-xl md:text-3xl font-black mb-4 uppercase font-oswald">Ready to Take Part?</h3>
                                                    <p className="text-muted-foreground mb-10 max-w-md mx-auto">Register now to participate in this impactful event and support our cause.</p>
                                                    <Button asChild size="lg" className="rounded-full px-12 h-16 uppercase tracking-widest font-black text-xs md:text-sm shadow-xl hover:scale-105 transition-all">
                                                        <a href={project.registrationLink} target="_blank" rel="noopener noreferrer">
                                                            Register Here
                                                        </a>
                                                    </Button>
                                                </>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Interaction Footer */}
                                <div className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-border/50">
                                    <div className="flex flex-wrap items-center justify-between gap-6">
                                        <div className="flex items-center gap-4 md:gap-8">
                                            <button className="flex items-center gap-2 group">
                                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all shadow-lg border border-border">
                                                    <ThumbsUp size={20} />
                                                </div>
                                                <div className="text-left">
                                                    <span className="block font-black text-xs md:text-sm uppercase tracking-widest font-oswald leading-none">{project.likes}</span>
                                                    <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Applauds</span>
                                                </div>
                                            </button>
                                            <button className="flex items-center gap-2 group">
                                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-muted flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-all shadow-lg border border-border">
                                                    <MessageSquare size={20} />
                                                </div>
                                                <div className="text-left">
                                                    <span className="block font-black text-xs md:text-sm uppercase tracking-widest font-oswald leading-none">{project.commentsCount}</span>
                                                    <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Thoughts</span>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <span className="font-black text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground mr-2 font-oswald">Spread The Word</span>
                                            {[Twitter, Facebook, Linkedin, Share2].map((Icon, i) => (
                                                <button key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-muted/50 border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-md group">
                                                    <Icon size={18} className="transition-transform group-hover:scale-110" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4 space-y-8 md:space-y-12">
                            {/* Impact Snapshot Sidebar */}
                            {project.impactLabel && (
                                <ScrollReveal delay={0.1}>
                                    <div className="bg-secondary rounded-[2.5rem] p-8 text-secondary-foreground">
                                        <Users size={32} className="mb-4 opacity-80" />
                                        <h3 className="text-sm font-black uppercase tracking-widest mb-2 font-oswald opacity-70">{project.impactLabel}</h3>
                                        <p className="text-4xl md:text-5xl font-black font-oswald">
                                            {project.impactValue?.toLocaleString()}+
                                        </p>
                                        <p className="mt-4 text-sm font-medium opacity-80 leading-relaxed font-oswald uppercase tracking-wider">
                                            Targeted Impact Through This Initiative
                                        </p>
                                    </div>
                                </ScrollReveal>
                            )}

                            <ScrollReveal delay={0.2}>
                                {/* Donate Block */}
                                <div className="bg-primary rounded-[2.5rem] p-8 md:p-10 text-primary-foreground relative overflow-hidden group shadow-2xl">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 animate-pulse" />
                                    <Heart size={32} className="mb-6 text-hope-yellow opacity-80" />
                                    <h3 className="text-xl md:text-2xl font-black mb-4 uppercase tracking-tight font-oswald">Fuel Our Mission</h3>
                                    <p className="text-primary-foreground/80 text-sm md:text-base leading-relaxed mb-8">
                                        Your contribution helps us provide early screening, teacher training, and advocacy for dyslexic children across Tanzania.
                                    </p>
                                    <Button asChild variant="outline" className="w-full bg-white text-primary hover:bg-hope-yellow hover:text-primary border-none rounded-full h-14 font-black uppercase tracking-widest text-xs shadow-lg transform active:scale-95 transition-all">
                                        <Link to="/donate">Donate Now</Link>
                                    </Button>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.3}>
                                {/* Newsletter Block */}
                                <div id="newsletter-section" className="bg-muted/50 border border-border/50 rounded-[2.5rem] p-8 md:p-10 shadow-xl">
                                    <Mail size={32} className="text-primary mb-6" />
                                    <h3 className="text-xl md:text-2xl font-black mb-4 uppercase tracking-tight font-oswald">Stay Informed</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                                        Subscribe to our newsletter for the latest event updates, research insights, and impact reports.
                                    </p>
                                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                        <Input
                                            placeholder="Email Address"
                                            className="rounded-full bg-background h-14 px-6 border-border/50 focus:border-primary transition-all shadow-inner"
                                        />
                                        <Button className="w-full rounded-full h-14 font-black uppercase tracking-widest text-[10px] md:text-xs shadow-lg hover:shadow-primary/20 transition-all">
                                            Join Our Newsletter
                                        </Button>
                                        <p className="text-[10px] text-center text-muted-foreground pt-2">
                                            <CheckCircle2 size={10} className="inline mr-1" /> No spam, just impact.
                                        </p>
                                    </form>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.4}>
                                {/* Social Follow */}
                                <div className="p-8 md:p-10 text-center">
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-primary font-oswald">Follow Our Journey</h3>
                                    <div className="flex justify-center gap-8">
                                        <a href="#" className="text-muted-foreground hover:text-primary transition-all hover:scale-150 transform">
                                            <Instagram size={24} />
                                        </a>
                                        <a href="#" className="text-muted-foreground hover:text-primary transition-all hover:scale-150 transform">
                                            <Facebook size={24} />
                                        </a>
                                        <a href="#" className="text-muted-foreground hover:text-primary transition-all hover:scale-150 transform">
                                            <Twitter size={24} />
                                        </a>
                                    </div>
                                    <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-[0.2em] mt-10">
                                        Together we create a more understanding community
                                    </p>
                                </div>
                            </ScrollReveal>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProjectDetail;
