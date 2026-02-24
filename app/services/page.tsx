"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Globe,
    Code2,
    Smartphone,
    Palette,
    Cloud,
    BarChart3,
    ArrowRight,
    Binary,
    Cpu,
    ShieldCheck,
    Zap,
    ChevronRight,
    Rocket,
    TrendingUp
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactCTA from '../../components/ContactCTA';
import Link from 'next/link';

const SERVICE_CATEGORIES = [
    {
        name: "Digital Engineering",
        tag: "TECH_CORE",
        services: [
            {
                title: "Web Development",
                description: "Strategic digital headquarters architected for sub-100ms speeds. We build the foundation of your digital authority using React, Next.js, and modern stacks.",
                icon: Globe,
                tag: "WEB_01",
                color: "from-blue-500 to-cyan-400",
                href: "/services/website-development",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "App Development",
                description: "Native and cross-platform mobility solutions built for performance, retaining users through frictionless UX logic and high-performance native bridges.",
                icon: Smartphone,
                tag: "APP_02",
                color: "from-cyan-500 to-blue-500",
                href: "/services/app-development",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Software Development",
                description: "Bespoke enterprise software engineered with full-stack precision. We build scalable tools and complex backend systems for modern business needs.",
                icon: Code2,
                tag: "CODE_03",
                color: "from-indigo-500 to-blue-600",
                href: "/services/software-development",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Cloud Solutions",
                description: "Cloud-native architectures and DevOps strategies for hyper-scale. We optimize your infrastructure for reliability, security, and cost-efficiency.",
                icon: Cloud,
                tag: "CLOUD_04",
                color: "from-blue-400 to-indigo-500",
                href: "/services/cloud-solutions",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Premium Tools Marketplace",
                description: "Access high-value enterprise software licenses, templates, and digital tools at up to 95% off. Verified premium access delivered via WhatsApp confirmation.",
                icon: Cpu,
                tag: "DEALS_05",
                color: "from-indigo-600 to-cyan-500",
                href: "/services/business-tools",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
            }
        ]
    },
    {
        name: "Marketing & Growth",
        tag: "ROI_MATRIX",
        services: [
            {
                title: "Performance Marketing",
                description: "Data-driven growth strategies engineered to maximize conversion rates and scale revenue through precision targeting and algorithmic bidding.",
                icon: BarChart3,
                tag: "ROI_06",
                color: "from-emerald-500 to-teal-400",
                href: "/services/performance-marketing",
                image: "https://images.unsplash.com/photo-1551288049-bbdac8626ad1?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Social Media Handling",
                description: "Algorithmic-first social management designed to build high-authority communities and drive organic brand equity through narrative design.",
                icon: Zap,
                tag: "SYNC_07",
                color: "from-teal-400 to-emerald-600",
                href: "/services/social-media-handling",
                image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Partnership Marketing",
                description: "Collaborative scaling engines. We manage high-impact partnerships and affiliate networks that create exponential brand multipliers.",
                icon: ShieldCheck,
                tag: "ALLOY_08",
                color: "from-emerald-600 to-teal-500",
                href: "/services/partnership-marketing",
                image: "https://images.unsplash.com/photo-1556761175-5973bcad58bc?auto=format&fit=crop&q=80&w=800"
            }
        ]
    },
    {
        name: "Strategic Design & Launch",
        tag: "GENESIS_PROTOCOL",
        services: [
            {
                title: "Start Your Business",
                description: "Complete architectural foundation for new ventures. We handle the tech stack, legal framework, and scaling strategy while you build your vision.",
                icon: Rocket,
                tag: "LAUNCH_09",
                color: "from-orange-500 to-red-500",
                href: "/services/start-your-business",
                image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "UI/UX Design",
                description: "Visual excellence met with psychological precision. We create intuitive digital journeys that delight users and drive measurable business value.",
                icon: Palette,
                tag: "VISUAL_10",
                color: "from-red-500 to-rose-600",
                href: "/services/ui-ux-design",
                image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "Content Creation",
                description: "High-fidelity cinematic and digital content engineered to capture attention and communicate complex brand narratives with precision.",
                icon: Binary,
                tag: "MEDIA_11",
                color: "from-rose-600 to-orange-500",
                href: "/services/content-creation",
                image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800"
            },
            {
                title: "IT Consulting",
                description: "Strategic technology roadmapping and architectural auditing. We help you navigate the complex tech landscape to achieve long-term goals.",
                icon: Cpu,
                tag: "STRATEGY_12",
                color: "from-orange-400 to-red-500",
                href: "/services/it-consulting",
                image: "https://images.unsplash.com/photo-1454165833767-151671e548d1?auto=format&fit=crop&q=80&w=800"
            }
        ]
    }
];

export default function ServicesPage() {
    const [theme, setTheme] = useState<'dark' | 'light'>('light');

    useEffect(() => {
        // Ensure default light mode for this page
        /* handled by next-themes */
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        if (newTheme === 'dark') {
            /* handled by next-themes */
        } else {
            /* handled by next-themes */
        }
    };

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-brand-medium/30 transition-colors duration-500">
            <Navbar isDark={theme === 'dark'} toggleTheme={toggleTheme} />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden py-24">
                {/* Immersive Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-medium/10 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '3s' }} />

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-3 mb-10 px-4 py-2 bg-brand-medium/5 border border-brand-medium/10 rounded-full"
                    >
                        <div className="w-2 h-2 rounded-full bg-brand-medium animate-ping" />
                        <span className="text-brand-medium font-mono text-[10px] font-black uppercase tracking-[0.4em]">Capabilities_Library_v.2.0</span>
                    </motion.div>

                    <div className="relative inline-block">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[15vw] md:text-[12rem] font-black text-foreground uppercase tracking-tighter leading-[0.8] mb-12 select-none"
                        >
                            Our <br />
                            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-medium via-brand-cyan to-brand-medium italic font-black">
                                Services.
                                {/* Floating Accent */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-4 -right-8 w-12 h-12 bg-brand-medium/20 rounded-xl blur-xl hidden md:block"
                                />
                            </span>
                        </motion.h1>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-12"
                        >
                            Architecting digital excellence through precision engineering and cinematic design.
                            Explore our multi-disciplinary approach to solving complex digital challenges.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="flex items-center justify-center gap-8"
                        >
                            <div className="h-[1px] w-12 bg-slate-200 dark:bg-white/10" />
                            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.3em] font-black">Scroll_to_Initialize</span>
                            <div className="h-[1px] w-12 bg-slate-200 dark:bg-white/10" />
                        </motion.div>
                    </div>
                </div>

                {/* Subtle Technical Accents */}
                <div className="absolute bottom-10 left-10 hidden xl:block opacity-20">
                    <pre className="text-brand-medium font-mono text-[8px] leading-tight">
                        {`INTERFACE_SECURE: TRUE\nNODE_SYNC: 100%\nLATENCY: 12ms\nPROTOCOL: GENESIS_OS`}
                    </pre>
                </div>
            </section>

            {/* Services Sections by Category */}
            {SERVICE_CATEGORIES.map((category, catIndex) => (
                <section key={catIndex} className="py-20 relative border-t border-slate-100 dark:border-white/5 bg-white dark:bg-[#010309] transition-colors duration-500">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
                            <div className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-6 h-[2px] bg-brand-medium" />
                                    <span className="text-brand-medium font-mono text-[10px] font-black uppercase tracking-[0.4em]">{category.tag}</span>
                                </motion.div>
                                <h2 className="text-4xl md:text-6xl font-black text-foreground dark:text-white uppercase tracking-tighter leading-none">
                                    {category.name}.
                                </h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {category.services.map((service, index) => (
                                <ServiceCard key={index} service={service} index={index} />
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            <ContactCTA />
            <Footer />
        </main>
    );
}

function ServiceCard({ service, index }: { service: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-full flex flex-col"
        >
            {/* Image Container */}
            <div className="relative h-64 md:h-72 w-full rounded-t-[2.5rem] overflow-hidden">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Floating Icon Over Image */}
                <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl">
                    <service.icon size={22} />
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                    <span className="font-mono text-[9px] font-black text-white/60 uppercase tracking-[0.3em]">
                        {service.tag}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mt-1 leading-tight">
                        {service.title}
                    </h3>
                </div>
            </div>

            {/* Content Container */}
            <div className="flex-1 bg-white dark:bg-slate-900/40 backdrop-blur-xl border-x border-b border-slate-200 dark:border-white/5 rounded-b-[2.5rem] p-8 flex flex-col transition-all duration-500 group-hover:border-brand-medium/50 group-hover:shadow-2xl group-hover:shadow-brand-medium/10">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed mb-8 flex-grow">
                    {service.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-medium animate-pulse" />
                        <span className="text-[10px] font-bold text-slate-400 dark:text-white/40 uppercase tracking-widest">Active_Service</span>
                    </div>

                    <Link
                        href={service.href}
                        className="flex items-center gap-2 text-[11px] font-black text-brand-medium uppercase tracking-widest group/btn hover:text-brand-deep transition-colors duration-300 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        Learn More
                        <div className="w-6 h-6 rounded-full border border-brand-medium flex items-center justify-center group-hover/btn:bg-brand-medium group-hover/btn:text-white transition-all">
                            <ChevronRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                        </div>
                    </Link>
                </div>
            </div>

            {/* Hover Accent Glow */}
            <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-gradient-to-r ${service.color} blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none`} />
        </motion.div>
    );
}
