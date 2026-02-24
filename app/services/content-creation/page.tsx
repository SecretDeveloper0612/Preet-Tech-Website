"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Zap, Shield, Layout, Layers, ArrowRight, User, Mail, Phone, Building2, ChevronRight,
    Activity, Target, BarChart3, TrendingUp, Search, Globe, CheckCircle2, Share2, Briefcase,
    Rocket, Plus, Minus, Instagram, Facebook, Linkedin, Youtube, MessageSquare, Palette, Video,
    Users, LineChart, Sparkles, Calendar, Eye, Heart, Hash, Clock, Send, Star, Megaphone,
    PenTool, Image, Play, Repeat, MousePointer2, FileText, Bot, Headphones, DollarSign,
    ShoppingCart, Home, GraduationCap, HeartPulse, Store, UserCheck, Award, Gauge, Monitor,
    Smartphone, Bookmark, type LucideIcon, Camera, Film, Music, Mic, Pencil,
    Scissors, Lightbulb, Workflow, Box
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioCarousel from '@/components/PortfolioCarousel';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function ContentCreation() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem('theme');
        if (stored === 'dark') {
            /* handled by next-themes */
            setIsDarkMode(true);
        } else {
            /* handled by next-themes */
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        const next = !isDarkMode;
        setIsDarkMode(next);
        if (next) {
            /* handled by next-themes */
            localStorage.setItem('theme', 'dark');
        } else {
            /* handled by next-themes */
            localStorage.setItem('theme', 'light');
        }
    };

    useGSAP(() => {
        gsap.utils.toArray<HTMLElement>('.reveal-section').forEach((s) => {
            gsap.from(s, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: s,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });
        });
    }, { scope: containerRef });

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        setTimeout(() => setFormStatus('success'), 1500);
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <main ref={containerRef} className="relative z-10 selection:bg-brand-cyan/20 overflow-x-hidden bg-[#fafafa] text-slate-900 dark:bg-[#050608] dark:text-white transition-colors duration-500 font-sans">
            <Navbar isDark={isDarkMode} toggleTheme={toggleTheme} />

            {/* 1️⃣ Hero Section (With Strategy Call Form) */}
            <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 lg:pt-56 lg:pb-40 px-4 md:px-6 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none -z-10">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1],
                            rotate: [0, 90, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] bg-gradient-to-br from-brand-medium/30 via-brand-cyan/20 to-transparent blur-[120px] rounded-full"
                    />
                    <motion.div
                        animate={{
                            scale: [1.3, 1, 1.3],
                            opacity: [0.05, 0.15, 0.05],
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-brand-sky/20 blur-[100px] rounded-full"
                    />
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-medium/10 border border-brand-medium/20 text-brand-medium dark:text-brand-cyan text-xs font-bold uppercase tracking-widest"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Premium Content Studio</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]"
                        >
                            Creative Content <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky via-brand-medium to-brand-cyan">That Drives Results.</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-medium">
                                We create strategic, scroll-stopping content designed to grow your brand, engage your audience, and increase conversions.
                            </p>
                            <p className="text-base text-slate-500 dark:text-slate-500 max-w-lg leading-relaxed">
                                Preet Tech isn't just a content agency. We are your creative growth partner. We combine high-end aesthetics with deep marketing data to ensure every piece of content serves your bottom line.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex items-center gap-6"
                        >
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white dark:border-[#050608] bg-slate-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                                <div className="w-12 h-12 rounded-full border-4 border-white dark:border-[#050608] bg-brand-medium flex items-center justify-center text-white text-xs font-bold">
                                    +50
                                </div>
                            </div>
                            <div>
                                <div className="text-sm font-bold">Trusted by 50+ Global Brands</div>
                                <div className="flex text-amber-500">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Lead Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-br from-brand-medium/20 to-brand-cyan/20 blur-2xl rounded-[2.5rem] -z-10" />
                        <div className="glass-morphism p-6 md:p-10 rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <FileText className="w-24 h-24 rotate-12" />
                            </div>

                            <h3 className="text-2xl font-bold mb-6">Book Your Strategy Call</h3>

                            <form onSubmit={handleFormSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Full Name</label>
                                        <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-brand-medium outline-none transition-all text-sm" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Brand Name</label>
                                        <input required type="text" placeholder="Your Business" className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-brand-medium outline-none transition-all text-sm" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Website / Social</label>
                                        <input required type="text" placeholder="@yourbrand" className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-brand-medium outline-none transition-all text-sm" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Email Address</label>
                                        <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-brand-medium outline-none transition-all text-sm" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Content Type</label>
                                        <select className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-brand-medium outline-none transition-all text-sm appearance-none">
                                            <option>Social Media</option>
                                            <option>Short-Form/Reels</option>
                                            <option>Ad Creatives</option>
                                            <option>Website Copy</option>
                                            <option>Product Shoots</option>
                                            <option>Full Strategy</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Monthly Budget</label>
                                        <select className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-brand-medium outline-none transition-all text-sm appearance-none">
                                            <option>$1,000 - $3,000</option>
                                            <option>$3,000 - $7,000</option>
                                            <option>$7,000 - $15,000</option>
                                            <option>$15,000+</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Project Description</label>
                                    <textarea rows={3} placeholder="Tell us about your goals..." className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-brand-medium outline-none transition-all text-sm resize-none"></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                                    className={`w-full py-4 rounded-xl font-bold text-white uppercase tracking-widest text-sm shadow-xl transition-all flex items-center justify-center gap-2 ${formStatus === 'success' ? 'bg-emerald-500' : 'bg-gradient-to-r from-brand-medium to-brand-deep hover:shadow-brand-medium/30'}`}
                                >
                                    {formStatus === 'idle' && <>Book Free Content Strategy Call <ArrowRight className="w-4 h-4" /></>}
                                    {formStatus === 'submitting' && <Activity className="w-4 h-4 animate-spin" />}
                                    {formStatus === 'success' && <CheckCircle2 className="w-4 h-4" />}
                                    {formStatus === 'success' && "Speak Soon!"}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2️⃣ Why Content Is the Foundation of Digital Growth */}
            <section className="py-20 md:py-32 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div className="space-y-4 max-w-2xl">
                            <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">The Foundation</span>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                                Why Content is the Core of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-sky">Digital Growth.</span>
                            </h2>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 max-w-sm font-medium">
                            Businesses don't grow with ads alone. They grow with stories that resonate and visuals that capture attention.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {[
                            { t: 'Builds Trust & Authority', d: 'High-quality, educational content positions your brand as an industry leader before the first interaction.', i: Shield },
                            { t: 'Consistent Brand Recall', d: 'Frequent, visual touchpoints ensure your brand is the first name customers think of when they are ready to buy.', i: Activity },
                            { t: 'Performance-First Creatives', d: 'Optimized ad creatives lower your CAC and increase your ROAS through higher click-through rates.', i: Target },
                            { t: 'Emotional Connection', d: 'Stories bridge the gap between product and person, turning one-time buyers into lifelong advocates.', i: Heart },
                            { t: 'Conversion Engine', d: 'Strategic content funnels move prospects from awareness to decision through persuasive visual proof.', i: Zap }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 shadow-sm group hover:border-brand-medium/30 transition-all flex flex-col items-start gap-6"
                            >
                                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-brand-medium/10 text-brand-medium group-hover:bg-brand-medium group-hover:text-white transition-colors duration-500">
                                    <item.i className="w-8 h-8" />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold tracking-tight">{item.t}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                                        {item.d}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3️⃣ Why Choose Preet Tech */}
            <section className="py-20 md:py-32 px-4 md:px-6 bg-slate-100 dark:bg-slate-900/30 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">The Preet Tech Edge</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight">Why Choose Preet Tech.</h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">We don't just "make content". We build growth assets that appreciate in value over time.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            { t: 'Strategy-First Creation', d: 'We start with your business goals, target audience, and market gap. Every piece of content is built with a specific purpose in your sales funnel.', i: Workflow },
                            { t: 'Performance-Focused', d: 'Our creatives are tested against data. We track engagement, CTRs, and conversion rates to refine our creative approach continuously.', i: TrendingUp },
                            { t: 'Professional Production', d: 'From 4K cinematography to high-end motion graphics and professional studio lighting, we ensure your brand looks enterprise-grade.', i: Video },
                            { t: 'Data-Backed Optimization', d: 'We use heatmaps, A/B testing, and social analytics to understand exactly what your audience responds to and double down on winners.', i: BarChart3 },
                            { t: 'Brand Consistency', d: 'We define and maintain your unique visual language across every platform, ensuring a seamless experience for your followers.', i: Palette }
                        ].map((f, i) => (
                            <div key={i} className="flex gap-6 group">
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center border border-slate-200 dark:border-white/10 group-hover:border-brand-medium transition-colors">
                                    <f.i className="w-6 h-6 text-brand-medium" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold tracking-tight">{f.t}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                        {f.d}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4️⃣ Who This Service Is For */}
            <section className="py-20 md:py-32 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Perfect Fit</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight">Who This Service Is For.</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { t: 'Startups', d: 'Looking to build brand identity and launch into the market with high-impact visuals.', i: Rocket },
                            { t: 'E-Commerce Brands', d: 'Needing high-converting product shots and ad creatives that move inventory fast.', i: ShoppingCart },
                            { t: 'SaaS Companies', d: 'Requiring clean, modern motion graphics and feature explainers that simplify complexity.', i: Box },
                            { t: 'Real Estate Businesses', d: 'Demanding cinematic property tours and professional visual storytelling to close listings.', i: Home },
                            { t: 'Coaches & Creators', d: 'Wanting to position themselves as authorities through high-end personal branding content.', i: Award },
                            { t: 'Local Businesses', d: 'Growing their local presence and customer trust through consistent, professional content.', i: Store }
                        ].map((block, i) => (
                            <motion.div
                                key={i}
                                whileInView={{ opacity: 1, scale: 1 }}
                                initial={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-start gap-4 hover:bg-white dark:hover:bg-slate-900 transition-all hover:shadow-xl hover:border-brand-medium/40 group"
                            >
                                <div className="p-3 rounded-xl bg-white dark:bg-slate-800 text-brand-medium group-hover:scale-110 transition-transform">
                                    <block.i className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold text-lg">{block.t}</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed">{block.d}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5️⃣ Our Content Creation Services Overview */}
            <section className="py-20 md:py-32 px-4 md:px-6 bg-[#080B10] text-white reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-brand-sky font-bold uppercase tracking-[0.2em] text-xs">Full Spectrum Creative</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight">Our Creative Services.</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">From strategy to post-production, we handle the entire content lifecycle so you can focus on scale.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[
                            { t: 'Social Media Content', i: Instagram, d: 'Scroll-stopping feed posts, engaging carousels, and interactive stories.' },
                            { t: 'Short-Form Video & Reels', i: Film, d: 'Cinematic, hook-driven vertical videos optimized for reach and virality.' },
                            { t: 'Ad Creative Development', i: Megaphone, d: 'High-converting video and image assets designed specifically for paid social.' },
                            { t: 'Copywriting', i: Pencil, d: 'Persuasive sales copy and engaging captions that drive action and clicks.' },
                            { t: 'Storytelling & Scripts', i: Mic, d: 'Compelling scripts and brand narratives that connect emotionally with your audience.' },
                            { t: 'Product Photography', i: Camera, d: 'High-end studio photography that makes your products look premium and desirable.' },
                            { t: 'Content Strategy', i: Map, d: 'Comprehensive planning and roadmapping to ensure content hits your KPIs.' },
                            { t: 'Property Shoots', i: Home, d: 'Cinematic property tours and professional photography for real estate listings.' },
                            { t: 'Scheduling & Management', i: Calendar, d: 'Full-service calendar management to ensure consistency across all platforms.' },
                            { t: 'Creative Direction', i: Palette, d: 'Unified vision and aesthetic guidance to keep your brand voice consistent.' },
                            { t: 'Post-Production', i: Scissors, d: 'Professional editing, motion graphics, and sound design for maximum impact.' },
                            { t: 'Visual Branding Assets', i: Layout, d: 'Custom templates, fonts, and assets for a cohesive brand identity.' }
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-medium/50 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-brand-medium/20 flex items-center justify-center mb-4 group-hover:bg-brand-medium transition-colors">
                                    <s.i className="w-6 h-6 text-brand-sky group-hover:text-white" />
                                </div>
                                <h4 className="font-bold text-lg mb-2">{s.t}</h4>
                                <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                    {s.d}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6️⃣ Our Creative Workflow */}
            <section className="py-20 md:py-32 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">The Process</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight">Our Creative Workflow.</h2>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 dark:bg-white/5 -translate-y-1/2 hidden lg:block" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
                            {[
                                { s: '01', t: 'Idea', d: 'Generating volume-driven concepts aligned with your goals.', i: Lightbulb },
                                { s: '02', t: 'Strategy', d: 'Structuring hooks, CTA and audience targeting for each piece.', i: Target },
                                { s: '03', t: 'Production', d: 'High-end filming and photoshoot using top-tier equipment.', i: Camera },
                                { s: '04', t: 'Editing', d: 'Post-production, motion graphics, and professional grading.', i: Scissors },
                                { s: '05', t: 'Publishing', d: 'Scheduled posting at optimal times for maximum initial reach.', i: Share2 },
                                { s: '06', t: 'Optimization', d: 'Reviewing data and refining the next creative cycle.', i: Zap }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center group"
                                >
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-white dark:bg-slate-900 border-4 border-slate-50 dark:border-white/5 flex items-center justify-center text-brand-medium shadow-xl group-hover:scale-110 group-hover:border-brand-medium transition-all duration-500">
                                        <step.i className="w-8 h-8" />
                                    </div>
                                    <span className="text-xs font-black text-brand-medium/50 uppercase tracking-widest block mb-2">{step.s} — {step.t}</span>
                                    <p className="text-[11px] text-slate-500 leading-relaxed px-2">
                                        {step.d}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7️⃣ Portfolio / Creative Showcase */}
            <PortfolioCarousel
                cards={[
                    {
                        id: 'video-1',
                        label: 'Organic Reels',
                        platform: 'Reels',
                        bg: 'from-brand-deep to-brand-sky',
                        content: (
                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-black/20" />
                                <div className="relative z-10 space-y-4">
                                    <div className="text-5xl font-black">1.2M</div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-brand-cyan">Views Generated</div>
                                    <p className="text-xs text-white/70 leading-relaxed">Viral short-form content strategy for a leading E-commerce brand.</p>
                                </div>
                            </div>
                        )
                    },
                    {
                        id: 'ad-1',
                        label: 'Ad Creatives',
                        platform: 'Facebook Ads',
                        bgStyle: { background: 'linear-gradient(135deg, #2F6FB5 0%, #3F8FCC 100%)' },
                        content: (
                            <div className="absolute inset-0 p-8 flex flex-col justify-center text-white text-center">
                                <div className="space-y-6">
                                    <Activity className="w-16 h-16 mx-auto text-brand-cyan opacity-40" />
                                    <div className="text-5xl font-black">4.2x</div>
                                    <div className="text-sm font-bold uppercase tracking-widest">ROAS Increase</div>
                                    <div className="h-px w-20 bg-white/20 mx-auto" />
                                    <p className="text-xs text-white/60">Optimized creative assets for a SaaS scaling phase.</p>
                                </div>
                            </div>
                        )
                    },
                    {
                        id: 'brand-1',
                        label: 'Brand Story',
                        platform: 'YouTube',
                        bg: 'from-slate-900 to-brand-deep',
                        content: (
                            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                                    <Play className="w-5 h-5 fill-current" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-3xl font-black">Legacy Series</h4>
                                    <p className="text-xs text-slate-400">Cinematic storytelling for a heritage luxury brand.</p>
                                </div>
                            </div>
                        )
                    },
                    {
                        id: 'product-1',
                        label: 'Static Assets',
                        platform: 'Instagram Post',
                        bgStyle: { background: 'linear-gradient(135deg, #12141d 0%, #1e293b 100%)' },
                        content: (
                            <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-white">
                                <div className="relative w-full aspect-square bg-slate-800/50 rounded-2xl overflow-hidden mb-6 group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <Camera className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white/20" />
                                    <div className="absolute bottom-4 left-4 right-4 h-2 bg-white/20 rounded-full">
                                        <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} className="h-full bg-brand-cyan rounded-full" />
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <div className="text-2xl font-bold">85k Saves</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Engagement Proof</div>
                                </div>
                            </div>
                        )
                    }
                ]}
            />

            {/* 8️⃣ Industries We Serve */}
            <section className="py-20 md:py-32 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Versatility</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight">Industries We Serve.</h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Our content engine adapts to any niche, maintaining high production value and strategic focus.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[
                            { n: 'E-Commerce', d: 'Conversion-driven product demos and social proof content.', i: ShoppingCart },
                            { n: 'Real Estate', d: 'Emotional property narratives and agent personal branding.', i: Home },
                            { n: 'SaaS', d: 'Feature-focussed motion graphics and user success stories.', i: Box },
                            { n: 'Education', d: 'High-value educational snippets and student results.', i: GraduationCap },
                            { n: 'Healthcare', d: 'Trust-building patient stories and educational visuals.', i: HeartPulse },
                            { n: 'Hospitality', n2: 'Leisure', d: 'Experiential storytelling for hotels and travel brands.', i: Globe },
                            { n: 'Service Businesses', d: 'Authority-building process explainers and case studies.', i: Briefcase },
                            { n: 'Professional Brands', d: 'Polished personal brand visuals for executives and founders.', i: UserCheck }
                        ].map((industry, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:scale-[1.03] transition-transform group">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-brand-medium/10 flex items-center justify-center mb-5 group-hover:bg-brand-medium transition-colors">
                                    <industry.i className="w-5 h-5 text-brand-medium group-hover:text-white" />
                                </div>
                                <h4 className="font-bold text-lg mb-2">{industry.n} {industry.n2 && `& ${industry.n2}`}</h4>
                                <p className="text-[11px] text-slate-500 leading-relaxed">{industry.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9️⃣ FAQs Section */}
            <section className="py-20 md:py-32 px-4 md:px-6 bg-slate-50 dark:bg-slate-900/30 reveal-section">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Common Questions</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight">Everything You Need to Know.</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "How often should we post content?", a: "Consistency is key, but quality beats quantity. We usually recommend a minimum of 3-5 high-quality posts per week combined with daily stories, but we customize this based on your specific industry and goals." },
                            { q: "Do you handle shooting and editing?", a: "Yes, we handle the entire process from start to finish. This includes creative direction, professional filming/photography on-site or in-studio, and full post-production editing." },
                            { q: "Can you manage our entire content calendar?", a: "Absolutely. We can take over the complete scheduling and posting process across all your social platforms, ensuring your content goes live at peak engagement times." },
                            { q: "Do you create ad creatives as well?", a: "Yes, ad creatives are one of our specialties. We design specific assets for Facebook, Instagram, and TikTok ads that are built for high conversion rather than just organic engagement." },
                            { q: "How do you measure content performance?", a: "We track reach, engagement rate, click-through rates, and ultimately, conversions. We provide detailed monthly reports that show exactly how your content is contributing to your business growth." }
                        ].map((faq, i) => (
                            <div key={i} className="rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden bg-white dark:bg-slate-900/50">
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                                    className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-bold pr-8">{faq.q}</span>
                                    <motion.div animate={{ rotate: openFAQ === i ? 180 : 0 }}>
                                        <ChevronDown className="w-5 h-5 text-brand-medium" />
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {openFAQ === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 text-slate-500 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-white/5">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🔟 Free Content Strategy Call Section */}
            <section className="py-20 md:py-32 px-4 md:px-6 reveal-section overflow-hidden">
                <div className="max-w-7xl mx-auto relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-medium/10 blur-[150px] -z-10 rounded-full" />
                    <div className="glass-morphism p-12 md:p-24 rounded-[3rem] text-center space-y-10 border border-brand-medium/20 shadow-2xl relative">
                        <div className="space-y-6">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="w-20 h-20 bg-brand-medium/20 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-brand-medium/30"
                            >
                                <Phone className="w-8 h-8 text-brand-medium" />
                            </motion.div>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                                Let’s Build Content <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky via-brand-medium to-brand-cyan">That Converts.</span>
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-medium">
                                Stop guessing what works. Let our team of creative strategists build a performance-driven content ecosystem for your brand.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                className="px-10 py-5 bg-gradient-to-r from-brand-medium to-brand-deep text-white font-bold rounded-2xl shadow-xl shadow-brand-medium/30 flex items-center gap-3 uppercase tracking-widest text-sm"
                            >
                                Book Free Strategy Call <ArrowRight className="w-4 h-4" />
                            </motion.a>
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-slate-300" />)}
                                </div>
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Next slot: Today</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 px-4 md:px-6 bg-gradient-to-b from-transparent to-brand-medium/10 reveal-section">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-5xl md:text-7xl font-black tracking-tight">Ready to Turn Content <br /> Into <span className="text-brand-medium">Growth?</span></h2>
                        <p className="text-xl text-slate-500 dark:text-slate-400">Join the top-tier brands using Preet Tech for strategic creative excellence.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-6 bg-[#020617] dark:bg-white text-white dark:text-[#020617] font-black rounded-2xl shadow-2xl flex items-center gap-4 uppercase tracking-[0.15em] text-sm"
                        >
                            Start Your Content Project <Plus className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-6 border-2 border-slate-900/10 dark:border-white/10 font-black rounded-2xl flex items-center gap-4 uppercase tracking-[0.15em] text-sm"
                        >
                            Schedule Free Call <Calendar className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>
            </section>

            <Footer />

            {/* Mobile Sticky CTA */}
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                className="fixed bottom-0 left-0 right-0 p-4 z-50 md:hidden pointer-events-none"
            >
                <div className="glass-morphism rounded-2xl border border-white/20 p-2 shadow-2xl pointer-events-auto">
                    <a
                        href="#strategy"
                        className="w-full py-4 bg-brand-medium text-white font-bold rounded-xl flex items-center justify-center gap-3 uppercase tracking-widest text-xs"
                    >
                        Free Strategy Call <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </motion.div>
        </main>
    );
}

function Map(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a2 2 0 0 1-1.106 1.789l-3.659 1.83a2 2 0 0 1-1.788 0l-4.894-2.447a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 17.381V4.618a2 2 0 0 1 1.106-1.789l3.659-1.83a2 2 0 0 1 1.788 0z" />
            <path d="M15 5.764v15" />
            <path d="M9 3.236v15" />
        </svg>
    )
}

function ChevronDown(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}
