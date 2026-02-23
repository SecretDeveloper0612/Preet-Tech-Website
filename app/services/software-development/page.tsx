"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cpu,
    Database,
    Globe,
    Layout,
    Layers,
    Shield,
    Zap,
    Code2,
    BarChart3,
    Workflow,
    Settings,
    Headphones,
    ArrowRight,
    User,
    Mail,
    Phone,
    Building2,
    MessageSquare,
    ChevronRight,
    Search,
    Lock,
    RefreshCw,
    CheckCircle2,
    Server,
    Activity,
    Terminal,
    Hexagon,
    Boxes,
    Cloud
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}

const SoftwareDevelopment = () => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
    const containerRef = useRef<HTMLDivElement>(null);
    const heroVisualRef = useRef<HTMLDivElement>(null);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        if (newTheme === Theme.DARK) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };


    useGSAP(() => {
        // Hero entrance
        const tl = gsap.timeline();
        tl.from(".hero-content > *", {
            x: -100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "expo.out"
        })
            .from(".hero-form-container", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.5")
            .from(".floating-ui-element", {
                scale: 0,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "back.out(1.7)"
            }, "-=0.8");

        // Code line animation
        gsap.to(".code-line", {
            width: "100%",
            duration: 2,
            stagger: 0.1,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Floating loop for UI elements
        gsap.to(".floating-ui-element", {
            y: "random(-20, 20)",
            x: "random(-10, 10)",
            duration: "random(3, 5)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Grid background pulse
        gsap.to(".grid-bg-overlay", {
            opacity: 0.4,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Service cards parallax
        gsap.utils.toArray<HTMLElement>(".service-card").forEach((card) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=100",
                    toggleActions: "play none none none"
                },
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        });

    }, { scope: containerRef });

    const services = [
        {
            title: "SaaS Development",
            desc: "Scalable multi-tenant architectures built with modern cloud frameworks to power your software product.",
            icon: Cloud,
            color: "brand-cyan"
        },
        {
            title: "Custom Web Applications",
            desc: "Complex dashboard systems and business tools engineered for high-load performance and security.",
            icon: Code2,
            color: "brand-medium"
        },
        {
            title: "CRM / ERP Systems",
            desc: "Tailored resource management portals that streamline operations and centralize your business data.",
            icon: Database,
            color: "brand-sky"
        },
        {
            title: "API Integrations",
            desc: "Seamless connectivity between your software and third-party services like Stripe, Salesforce, or AWS.",
            icon: RefreshCw,
            color: "brand-deep"
        },
        {
            title: "Automation Systems",
            desc: "Intelligent workflow automation that eliminates repetitive tasks and optimizes business efficiency.",
            icon: Workflow,
            color: "brand-cyan"
        },
        {
            title: "Maintenance & Support",
            desc: "Proactive performance monitoring, security patches, and structural updates for your mission-critical software.",
            icon: Headphones,
            color: "brand-medium"
        }
    ];

    const whyChooseUs = [
        {
            title: "Scalable Architecture",
            desc: "We design systems that grow with your business, using microservices and serverless infrastructure.",
            icon: Layers
        },
        {
            title: "Clean Code Standards",
            desc: "Strict TypeScript enforcement and modular design patterns ensure your codebase is maintainable and robust.",
            icon: Terminal
        },
        {
            title: "Agile Methodology",
            desc: "Iterative development cycles with continuous delivery, keeping you involved at every stage of the build.",
            icon: RefreshCw
        },
        {
            title: "Performance Optimization",
            desc: "Deep focus on low-latency data fetching and high-efficiency rendering for real-time applications.",
            icon: Activity
        },
        {
            title: "Security-First Approach",
            desc: "Bank-level encryption, multi-layered authentication, and rigorous penetration testing for data safety.",
            icon: Shield
        }
    ];

    return (
        <main ref={containerRef} className="relative z-10 selection:bg-brand-medium/30 overflow-x-hidden bg-background text-foreground transition-colors duration-300 font-sans">
            <Navbar isDark={theme === Theme.DARK} toggleTheme={toggleTheme} />

            {/* Hero Section */}
            <section className="relative min-h-screen pt-32 pb-20 px-6 flex items-center overflow-hidden">
                {/* Tech Grid Background */}
                <div className="absolute inset-0 z-0 bg-white dark:bg-[#020617] transition-colors duration-500">
                    <div className="grid-bg-overlay absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-[0.4] dark:opacity-[0.15] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

                    {/* Glowing Orbs */}
                    <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-brand-medium/5 dark:bg-brand-medium/10 blur-[180px] rounded-full animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-cyan/5 blur-[150px] rounded-full animate-pulse delay-700" />
                </div>

                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

                    {/* Left Side: Professional Content (7 Cols) */}
                    <div className="lg:col-span-7 hero-content">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-medium/10 border border-brand-medium/20 text-brand-cyan text-[10px] font-black uppercase tracking-[0.2em] mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
                            Engineering Innovation
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8 text-slate-900 dark:text-white">
                            Custom Software <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-medium to-brand-deep italic">Built to Scale.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10 font-medium">
                            We design and develop scalable, secure, and performance-driven software tailored to your complex business needs. High-architecture engineering for the digital-first era.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            {[
                                { icon: Layers, label: "Scalable Architecture", detail: "Microservices Ready" },
                                { icon: Shield, label: "Enterprise Security", detail: "Protocol 7 Encrypted" },
                                { icon: Code2, label: "Clean Code", detail: "Strict TS Standards" },
                                { icon: Activity, label: "High Performance", detail: "Sub-100ms Response" }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start group">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-brand-cyan/50 transition-colors">
                                        <item.icon className="w-5 h-5 text-brand-cyan" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-0.5">{item.label}</p>
                                        <p className="text-sm font-bold text-slate-900 dark:text-white">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-slate-200 dark:border-white/5">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-[#020617] bg-slate-100 dark:bg-white/10 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/150?u=sw${i}`} alt="user" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                                Trusted by <span className="text-slate-900 dark:text-white">100+ Engineering Teams</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Professional Form (5 Cols) + Visuals */}
                    <div className="lg:col-span-5 hero-form-container relative">
                        {/* Integrated Visuals Behind/Around Form */}
                        <div className="absolute inset-0 z-20 pointer-events-none overflow-visible">
                            <motion.div
                                animate={{
                                    rotate: 360,
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{
                                    rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20"
                            >
                                <div className="absolute inset-0 rounded-full border-2 border-brand-cyan/20 border-dashed animate-spin-slow" />
                                <div className="absolute inset-10 rounded-full border border-brand-medium/10 animate-spin-reverse-slow" />
                            </motion.div>

                            {/* Floating UI Elements from previous design */}
                            <motion.div className="floating-ui-element absolute -top-8 -right-8 glass-morphism p-3 rounded-xl border border-slate-200 dark:border-white/10 w-40 shadow-2xl bg-white/60 dark:bg-slate-900/60 z-20">
                                <Activity className="w-3 h-3 text-brand-cyan mb-2" />
                                <div className="h-1 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full w-[75%] bg-brand-cyan" />
                                </div>
                            </motion.div>

                            <motion.div className="floating-ui-element absolute -bottom-10 -left-10 glass-morphism p-4 rounded-xl border border-slate-200 dark:border-white/10 w-48 shadow-2xl bg-white/60 dark:bg-slate-900/60 z-20">
                                <div className="flex items-center gap-2 mb-2">
                                    <Database className="w-4 h-4 text-brand-medium" />
                                    <span className="text-[8px] font-black text-slate-900 dark:text-white uppercase tracking-widest">Active Nodes</span>
                                </div>
                                <div className="flex gap-1 justify-between">
                                    {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-4 w-1.5 bg-brand-medium/30 rounded-sm" />)}
                                </div>
                            </motion.div>
                        </div>

                        <div className="glass-morphism rounded-[3rem] p-8 md:p-10 border border-slate-200 dark:border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.1)] dark:shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative z-10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl">
                            <div className="mb-8">
                                <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-2">Start Discovery</h3>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Architect your custom solution</p>
                            </div>

                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-brand-cyan transition-colors" />
                                            <input type="text" placeholder="Engineering Lead" className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 transition-all font-medium placeholder:text-slate-400 dark:placeholder:text-slate-600" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Company</label>
                                        <div className="relative group">
                                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-brand-cyan transition-colors" />
                                            <input type="text" placeholder="TechFlow Inc." className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 transition-all font-medium placeholder:text-slate-400 dark:placeholder:text-slate-600" />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Work Email</label>
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-brand-cyan transition-colors" />
                                            <input type="email" placeholder="name@company.com" className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 transition-all font-medium placeholder:text-slate-400 dark:placeholder:text-slate-600" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Phone</label>
                                        <div className="relative group">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-brand-cyan transition-colors" />
                                            <input type="tel" placeholder="+1 (555) 000-000" className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 transition-all font-medium placeholder:text-slate-400 dark:placeholder:text-slate-600" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Project Type</label>
                                    <div className="relative">
                                        <select className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl py-4 px-4 text-sm text-slate-900 dark:text-white appearance-none focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 transition-all font-medium cursor-pointer">
                                            <option className="bg-white dark:bg-slate-900">Web App / SaaS</option>
                                            <option className="bg-white dark:bg-slate-900">CRM / ERP System</option>
                                            <option className="bg-white dark:bg-slate-900">Custom Software</option>
                                            <option className="bg-white dark:bg-slate-900">API/Integration</option>
                                        </select>
                                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none rotate-90" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Technical Requirements</label>
                                    <textarea placeholder="Tell us about your business logic..." rows={2} className="w-full bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl py-4 px-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 transition-all font-medium resize-none placeholder:text-slate-400 dark:placeholder:text-slate-600"></textarea>
                                </div>

                                <button className="w-full group mt-4 relative bg-brand-cyan hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-brand-deep text-brand-deep rounded-2xl py-5 font-black text-xs uppercase tracking-[0.2em] transition-all overflow-hidden shadow-xl shadow-brand-cyan/20">
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        Discuss Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>

                                <p className="text-center text-[9px] font-black text-slate-500 uppercase tracking-widest leading-relaxed mt-6">
                                    Secure • Scalable • Future-Ready Solutions
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-32 px-6 relative bg-slate-50/50 dark:bg-slate-950/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block"
                        >
                            Solutions Architecture
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight uppercase text-slate-900 dark:text-white mb-6">
                            End-to-End <span className="text-brand-medium italic">Software</span> Development
                        </h2>
                        <div className="h-1 w-20 bg-brand-cyan mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="service-card group glass-morphism p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/5 hover:border-brand-medium/30 transition-all bg-white/40 dark:bg-slate-900/40"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-${service.color}/10 flex items-center justify-center border border-${service.color}/20 group-hover:scale-110 transition-transform mb-8`}>
                                    <service.icon className={`w-8 h-8 text-brand-cyan`} />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-4 group-hover:text-brand-cyan transition-colors">{service.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                                    {service.desc}
                                </p>
                                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/5 flex items-center text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                    Advanced Capability <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-deep/10 blur-[150px] rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Engineered for Excellence</span>
                            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight uppercase text-slate-900 dark:text-white mb-10">
                                Why Choose Our <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium">Software Team</span>
                            </h2>

                            <div className="space-y-4">
                                {whyChooseUs.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-6 p-6 rounded-[2rem] hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-default group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-brand-medium/10 flex items-center justify-center shrink-0 border border-brand-medium/20 text-brand-cyan group-hover:rotate-12 transition-transform">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-black uppercase tracking-tight text-slate-900 dark:text-white mb-1">{item.title}</h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square glass-morphism rounded-[3rem] border border-slate-200 dark:border-white/10 p-12 relative overflow-hidden flex items-center justify-center group bg-slate-50 dark:bg-slate-900/40">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 via-transparent to-brand-medium/10" />

                                {/* Visual Representation of Stack/Security */}
                                <div className="grid grid-cols-2 gap-6 relative z-10 w-full">
                                    <div className="space-y-6">
                                        <div className="p-8 bg-white dark:bg-black/40 rounded-3xl border border-slate-200 dark:border-white/5 flex flex-col gap-4 group-hover:translate-y-[-5px] transition-transform">
                                            <Lock className="w-10 h-10 text-brand-cyan" />
                                            <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Protocol 7</p>
                                            <p className="text-xl font-black text-slate-900 dark:text-white uppercase">Encrypted</p>
                                        </div>
                                        <div className="p-8 bg-brand-cyan rounded-3xl flex flex-col gap-4 group-hover:scale-105 transition-transform">
                                            <Zap className="w-10 h-10 text-brand-deep" />
                                            <p className="text-[10px] font-black text-brand-deep/60 uppercase tracking-widest">Engine Load</p>
                                            <p className="text-xl font-black text-brand-deep uppercase">Instant</p>
                                        </div>
                                    </div>
                                    <div className="space-y-6 pt-12">
                                        <div className="p-8 bg-brand-medium rounded-3xl flex flex-col gap-4 group-hover:scale-105 transition-transform">
                                            <RefreshCw className="w-10 h-10 text-white" />
                                            <p className="text-[10px] font-black text-white/60 uppercase tracking-widest">CI/CD Flow</p>
                                            <p className="text-xl font-black text-white uppercase">Active</p>
                                        </div>
                                        <div className="p-8 bg-white dark:bg-black/40 rounded-3xl border border-slate-200 dark:border-white/5 flex flex-col gap-4 group-hover:translate-y-[5px] transition-transform">
                                            <Globe className="w-10 h-10 text-brand-sky" />
                                            <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Edge Node</p>
                                            <p className="text-xl font-black text-slate-900 dark:text-white uppercase">Global</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Code Snippets */}
                                <div className="absolute top-4 right-4 text-[8px] font-mono text-brand-cyan/30 select-none">
                                    {"const deploy = () => { return secure(app); }"}
                                </div>
                                <div className="absolute bottom-4 left-4 text-[8px] font-mono text-brand-medium/30 select-none">
                                    {"npm run build --platform=enterprise"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto glass-morphism rounded-[3rem] p-12 md:p-20 text-center border border-slate-200 dark:border-white/10 relative overflow-hidden bg-gradient-to-br from-slate-50 via-brand-deep/5 to-slate-100 dark:from-slate-900 dark:via-brand-deep/5 dark:to-slate-900">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 blur-[100px] -z-10" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-medium/10 blur-[100px] -z-10" />

                    <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight uppercase text-slate-900 dark:text-white mb-8">
                        Ready to Build the <br /> <span className="text-brand-cyan">Future?</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-12 font-medium">
                        Partner with our engineering team to create high-performance software that dominates your industry.
                    </p>
                    <button className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-brand-deep rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-brand-cyan hover:text-brand-deep transition-all shadow-xl shadow-white/5">
                        Start Your Discovery <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default SoftwareDevelopment;
