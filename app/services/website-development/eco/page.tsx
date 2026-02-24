"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Globe, Zap, CheckCircle2, ArrowRight, Smartphone, Layout, Rocket,
    Search, ShieldCheck, Mail, Phone, User, Briefcase, ChevronRight, ChevronLeft,
    Sparkles, Code2, Settings, MessageSquare, Building2,
    Database, BarChart3, Clock, CreditCard, PenTool, Star,
    Monitor, Lock, Image as ImageIcon, Menu, X, ChevronDown, Check, ExternalLink,
    Home, Heart, Coffee, Camera, Calendar, FileCode, Cloud, MessageCircle, Share2, Play
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

export default function EcoWebsiteDevelopment() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const targetAudienceRef = useRef<HTMLDivElement>(null);

    const scrollAudience = (dir: 'left' | 'right') => {
        if (targetAudienceRef.current) {
            const scrollAmount = window.innerWidth > 768 ? 400 : 250;
            targetAudienceRef.current.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    // Track mouse for spotlight
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Auto-scroll loop for the Audience Carousel
    useEffect(() => {
        if (isHovering || !targetAudienceRef.current) return;

        let animationFrameId: number;

        const scrollLoop = () => {
            if (targetAudienceRef.current) {
                targetAudienceRef.current.scrollLeft += 1;

                // Infinite loop detection
                if (targetAudienceRef.current.scrollLeft >= targetAudienceRef.current.scrollWidth - targetAudienceRef.current.clientWidth - 5) {
                    targetAudienceRef.current.scrollLeft = 0;
                }
            }
            animationFrameId = requestAnimationFrame(scrollLoop);
        };

        animationFrameId = requestAnimationFrame(scrollLoop);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovering]);

    // Initial theme setup
    useEffect(() => {
        const isDark = false;
        setIsDarkMode(isDark);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            /* handled by next-themes */
        } else {
            /* handled by next-themes */
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

        // Specific animations for elements
        gsap.from(".hero-content", {
            y: 30,
            opacity: 0,
            duration: 1,
            delay: 0.2,
            stagger: 0.1,
            ease: "power3.out"
        });

    }, { scope: containerRef });

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <main ref={containerRef} className="relative z-10 selection:bg-brand-cyan/30 overflow-x-hidden bg-white text-slate-900 dark:bg-[#020617] dark:text-white transition-colors duration-500 font-sans">
            <Navbar isDark={isDarkMode} toggleTheme={toggleTheme} />

            {/* 1️⃣ Hero Section */}
            <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode} />

                {/* Spotlight */}
                <div
                    className="absolute w-[600px] h-[600px] bg-brand-cyan/5 blur-[100px] rounded-full transition-opacity duration-1000 z-0"
                    style={{
                        left: mousePos.x,
                        top: mousePos.y,
                        transform: 'translate(-50%, -50%)',
                        opacity: 0.6
                    }}
                />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                    <div className="space-y-6 lg:space-y-8 hero-content text-center lg:text-left">
                        <span className="inline-block px-4 py-1 rounded-full bg-brand-cyan/10 dark:bg-brand-cyan/10 text-brand-cyan dark:text-brand-cyan text-[10px] md:text-xs font-bold uppercase tracking-widest border border-brand-cyan/20 dark:border-brand-cyan/20">
                            Eco Website Development
                        </span>
                        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-slate-900 dark:text-white">
                            Affordable Websites <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium">That Work.</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                            Get a professional, responsive website for your business — fast, reliable, and budget-friendly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button onClick={() => setIsVideoOpen(true)} className="px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-cyan hover:bg-brand-medium text-slate-950 rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-cyan/25 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer">
                                Watch Demo <Play className="w-4 h-4 fill-slate-950" />
                            </button>
                            <a href="#pricing" className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center text-sm sm:text-base">
                                View Pricing
                            </a>
                        </div>
                    </div>

                    <div className="relative hero-content mt-8 lg:mt-0 w-full max-w-lg mx-auto lg:max-w-none">
                        <div className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-[2.5rem] shadow-2xl relative z-10 border border-slate-200 dark:border-slate-800">
                            <form className="space-y-6">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Full Name</label>
                                    <div className="relative group">
                                        <User strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-cyan transition-colors" />
                                        <input type="text" placeholder="John Doe" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all text-sm text-slate-700 dark:text-slate-200" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Business Name</label>
                                    <div className="relative group">
                                        <Building2 strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-cyan transition-colors" />
                                        <input type="text" placeholder="Your Company Ltd." className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all text-sm text-slate-700 dark:text-slate-200" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Email</label>
                                        <div className="relative group">
                                            <Mail strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-cyan transition-colors" />
                                            <input type="email" placeholder="john@example.com" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all text-sm text-slate-700 dark:text-slate-200" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Phone</label>
                                        <div className="relative group">
                                            <Phone strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-cyan transition-colors" />
                                            <input type="tel" placeholder="+91 98765 43210" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all text-sm text-slate-700 dark:text-slate-200" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Website Type</label>
                                        <div className="relative group">
                                            <Layout strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-cyan transition-colors pointer-events-none" />
                                            <select className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-10 outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all appearance-none text-slate-700 dark:text-slate-200 text-sm">
                                                <option>Eco-Budget</option>
                                                <option>Standard</option>
                                                <option>Advanced</option>
                                                <option>E-Commerce</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Budget Range</label>
                                        <div className="relative group">
                                            <CreditCard strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-cyan transition-colors pointer-events-none" />
                                            <select className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-10 outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all appearance-none text-slate-700 dark:text-slate-200 text-sm">
                                                <option>₹5k - ₹10k</option>
                                                <option>₹10k - ₹25k</option>
                                                <option>₹25k - ₹50k</option>
                                                <option>₹50k+</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <button type="button" className="w-full py-4 bg-brand-cyan hover:bg-brand-medium text-slate-950 font-black rounded-2xl transition-all shadow-[0_0_20px_rgba(95,211,230,0.2)] hover:shadow-[0_0_30px_rgba(95,211,230,0.4)] text-[13px] uppercase tracking-widest flex items-center justify-center gap-2">
                                        Get Free Consultation <ArrowRight strokeWidth={2.5} className="w-4 h-4 ml-1" />
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Blob Background Details */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-cyan/20 to-brand-medium/20 rounded-full blur-[100px] -z-10 animate-pulse" />
                    </div>
                </div>
            </section>

            {/* 2️⃣ Why Do Businesses Need This? */}
            <section className="py-16 md:py-24 px-6 bg-slate-50 dark:bg-slate-900/40 reveal-section relative overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode} />

                {/* 🌌 Section-Specific Animated Background Elements */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -40, 0],
                                x: [0, 30, 0],
                                scale: [1, 1.2, 1],
                                opacity: [0.1, 0.3, 0.1]
                            }}
                            transition={{
                                duration: 8 + i * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 1.5
                            }}
                            className="absolute w-32 h-32 bg-brand-cyan/10 blur-[60px] rounded-full"
                            style={{
                                left: `${15 + i * 15}%`,
                                top: `${20 + (i % 3) * 20}%`,
                            }}
                        />
                    ))}
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                    <div className="space-y-6 md:space-y-8">
                        <div>
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-brand-cyan font-bold uppercase tracking-widest text-[10px] md:text-xs"
                            >
                                The Digital Necessity
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-3xl md:text-4xl lg:text-5xl font-black mt-4 mb-6 text-slate-900 dark:text-white leading-[1.2]"
                            >
                                Why Your Business <br className="hidden sm:block" /> Needs This.
                            </motion.h2>
                        </div>
                        <ul className="space-y-6">
                            {[
                                { title: "Online presence 24/7", desc: "Never miss a customer, day or night." },
                                { title: "Builds trust & credibility", desc: "A professional image that wins clients." },
                                { title: "Generates leads automatically", desc: "Turn visitors into customers while you sleep." },
                                { title: "Showcases services professionally", desc: "Display your work in the best light." },
                                { title: "Affordable digital growth", desc: "Scale your business without breaking the bank." }
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="w-8 h-8 rounded-full bg-brand-cyan/20 flex items-center justify-center shrink-0 group-hover:bg-brand-cyan group-hover:scale-110 transition-all duration-300">
                                        <Check className="w-4 h-4 text-brand-cyan group-hover:text-slate-950 transition-colors" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-slate-900 dark:text-white leading-none group-hover:text-brand-cyan transition-colors">{item.title}</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{item.desc}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-10 bg-brand-cyan/10 blur-[100px] rounded-full opacity-30" />
                        <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-8 shadow-2xl border border-white/20 dark:border-white/5">
                            <div className="grid grid-cols-2 gap-3 sm:gap-6">
                                {[
                                    { icon: Globe, color: "text-brand-cyan", bg: "bg-brand-cyan/10", glow: "hover:shadow-brand-cyan/20", progress: "85%", label: "99.9% Uptime", sub: "Global Availability" },
                                    { icon: BarChart3, color: "text-blue-500", bg: "bg-blue-500/10", glow: "hover:shadow-blue-500/20", progress: "70%", label: "3.5x Growth", sub: "Performance KPI", shift: true },
                                    { icon: User, color: "text-orange-500", bg: "bg-orange-500/10", glow: "hover:shadow-orange-500/20", progress: "0%", label: "10k+ Trust", sub: "User Credibility", dot: "bg-indigo-500" },
                                    { icon: ShieldCheck, color: "text-purple-500", bg: "bg-purple-500/10", glow: "hover:shadow-purple-500/20", progress: "90%", label: "SSL Secure", sub: "Data Protection", shift: true }
                                ].map((stat: any, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className={`bg-white dark:bg-slate-900/80 p-4 sm:p-6 rounded-[1.25rem] sm:rounded-2xl border border-slate-100 dark:border-white/5 relative overflow-hidden group/stat transition-all duration-300 shadow-sm hover:shadow-xl ${stat.shift ? 'mt-6 sm:mt-8' : ''} ${stat.glow}`}
                                    >
                                        {/* Floating decorative dot (like in the design for specific cards) */}
                                        {stat.dot && (
                                            <motion.div
                                                animate={{ y: [0, -8, 0], scale: [1, 1.2, 1] }}
                                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                                className={`absolute top-8 left-20 sm:top-10 sm:left-[6.5rem] w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${typeof stat.dot === 'string' ? stat.dot : stat.color.replace('text', 'bg')} opacity-90`}
                                            />
                                        )}

                                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-[0.85rem] sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 relative overflow-hidden`}>
                                            <div className={`absolute inset-0 ${stat.bg} group-hover/stat:scale-125 transition-transform duration-500`} />
                                            <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color} relative z-10 group-hover/stat:scale-110 transition-transform duration-300`} />
                                        </div>
                                        <div className="space-y-0.5 sm:space-y-1 relative z-10">
                                            <h4 className="text-[13px] sm:text-lg font-black text-slate-900 dark:text-white leading-tight truncate">
                                                {stat.label}
                                            </h4>
                                            <p className="text-[8px] sm:text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest break-words leading-tight">{stat.sub}</p>
                                        </div>

                                        {/* Animated Progress Bar */}
                                        <div className="mt-4 sm:mt-5 h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden relative">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: stat.progress }}
                                                transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: "easeOut" }}
                                                className={`h-full relative overflow-hidden ${stat.color.replace('text', 'bg')}`}
                                            >
                                                {stat.progress !== "0%" && (
                                                    <motion.div
                                                        animate={{ x: ['-100%', '200%'] }}
                                                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                                                        className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 dark:via-white/30 to-transparent"
                                                    />
                                                )}
                                            </motion.div>
                                        </div>

                                        {/* Subtle Hover Glow Background */}
                                        <div className={`absolute -bottom-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 ${stat.bg} rounded-full blur-2xl opacity-0 group-hover/stat:opacity-60 transition-opacity duration-500`} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3️⃣ Why Choose Preet Tech */}
            <section className="py-24 px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <span className="text-brand-cyan font-bold uppercase tracking-widest text-[10px] md:text-xs">Our Promise</span>
                        <h2 className="text-2xl md:text-3xl lg:text-5xl font-black mt-4 text-slate-900 dark:text-white leading-tight">Why Choose Preet Tech?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Fast Delivery", subtitle: "3–7 Days", icon: Rocket },
                            { title: "Affordable Pricing", subtitle: "Budget Friendly", icon: CreditCard },
                            { title: "Professional Design", subtitle: "Modern UI/UX", icon: PenTool },
                            { title: "SEO-Ready Structure", subtitle: "Google Friendly", icon: Search },
                            { title: "Mobile Optimized", subtitle: "Works Everywehre", icon: Smartphone },
                            { title: "Support After Launch", subtitle: "We're Here For You", icon: User }
                        ].map((item, i) => (
                            <div key={i} className="group p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 hover:border-brand-cyan/50 hover:shadow-xl hover:shadow-brand-cyan/10 transition-all duration-300">
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-brand-cyan group-hover:text-slate-950 transition-colors">
                                    <item.icon className="w-7 h-7 text-slate-700 dark:text-slate-300 group-hover:text-slate-950" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{item.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4️⃣ Who Is This For? */}
            <section className="py-16 md:py-24 bg-slate-900 text-white reveal-section relative overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode} />
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12 md:mb-16">
                        <span className="text-brand-cyan font-bold uppercase tracking-widest text-xs">Target Audience</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4">Who Is This For?</h2>
                    </div>
                </div>

                {/* Interactive & Infinite Carousel Container */}
                <div
                    className="relative group/carousel mt-8"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {/* Fade Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scrollAudience('left')}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800 border border-slate-700 text-white flex items-center justify-center hover:bg-brand-cyan hover:border-brand-cyan hover:text-slate-950 transition-all shadow-xl opacity-0 md:group-hover/carousel:opacity-100 focus:opacity-100 pointer-events-auto cursor-pointer translate-x-4 md:group-hover/carousel:translate-x-0"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button
                        onClick={() => scrollAudience('right')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-800 border border-slate-700 text-white flex items-center justify-center hover:bg-brand-cyan hover:border-brand-cyan hover:text-slate-950 transition-all shadow-xl opacity-0 md:group-hover/carousel:opacity-100 focus:opacity-100 pointer-events-auto cursor-pointer -translate-x-4 md:group-hover/carousel:translate-x-0"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    <style jsx>{`
                        /* CSS native scrollbar hiding */
                        .hide-scroll {
                            -ms-overflow-style: none; /* IE and Edge */
                            scrollbar-width: none;    /* Firefox */
                        }
                        .hide-scroll::-webkit-scrollbar {
                            display: none; /* Chrome, Safari and Opera */
                        }
                    `}</style>

                    <div
                        ref={targetAudienceRef}
                        className="flex overflow-x-auto hide-scroll gap-4 md:gap-6 py-4 px-[5vw] md:px-[10vw]"
                        style={{ cursor: 'grab' }}
                    >
                        {[
                            { label: "Local Shops", icon: Building2 },
                            { label: "Freelancers", icon: User },
                            { label: "Coaches", icon: MessageSquare },
                            { label: "Consultants", icon: Briefcase },
                            { label: "Startups", icon: Rocket },
                            { label: "Small Agencies", icon: Globe },
                            { label: "Personal Brands", icon: Sparkles },
                            { label: "Health Clinics", icon: Heart },
                            { label: "Restaurants", icon: Coffee },
                            { label: "NGOs", icon: ShieldCheck },
                            { label: "Real Estate", icon: Home },
                            { label: "Content Creators", icon: ImageIcon },
                            { label: "E-Commerce", icon: Zap },
                            { label: "Photographers", icon: Camera },
                            { label: "Event Planners", icon: Calendar },
                            { label: "Education", icon: Code2 },
                            // Doubled for smooth automatic infinite loop illusion
                            { label: "Local Shops", icon: Building2 },
                            { label: "Freelancers", icon: User },
                            { label: "Coaches", icon: MessageSquare },
                            { label: "Consultants", icon: Briefcase },
                            { label: "Startups", icon: Rocket },
                            { label: "Small Agencies", icon: Globe },
                            { label: "Personal Brands", icon: Sparkles },
                            { label: "Health Clinics", icon: Heart },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="shrink-0 w-[140px] md:w-[200px] flex flex-col items-center justify-center p-6 md:p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-center group"
                            >
                                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-brand-cyan mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
                                <span className="font-bold text-[11px] md:text-sm whitespace-nowrap tracking-wide">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5️⃣ What You Get in Eco-Budget Plan */}
            <section className="py-16 md:py-24 px-4 sm:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-slate-50 dark:bg-slate-900/40 rounded-[2rem] md:rounded-[3rem] p-5 sm:p-10 md:p-16 border border-slate-100 dark:border-slate-800 relative overflow-hidden">
                        {/* Decorative Background Glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 blur-3xl rounded-full" />

                        <div className="text-center mb-10 md:mb-16 relative z-10">
                            <span className="text-brand-cyan font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">Package Inclusions</span>
                            <h2 className="text-2xl xs:text-3xl md:text-5xl font-black mt-4 text-slate-900 dark:text-white leading-tight">What You Get in <br />Eco-Budget Plan</h2>
                        </div>

                        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 relative z-10">
                            {[
                                { label: "3–5 Page Website", icon: FileCode },
                                { label: "Contact Form", icon: Mail },
                                { label: "Basic SEO Setup", icon: Search },
                                { label: "Mobile Responsive", icon: Smartphone },
                                { label: "Hosting Guidance", icon: Cloud },
                                { label: "WhatsApp Chat", icon: MessageCircle },
                                { label: "Social Media Links", icon: Share2 },
                                { label: "Domain Setup", icon: Globe }
                            ].map((feature, i) => (
                                <div
                                    key={i}
                                    className="bg-white dark:bg-slate-900/50 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl border border-slate-100 dark:border-white/5 flex flex-col xs:items-center xs:text-center lg:items-start lg:text-left gap-3 md:gap-4 group hover:border-brand-cyan/30 transition-all"
                                >
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-brand-cyan/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-brand-cyan" />
                                    </div>
                                    <span className="font-bold text-[11px] md:text-sm text-slate-700 dark:text-slate-200 uppercase tracking-tight">{feature.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6️⃣ Key Features List */}
            <section className="py-24 px-6 bg-white dark:bg-[#020617] reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            { title: "Responsive Layout", desc: "Looks great on phones, tablets, and desktops.", icon: Layout },
                            { title: "Fast Loading Speed", desc: "Optimized for quick access and better SEO.", icon: Zap },
                            { title: "Clean UI Design", desc: "Modern, professional, and clutter-free.", icon: Sparkles },
                            { title: "Secure Hosting Setup", desc: "We guide you to secure, reliable hosting.", icon: Lock },
                            { title: "Easy Navigation", desc: "User-friendly menu and site structure.", icon: Menu },
                            { title: "Lead Capture Form", desc: "Collect inquiries directly to your email.", icon: Mail },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5">
                                <div className="w-12 h-12 rounded-full bg-brand-cyan/10 dark:bg-brand-cyan/10 flex items-center justify-center shrink-0">
                                    <item.icon className="w-6 h-6 text-brand-cyan" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7️⃣ Design Style Examples */}
            <section className="py-24 px-6 reveal-section bg-slate-50 dark:bg-slate-900/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-brand-cyan font-bold uppercase tracking-widest text-xs">Portfolio</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4 text-slate-900 dark:text-white">Design Examples</h2>
                    </div>
                    <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-12 sm:pb-0 px-6 sm:px-0 -mx-6 sm:mx-0 snap-x snap-mandatory hide-scrollbar">
                        {[
                            {
                                title: "Invest Nest Fintech",
                                category: "Fintech",
                                image: "/portfolio/investnest.png",
                                link: "https://www.investnestfintech.com/"
                            },
                            {
                                title: "Modern E-Commerce",
                                category: "Retail",
                                image: "/portfolio/ecommerce.png",
                                link: "#"
                            },
                            {
                                title: "Creative Agency",
                                category: "Portfolio",
                                image: "/portfolio/agency.png",
                                link: "#"
                            }
                        ].map((item, i) => (
                            <a
                                key={i}
                                href={item.link}
                                target={item.link !== '#' ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="group relative aspect-[4/5] bg-slate-900 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-brand-cyan/10 transition-all duration-500 block border border-slate-200 dark:border-slate-800 shrink-0 w-[280px] xs:w-[320px] sm:w-auto snap-center"
                            >
                                {/* Image Container */}
                                <div className="absolute inset-0 bg-slate-800">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-brand-deep', 'to-slate-950');
                                        }}
                                    />
                                    {/* Fallback Overlay if image is missing */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none z-0">
                                        <ImageIcon className="w-10 h-10 text-slate-700 mb-2" />
                                        <span className="text-slate-600 text-[9px] font-bold uppercase tracking-widest">Image Placeholder</span>
                                    </div>
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 transition-opacity z-10" />

                                <div className="absolute bottom-0 left-0 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-20 w-full">
                                    <span className="text-brand-cyan text-[10px] font-black uppercase tracking-widest mb-2 block">{item.category}</span>
                                    <h3 className="text-xl md:text-2xl font-black text-white mb-3 md:mb-4 leading-tight">{item.title}</h3>
                                    <div className="flex items-center gap-2 text-white font-bold text-[10px] md:text-xs uppercase tracking-wider group-hover:gap-4 transition-all">
                                        View Live <ExternalLink className="w-4 h-4 text-brand-cyan" />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8️⃣ Performance & Speed Optimization */}
            <section className="py-24 px-6 reveal-section relative overflow-hidden bg-slate-50 dark:bg-slate-950/20">
                <TechnicalBackground isDarkMode={isDarkMode} />
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
                    <div>
                        <span className="text-brand-cyan font-bold uppercase tracking-widest text-[10px] md:text-xs">Lightning Fast</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4 mb-8 text-slate-900 dark:text-white leading-[1.1]">Performance & <br /> Speed Optimization</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10">
                            {[
                                { text: "Optimized Images for fast load", icon: Sparkles },
                                { text: "Lightweight clean code", icon: Code2 },
                                { text: "Fast loading pages", icon: Zap },
                                { text: "Core Web Vitals Ready", icon: CheckCircle2 }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:border-brand-cyan/30">
                                    <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center shrink-0">
                                        <item.icon className="w-4 h-4 text-brand-cyan" />
                                    </div>
                                    <span className="font-bold text-[13px] md:text-sm text-slate-700 dark:text-slate-300 leading-tight">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 bg-brand-cyan/5 border border-brand-cyan/10 rounded-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                <Rocket className="w-12 h-12 text-brand-cyan" />
                            </div>
                            <p className="text-sm font-bold text-brand-cyan mb-2">Google Loves Speed.</p>
                            <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                                Our websites are engineered to be lightweight, ensuring high conversion rates and better search rankings from day one.
                            </p>
                        </div>
                    </div>

                    {/* Advanced Speed Gauge Graphic */}
                    <div className="relative flex justify-center items-center py-12 md:py-0">
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            {/* Outer Glow Ring */}
                            <div className="absolute inset-0 rounded-full border border-brand-cyan/20 animate-pulse" />
                            <div className="absolute inset-4 rounded-full border border-brand-cyan/10" />

                            {/* Main Gauge SVG */}
                            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                                <circle
                                    cx="50" cy="50" r="45"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="text-slate-100 dark:text-slate-800"
                                />
                                <motion.circle
                                    cx="50" cy="50" r="45"
                                    fill="none"
                                    stroke="url(#speedGradient)"
                                    strokeWidth="3"
                                    strokeDasharray="283"
                                    initial={{ strokeDashoffset: 283 }}
                                    whileInView={{ strokeDashoffset: 283 * 0.05 }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#5FD3E6" />
                                        <stop offset="100%" stopColor="#3F8FCC" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Center Metrics */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                <motion.span
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-widest"
                                >
                                    99
                                </motion.span>
                                <span className="text-brand-cyan text-xs md:text-sm font-black uppercase tracking-[0.3em]">Mobile Score</span>
                            </div>

                            {/* Floating Tech Chips */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 bg-white dark:bg-slate-900 border border-brand-cyan/30 px-4 py-2 rounded-lg shadow-xl"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                                    <span className="text-xs font-black dark:text-white uppercase tracking-tighter">0.5s Load</span>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-1/2 -left-8 bg-white dark:bg-slate-900 border border-brand-cyan/30 px-4 py-2 rounded-lg shadow-xl transform -translate-y-1/2"
                            >
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-brand-cyan" />
                                    <span className="text-xs font-black dark:text-white uppercase tracking-tighter">Next.js 14</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9️⃣ Basic SEO Setup */}
            <section className="py-24 px-6 bg-slate-900 text-white reveal-section relative overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode} />
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        {/* Google Search Mockup */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 md:p-8 max-w-xl mx-auto lg:ml-0 overflow-hidden border border-white/10"
                        >
                            <div className="flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                <div className="ml-4 flex-1 h-6 bg-slate-100 dark:bg-slate-700 rounded-full px-4 flex items-center">
                                    <div className="w-24 h-2 bg-slate-400 dark:bg-slate-600 rounded-full" />
                                </div>
                            </div>

                            <div className="space-y-8">
                                {/* Search Result 1 */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-blue-600" />
                                        </div>
                                        <span className="text-[10px] text-slate-500">https://www.yourbusiness.com</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 group-hover:underline cursor-pointer">Premium Website Development | Preet Tech</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                                        Looking for a fast, responsive, and affordable website? Our eco-budget plans offer premium designs to get you online in just 7 days.
                                    </p>
                                </div>

                                {/* Placeholder Results */}
                                <div className="space-y-2 opacity-30">
                                    <div className="w-20 h-2 bg-slate-200 dark:bg-slate-700 rounded-full" />
                                    <div className="w-40 h-3 bg-slate-200 dark:bg-slate-700 rounded-full" />
                                    <div className="w-full h-8 bg-slate-200 dark:bg-slate-700 rounded-xl" />
                                </div>
                            </div>

                            {/* Floating "Indexed" Badge */}
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute top-12 -right-4 bg-green-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg flex items-center gap-1"
                            >
                                <CheckCircle2 className="w-3 h-3" /> INDEXED
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <span className="text-brand-cyan font-bold uppercase tracking-widest text-[10px] md:text-xs">Found on Google</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4 mb-10">Basic SEO Setup <br />Included.</h2>

                        <div className="space-y-6">
                            {[
                                { title: "Meta Tags Setup", desc: "Optimized titles and descriptions for every page." },
                                { title: "Google Sitemap", desc: "We submit your site to Google for faster indexing." },
                                { title: "Mobile Ready", desc: "Google prioritizes mobile-friendly sites; you're covered." },
                                { title: "SSL Security", desc: "Green padlock included to boost trust and rankings." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-5 group">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-brand-cyan/50 transition-colors">
                                        <div className="text-brand-cyan font-black text-xs md:text-sm">0{i + 1}</div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-100 mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔟 Mobile Responsive Guarantee */}
            <section className="py-16 md:py-24 px-4 sm:px-6 reveal-section">
                <div className="max-w-7xl mx-auto bg-slate-900 border border-white/5 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-12 md:p-24 relative overflow-hidden group">
                    {/* Mesh Gradient Background */}
                    <div className="absolute inset-0 opacity-40">
                        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-cyan/20 blur-[120px] rounded-full" />
                        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-medium/20 blur-[120px] rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
                        <div className="text-center lg:text-left">
                            <span className="text-brand-cyan font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block">Perfect on Every Screen</span>
                            <h2 className="text-3xl md:text-6xl font-black text-white mb-6 md:mb-8 leading-[1.1] tracking-tight">The Multi-Device <br />Guarantee.</h2>
                            <p className="text-sm md:text-lg font-medium text-slate-400 mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                We don't just "scale" your site. We architect every element to ensure your business looks stunning on smartphones, tablets, and desktops alike.
                            </p>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
                                {["Fluid Layouts", "Retina Ready", "Adaptive UI", "Touch Optimized"].map((tag, i) => (
                                    <div key={i} className="px-3 md:px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white text-[9px] md:text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                        <Check className="w-3 h-3 text-brand-cyan" /> {tag}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Device Stack Visual */}
                        <div className="relative flex justify-center items-center h-[280px] xs:h-[350px] md:h-[450px] lg:h-[400px]">
                            {/* Tablet Frame */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="absolute w-[200px] xs:w-[260px] md:w-[320px] aspect-[4/3] bg-slate-800 rounded-xl md:rounded-2xl border-[4px] md:border-[8px] border-slate-700 shadow-2xl overflow-hidden z-10"
                            >
                                <div className="w-full h-3 md:h-5 bg-slate-700 flex items-center px-2 md:px-3 gap-1 md:gap-1.5">
                                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-slate-600" />
                                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-slate-600" />
                                </div>
                                <div className="p-3 md:p-5 bg-slate-900 h-full">
                                    <div className="w-full h-1.5 md:h-2 bg-slate-800 rounded-full mb-2" />
                                    <div className="w-3/4 h-1.5 md:h-2 bg-slate-800 rounded-full mb-4" />
                                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                                        <div className="aspect-video bg-brand-cyan/10 rounded-lg border border-brand-cyan/20 animate-pulse" />
                                        <div className="aspect-video bg-brand-cyan/10 rounded-lg border border-brand-cyan/20" />
                                    </div>
                                    <div className="w-full h-24 md:h-32 bg-slate-800/50 rounded-xl mt-4 md:mt-6 border border-white/5" />
                                </div>
                            </motion.div>

                            {/* Phone Frame */}
                            <motion.div
                                initial={{ opacity: 0, x: -40, y: 40, rotate: -10 }}
                                whileInView={{ opacity: 1, x: 0, y: 0, rotate: -5 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="absolute w-[100px] xs:w-[130px] md:w-[160px] aspect-[9/19] bg-slate-800 rounded-[1.5rem] md:rounded-[2.5rem] border-[4px] md:border-[8px] border-slate-700 shadow-2xl overflow-hidden z-20 -translate-x-[60px] xs:-translate-x-[90px] md:-translate-x-[110px] translate-y-12 xs:translate-y-20 md:translate-y-28 shadow-brand-cyan/5"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 xs:w-14 md:w-20 h-3 xs:h-4 md:h-6 bg-slate-700 rounded-b-lg md:rounded-b-xl flex items-center justify-center">
                                    <div className="w-4 xs:w-6 md:w-8 h-1 bg-slate-600 rounded-full" />
                                </div>
                                <div className="p-2 xs:p-3 md:p-4 pt-6 xs:pt-8 md:pt-10 bg-slate-900 h-full flex flex-col gap-2 md:gap-3">
                                    <div className="w-8 xs:w-10 md:w-12 h-8 xs:h-10 md:h-12 rounded-full bg-brand-cyan/20 mx-auto" />
                                    <div className="w-full h-1.5 md:h-2 bg-slate-800 rounded-full" />
                                    <div className="w-2/3 h-1.5 md:h-2 bg-slate-800 rounded-full mx-auto" />
                                    <div className="w-full h-20 xs:h-28 md:h-36 bg-brand-cyan/10 rounded-lg md:rounded-xl border border-brand-cyan/20 mt-2 md:mt-4" />
                                    <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                                        <div className="h-8 md:h-12 bg-slate-800 rounded-md" />
                                        <div className="h-8 md:h-12 bg-slate-800 rounded-md" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1️⃣1️⃣ Delivery Timeline */}
            <section className="py-24 px-6 reveal-section bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 md:mb-24">
                        <span className="text-brand-cyan font-bold uppercase tracking-widest text-[10px] md:text-xs">Rapid Launch</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4 text-slate-900 dark:text-white leading-tight">Your Roadmap to <br className="md:hidden" />3–7 Day Delivery</h2>
                    </div>

                    <div className="relative">
                        {/* Horizontal Connecting Line (Desktop) */}
                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent -z-10 hidden lg:block transform -translate-y-1/2" />

                        {/* Vertical Connecting Line (Mobile) */}
                        <div className="absolute left-8 top-0 h-full w-[2px] bg-gradient-to-b from-brand-cyan/30 via-brand-cyan to-brand-cyan/30 lg:hidden -z-10" />

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 pl-16 lg:pl-0">
                            {[
                                {
                                    step: "Briefing",
                                    desc: "Form submission & brief discussion",
                                    days: "Day 1",
                                    icon: MessageSquare
                                },
                                {
                                    step: "Development",
                                    desc: "Core build & initial optimization",
                                    days: "Day 2-4",
                                    icon: Code2
                                },
                                {
                                    step: "Refinements",
                                    desc: "Perfecting content & final polish",
                                    days: "Day 5-6",
                                    icon: Sparkles
                                },
                                {
                                    step: "Go-Live",
                                    desc: "Domain setup & Global Launch",
                                    days: "Day 7",
                                    icon: Rocket
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="relative flex flex-col items-start lg:items-center text-left lg:text-center"
                                >
                                    {/* Pulse Marker */}
                                    <div className="absolute -left-[54px] lg:left-1/2 top-4 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-4 h-4 bg-brand-cyan rounded-full shadow-[0_0_20px_rgba(95,211,230,0.6)] animate-pulse lg:hidden" />

                                    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 md:p-8 rounded-[2rem] w-full shadow-xl shadow-slate-200/50 dark:shadow-none group transition-all hover:border-brand-cyan/50">
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-cyan text-slate-950 flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-brand-cyan/20 transform group-hover:scale-110 transition-transform mx-auto lg:mx-auto">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <span className="px-3 py-1 bg-brand-cyan/10 text-brand-cyan text-[10px] font-black rounded-full uppercase tracking-tighter mb-3 inline-block">
                                            {item.days}
                                        </span>
                                        <h4 className="text-lg md:text-xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">{item.step}</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-medium leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Desktop Marker */}
                                    <div className="hidden lg:block w-4 h-4 bg-brand-cyan rounded-full border-4 border-white dark:border-slate-900 shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-y-[140px]" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 1️⃣2️⃣ Pricing Packages */}
            <section id="pricing" className="py-24 px-6 reveal-section relative overflow-hidden backdrop-blur-sm">
                {/* 🛰️ Enhanced Background Architecture */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Perspective Grid */}
                    <div
                        className="absolute inset-0 opacity-[0.1] dark:opacity-[0.15]"
                        style={{
                            backgroundImage: `linear-gradient(to right, ${isDarkMode ? '#5FD3E6' : '#3F8FCC'} 1px, transparent 1px), linear-gradient(to bottom, ${isDarkMode ? '#5FD3E6' : '#3F8FCC'} 1px, transparent 1px)`,
                            backgroundSize: '60px 60px',
                            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
                        }}
                    />

                    {/* Drifting Data Beams (Hidden on mobile for performance/clarity) */}
                    <div className="hidden md:block">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={`beam-${i}`}
                                initial={{ top: '-100%', left: `${20 * i}%` }}
                                animate={{ top: '200%' }}
                                transition={{
                                    duration: 8 + Math.random() * 10,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 2
                                }}
                                className="absolute w-[1px] h-64 bg-gradient-to-b from-transparent via-brand-cyan/40 to-transparent"
                            />
                        ))}
                    </div>

                    {/* Atmospheric Glow Modules */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 15, repeat: Infinity }}
                            className="absolute top-[10%] left-[5%] w-[40%] h-[30%] bg-brand-cyan/10 blur-[130px] rounded-full rotate-12"
                        />
                        <motion.div
                            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 20, repeat: Infinity, delay: 2 }}
                            className="absolute bottom-[10%] right-[5%] w-[40%] h-[30%] bg-brand-medium/10 blur-[130px] rounded-full -rotate-12"
                        />
                    </div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Floating Value Fragments (Desktop Only) */}
                    <div className="hidden xl:block">
                        {/* Piece 1: Performance */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute left-[-15%] top-[10%] w-56 p-6 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-[2.5rem] border border-white/20 dark:border-white/5 shadow-xl rotate-[-5deg]"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-green-500" />
                                </div>
                                <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">Speed Score</span>
                            </div>
                            <div className="text-3xl font-black text-slate-900 dark:text-white">100/100</div>
                            <div className="mt-4 w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    className="h-full bg-green-500"
                                />
                            </div>
                        </motion.div>

                        {/* Piece 2: Rapid Delivery */}
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute left-[-12%] bottom-[10%] w-60 p-6 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-[2.5rem] border border-white/20 dark:border-white/5 shadow-xl rotate-[5deg]"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center">
                                    <Rocket className="w-5 h-5 text-brand-cyan" />
                                </div>
                                <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">Rapid Launch</span>
                            </div>
                            <div className="text-2xl font-black text-slate-900 dark:text-white">3–7 Days</div>
                            <p className="text-[11px] text-slate-500 mt-2 font-medium italic">From concept to live site</p>
                        </motion.div>

                        {/* Piece 3: Global Infra */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute right-[-15%] top-[15%] w-56 p-6 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-[2.5rem] border border-white/20 dark:border-white/5 shadow-xl rotate-[8deg]"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                    <Globe className="w-5 h-5 text-blue-500" />
                                </div>
                                <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">Infrastructure</span>
                            </div>
                            <div className="text-2xl font-black text-slate-900 dark:text-white uppercase leading-tight">Global CDN <br />Included</div>
                        </motion.div>

                        {/* Piece 4: Satisfaction */}
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                            className="absolute right-[-12%] bottom-[15%] w-64 p-6 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-[2.5rem] border border-white/20 dark:border-white/5 shadow-xl rotate-[-8deg]"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                                    <Star className="w-5 h-5 text-orange-500" />
                                </div>
                                <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">Client Rating</span>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />)}
                            </div>
                            <div className="text-xl font-black text-slate-900 dark:text-white">Professional & Fast</div>
                        </motion.div>
                    </div>

                    <div className="max-w-4xl mx-auto relative z-10">
                        {/* Animated Border Background */}
                        <div className="absolute -inset-[2px] bg-gradient-to-r from-brand-cyan via-brand-medium to-brand-cyan bg-[length:200%_auto] rounded-[3rem] opacity-70 blur-sm animate-border-flow" />

                        {/* Main Card - Landscape Transition (Compact) */}
                        <motion.div
                            whileHover={{ y: -5, scale: 1.01 }}
                            className="relative bg-white dark:bg-slate-900 rounded-[2rem] sm:rounded-[2.8rem] overflow-hidden border border-white/20 dark:border-slate-800/50 shadow-2xl"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                {/* Left Column: Pricing & Offer */}
                                <div className="p-8 md:p-12 lg:p-14 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-800/50 relative">
                                    {/* Decorative background elements */}
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-cyan/5 to-transparent pointer-events-none" />

                                    {/* Status Badge */}
                                    <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 bg-red-500/10 text-red-500 px-4 md:px-5 py-1.5 md:py-2 rounded-full border border-red-500/20 relative z-10">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                        </span>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Limited Launch Offer</span>
                                    </div>

                                    <h3 className="text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest text-[9px] md:text-[10px] mb-4 relative z-10">Starting At Just</h3>

                                    <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 sm:gap-4 mb-2 relative z-10">
                                        <span className="text-xl md:text-2xl text-slate-300 dark:text-slate-600 line-through font-bold">₹4,999</span>
                                        <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-400 tracking-tighter">
                                            ₹3,999
                                        </span>
                                    </div>
                                    <p className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest bg-brand-cyan/10 px-3 py-1 rounded-lg">No Hidden Charges.</p>
                                    <p className="text-[10px] text-slate-400 font-medium relative z-10 italic">Trusted by 150+ startups</p>
                                </div>

                                {/* Right Column: Features & CTA */}
                                <div className="p-8 md:p-12 lg:p-14 bg-slate-50/50 dark:bg-slate-950/20 flex flex-col justify-center">
                                    <div className="space-y-4 mb-8 sm:mb-10">
                                        {[
                                            { text: "Premium Custom Design", bold: true },
                                            { text: "Domain & Hosting Setup", bold: false },
                                            { text: "Google SEO Framework", bold: false },
                                            { text: "WhatsApp Chat Integration", bold: false },
                                            { text: "Launch in 3–7 Days", bold: true }
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-center gap-3 sm:gap-4 group/item"
                                            >
                                                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center shrink-0 group-hover/item:bg-brand-cyan group-hover/item:text-slate-900 transition-all">
                                                    <Check className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                                                </div>
                                                <span className={`text-sm sm:text-base ${item.bold ? 'font-bold text-slate-800 dark:text-slate-200' : 'text-slate-500 dark:text-slate-400'}`}>
                                                    {item.text}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <a
                                        href="#contact"
                                        className="group relative w-full inline-flex items-center justify-center py-4 sm:py-5 bg-brand-cyan hover:bg-brand-medium text-slate-950 rounded-[1.2rem] sm:rounded-[1.5rem] font-black uppercase tracking-[0.1em] text-[12px] sm:text-sm transition-all duration-300 shadow-xl shadow-brand-cyan/20 overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                                            Start Your Project Now <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        {/* Button Shine Effect */}
                                        <div className="absolute inset-0 w-1/2 h-full bg-white opacity-0 group-hover:opacity-20 translate-x-[-100%] group-hover:translate-x-[200%] transition-all duration-1000 skew-x-[45deg]" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 1️⃣3️⃣ Add-Ons Available */}
            <section className="py-16 md:py-24 px-6 bg-slate-50 dark:bg-slate-900/50 reveal-section relative overflow-hidden">
                <TechnicalBackground isDarkMode={isDarkMode} />
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-brand-cyan font-bold uppercase tracking-widest text-xs">Extensions</span>
                        <h2 className="text-3xl md:text-5xl font-black mt-4 text-slate-900 dark:text-white">Optional Add-Ons</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {[
                            "Extra Pages",
                            "Advanced SEO",
                            "Blog Setup",
                            "E-Commerce Add-On",
                            "Custom Design Upgrade",
                            "Maintenance Plan"
                        ].map((item, i) => (
                            <div key={i} className="bg-white dark:bg-slate-900 p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-center font-bold text-sm md:text-base text-slate-700 dark:text-slate-200 hover:border-brand-cyan hover:text-brand-cyan transition-colors cursor-pointer">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 1️⃣4️⃣ Our Simple 4-Step Process */}
            <section className="py-24 px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase text-slate-900 dark:text-white">Simple 4-Step Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { title: "Consultation", icon: MessageSquare },
                            { title: "Design", icon: PenTool },
                            { title: "Development", icon: Code2 },
                            { title: "Launch", icon: Rocket }
                        ].map((item, i) => (
                            <div key={i} className="relative group">
                                <div className="h-48 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-8 flex flex-col items-center justify-center group-hover:bg-brand-cyan group-hover:border-brand-cyan transition-all duration-300">
                                    <item.icon className="w-10 h-10 text-slate-400 group-hover:text-slate-950 mb-4 transition-colors" />
                                    <h4 className="text-lg font-black uppercase text-slate-900 dark:text-white group-hover:text-slate-950">{item.title}</h4>
                                    <div className="absolute top-4 right-4 text-4xl font-black text-slate-100 dark:text-slate-800 group-hover:text-brand-cyan/20">
                                        0{i + 1}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 1️⃣5️⃣ FAQs */}
            <section className="py-16 md:py-24 px-6 bg-slate-50 dark:bg-slate-900/50 reveal-section">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-slate-900 dark:text-white">Frequently Asked Questions</h2>
                    <div className="space-y-4 px-2 sm:px-0">
                        {[
                            { q: "How long does it take?", a: "Typically 3-7 working days depending on content availability." },
                            { q: "Is domain included?", a: "We provide assistance in purchasing, but the domain cost is separate." },
                            { q: "Can I upgrade later?", a: "Absolutely! You can upgrade to our advanced plans anytime." },
                            { q: "Do you provide support?", a: "Yes, we offer post-launch support to ensure everything runs smoothly." },
                            { q: "Can I request changes?", a: "We provide a revision round during the design phase." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
                                <button
                                    onClick={() => toggleFAQ(i)}
                                    className="w-full flex items-center justify-between p-5 md:p-6 text-left font-bold text-sm md:text-base text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                >
                                    {item.q}
                                    <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 ${openFAQ === i ? "rotate-180 text-brand-cyan" : "text-slate-400"}`} />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openFAQ === i ? "max-h-48" : "max-h-0"}`}
                                >
                                    <p className="p-5 md:p-6 pt-0 text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                                        {item.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 1️⃣6️⃣ Inquiry / Get Started Form */}
            <section id="contact" className="py-24 px-6 reveal-section">
                <div className="max-w-3xl mx-auto relative">
                    <div className="absolute -inset-4 bg-brand-cyan/10 blur-3xl rounded-[3rem] -z-10" />
                    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-5 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-200 dark:border-slate-700 shadow-2xl">
                        <div className="text-center mb-8 md:mb-10">
                            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">Start My Website</h2>
                            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">Fill in the details below to get started in minutes.</p>
                        </div>
                        <form className="space-y-4 sm:space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                <div className="relative group">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-cyan transition-colors" />
                                    <input type="text" placeholder="Full Name" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl py-3.5 sm:py-4 pl-11 pr-4 outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all text-sm" />
                                </div>
                                <div className="relative group">
                                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-cyan transition-colors" />
                                    <input type="text" placeholder="Business Name" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl py-3.5 sm:py-4 pl-11 pr-4 outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all text-sm" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-cyan transition-colors" />
                                    <input type="email" placeholder="Email Address" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl py-3.5 sm:py-4 pl-11 pr-4 outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all text-sm" />
                                </div>
                                <div className="relative group">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-cyan transition-colors" />
                                    <input type="tel" placeholder="Phone Number" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl py-3.5 sm:py-4 pl-11 pr-4 outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all text-sm" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                <div className="relative group">
                                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-cyan transition-colors pointer-events-none" />
                                    <select className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl py-3.5 sm:py-4 pl-11 pr-10 outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all appearance-none text-slate-500 text-sm">
                                        <option>Business Type</option>
                                        <option>Startup</option>
                                        <option>Shop</option>
                                        <option>Freelancer</option>
                                        <option>Other</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                </div>
                                <div className="relative group">
                                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-cyan transition-colors pointer-events-none" />
                                    <select className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 rounded-xl py-3.5 sm:py-4 pl-11 pr-10 outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all appearance-none text-slate-500 text-sm">
                                        <option>Budget Range</option>
                                        <option>₹5k - ₹10k</option>
                                        <option>₹10k - ₹25k</option>
                                        <option>₹25k+</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                </div>
                            </div>
                            <button className="w-full py-4 sm:py-5 bg-brand-cyan hover:bg-brand-medium text-slate-950 font-black rounded-xl transition-all shadow-lg shadow-brand-cyan/20 text-sm sm:text-base uppercase tracking-widest mt-2">
                                Start My Website Now
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* 1️⃣7️⃣ Final CTA Section */}
            <section className="py-16 sm:py-24 px-6 bg-slate-900 text-white text-center relative overflow-hidden reveal-section">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/20 to-brand-medium/20" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-black mb-8 leading-[1.2] sm:leading-tight">
                        Get Your Business Online in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium">Just 3–7 Days</span>
                    </h2>
                    <a href="#contact" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-slate-900 rounded-full font-black text-sm sm:text-lg uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] inline-block">
                        Book My Eco Website Now
                    </a>
                </div>
            </section>

            {/* Video Modal */}
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        onClick={() => setIsVideoOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative w-full aspect-video max-w-4xl bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsVideoOpen(false)}
                                className="absolute top-4 right-4 z-[110] w-10 h-10 bg-black/50 hover:bg-black/70 border border-white/20 rounded-full flex items-center justify-center backdrop-blur text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* YouTube Embed */}
                            <div className="absolute inset-0 w-full h-full">
                                <iframe
                                    src="https://www.youtube.com/embed/CBYfXlP7ppQ?autoplay=1"
                                    className="w-full h-full border-0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Preet Tech Video"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </main >
    );
}

