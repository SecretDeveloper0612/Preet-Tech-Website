"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Users, Briefcase, Rocket, Globe, Palette, Scale,
    BarChart3, Settings, ShieldCheck, ChevronLeft,
    ChevronRight, Quote, CheckCircle2, Calendar, Clock, ArrowUpRight
} from 'lucide-react';

const STEPS = [
    { title: "Consultation", icon: Users, desc: "Deep-dive session to blueprint your vision." },
    { title: "Planning", icon: Settings, desc: "Architecting your business and tech roadmap." },
    { title: "Registration", icon: Scale, desc: "Handling all legal and incorporation flows." },
    { title: "Branding", icon: Palette, desc: "Creating your iconic visual identity system." },
    { title: "Website Setup", icon: Globe, desc: "Engineered digital presence for conversion." },
    { title: "Launch & Growth", icon: Rocket, desc: "Strategic entry and scale-up execution." }
];

const INDUSTRIES = [
    { name: "Retail", icon: Briefcase },
    { name: "Education", icon: Globe },
    { name: "E-Commerce", icon: Briefcase },
    { name: "Real Estate", icon: Scale },
    { name: "Healthcare", icon: ShieldCheck },
    { name: "Digital Services", icon: Settings },
    { name: "Local Businesses", icon: Users }
];

const TOOLS = [
    { name: "Salesforce", logo: "https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg" },
    { name: "HubSpot", logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg" },
    { name: "Shopify", logo: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg" },
    { name: "Stripe", logo: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg" },
    { name: "Postmark", logo: "https://www.vectorlogo.zone/logos/postmarkapp/postmarkapp-icon.svg" },
    { name: "Sentry", logo: "https://www.vectorlogo.zone/logos/sentry/sentry-icon.svg" },
    { name: "Vercel", logo: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" },
    { name: "Analytics", logo: "https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg" }
];

const CASE_STUDIES = [
    {
        name: "Building for Urban Store",
        industry: "Retail",
        date: "OCT 12, 2024",
        readTime: "5 MIN READ",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
        desc: "How we scaled an offline retail brand to a digital-first powerhouse through strategic e-commerce registration.",
        tag: "MARKET SCALE"
    },
    {
        name: "Scaling EduFlow's Ops",
        industry: "Education",
        date: "OCT 08, 2024",
        readTime: "7 MIN READ",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
        desc: "Architecting a custom CMS that automated legal compliance and reduced administrative overhead by 60%.",
        tag: "EFFICIENCY"
    },
    {
        name: "HealthKey: Security First",
        industry: "Healthcare",
        date: "SEP 28, 2024",
        readTime: "6 MIN READ",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
        desc: "Engineering a HIPAA-compliant patient management system for a high-growth medical startup.",
        tag: "COMPLIANCE"
    }
];

const TESTIMONIALS = [
    { name: "Rajiv M.", photo: "https://i.pravatar.cc/100?img=11", review: "Preet Tech turned my side project into a registered, profitable company in 4 weeks." },
    { name: "Sarah J.", photo: "https://i.pravatar.cc/100?img=12", review: "The branding and website they built were world-class. Absolute professionals." },
    { name: "Aman K.", photo: "https://i.pravatar.cc/100?img=13", review: "Their legal support and strategic roadmap were exactly what I needed to scale." }
];

const TrustAndProcess = () => {
    return (
        <section className="py-24 space-y-32 overflow-hidden">
            {/* Launch Process (Section 12) */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">The Roadmap</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                        How We <span className="text-brand-cyan italic">Launch You</span>
                    </h2>
                </div>

                <div className="relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-white/5 hidden lg:block -translate-y-1/2" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
                        {STEPS.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center group"
                            >
                                <div className="w-20 h-20 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-brand-cyan/20 flex items-center justify-center mb-6 group-hover:border-brand-cyan group-hover:shadow-[0_0_30px_rgba(95,211,230,0.3)] transition-all bg-glow">
                                    <step.icon className="w-8 h-8 text-brand-medium dark:text-brand-cyan" />
                                </div>
                                <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2 text-center">{step.title}</h4>
                                <p className="text-[10px] text-slate-500 font-medium leading-relaxed text-center max-w-[140px]">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mid CTA (Section 13) */}
            <div className="px-6">
                <div className="max-w-5xl mx-auto rounded-[4rem] p-12 md:p-20 text-center bg-[#030712] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 to-transparent" />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-10 leading-[0.9]">
                            Your Business Idea <br /> Deserves The <span className="text-brand-cyan">Right Launch</span>
                        </h2>
                        <button className="px-10 py-5 bg-brand-cyan text-[#030712] rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl shadow-brand-cyan/20">
                            Book Free Strategy Call
                        </button>
                    </div>
                </div>
            </div>

            {/* Industries (Section 14) & Tools (Section 15) */}
            <div className="max-w-7xl mx-auto px-6 space-y-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* Left: Industries Section */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <span className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Market Reach</span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-[0.9]">
                                Industries <br /> <span className="text-brand-cyan italic font-serif">We Ignite.</span>
                            </h2>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed max-w-sm">
                            Tailored operational frameworks designed specifically for your industry's unique challenges and growth patterns.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {INDUSTRIES.map((ind, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -4, backgroundColor: "rgba(95, 211, 230, 0.15)" }}
                                    className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 group transition-all cursor-pointer shadow-sm hover:border-brand-cyan/40"
                                >
                                    <ind.icon className="w-4 h-4 text-brand-cyan group-hover:scale-110 transition-transform" />
                                    <span className="text-[11px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 group-hover:text-brand-cyan transition-colors">{ind.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Tools Section - Dynamic Grid */}
                    <div className="lg:col-span-7">
                        <div className="p-10 md:p-14 rounded-[4rem] bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 blur-[100px] pointer-events-none group-hover:bg-brand-cyan/20 transition-all duration-700" />

                            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                                <div>
                                    <span className="text-brand-cyan text-[9px] font-black uppercase tracking-[0.6em] mb-3 block">Power Stack</span>
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Tools <span className="text-brand-cyan">&</span> Tech</h3>
                                </div>
                                <div className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Live Integration Ready</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 relative z-10">
                                {TOOLS.map((tool, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.05 }}
                                        className="flex flex-col items-center gap-4 group/tool"
                                    >
                                        <div className="w-20 h-20 rounded-[2rem] bg-white dark:bg-black/40 border border-slate-200 dark:border-white/5 flex items-center justify-center p-5 group-hover/tool:border-brand-cyan/50 group-hover/tool:shadow-2xl group-hover/tool:shadow-brand-cyan/10 transition-all duration-500">
                                            <img
                                                src={tool.logo}
                                                alt={tool.name}
                                                className="w-full h-full object-contain filter grayscale opacity-60 group-hover/tool:grayscale-0 group-hover/tool:opacity-100 transition-all duration-500"
                                            />
                                        </div>
                                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover/tool:text-slate-900 dark:group-hover/tool:text-white transition-colors">
                                            {tool.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Case Studies (Section 16) - Editorial Card Redesign */}
            <div className="py-24 bg-white dark:bg-[#030712]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div>
                            <span className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Proven Performance</span>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                                Success <span className="text-brand-cyan italic">Stories</span>
                            </h2>
                        </div>
                        <p className="max-w-md text-slate-500 font-medium text-sm leading-relaxed">
                            Deep dives into how we transform startup visions into technical realities and market-leading businesses.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {CASE_STUDIES.map((study, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="bg-white dark:bg-slate-900/30 rounded-[2.5rem] border border-slate-100 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-cyan/10 transition-all duration-500 h-full flex flex-col">
                                    {/* Card Header: Image & Badge */}
                                    <div className="relative h-64 overflow-hidden p-3">
                                        <div className="absolute top-6 left-6 z-20">
                                            <span className="px-4 py-1.5 rounded-lg bg-emerald-500/90 text-white text-[9px] font-black uppercase tracking-widest backdrop-blur-md">
                                                {study.industry}
                                            </span>
                                        </div>
                                        <img
                                            src={study.image}
                                            alt={study.name}
                                            className="w-full h-full object-cover rounded-[2rem] group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-x-3 inset-y-3 bg-gradient-to-t from-black/20 to-transparent rounded-[2rem]" />
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-8 space-y-6 flex-1 flex flex-col">
                                        {/* Metadata row */}
                                        <div className="flex items-center gap-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
                                                {study.date}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-3.5 h-3.5 text-brand-cyan" />
                                                {study.readTime}
                                            </div>
                                        </div>

                                        <div className="space-y-4 flex-1">
                                            <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-brand-cyan transition-colors leading-tight">
                                                {study.name}
                                            </h4>
                                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                                                {study.desc}
                                            </p>
                                        </div>

                                        {/* Action link */}
                                        <div className="pt-8 border-t border-slate-50 dark:border-white/5 flex items-center justify-between">
                                            <span className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-[0.2em]">Read Analysis</span>
                                            <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-[#030712] transition-all transform group-hover:translate-x-1">
                                                <ArrowUpRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>            {/* Testimonials (Section 17) */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Founder Feedback</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Word On <span className="text-brand-cyan italic">The Street</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t, i) => (
                        <div key={i} className="p-10 rounded-[3rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 relative group">
                            <Quote className="absolute top-8 right-8 w-10 h-10 text-brand-cyan opacity-10" />
                            <div className="flex items-center gap-4 mb-8">
                                <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full ring-2 ring-brand-cyan/20" />
                                <span className="font-black text-slate-900 dark:text-white uppercase tracking-tight text-sm">{t.name}</span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 text-sm italic font-medium leading-relaxed font-serif">"{t.review}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustAndProcess;
