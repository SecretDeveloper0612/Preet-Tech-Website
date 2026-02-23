"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Globe,
    Zap,
    CheckCircle2,
    ArrowRight,
    Smartphone,
    Cpu,
    Layout,
    Rocket,
    Search,
    ShieldCheck,
    Gauge,
    Monitor,
    Phone,
    Mail,
    User,
    Briefcase,
    ChevronRight,
    Sparkles,
    Terminal,
    Activity,
    ArrowUpRight,
    Hexagon,
    MousePointer2,
    Layers,
    Code2,
    Settings,
    MessageSquare,
    Building2,
    Database,
    BarChart3,
    Shield,
    HeartHandshake,
    Unplug,
    ShoppingCart,
    BarChart,
    PieChart,
    Palette,
    Accessibility,
    Laptop,
    Check,
    Wallet,
    Star,
    IndianRupee,
    Plus,
    Minus,
    HelpCircle,
    Send,
    Calendar,
    BadgePercent,
    TrendingUp
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// --- 🛰️ Background Animation Components ---

const TechnicalBackground = ({ isDarkMode }: { isDarkMode: boolean }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 focus:outline-none">
            {/* 🌟 Galaxy/Star Field */}
            {mounted && (
                <div className={`absolute inset-0 transition-opacity duration-1000 ${isDarkMode ? 'opacity-100' : 'opacity-20'}`}>
                    {[...Array(30)].map((_, i) => (
                        <motion.div
                            key={`star-${i}`}
                            initial={{ opacity: Math.random() * 0.5 }}
                            animate={{
                                opacity: [0.1, 0.6, 0.1],
                                scale: [1, 1.4, 1],
                            }}
                            transition={{
                                duration: 4 + Math.random() * 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: Math.random() * 5
                            }}
                            className="absolute bg-brand-cyan/30 rounded-full"
                            style={{
                                width: isDarkMode ? `${Math.random() * 1.5 + 1}px` : '1px',
                                height: isDarkMode ? `${Math.random() * 1.5 + 1}px` : '1px',
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                        />
                    ))}
                </div>
            )}

            {/* 🌌 Nebula/Cosmic Glows */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 30, 0],
                    y: [0, 20, 0],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-cyan/5 blur-[150px] rounded-full ${!isDarkMode && 'opacity-0'}`}
            />
            <motion.div
                animate={{
                    scale: [1.1, 1, 1.1],
                    x: [0, -20, 0],
                    y: [0, -10, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className={`absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-brand-medium/5 blur-[180px] rounded-full ${!isDarkMode && 'opacity-0'}`}
            />

            {/* Mesh Grid */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(to right, ${isDarkMode ? '#5FD3E6' : '#3F8FCC'} 1px, transparent 1px), linear-gradient(to bottom, ${isDarkMode ? '#5FD3E6' : '#3F8FCC'} 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Floating Binary Strings */}
            {mounted && [...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{
                        opacity: [0, 0.3, 0],
                        y: "-100%"
                    }}
                    transition={{
                        duration: 20 + i * 5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 4
                    }}
                    className="absolute text-[8px] font-mono text-brand-cyan/20 whitespace-nowrap tracking-widest hidden lg:block"
                    style={{ left: `${20 + i * 30}%` }}
                >
                    {Array(15).fill(0).map(() => Math.round(Math.random())).join('')}
                </motion.div>
            ))}
        </div>
    );
};

export default function WebsiteDevelopment() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
    const containerRef = useRef<HTMLDivElement>(null);

    // Track mouse for spotlight
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Initial theme setup
    useEffect(() => {
        setMounted(true);
        const isDark = document.documentElement.classList.contains('dark');
        setIsDarkMode(isDark);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    useGSAP(() => {
        // Smooth scroll reveal animations
        const sections = gsap.utils.toArray('.reveal-section');
        sections.forEach((section: any) => {
            gsap.from(section, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });
        });

        // Hero floating elements
        gsap.to(".floating-shape", {
            y: "random(-20, 20)",
            x: "random(-15, 15)",
            rotation: "random(-15, 15)",
            duration: "random(3, 5)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Timeline progress animation
        gsap.from(".process-line-progress", {
            width: 0,
            scrollTrigger: {
                trigger: ".process-container",
                start: "top 70%",
                end: "bottom 30%",
                scrub: 1
            }
        });

    }, { scope: containerRef });

    return (
        <main ref={containerRef} className="relative z-10 selection:bg-brand-cyan/30 overflow-x-hidden bg-white text-slate-900 dark:bg-[#020617] dark:text-white transition-colors duration-500 font-sans">
            <Navbar isDark={isDarkMode} toggleTheme={toggleTheme} />




            {/* 1️⃣ Hero Section */}
            <section className="pt-40 pb-20 px-6 reveal-section bg-white dark:bg-[#020617] relative overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode} />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(95,211,230,0.1)_0%,transparent_50%)]" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        {/* Context Side */}
                        <div className="space-y-10">
                            <div>
                                <span className="text-brand-cyan text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">Let's Talk</span>
                                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 text-slate-900 dark:text-white leading-[0.9]">
                                    Let's Build <br /> Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium italic">Extraordinary.</span>
                                </h2>
                                <p className="text-slate-500 dark:text-slate-400 font-medium text-lg leading-relaxed max-w-md">
                                    Schedule a free technical consultation to discuss your project. We'll provide a clear roadmap, cost estimation, and growth strategy.
                                </p>
                            </div>

                            <ul className="space-y-6">
                                {[
                                    { text: "Free Technical Audit & Strategy Session" },
                                    { text: "Detailed Project Roadmap & Timeline" },
                                    { text: "Transparent Cost Estimation (No Hidden Fees)" },
                                    { text: "Expert Guidance on Tech Stack Selection" }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-full bg-brand-cyan/10 flex items-center justify-center shrink-0 group-hover:bg-brand-cyan group-hover:scale-110 transition-all duration-300">
                                            <Check className="w-5 h-5 text-brand-cyan group-hover:text-slate-950 transition-colors" />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300 font-bold">{item.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-8 border-t border-slate-200 dark:border-white/10">
                                <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white mb-6">Direct Contact</h4>
                                <div className="flex flex-col sm:flex-row gap-8">
                                    <a href="tel:+919876543210" className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:border-brand-cyan/50 transition-colors">
                                            <Phone className="w-5 h-5 text-slate-400 group-hover:text-brand-cyan transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Call Us</p>
                                            <p className="text-slate-900 dark:text-white font-bold group-hover:text-brand-cyan transition-colors">+91 98765 43210</p>
                                        </div>
                                    </a>
                                    <a href="mailto:hello@preettech.com" className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:border-brand-cyan/50 transition-colors">
                                            <Mail className="w-5 h-5 text-slate-400 group-hover:text-brand-cyan transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email Us</p>
                                            <p className="text-slate-900 dark:text-white font-bold group-hover:text-brand-cyan transition-colors">hello@preettech.com</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-brand-cyan/20 blur-3xl opacity-20 rounded-[3rem]" />
                            <form className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-4">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        <input type="text" placeholder="John Doe" className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-white/10 rounded-2xl py-4 pl-14 pr-6 text-slate-900 dark:text-white focus:outline-none focus:border-brand-cyan transition-colors" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-4">Business Name</label>
                                    <div className="relative">
                                        <Building2 className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        <input type="text" placeholder="Your Company Ltd." className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-white/10 rounded-2xl py-4 pl-14 pr-6 text-slate-900 dark:text-white focus:outline-none focus:border-brand-cyan transition-colors" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-4">Email</label>
                                        <div className="relative">
                                            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-white/10 rounded-2xl py-4 pl-14 pr-6 text-slate-900 dark:text-white focus:outline-none focus:border-brand-cyan transition-colors" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-4">Phone</label>
                                        <div className="relative">
                                            <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <input type="tel" placeholder="+91 98765 43210" className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-white/10 rounded-2xl py-4 pl-14 pr-6 text-slate-900 dark:text-white focus:outline-none focus:border-brand-cyan transition-colors" />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-4">Website Type</label>
                                        <div className="relative">
                                            <Layout className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <select className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-white/10 rounded-2xl py-4 pl-14 pr-6 text-slate-900 dark:text-white focus:outline-none focus:border-brand-cyan transition-colors appearance-none row-start-1 col-start-1">
                                                <option>Eco-Budget</option>
                                                <option>Advance Custom</option>
                                                <option>Not Sure</option>
                                            </select>
                                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                                <ChevronRight className="w-4 h-4 text-slate-400 rotate-90" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-4">Budget Range</label>
                                        <div className="relative">
                                            <Wallet className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <select className="w-full bg-slate-50 dark:bg-slate-950/50 border border-slate-200 dark:border-white/10 rounded-2xl py-4 pl-14 pr-6 text-slate-900 dark:text-white focus:outline-none focus:border-brand-cyan transition-colors appearance-none row-start-1 col-start-1">
                                                <option>₹5k - ₹10k</option>
                                                <option>₹10k - ₹25k</option>
                                                <option>₹25k - ₹50k</option>
                                                <option>₹50k+</option>
                                            </select>
                                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                                <ChevronRight className="w-4 h-4 text-slate-400 rotate-90" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full py-5 bg-brand-cyan text-slate-950 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-cyan/20 flex items-center justify-center gap-2">
                                    Get Free Consultation <ArrowRight className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>



            {/* 2️⃣ Why Your Business Needs a Website */}
            <section className="py-32 px-6 reveal-section bg-slate-50 dark:bg-slate-900/30">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <div>
                            <span className="text-brand-cyan text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">The Digital Mandate</span>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] text-slate-900 dark:text-white">Why Your Business <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium italic">Needs a Website.</span></h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                { title: "Builds Credibility", desc: "First impressions matter. A professional site establishes trust instantly." },
                                { title: "24/7 Online Presence", desc: "Your business never sleeps. Show up for customers anytime, anywhere." },
                                { title: "Lead Generation", desc: "Turn passive visitors into high-value leads with optimized funnels." },
                                { title: "Brand Authority", desc: "Control your narrative and stand out as a leader in your industry." },
                                { title: "Scalable Growth", desc: "A website is the foundation for global expansion and digital reach." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-5 group">
                                    <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center shrink-0 border border-brand-cyan/20 group-hover:scale-110 transition-transform">
                                        <CheckCircle2 className="w-6 h-6 text-brand-cyan" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1 text-slate-900 dark:text-white">{item.title}</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-br from-brand-cyan/20 to-brand-medium/20 blur-2xl opacity-30 rounded-[3rem]" />
                        <div className="relative bg-white dark:bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden">
                            {/* Infographic Illustration */}
                            <div className="relative aspect-auto md:aspect-square flex items-center justify-center">
                                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                                    {/* Atmospheric Orbs */}
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            x: [0, 40, 0],
                                            y: [0, -20, 0],
                                            opacity: [0.1, 0.2, 0.1]
                                        }}
                                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute top-[10%] left-[15%] w-72 h-72 bg-brand-cyan/20 blur-[100px] rounded-full"
                                    />
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            x: [0, -30, 0],
                                            y: [0, 50, 0],
                                            opacity: [0.05, 0.15, 0.05]
                                        }}
                                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                                        className="absolute bottom-[5%] right-[20%] w-96 h-96 bg-brand-medium/10 blur-[120px] rounded-full"
                                    />

                                    {/* Animated Grid Dots */}
                                    <motion.div
                                        animate={{
                                            backgroundPosition: ["0px 0px", "60px 60px"]
                                        }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
                                        style={{
                                            backgroundImage: 'radial-gradient(circle, #5FD3E6 1.5px, transparent 1.5px)',
                                            backgroundSize: '40px 40px'
                                        }}
                                    />

                                    {/* Tech Symbols */}
                                    {[Code2, Terminal, Cpu, Zap, Layers].map((Icon, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                y: [0, -40, 0],
                                                x: [0, i % 2 === 0 ? 30 : -30, 0],
                                                opacity: [0.03, 0.1, 0.03],
                                                scale: [0.8, 1.1, 0.8]
                                            }}
                                            transition={{
                                                duration: 12 + i * 2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: i * 2
                                            }}
                                            className="absolute text-brand-cyan/40 hidden md:block pointer-events-none"
                                            style={{
                                                top: `${15 + i * 18}%`,
                                                left: `${10 + (i * 20) % 80}%`
                                            }}
                                        >
                                            <Icon size={32} strokeWidth={1} />
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full relative z-10">
                                    <div className="space-y-6">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{
                                                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                                opacity: { duration: 0.5 }
                                            }}
                                            className="h-48 bg-slate-50/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-100 dark:border-white/5 flex flex-col justify-end p-6 overflow-hidden relative group/card shadow-sm"
                                        >
                                            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-brand-cyan/10 flex items-center justify-center group-hover/card:scale-110 transition-transform">
                                                <Activity className="w-5 h-5 text-brand-cyan" />
                                            </div>
                                            <div className="mb-6">
                                                <div className="flex items-baseline gap-2 mb-1">
                                                    <span className="text-3xl font-black text-slate-900 dark:text-white">+240%</span>
                                                    <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest">Efficiency</span>
                                                </div>
                                                <div className="flex gap-1 h-1.5 w-full bg-slate-200 dark:bg-slate-700/50 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: "75%" }}
                                                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                                        className="h-full bg-brand-cyan rounded-full"
                                                    />
                                                </div>
                                            </div>
                                            <p className="text-[10px] font-black uppercase text-slate-400">Growth Metrics</p>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            animate={{ y: [0, -15, 0] }}
                                            transition={{
                                                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                                                opacity: { duration: 0.5 }
                                            }}
                                            className="h-64 bg-brand-cyan/5 backdrop-blur-sm rounded-2xl border border-brand-cyan/10 p-6 relative overflow-hidden group/card shadow-sm"
                                        >
                                            <motion.div
                                                animate={{
                                                    rotate: 360,
                                                    scale: [1, 1.1, 1]
                                                }}
                                                transition={{
                                                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                                }}
                                                className="absolute -bottom-8 -right-8"
                                            >
                                                <Globe className="w-32 h-32 text-brand-cyan/10" />
                                            </motion.div>
                                            <div className="relative z-10">
                                                <p className="text-2xl font-black text-brand-cyan">Global Reach</p>
                                                <p className="text-[10px] uppercase font-bold text-slate-500 mt-2 mb-6">Connecting Markets</p>

                                                <div className="space-y-3">
                                                    {['Tokyo', 'New York', 'London'].map((city, i) => (
                                                        <div key={i} className="flex items-center gap-3">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan/40" />
                                                            <span className="text-[10px] font-black uppercase tracking-tighter text-slate-500">{city} Node Active</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                    <div className="space-y-6 md:pt-12">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            animate={{ y: [0, -12, 0] }}
                                            transition={{
                                                y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
                                                opacity: { duration: 0.5 }
                                            }}
                                            className="h-64 bg-brand-medium/5 backdrop-blur-sm rounded-2xl border border-brand-medium/10 p-6 relative overflow-hidden group/card shadow-sm"
                                        >
                                            <motion.div
                                                animate={{
                                                    y: [0, -5, 0],
                                                    opacity: [0.1, 0.2, 0.1]
                                                }}
                                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                                className="absolute -top-8 -left-8"
                                            >
                                                <Shield className="w-32 h-32 text-brand-medium" />
                                            </motion.div>
                                            <div className="h-full flex flex-col justify-between relative z-10">
                                                <div>
                                                    <p className="text-2xl font-black text-brand-medium">Total Trust</p>
                                                    <p className="text-[10px] uppercase font-bold text-slate-500 mt-2">Security Layers</p>
                                                </div>

                                                <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-md rounded-xl p-4 border border-brand-medium/10">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                                        <span className="text-[9px] font-black uppercase text-slate-600 dark:text-slate-400">SSL - AES 256 Active</span>
                                                    </div>
                                                    <div className="h-1 w-full bg-slate-200 dark:bg-slate-700/50 rounded-full overflow-hidden">
                                                        <div className="h-full w-[99%] bg-brand-medium" />
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            animate={{ y: [0, -8, 0] }}
                                            transition={{
                                                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
                                                opacity: { duration: 0.5 }
                                            }}
                                            className="h-48 bg-slate-50/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-100 dark:border-white/5 p-6 flex flex-col items-center justify-center gap-6 group/card shadow-sm"
                                        >
                                            <div className="flex items-end gap-2 h-16">
                                                {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.4].map((h, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ height: 0 }}
                                                        whileInView={{ height: `${h * 100}%` }}
                                                        animate={{ height: [`${h * 100}%`, `${h * 110}%`, `${h * 100}%`] }}
                                                        transition={{
                                                            height: {
                                                                duration: 1.5,
                                                                delay: 0.8 + (i * 0.1),
                                                                ease: "easeOut",
                                                                repeat: Infinity,
                                                                repeatType: "reverse",
                                                                repeatDelay: 0.5
                                                            }
                                                        }}
                                                        className="w-2.5 bg-slate-200 dark:bg-slate-700 rounded-full"
                                                    />
                                                ))}
                                            </div>
                                            <div className="text-center">
                                                <p className="text-xl font-black text-slate-900 dark:text-white line-clamp-1">89.4k</p>
                                                <p className="text-[10px] font-black uppercase text-slate-400">Data Analytics</p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3️⃣ Why Choose Preet Tech */}
            <section className="py-32 px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <span className="text-brand-cyan text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">Our Advantage</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 text-slate-900 dark:text-white">Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium">Preet Tech.</span></h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">We don't just build websites; we build engineering-driven growth engines for modern brands.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Custom-Built Solutions", icon: Laptop, desc: "Bespoke architectures designed specifically for your unique business needs and user journeys." },
                            { title: "Conversion-Focused Design", icon: Rocket, desc: "Every pixel is placed with intent, guiding users toward your primary business objectives." },
                            { title: "Fast & Secure Development", icon: ShieldCheck, desc: "Performance-first approach ensuring lightning speeds and enterprise-grade security." },
                            { title: "Scalable Architecture", icon: Layers, desc: "Future-proof tech stacks that grow seamlessly alongside your business expansion." },
                            { title: "SEO-Optimized Structure", icon: Search, desc: "Search engine friendly codebase ensuring high visibility and organic search dominance." },
                            { title: "Ongoing Support", icon: HeartHandshake, desc: "A dedicated partnership providing continuous optimization and technical excellence." }
                        ].map((item, i) => (
                            <div key={i} className="group p-10 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 rounded-[2.5rem] hover:border-brand-cyan/30 transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-5 transition-opacity">
                                    <item.icon className="w-24 h-24" />
                                </div>
                                <div className="w-16 h-16 rounded-2xl bg-brand-cyan/10 flex items-center justify-center mb-8 border border-brand-cyan/20 group-hover:bg-brand-cyan group-hover:text-slate-950 transition-all duration-500">
                                    <item.icon className="w-8 h-8 text-slate-900 dark:text-white group-hover:text-slate-950 transition-colors" />
                                </div>
                                <h4 className="text-xl font-black uppercase tracking-tight mb-4 text-slate-900 dark:text-white">{item.title}</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                                <div className="mt-8 flex items-center gap-2 text-brand-cyan text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                                    Engineering excellence <ArrowRight className="w-3 h-3" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4️⃣ Our Website Development Solutions */}
            <section className="py-20 md:py-32 px-6 reveal-section bg-[#020617] text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 md:mb-20">
                        <span className="text-brand-cyan text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">Product Suite</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">Our Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium italic">Solutions.</span></h2>
                        <p className="text-slate-500 max-w-2xl mx-auto font-medium">We offer two types of website development based on your business goals and budget.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
                        {/* Eco-Budget Card */}
                        <div className="group relative">
                            <div className="absolute -inset-px bg-gradient-to-b from-white/10 to-transparent rounded-[2rem] md:rounded-[3rem] -z-10" />
                            <div className="h-full bg-slate-900/40 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-white/5 hover:border-brand-cyan/30 transition-all duration-500 flex flex-col">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-brand-cyan/10 flex items-center justify-center mb-8 md:mb-10 border border-brand-cyan/20 group-hover:scale-110 transition-transform">
                                    <Wallet className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 text-brand-cyan">Eco-Budget Websites</h3>
                                <p className="text-slate-400 text-sm md:text-base font-medium mb-8 md:mb-10 leading-relaxed">Affordable, high-performance sites for startups and small businesses looking for a professional fast-track to market.</p>

                                <ul className="space-y-4 mb-10 md:mb-12 flex-1">
                                    {["Affordable Pricing", "Fast Delivery (7-10 Days)", "Essential SEO Features", "High Performance (React)", "Mobile Responsive"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4">
                                            <div className="w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center shrink-0">
                                                <Check className="w-3.5 h-3.5 text-brand-cyan" />
                                            </div>
                                            <span className="text-slate-200 text-xs md:text-sm font-bold">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/services/website-development/eco" className="w-full py-4 md:py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-brand-cyan hover:text-slate-950 transition-all block text-center">
                                    Choose Eco Plan
                                </Link>
                            </div>
                        </div>

                        {/* Advance Card */}
                        <div className="group relative mt-4 md:mt-0">
                            <div className="absolute -inset-px bg-gradient-to-b from-brand-cyan/20 to-transparent rounded-[2rem] md:rounded-[3rem] -z-10" />
                            <div className="h-full bg-slate-900/40 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-brand-cyan/20 hover:border-brand-cyan transition-all duration-500 flex flex-col shadow-[0_30px_60px_-15px_rgba(95,211,230,0.15)]">
                                <div className="absolute top-6 right-6 md:top-10 md:right-10 overflow-hidden">
                                    <span className="px-3 py-1 md:px-4 md:py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[8px] md:text-[9px] font-black uppercase tracking-widest animate-pulse whitespace-nowrap">Most Popular</span>
                                </div>
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-brand-cyan/10 flex items-center justify-center mb-8 md:mb-10 border border-brand-cyan/20 group-hover:scale-110 transition-transform">
                                    <Cpu className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 text-brand-cyan">Advance Websites</h3>
                                <p className="text-slate-400 text-sm md:text-base font-medium mb-8 md:mb-10 leading-relaxed">Fully custom-engineered web applications with advanced integrations and high-scale architectures.</p>

                                <ul className="space-y-4 mb-10 md:mb-12 flex-1">
                                    {["Fully Custom UI/UX", "API & Third-party Integrations", "High Scalability", "Real-time Dashboard Systems", "Advanced Security Protocols"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4">
                                            <div className="w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center shrink-0">
                                                <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                                            </div>
                                            <span className="text-white text-xs md:text-sm font-black">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/services/website-development/advanced" className="w-full py-4 md:py-5 rounded-2xl bg-brand-cyan text-slate-950 font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-brand-cyan/20 block text-center">
                                    Choose Advance Plan
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5️⃣ Eco-Budget Websites Overview */}
            <section className="py-32 px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="aspect-video flex items-center justify-center overflow-hidden rounded-[3rem] bg-slate-950 group/video shadow-2xl border border-slate-200 dark:border-white/10 relative">
                                {/* Loading state / Placeholder */}
                                <div className="absolute inset-0 bg-slate-950 animate-pulse flex items-center justify-center pointer-events-none">
                                    <div className="w-12 h-12 border-2 border-brand-cyan/30 border-t-brand-cyan rounded-full animate-spin" />
                                </div>

                                <iframe
                                    src="https://www.youtube.com/embed/Tc1RVGZUXbU?autoplay=1&mute=1&loop=1&playlist=Tc1RVGZUXbU&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1&enablejsapi=1"
                                    className="absolute inset-0 w-full h-full pointer-events-none"
                                    style={{
                                        transform: 'scale(1.35)', // Zoom to fill and hide UI
                                        objectFit: 'cover'
                                    }}
                                    title="Eco-Budget Overview Video"
                                    allow="autoplay; encrypted-media; picture-in-picture"
                                />

                                {/* Premium Overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20 pointer-events-none" />

                                {/* Status Indicator */}
                                <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/5 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/10 shadow-2xl">
                                    <div className="relative">
                                        <div className="w-2 h-2 rounded-full bg-brand-cyan" />
                                        <div className="absolute inset-0 w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/90">Mode: Efficiency</span>
                                </div>

                                {/* Floating Info */}
                                <div className="absolute bottom-8 right-8 bg-brand-cyan/10 backdrop-blur-md border border-brand-cyan/20 px-4 py-2 rounded-xl hidden md:block">
                                    <p className="text-[8px] font-black uppercase tracking-widest text-brand-cyan">Architecture</p>
                                    <p className="text-xs font-bold text-white">v2.4.0 Optimized</p>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 space-y-10">
                            <div>
                                <span className="text-brand-cyan text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">Rapid Deployment</span>
                                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none text-slate-900 dark:text-white">Eco-Budget <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium italic">Overview.</span></h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    { icon: Smartphone, title: "Responsive Design", desc: "Perfect viewing on all devices." },
                                    { icon: Search, title: "Basic SEO Setup", desc: "Get indexed and found easily." },
                                    { icon: Mail, title: "Contact Forms", desc: "Never miss a customer inquiry." },
                                    { icon: Globe, title: "Hosting Guidance", desc: "Setup on top-tier infrastructure." },
                                    { icon: Database, title: "CMS Integration", desc: "Edit your content with ease." },
                                    { icon: Rocket, title: "Fast Deployment", desc: "Go live within a single week." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                                            <item.icon className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-black uppercase tracking-tight mb-1 text-slate-900 dark:text-white">{item.title}</h4>
                                            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-tight">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform">
                                Explore Eco Features
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6️⃣ Advance Websites Overview */}
            <section className="py-32 px-6 reveal-section bg-slate-900 dark:bg-[#020617] text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(95,211,230,0.1)_0%,transparent_50%)]" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10">
                            <div>
                                <span className="text-brand-cyan text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">Enterprise Grade</span>
                                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none">Advance Website <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium italic">Overview.</span></h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    { icon: Palette, title: "Fully Custom UI/UX", desc: "Unique brand identities." },
                                    { icon: Unplug, title: "API Integrations", desc: "Connect with any service." },
                                    { icon: ShoppingCart, title: "E-commerce Capabilities", desc: "Advanced sales architectures." },
                                    { icon: Gauge, title: "Performance Optimization", desc: "99+ Core Web Vitals score." },
                                    { icon: Layout, title: "Dashboard Systems", desc: "Custom admin toolkits." },
                                    { icon: ShieldCheck, title: "Advanced Security", desc: "Enterprise protection layers." },
                                    { icon: Rocket, title: "Scalability Ready", desc: "Built for millions of visits." },
                                    { icon: BarChart, title: "Conv. Optimization", desc: "Data-driven design logic." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-cyan transition-colors">
                                            <item.icon className="w-5 h-5 text-brand-cyan group-hover:text-slate-950" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-black uppercase tracking-tight mb-1 text-white">{item.title}</h4>
                                            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-tight">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-cyan/20 blur-[100px] rounded-full opacity-30 animate-pulse" />
                            <div className="relative p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[3.5rem] shadow-2xl overflow-hidden group/main">
                                <div className="bg-slate-950 dark:bg-slate-900 rounded-[3.4rem] p-12 border border-white/5 relative h-[500px] overflow-hidden">
                                    <motion.div
                                        animate={{
                                            rotate: [0, 5, -5, 0],
                                            scale: [1, 1.05, 1]
                                        }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute top-0 right-0 p-10 opacity-10"
                                    >
                                        <Terminal className="w-48 h-48" />
                                    </motion.div>

                                    <div className="space-y-12 relative z-10">
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-end">
                                                <p className="text-[10px] font-black uppercase tracking-widest text-brand-cyan">Architecture status</p>
                                                <motion.span
                                                    animate={{ opacity: [1, 0.5, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                    className="text-[9px] font-bold text-brand-cyan uppercase tracking-tighter"
                                                >
                                                    Optimized
                                                </motion.span>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="h-2 flex-1 bg-white/5 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: "95%" }}
                                                        transition={{ duration: 2, ease: "circOut" }}
                                                        className="h-full bg-gradient-to-r from-brand-cyan to-brand-medium relative"
                                                    >
                                                        <motion.div
                                                            animate={{ x: ["-100%", "100%"] }}
                                                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/2"
                                                        />
                                                    </motion.div>
                                                </div>
                                                <motion.span
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    className="text-xl font-black"
                                                >
                                                    95%
                                                </motion.span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-8">
                                            <motion.div
                                                whileHover={{ y: -5, scale: 1.02 }}
                                                className="p-6 bg-white/5 rounded-3xl border border-white/10 group/stat cursor-default"
                                            >
                                                <div className="flex items-center justify-between mb-4">
                                                    <Activity className="w-6 h-6 text-brand-cyan" />
                                                    <div className="flex gap-0.5">
                                                        {[...Array(4)].map((_, i) => (
                                                            <motion.div
                                                                key={i}
                                                                animate={{ height: [4, 12, 4] }}
                                                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                                                                className="w-1 bg-brand-cyan/30 rounded-full"
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                                <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">Latency</p>
                                                <p className="text-2xl font-black group-hover/stat:text-brand-cyan transition-colors">12ms</p>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ y: -5, scale: 1.02 }}
                                                className="p-6 bg-white/5 rounded-3xl border border-white/10 group/stat cursor-default"
                                            >
                                                <Zap className="w-6 h-6 text-yellow-500 mb-4" />
                                                <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">Uptime</p>
                                                <div className="flex items-baseline gap-1">
                                                    <p className="text-2xl font-black group-hover/stat:text-yellow-500 transition-colors">99.9</p>
                                                    <span className="text-xs font-bold text-slate-500">%</span>
                                                </div>
                                            </motion.div>
                                        </div>

                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            className="p-8 rounded-3xl bg-brand-cyan/5 border border-brand-cyan/20 text-center relative overflow-hidden group/protocol"
                                        >
                                            <motion.div
                                                animate={{
                                                    x: ["-100%", "200%"],
                                                    opacity: [0, 1, 0]
                                                }}
                                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-cyan/10 to-transparent"
                                            />
                                            <p className="text-xs font-black uppercase tracking-widest mb-1 italic text-brand-cyan relative z-10">Enterprise Deployment Protocol Active</p>
                                            <p className="text-[10px] uppercase font-bold text-slate-500 relative z-10 flex items-center justify-center gap-2">
                                                <motion.span
                                                    animate={{ opacity: [0, 1, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                    className="w-1.5 h-1.5 rounded-full bg-brand-cyan"
                                                />
                                                Global sync in progress...
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7️⃣ Feature Comparison Table */}
            <section className="py-32 px-6 reveal-section bg-white dark:bg-[#020617] transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-brand-cyan text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">Direct Comparison</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6 text-slate-900 dark:text-white">Eco vs <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium">Advance.</span></h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">Find the perfect technical fit for your business requirements.</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[600px] border-collapse">
                            <thead>
                                <tr className="border-b border-slate-200 dark:border-white/10">
                                    <th className="py-8 px-6 text-left text-sm font-black uppercase tracking-widest text-slate-400">Features</th>
                                    <th className="py-8 px-6 text-center text-xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">Eco-Budget</th>
                                    <th className="py-8 px-6 text-center text-xl font-black uppercase tracking-tighter bg-brand-cyan/5 relative text-slate-900 dark:text-white">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-brand-cyan" />
                                        Advance
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { f: "Custom Design", eco: true, adv: true },
                                    { f: "Content Management (CMS)", eco: "Basic", adv: "Advanced" },
                                    { f: "SEO Setup", eco: "Essential", adv: "Premium" },
                                    { f: "API Integration", eco: false, adv: true },
                                    { f: "E-commerce Capabilities", eco: "Limited", adv: "Full" },
                                    { f: "Speed Optimization", eco: "Fast", adv: "Ultra-Fast" },
                                    { f: "Security Protocols", eco: "Standard", adv: "Enterprise" },
                                    { f: "Scalability", eco: "Moderate", adv: "Infinite" },
                                    { f: "Technical Maintenance", eco: false, adv: true }
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-slate-100 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                        <td className="py-6 px-6 text-sm font-bold uppercase tracking-tight text-slate-700 dark:text-slate-300">{row.f}</td>
                                        <td className="py-6 px-6 text-center">
                                            {typeof row.eco === 'boolean' ? (
                                                row.eco ? <CheckCircle2 className="w-5 h-5 text-brand-cyan mx-auto" /> : <div className="w-5 h-px bg-slate-300 dark:bg-slate-700 mx-auto" />
                                            ) : <span className="text-xs font-black uppercase text-slate-500">{row.eco}</span>}
                                        </td>
                                        <td className="py-6 px-6 text-center bg-brand-cyan/[0.02]">
                                            {typeof row.adv === 'boolean' ? (
                                                row.adv ? <CheckCircle2 className="w-5 h-5 text-brand-cyan mx-auto" /> : <div className="w-5 h-px bg-slate-300 dark:bg-slate-700 mx-auto" />
                                            ) : <span className="text-xs font-black uppercase text-brand-cyan">{row.adv}</span>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 8️⃣ Our Development Process */}
            <section className="py-32 px-6 reveal-section bg-slate-50 dark:bg-slate-900/30 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <span className="text-brand-cyan text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">Way of Working</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 text-slate-900 dark:text-white">The Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium italic">Process.</span></h2>
                    </div>

                    <div className="process-container relative group">
                        {/* Process Line */}
                        <div className="hidden lg:block absolute top-[44px] left-0 w-full h-[2px] bg-slate-200 dark:bg-white/10" />
                        <div className="hidden lg:block absolute top-[44px] left-0 h-[2.5px] bg-brand-cyan process-line-progress" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
                            {[
                                { step: "01", icon: Search, title: "Discovery", desc: "Analyzing project goals & user requirements." },
                                { step: "02", icon: Layout, title: "Wireframing", desc: "Mapping journeys & UX architecture." },
                                { step: "03", icon: Palette, title: "UI Design", desc: "Creating premium visual identities." },
                                { step: "04", icon: Code2, title: "Development", desc: "Engineering with modern tech stacks." },
                                { step: "05", icon: ShieldCheck, title: "Optimization", desc: "Strict testing & speed tuning." },
                                { step: "06", icon: Rocket, title: "Launch", desc: "Seamless deployment & monitoring." }
                            ].map((item, i) => (
                                <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-6 lg:space-y-10 group/step">
                                    <div className="w-20 h-20 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-white/10 flex items-center justify-center shadow-lg group-hover/step:border-brand-cyan group-hover/step:scale-110 transition-all duration-500">
                                        <item.icon className="w-8 h-8 text-slate-400 group-hover/step:text-brand-cyan" />
                                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-black flex items-center justify-center">
                                            {item.step}
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-black uppercase tracking-tight text-slate-900 dark:text-white">{item.title}</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-[11px] font-medium uppercase leading-tight tracking-tight px-4">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 9️⃣ Technology Stack */}
            <section className="py-16 md:py-24 px-4 md:px-6 reveal-section overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500 relative">
                <div className="max-w-7xl mx-auto mb-12 md:mb-16 text-center">
                    <span className="text-brand-cyan text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-3 md:mb-4 block">The Ecosystem</span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-4 md:mb-6 leading-none text-slate-900 dark:text-white">Our Technology <br className="hidden sm:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium italic">Stack.</span></h2>
                    <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium text-sm md:text-base px-4">We leverage the world's most powerful technologies to build high-performance digital infrastructure.</p>
                </div>

                <div className="space-y-6 md:space-y-8">
                    {[
                        {
                            dir: "left",
                            speed: 40,
                            items: [
                                { name: "React", icon: "react", color: "61DAFB" },
                                { name: "Next.js", icon: "nextdotjs", color: isDarkMode ? "FFFFFF" : "000000" },
                                { name: "TypeScript", icon: "typescript", color: "3178C6" },
                                { name: "Node.js", icon: "nodedotjs", color: "339933" },
                                { name: "WordPress", icon: "wordpress", color: "21759B" },
                                { name: "Shopify", icon: "shopify", color: "7AB55C" },
                                { name: "PHP", icon: "php", color: "777BB4" },
                                { name: "Magento", icon: "magento" },
                                { name: "Supabase", icon: "supabase", color: "3ECF8E" },
                                { name: "Firebase", icon: "firebase", color: "FFCA28" },
                                { name: "Appwrite", icon: "appwrite", color: "F02E65" },
                                { name: "JavaScript", icon: "javascript", color: "F7DF1E" }
                            ]
                        },
                        {
                            dir: "right",
                            speed: 50,
                            items: [
                                { name: "AWS", icon: "amazonaws" },
                                { name: "Vercel", icon: "vercel", color: isDarkMode ? "FFFFFF" : "000000" },
                                { name: "DigitalOcean", icon: "digitalocean", color: "0080FF" },
                                { name: "Netlify", icon: "netlify", color: "00C7B7" },
                                { name: "Hostinger", icon: "hostinger", color: "673DE6" },
                                { name: "GoDaddy", icon: "godaddy", color: "1B1B1B" },
                                { name: "Cloudflare", icon: "cloudflare", color: "F38020" },
                                { name: "Google Cloud", icon: "googlecloud", color: "4285F4" },
                                { name: "Azure", icon: "azure" },
                                { name: "Terraform", icon: "terraform", color: "844FBA" }
                            ]
                        },
                        {
                            dir: "left",
                            speed: 45,
                            items: [
                                { name: "Mailchimp", icon: "mailchimp", color: "FFE01B" },
                                { name: "HubSpot", icon: "hubspot", color: "FF7A59" },
                                { name: "Google Analytics", icon: "googleanalytics", color: "E37400" },
                                { name: "Hotjar", icon: "hotjar", color: isDarkMode ? "FFFFFF" : "2F3D42" },
                                { name: "Meta Ads", icon: "meta", color: "044AFE" },
                                { name: "Google Ads", icon: "googleads", color: "4285F4" },
                                { name: "Search Console", icon: "googlesearchconsole", color: "4285F4" },
                                { name: "Semrush", icon: "semrush", color: "FF642D" },
                                { name: "Ahrefs", icon: "ahrefs" }
                            ]
                        }
                    ].map((row, i) => (
                        <div key={i} className="relative group">
                            <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white dark:from-[#020617] to-transparent z-10 pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white dark:from-[#020617] to-transparent z-10 pointer-events-none" />

                            <div className="flex overflow-hidden">
                                <motion.div
                                    animate={{
                                        x: row.dir === "left" ? ["0%", "-50%"] : ["-50%", "0%"]
                                    }}
                                    transition={{
                                        duration: row.speed * 1.5, // Slower for seamless feel
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="flex w-max py-4"
                                >
                                    {[...Array(2)].map((_, k) => (
                                        <div key={k} className="flex gap-4 md:gap-6 pr-4 md:pr-6">
                                            {row.items.map((tech, j) => (
                                                <div key={j} className="flex items-center gap-3 md:gap-4 px-6 md:px-8 py-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl group/item hover:border-brand-cyan hover:bg-white dark:hover:bg-white/10 transition-all duration-300 shadow-sm min-w-[140px] md:min-w-[160px]">
                                                    <div className="relative w-6 h-6 flex items-center justify-center">
                                                        <img
                                                            src={`https://cdn.simpleicons.org/${tech.icon}`}
                                                            alt={tech.name}
                                                            className={`w-full h-full object-contain transition-all group-hover/item:opacity-100 ${isDarkMode ? 'brightness-0 invert' : 'grayscale-0'}`}
                                                            onError={(e) => {
                                                                const target = e.currentTarget;
                                                                target.style.display = 'none';
                                                                const fallback = target.nextElementSibling as HTMLElement;
                                                                if (fallback) fallback.style.display = 'flex';
                                                            }}
                                                        />
                                                        <div
                                                            className="absolute inset-0 items-center justify-center bg-brand-cyan/10 rounded-lg text-[10px] font-black text-brand-cyan hidden"
                                                            style={{ display: 'none' }}
                                                        >
                                                            {tech.name.charAt(0)}
                                                        </div>
                                                    </div>
                                                    <span className="text-sm font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">
                                                        {tech.name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 🔟 UI/UX & Performance Focus */}
            <section className="py-32 px-6 reveal-section bg-slate-900 dark:bg-[#020617] text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <div>
                            <span className="text-brand-cyan text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">Core Principles</span>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] text-white">Experience <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium italic">& Performance.</span></h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                            {[
                                { title: "Mobile-First Design", icon: Smartphone, desc: "Seamless navigation across any screen size." },
                                { title: "Clean UI Architecture", icon: Palette, desc: "Aesthetic layouts that reduce cognitive load." },
                                { title: "Web Vitals Optimization", icon: Gauge, desc: "Scoring 99+ on Google's core performance metrics." },
                                { title: "Accessibility (WCAG)", icon: Accessibility, desc: "Digital experiences inclusive to all users." },
                                { title: "Conversion Layouts", icon: Layout, desc: "Strategically placed CTAs to maximize ROI." },
                                { title: "High-Speed Caching", icon: Zap, desc: "Ultra-low latency with edge delivery nodes." }
                            ].map((item, i) => (
                                <div key={i} className="group">
                                    <div className="flex items-center gap-3 mb-4">
                                        <item.icon className="w-5 h-5 text-brand-cyan" />
                                        <h4 className="text-sm font-black uppercase tracking-tight text-white">{item.title}</h4>
                                    </div>
                                    <p className="text-[11px] text-slate-500 font-bold uppercase leading-tight tracking-tight">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative bg-white/5 backdrop-blur-3xl rounded-[3rem] p-12 border border-white/10 overflow-hidden">
                            <div className="space-y-12">
                                <div className="text-center">
                                    <div className="inline-block relative">
                                        <svg className="w-52 h-52 transform -rotate-90">
                                            <circle cx="104" cy="104" r="90" fill="transparent" stroke="currentColor" strokeWidth="12" className="text-white/5" />
                                            <motion.circle
                                                initial={{ strokeDashoffset: 565 }}
                                                whileInView={{ strokeDashoffset: 5.65 }}
                                                transition={{ duration: 2, ease: "easeOut" }}
                                                cx="104" cy="104" r="90" fill="transparent" stroke="currentColor" strokeWidth="12" strokeDasharray="565" className="text-brand-cyan"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className="text-6xl font-black tracking-tighter text-white">99</span>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Performance</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-6 text-center">
                                    <div>
                                        <p className="text-2xl font-black text-brand-cyan tracking-tighter">0.8s</p>
                                        <p className="text-[8px] font-black uppercase tracking-widest text-slate-500 mt-1">LCP</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-black text-brand-cyan tracking-tighter">0.0ms</p>
                                        <p className="text-[8px] font-black uppercase tracking-widest text-slate-500 mt-1">FID</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-black text-brand-cyan tracking-tighter">0.01</p>
                                        <p className="text-[8px] font-black uppercase tracking-widest text-slate-500 mt-1">CLS</p>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-white">Global CDN Delivery</span>
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-cyan">Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 11️⃣ For All Types of Businesses */}
            <section className="py-32 px-6 reveal-section bg-gray-50 dark:bg-[#030712] transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <span className="text-brand-cyan text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">Universal Solutions</span>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-none text-slate-900 dark:text-white">Empowering Every <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium italic">Industry.</span></h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {[
                            { name: "Startups", icon: Rocket },
                            { name: "Local Businesses", icon: Building2 },
                            { name: "E-Commerce Brands", icon: ShoppingCart },
                            { name: "Real Estate", icon: Layout },
                            { name: "Education", icon: Globe },
                            { name: "Healthcare", icon: Activity },
                            { name: "Corporate Firms", icon: Monitor },
                            { name: "SaaS Companies", icon: Cpu }
                        ].map((item, i) => (
                            <div key={i} className="group p-8 md:p-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-[2.5rem] hover:bg-brand-cyan hover:border-brand-cyan transition-all duration-500 flex flex-col items-center justify-center gap-6 shadow-sm dark:shadow-none">
                                <item.icon className="w-10 h-10 text-slate-400 dark:text-slate-500 group-hover:text-slate-950 transition-colors" />
                                <h4 className="text-sm md:text-[15px] font-black uppercase tracking-tight text-center text-slate-900 dark:text-white group-hover:text-slate-950 transition-colors">{item.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 12️⃣ Portfolio Showcase */}
            <section className="py-32 px-6 reveal-section bg-slate-50 dark:bg-[#09090b] overflow-hidden transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                        <div>
                            <span className="text-brand-cyan text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">Our Work</span>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] text-slate-900 dark:text-white">Portfolio <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium italic">Showcase.</span></h2>
                        </div>
                        <button className="flex items-center gap-4 text-xs font-black uppercase tracking-widest group text-slate-900 dark:text-white">
                            View All Projects <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:bg-brand-cyan group-hover:border-brand-cyan transition-all"><ArrowUpRight className="w-5 h-5 group-hover:text-slate-950" /></div>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                cat: "E-commerce",
                                title: "Luxe Fashion Hub",
                                img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
                                desc: "Next.js + Shopify custom storefront."
                            },
                            {
                                cat: "SaaS",
                                title: "DataFlow Analytics",
                                img: "https://images.unsplash.com/photo-1551288049-bbda38a5f9a7?auto=format&fit=crop&q=80&w=800",
                                desc: "Real-time dashboard with React & Supabase."
                            },
                            {
                                cat: "Corporate",
                                title: "Zenith Architecture",
                                img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
                                desc: "Modern architectural showcase with GSAP."
                            }
                        ].map((project, i) => (
                            <div key={i} className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-white/10 overflow-hidden hover:border-brand-cyan/30 transition-all duration-500 shadow-lg dark:shadow-none">
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-10 space-y-4">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-cyan">{project.cat}</span>
                                    <h4 className="text-2xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">{project.title}</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{project.desc}</p>
                                    <button className="pt-4 flex items-center gap-2 text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 text-slate-900 dark:text-white">
                                        View Project <ArrowRight className="w-4 h-4 text-brand-cyan" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 13️⃣ Testimonials Section */}
            <section className="py-32 px-6 reveal-section bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-brand-cyan text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">Client Success</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 text-slate-900 dark:text-white">What Our Clients <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium italic">Say About Us.</span></h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">Real businesses. Real results.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Rajesh Kumar",
                                role: "Founder, TechFlow Solutions",
                                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
                                review: "Incredible attention to detail. Preet Tech transformed our digital presence completely. The new site is faster and converting better than ever."
                            },
                            {
                                name: "Sarah Jenkins",
                                role: "Director, StyleStudio",
                                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
                                review: "The team understood our vision perfectly. Highly recommended! They delivered on time and exceeded our expectations with the design."
                            },
                            {
                                name: "Amit Patel",
                                role: "CEO, BuildCorp",
                                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
                                review: "Professional, fast, and results-driven. Our leads increased by 40% within just a month of launching the new website."
                            }
                        ].map((client, i) => (
                            <div key={i} className="group p-8 bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                                <div className="flex items-center gap-4 mb-6">
                                    <img src={client.img} alt={client.name} className="w-14 h-14 rounded-full object-cover border-2 border-slate-100 dark:border-slate-700" />
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">{client.name}</h4>
                                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{client.role}</p>
                                    </div>
                                </div>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, k) => (
                                        <Star key={k} className="w-4 h-4 fill-brand-cyan text-brand-cyan" />
                                    ))}
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 italic leading-relaxed">"{client.review}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 14️⃣ Digital ROI & Business Impact Section */}
            <section className="py-32 px-6 reveal-section bg-slate-50 dark:bg-white/5 relative overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode} />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10">
                            <div>
                                <span className="text-brand-cyan text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">Measurable Success</span>
                                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 text-slate-900 dark:text-white leading-[0.9]">
                                    We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium italic">Profit Engines,</span> <br /> Not Just Websites.
                                </h2>
                                <p className="text-slate-500 dark:text-slate-400 font-medium text-lg leading-relaxed max-w-xl">
                                    Every line of code we write is optimized for your bottom line. Our engineering approach centers on converting passive traffic into loyal, high-paying customers through technical excellence.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                                {[
                                    { title: "Conversion Velocity", icon: Zap, desc: "Faster load times mean 20% higher conversion rates for your business." },
                                    { title: "Search Dominance", icon: Search, desc: "SEO-first architecture ensuring maximum visibility in organic results." },
                                    { title: "Trust-Based Design", icon: ShieldCheck, desc: "Premium, modern aesthetics that build instant brand credibility." },
                                    { title: "Mobile Precision", icon: Smartphone, desc: "Pixel-perfect mobile experience designed for the modern user's journey." }
                                ].map((item, i) => (
                                    <div key={i} className="group">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-slate-950 transition-all duration-300">
                                                <item.icon className="w-4 h-4 transition-colors" />
                                            </div>
                                            <h4 className="text-sm font-black uppercase tracking-tight text-slate-900 dark:text-white">{item.title}</h4>
                                        </div>
                                        <p className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-500 leading-tight tracking-tight">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-10 bg-brand-cyan/20 blur-[100px] rounded-full opacity-20" />
                            <div className="relative bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden group/card">
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <BarChart3 className="w-64 h-64" />
                                </div>
                                <div className="space-y-10 relative z-10">
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Performance Impact Analysis</p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
                                            <span className="text-[9px] font-black uppercase text-brand-cyan">Real-time Metrics</span>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        {[
                                            { label: "User Engagement Rate", value: "+85%", percent: 85 },
                                            { label: "Conversion Multiplier", value: "3.4x", percent: 95 },
                                            { label: "Loading Speed Impact", value: "99+", percent: 99 }
                                        ].map((stat, i) => (
                                            <div key={i} className="space-y-3">
                                                <div className="flex justify-between items-end">
                                                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-tighter">{stat.label}</span>
                                                    <span className="text-2xl font-black text-brand-cyan">{stat.value}</span>
                                                </div>
                                                <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${stat.percent}%` }}
                                                        transition={{ duration: 2, ease: "circOut", delay: i * 0.2 }}
                                                        className="h-full bg-gradient-to-r from-brand-cyan to-brand-medium"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col sm:flex-row items-center gap-6">
                                        <div className="flex-1 flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 w-full">
                                            <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center shrink-0">
                                                <TrendingUp className="w-6 h-6 text-brand-cyan" />
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">Total ROI Growth</p>
                                                <div className="flex items-baseline gap-1">
                                                    <p className="text-2xl font-black text-slate-900 dark:text-white">+140%</p>
                                                    <span className="text-[10px] font-bold text-slate-400">avg. increase</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 15️⃣ FAQ Section */}
            <section className="py-32 px-6 reveal-section bg-slate-50 dark:bg-slate-900/30 relative overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode} />
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-slate-500 text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">Common Questions</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6 text-slate-900 dark:text-white">Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium italic">Questions.</span></h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "How long does it take to build a website?", a: "For our Eco-Budget plans, we typically deliver within 7-10 days. Advanced custom websites can take 4-8 weeks depending on complexity and features." },
                            { q: "Do you provide domain and hosting?", a: "We provide guidance and setup assistance for domain and hosting. We recommend the best providers based on your needs, but you retain full ownership of your assets." },
                            { q: "Can I upgrade from Eco to Advance later?", a: "Absolutely! We build with scalability in mind. You can start with an Eco plan and upgrade to a fully custom solution as your business grows." },
                            { q: "Will my website be mobile-friendly?", a: "Yes, 100%. We follow a mobile-first approach, ensuring your website looks and performs perfectly on smartphones, tablets, and desktops." },
                            { q: "Do you provide support after launch?", a: "Yes, we offer various support packages. All our websites come with a 30-day post-launch support period to ensure everything runs smoothly." },
                            { q: "Can you redesign my existing website?", a: "Ideally, yes. We can modernize your current site with better UI/UX, improved performance, and updated branding while retaining your core content." }
                        ].map((item, i) => (
                            <div key={i} className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden transition-all duration-300 hover:border-brand-cyan/50">
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 key-faq-button"
                                >
                                    <span className="text-left font-bold text-slate-900 dark:text-white text-lg">{item.q}</span>
                                    <div className={`w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center transition-transform duration-300 ${openFAQ === i ? 'rotate-45 bg-brand-cyan text-white' : ''}`}>
                                        <Plus className="w-4 h-4" />
                                    </div>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQ === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {item.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Final CTA Section */}
            <section className="py-20 md:py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="relative p-1 bg-gradient-to-br from-brand-cyan to-brand-medium rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl">
                        <div className="bg-slate-900 rounded-[2.4rem] md:rounded-[3.9rem] p-8 md:p-16 text-center space-y-8 md:space-y-10 relative">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(95,211,230,0.2)_0%,transparent_70%)] opacity-50" />

                            <h2 className="text-3xl md:text-7xl font-black tracking-tighter uppercase text-white relative z-10 leading-none">Ready to Build Your <br /><span className="text-brand-cyan italic">Digital Empire?</span></h2>
                            <p className="text-slate-400 max-w-2xl mx-auto font-medium text-base md:text-lg relative z-10 leading-relaxed">Join 200+ successful businesses partner with Preet Tech for high-performance web engineering.</p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 relative z-10">
                                <button className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-brand-cyan text-slate-950 rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl shadow-brand-cyan/20">
                                    Book Free Consultation
                                </button>
                                <button className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-transparent border-2 border-white/10 text-white rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white/5 transition-all">
                                    View Service Deck
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main >
    );
}
