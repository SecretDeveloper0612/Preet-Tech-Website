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
    Smartphone, Bookmark, type LucideIcon
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioCarousel from '@/components/PortfolioCarousel';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") { gsap.registerPlugin(ScrollTrigger); }

export default function SocialMediaHandling() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem('theme');
        if (stored === 'dark') { document.documentElement.classList.add('dark'); setIsDarkMode(true); }
        else { document.documentElement.classList.remove('dark'); setIsDarkMode(false); }
    }, []);

    const toggleTheme = () => {
        const next = !isDarkMode; setIsDarkMode(next);
        if (next) { document.documentElement.classList.add('dark'); localStorage.setItem('theme', 'dark'); }
        else { document.documentElement.classList.remove('dark'); localStorage.setItem('theme', 'light'); }
    };

    useGSAP(() => {
        gsap.utils.toArray<HTMLElement>('.reveal-section').forEach((s) => {
            gsap.from(s, { opacity: 0, y: 50, duration: 1, ease: "power3.out", scrollTrigger: { trigger: s, start: "top 85%", toggleActions: "play none none none" } });
        });
    }, { scope: containerRef });

    const handleFormSubmit = (e: React.FormEvent) => { e.preventDefault(); setFormStatus('submitting'); setTimeout(() => setFormStatus('success'), 1500); };

    return (
        <main ref={containerRef} className="relative z-10 selection:bg-brand-cyan/20 overflow-x-hidden bg-[#fafafa] text-slate-900 dark:bg-[#050608] dark:text-white transition-colors duration-500 font-sans">
            <Navbar isDark={isDarkMode} toggleTheme={toggleTheme} />

            {/* 1️⃣ Hero */}
            <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 lg:pt-52 lg:pb-36 px-4 md:px-6 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none -z-10">
                    <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 12, repeat: Infinity }} className="absolute top-[10%] -right-[10%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-gradient-to-br from-brand-medium/20 via-brand-medium/20 to-brand-cyan/20 blur-[150px] rounded-full" />
                    <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.25, 0.1] }} transition={{ duration: 16, repeat: Infinity, delay: 3 }} className="absolute -bottom-[15%] -left-[15%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-brand-sky/15 blur-[130px] rounded-full" />
                    {mounted && [...Array(20)].map((_, i) => (
                        <motion.div key={i} animate={{ opacity: [0.1, 0.5, 0.1], scale: [1, 1.5, 1] }} transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 5 }} className="absolute rounded-full bg-brand-cyan/40" style={{ width: `${Math.random() * 3 + 1}px`, height: `${Math.random() * 3 + 1}px`, left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }} />
                    ))}
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className="space-y-6 md:space-y-8 relative z-10">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-medium/10 to-brand-deep/10 border border-brand-medium/20 backdrop-blur-xl">
                            <span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-medium opacity-75" /><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-medium" /></span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-medium dark:text-brand-sky">Social Media Growth Engine</span>
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="block">Grow Your Brand</motion.span>
                            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-sky via-brand-medium to-brand-cyan">on Social Media.</motion.span>
                        </motion.h1>

                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-base md:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                            Strategic content, creative design, and consistent management to build your online presence and generate real results.
                        </motion.p>

                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.65 }} className="flex flex-col sm:flex-row gap-4">
                            <a href="#audit" className="px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-brand-medium to-brand-deep text-white font-bold rounded-xl hover:scale-105 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-brand-medium/20">Get Free Audit <ArrowRight className="w-4 h-4" /></a>
                            <a href="#pricing" className="px-6 sm:px-10 py-4 sm:py-5 border border-slate-300 dark:border-white/20 rounded-xl font-bold hover:bg-slate-100 dark:hover:bg-white/5 transition-all text-center text-xs sm:text-sm uppercase tracking-wider">View Packages</a>
                        </motion.div>

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex items-center gap-4 pt-2">
                            {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
                                <motion.div key={i} whileHover={{ scale: 1.2, y: -3 }} className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center hover:border-brand-medium/50 transition-colors cursor-pointer">
                                    <Icon className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Hero Visual - Social Media Dashboard Mockup */}
                    <motion.div initial={{ opacity: 0, scale: 0.9, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.3 }} className="relative hidden md:block">
                        <motion.div animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -inset-8 bg-gradient-to-br from-brand-medium/20 via-brand-medium/15 to-brand-cyan/20 blur-[60px] rounded-[3rem] -z-10" />
                        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="relative p-2 rounded-2xl bg-gradient-to-b from-white to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-white/10 shadow-2xl">
                            <div className="bg-slate-50 dark:bg-[#0a0f18] rounded-xl overflow-hidden border border-white/50 dark:border-white/5 p-6 space-y-4">
                                <div className="flex items-center justify-between"><div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-yellow-400" /><div className="w-3 h-3 rounded-full bg-green-400" /></div><span className="text-[10px] font-mono text-slate-400">Social Dashboard</span></div>
                                <div className="grid grid-cols-3 gap-3">
                                    {[{ v: '+340%', l: 'Engagement', c: 'text-emerald-500' }, { v: '52K', l: 'Followers', c: 'text-brand-medium' }, { v: '89%', l: 'Retention', c: 'text-brand-cyan' }].map((m, i) => (
                                        <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 + i * 0.15 }} className="p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-center">
                                            <span className={`block text-lg font-black ${m.c}`}>{m.v}</span><span className="text-[8px] font-bold uppercase tracking-widest text-slate-400">{m.l}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="h-32 rounded-xl bg-gradient-to-tr from-brand-medium/10 to-brand-deep/10 border border-brand-medium/10 relative overflow-hidden flex items-end p-3 gap-1">
                                    {[40, 60, 35, 80, 55, 90, 70, 95, 65, 85].map((h, i) => (
                                        <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 1.8 + i * 0.1, duration: 0.6 }} className="flex-1 bg-gradient-to-t from-brand-medium to-brand-deep rounded-t-md opacity-80" />
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5"><div className="text-[9px] font-bold uppercase text-slate-400 mb-1">Top Post</div><div className="h-8 w-full bg-gradient-to-r from-brand-medium/20 to-brand-deep/20 rounded-lg" /></div>
                                    <div className="p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5"><div className="text-[9px] font-bold uppercase text-slate-400 mb-1">Reach</div><motion.div animate={{ width: ['30%', '85%', '30%'] }} transition={{ duration: 3, repeat: Infinity }} className="h-2 bg-brand-cyan rounded-full mt-3" /></div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 2️⃣ Why Social Media is Essential */}
            <section className="py-16 md:py-28 px-4 md:px-6 reveal-section border-t border-slate-200/50 dark:border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    <div className="space-y-8">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Why It Matters</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why Social Media is <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-deep">Essential.</span></h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">In today's digital world, social media isn't optional—it's the frontline of your brand's identity and growth engine.</p>
                        <ul className="space-y-5">
                            {[{ t: 'Builds Brand Awareness', d: 'Get your brand in front of thousands of potential customers daily.' }, { t: 'Increases Trust & Credibility', d: 'Consistent, quality content positions you as an industry authority.' }, { t: 'Generates Leads & Sales', d: 'Strategic CTAs and funnels turn followers into paying customers.' }, { t: 'Connects With Audience Directly', d: 'Real-time engagement builds genuine customer relationships.' }, { t: 'Creates Long-Term Brand Value', d: 'Every post compounds into lasting digital equity for your business.' }].map((item, i) => (
                                <li key={i} className="flex gap-4"><div className="mt-1 w-6 h-6 shrink-0 rounded-full bg-blue-100 dark:bg-brand-medium/20 flex items-center justify-center"><CheckCircle2 className="w-3.5 h-3.5 text-brand-medium" /></div><div><strong className="block text-lg">{item.t}</strong><span className="text-slate-500 text-sm">{item.d}</span></div></li>
                            ))}
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[{ v: '10x', l: 'More Brand Awareness', c: 'from-brand-sky to-brand-deep' }, { v: '78%', l: 'Trust Through Social Proof', c: 'from-brand-medium to-brand-deep' }, { v: '3.5x', l: 'Higher Conversion Rate', c: 'from-brand-cyan to-brand-sky' }, { v: '67%', l: 'Customer Retention Boost', c: 'from-emerald-500 to-green-500' }].map((s, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-center hover:-translate-y-1 transition-transform">
                                <div className={`text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${s.c} mb-2`}>{s.v}</div>
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{s.l}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3️⃣ Why Choose Preet Tech */}
            <section className="py-16 md:py-28 px-4 md:px-6 bg-slate-50 dark:bg-slate-900/50 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">The Preet Tech Advantage</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why Choose Preet Tech.</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[{ t: 'Data-Driven Strategy', i: BarChart3, d: 'Every decision backed by analytics and performance data.' }, { t: 'Creative Content Experts', i: Sparkles, d: 'Scroll-stopping content that resonates with your audience.' }, { t: 'Consistent Posting System', i: Calendar, d: 'Never miss a post with our systematized content calendar.' }, { t: 'Organic Growth Focus', i: TrendingUp, d: 'Sustainable growth through genuine engagement and value.' }, {
                            t: 'Monthly Reporting', i: LineChart, d: 'Detailed insights on what\'s working and what to optimize.'
                        }, { t: 'Transparent Communication', i: MessageSquare, d: 'Regular updates, strategy calls, and open feedback loops.' }].map((f, i) => (
                            <motion.div key={i} whileHover={{ y: -5 }} className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 group hover:border-brand-medium/30 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-brand-medium/10 flex items-center justify-center mb-5 group-hover:bg-brand-medium transition-colors"><f.i className="w-6 h-6 text-brand-medium group-hover:text-white transition-colors" /></div>
                                <h3 className="text-lg font-bold mb-2">{f.t}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{f.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4️⃣ Who This Service Is For */}
            <section className="py-16 md:py-28 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Perfect For</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Who This Service Is For.</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {[{ t: 'Local Businesses', i: Store, d: 'Build community presence and drive foot traffic.' }, { t: 'Startups', i: Rocket, d: 'Establish brand identity from day one.' }, { t: 'Coaches & Consultants', i: UserCheck, d: 'Position yourself as an industry authority.' }, { t: 'E-Commerce Brands', i: ShoppingCart, d: 'Drive traffic and sales through social.' }, { t: 'Real Estate Agents', i: Home, d: 'Showcase properties and build trust.' }, { t: 'Personal Brands', i: User, d: 'Grow your personal influence online.' }, { t: 'Educational Institutes', i: GraduationCap, d: 'Engage students and parents effectively.' }, { t: 'Healthcare', i: HeartPulse, d: 'Build patient trust and awareness.' }].map((ind, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex gap-4 items-start p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 hover:border-brand-medium/40 transition-colors group">
                                <ind.i className="w-6 h-6 text-slate-400 group-hover:text-brand-medium shrink-0 transition-colors mt-0.5" />
                                <div><h4 className="font-bold text-sm mb-1">{ind.t}</h4><p className="text-xs text-slate-500">{ind.d}</p></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5️⃣ What We Handle */}
            <section className="py-16 md:py-28 px-4 md:px-6 bg-[#080B10] text-white reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-sky font-bold uppercase tracking-[0.2em] text-xs">Complete Management</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">What We Handle For You.</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">End-to-end social media management so you can focus on running your business.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[{ t: 'Strategy', i: Target }, { t: 'Content Creation', i: PenTool }, { t: 'Posting', i: Share2 }, { t: 'Engagement', i: Heart }, { t: 'Analytics', i: BarChart3 }, { t: 'Optimization', i: Zap }].map((s, i) => (
                            <motion.div key={i} whileHover={{ y: -5 }} className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center group hover:border-brand-medium/40 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-brand-medium/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-medium transition-colors"><s.i className="w-6 h-6 text-brand-sky group-hover:text-white transition-colors" /></div>
                                <h4 className="font-bold text-sm">{s.t}</h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6️⃣ Platforms We Manage */}
            <section className="py-16 md:py-28 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Multi-Platform</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Platforms We Manage.</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                        {[{ n: 'Instagram', i: Instagram, c: 'from-brand-medium to-brand-deep' }, { n: 'Facebook', i: Facebook, c: 'from-blue-500 to-blue-600' }, { n: 'LinkedIn', i: Linkedin, c: 'from-blue-600 to-blue-700' }, { n: 'YouTube', i: Youtube, c: 'from-red-500 to-red-600' }, { n: 'Twitter/X', i: MessageSquare, c: 'from-slate-700 to-slate-900' }, { n: 'Threads', i: Hash, c: 'from-brand-sky to-brand-medium' }].map((p, i) => (
                            <motion.div key={i} whileHover={{ y: -5, scale: 1.02 }} className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-center hover:shadow-[0_0_30px_rgba(63,143,204,0.15)] transition-all">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.c} flex items-center justify-center mx-auto mb-4 shadow-lg`}><p.i className="w-7 h-7 text-white" /></div>
                                <h4 className="font-bold text-sm">{p.n}</h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7️⃣ Content Strategy & Planning */}
            <section className="py-16 md:py-28 px-4 md:px-6 bg-slate-50 dark:bg-slate-900/50 reveal-section">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    <div className="space-y-8">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Strategic Planning</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Content Strategy & Planning.</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">We don't just post randomly. Every piece of content is part of a larger strategy designed to grow your brand systematically.</p>
                        <div className="space-y-4">
                            {[{ t: 'Audience Research', d: 'Deep analysis of your target demographic and their behavior.' }, { t: 'Competitor Analysis', d: 'Study what works in your industry and outperform them.' }, { t: 'Monthly Content Calendar', d: 'Pre-planned content schedule aligned with your goals.' }, { t: 'Campaign Planning', d: 'Strategic campaigns around launches, events, and seasons.' }, { t: 'Brand Positioning', d: 'Define your unique voice and visual identity online.' }].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 hover:border-brand-medium/30 transition-colors">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-brand-medium/10 flex items-center justify-center shrink-0"><CheckCircle2 className="w-4 h-4 text-brand-medium" /></div>
                                    <div><h4 className="font-bold text-sm">{item.t}</h4><p className="text-xs text-slate-500 mt-0.5">{item.d}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Calendar Visual */}
                    <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-xl">
                        <div className="flex items-center justify-between mb-6"><h4 className="font-bold text-sm">Content Calendar — March 2026</h4><Calendar className="w-5 h-5 text-brand-medium" /></div>
                        <div className="grid grid-cols-7 gap-1 sm:gap-2">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <div key={i} className="text-center text-[10px] font-bold text-slate-400 uppercase py-1">{d}</div>)}
                            {[...Array(31)].map((_, i) => {
                                const hasPost = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29].includes(i + 1);
                                const hasReel = [2, 8, 14, 20, 26].includes(i + 1);
                                return <motion.div key={i} whileHover={{ scale: 1.1 }} className={`aspect-square rounded-lg flex items-center justify-center text-xs font-bold ${hasPost ? 'bg-brand-medium text-white' : hasReel ? 'bg-brand-sky text-white' : 'bg-slate-50 dark:bg-white/5 text-slate-400'}`}>{i + 1}</motion.div>;
                            })}
                        </div>
                        <div className="flex gap-4 mt-4">
                            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-brand-medium" /><span className="text-[10px] font-bold text-slate-400">Posts</span></div>
                            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded bg-brand-sky" /><span className="text-[10px] font-bold text-slate-400">Reels</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8️⃣ Creative Design & Branding */}
            <section className="py-16 md:py-28 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Visual Excellence</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Creative Design & Branding.</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Every visual is crafted to stop the scroll, communicate your message, and strengthen your brand identity.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {[{ t: 'Post Designs', i: Image, d: 'Eye-catching static posts for your feed.' }, { t: 'Carousel Graphics', i: Layers, d: 'Swipe-worthy educational and promo carousels.' }, { t: 'Story Templates', i: Smartphone, d: 'On-brand story templates for daily engagement.' }, { t: 'Brand Consistency', i: Palette, d: 'Unified color, font, and style across all platforms.' }, { t: 'Custom Visual Identity', i: Eye, d: 'Unique design language that sets you apart.' }].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 group hover:border-brand-medium/30 transition-all hover:-translate-y-1">
                                <item.i className="w-8 h-8 text-brand-medium mb-4" />
                                <h4 className="font-bold text-sm mb-2">{item.t}</h4>
                                <p className="text-xs text-slate-500">{item.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9️⃣ Reels & Short-Form Video */}
            <section className="py-16 md:py-28 px-4 md:px-6 bg-[#080B10] text-white reveal-section">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    <div className="space-y-8">
                        <span className="text-brand-sky font-bold uppercase tracking-[0.2em] text-xs">Short-Form Content</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Reels & Short-Form Video Strategy.</h2>
                        <p className="text-lg text-slate-400 leading-relaxed">Short-form video is the #1 growth driver on social media. We create viral-ready reels that boost your visibility and engagement exponentially.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[{ t: 'Trending Audio Research', i: Headphones }, { t: 'Hook-Based Scripting', i: PenTool }, { t: 'Editing & Motion Graphics', i: Video }, { t: 'Reels Optimization', i: Zap }, { t: 'Video Captions & Subtitles', i: FileText }, { t: 'Performance Analysis', i: BarChart3 }].map((item, i) => (
                                <div key={i} className="flex gap-3 items-center p-3 rounded-xl bg-white/5 border border-white/5">
                                    <item.i className="w-5 h-5 text-brand-sky shrink-0" />
                                    <span className="font-bold text-sm">{item.t}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Phone Mockup */}
                    <div className="flex justify-center">
                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-56 sm:w-64 h-[450px] sm:h-[500px] rounded-[2.5rem] bg-slate-900 border-[6px] border-slate-700 shadow-2xl overflow-hidden relative">
                            <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 rounded-b-xl w-1/3 mx-auto z-30" />
                            <div className="w-full h-full bg-gradient-to-b from-brand-medium/20 via-brand-medium/20 to-slate-900 p-4 flex flex-col justify-end gap-3">
                                <div className="space-y-2">
                                    <div className="h-3 w-3/4 bg-white/30 rounded" />
                                    <div className="h-3 w-1/2 bg-white/20 rounded" />
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-brand-medium" />
                                    <div className="h-2 w-20 bg-white/30 rounded" />
                                </div>
                                <div className="absolute right-4 bottom-20 space-y-4">
                                    {[Heart, MessageSquare, Share2, Star].map((Icon, i) => (
                                        <motion.div key={i} animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} className="w-9 h-9 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                                            <Icon className="w-4 h-4 text-white" />
                                        </motion.div>
                                    ))}
                                </div>
                                <motion.div animate={{ width: ['0%', '100%'] }} transition={{ duration: 6, repeat: Infinity }} className="h-1 bg-brand-medium rounded-full" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 🔟 Caption Writing & Hashtag Strategy */}
            <section className="py-16 md:py-28 px-4 md:px-6 reveal-section">
                <div className="max-w-5xl mx-auto text-center space-y-12">
                    <div className="space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Words That Convert</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Caption Writing & Hashtag Strategy.</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">The right words paired with the right hashtags can transform your reach and engagement overnight.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[{ t: 'Persuasive Captions', d: 'Copy that hooks, engages, and converts readers into action-takers.', i: PenTool }, { t: 'Call-to-Action Writing', d: 'Strategic CTAs that drive clicks, saves, shares, and conversions.', i: MousePointer2 }, { t: 'Niche Hashtags', d: 'Curated hashtag sets targeting your exact audience segments.', i: Hash }, { t: 'SEO-Optimized', d: 'Search-friendly captions that boost discoverability on all platforms.', i: Search }].map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-left hover:border-brand-medium/30 transition-colors hover:-translate-y-1">
                                <item.i className="w-7 h-7 text-brand-medium mb-4" />
                                <h4 className="font-bold text-sm mb-2">{item.t}</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 1️⃣1️⃣ Posting & Scheduling */}
            <section className="py-16 md:py-28 px-4 md:px-6 bg-slate-50 dark:bg-slate-900/50 reveal-section">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    <div className="order-2 lg:order-1 p-4 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-xl">
                        <h4 className="font-bold text-sm mb-6 flex items-center gap-2"><Clock className="w-4 h-4 text-brand-medium" /> Weekly Posting Schedule</h4>
                        <div className="space-y-3">
                            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, i) => {
                                const posts = [2, 1, 2, 1, 2, 1, 0][i];
                                return <div key={i} className="flex items-center gap-4"><span className="text-xs font-bold text-slate-400 w-20">{day}</span><div className="flex-1 h-8 bg-slate-50 dark:bg-white/5 rounded-lg overflow-hidden flex"><motion.div initial={{ width: 0 }} whileInView={{ width: `${posts * 35}%` }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} className="h-full bg-gradient-to-r from-brand-medium to-brand-deep rounded-lg" /></div><span className="text-xs font-bold text-slate-500 w-8">{posts}</span></div>;
                            })}
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 space-y-8">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Never Miss a Post</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Posting & Scheduling System.</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">Consistency is king. Our automated scheduling ensures your content goes live at the optimal time, every single time.</p>
                        <ul className="space-y-4">
                            {['Consistent Posting Calendar', 'Optimal Timing Strategy', 'Scheduling Tools Integration', 'Automated Posting System'].map((item, i) => (
                                <li key={i} className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-brand-medium shrink-0" /><span className="font-medium text-sm">{item}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 1️⃣2️⃣ Community Management */}
            <section className="py-16 md:py-28 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Engagement Hub</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Community Management.</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">We don't just post and leave. We actively engage with your audience to build a loyal and interactive community.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {[{ t: 'DM Handling', i: Send, d: 'Prompt responses to all direct messages.' }, { t: 'Comment Replies', i: MessageSquare, d: 'Engaging replies that boost algorithm ranking.' }, { t: 'Lead Qualification', i: Target, d: 'Identify hot leads from conversations.' }, { t: 'Audience Interaction', i: Users, d: 'Proactive engagement with your community.' }, { t: 'Engagement Boost', i: TrendingUp, d: 'Strategies to increase likes, saves, and shares.' }].map((item, i) => (
                            <motion.div key={i} whileHover={{ y: -5 }} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 group hover:border-brand-medium/30 transition-all text-center">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-brand-medium/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-medium transition-colors"><item.i className="w-6 h-6 text-brand-medium group-hover:text-white transition-colors" /></div>
                                <h4 className="font-bold text-sm mb-1">{item.t}</h4>
                                <p className="text-[11px] text-slate-500">{item.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 1️⃣3️⃣ Growth Strategy */}
            <section className="py-16 md:py-28 px-4 md:px-6 bg-[#080B10] text-white reveal-section">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    <div className="space-y-8">
                        <span className="text-brand-sky font-bold uppercase tracking-[0.2em] text-xs">Organic Growth Plan</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Growth Strategy.</h2>
                        <p className="text-lg text-slate-400 leading-relaxed">Sustainable, organic growth that builds a genuine following—not vanity metrics. Real followers that convert into real customers.</p>
                        <div className="space-y-4">
                            {[{ t: 'Engagement Strategy', d: 'Systematic approach to boost algorithmic reach.' }, { t: 'Profile Optimization', d: 'Perfect your bio, highlights, and pinned content.' }, { t: 'Follower Growth Plan', d: 'Targeted tactics to attract your ideal audience.' }, { t: 'Collaboration Strategy', d: 'Influencer outreach and cross-promotion plans.' }, { t: 'Content Performance Optimization', d: 'Double down on what works, pivot what doesn\'t.' }].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-medium/30 transition-colors">
                                    <CheckCircle2 className="w-5 h-5 text-brand-sky shrink-0 mt-0.5" />
                                    <div><h4 className="font-bold text-sm">{item.t}</h4><p className="text-xs text-slate-500 mt-0.5">{item.d}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Growth Chart — Animated */}
                    {(() => {
                        const bars = [
                            { m: 'Jan', h: 15, v: '1.2K' }, { m: 'Feb', h: 25, v: '2.1K' },
                            { m: 'Mar', h: 35, v: '3.4K' }, { m: 'Apr', h: 45, v: '5.0K' },
                            { m: 'May', h: 55, v: '7.2K' }, { m: 'Jun', h: 65, v: '9.8K' },
                            { m: 'Jul', h: 78, v: '13K' }, { m: 'Aug', h: 85, v: '17K' },
                            { m: 'Sep', h: 90, v: '22K' }, { m: 'Oct', h: 93, v: '28K' },
                            { m: 'Nov', h: 96, v: '35K' }, { m: 'Dec', h: 100, v: '45K' },
                        ];
                        const chartH = 160;
                        const barW = 100 / bars.length;
                        const points = bars.map((b, i) => `${i * barW + barW / 2}%,${chartH - (b.h / 100) * chartH + 4}px`).join(' ');
                        return (
                            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-1">
                                    <h4 className="font-bold text-sm">Projected Follower Growth</h4>
                                    <div className="flex items-center gap-2">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75" />
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan" />
                                        </span>
                                        <span className="text-[10px] font-bold text-brand-cyan">LIVE</span>
                                    </div>
                                </div>
                                <div className="flex items-baseline gap-2 mb-5">
                                    <motion.span
                                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                                        className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-sky"
                                    >45K</motion.span>
                                    <span className="text-xs text-emerald-400 font-bold">+3,650%</span>
                                    <span className="text-xs text-slate-500 ml-auto">12-month projection</span>
                                </div>

                                {/* Chart area */}
                                <div className="relative" style={{ height: `${chartH + 24}px` }}>
                                    {/* Horizontal grid lines */}
                                    {[0, 25, 50, 75, 100].map((pct, gi) => (
                                        <div key={gi} className="absolute left-0 right-0 flex items-center gap-2"
                                            style={{ bottom: `${pct / 100 * chartH + 24}px` }}>
                                            <span className="text-[8px] text-slate-600 w-5 text-right shrink-0">{pct === 0 ? '' : `${pct}%`}</span>
                                            <div className="flex-1 border-t border-white/5" />
                                        </div>
                                    ))}

                                    {/* SVG glow line overlay */}
                                    <svg className="absolute pointer-events-none" viewBox="0 0 360 160" preserveAspectRatio="none"
                                        style={{ height: `${chartH}px`, top: 0, left: '28px', right: 0, width: 'calc(100% - 28px)', position: 'absolute' }}>
                                        <defs>
                                            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#3F8FCC" stopOpacity="0.6" />
                                                <stop offset="100%" stopColor="#5FD3E6" stopOpacity="1" />
                                            </linearGradient>
                                            <filter id="glow">
                                                <feGaussianBlur stdDeviation="3" result="blur" />
                                                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                                            </filter>
                                            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#3F8FCC" stopOpacity="0.2" />
                                                <stop offset="100%" stopColor="#3F8FCC" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        {/* Area fill */}
                                        <motion.path
                                            d={`M ${bars.map((b, i) => {
                                                const segW = 360 / bars.length;
                                                const x = i * segW + segW / 2;
                                                const y = 160 - (b.h / 100) * 156;
                                                return `${x},${y}`;
                                            }).join(' L ')} L 360,160 L 0,160 Z`}
                                            fill="url(#areaGrad)"
                                            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }} transition={{ duration: 1, delay: 0.6 }}
                                        />
                                        {/* Glow line */}
                                        <motion.path
                                            d={`M ${bars.map((b, i) => {
                                                const segW = 360 / bars.length;
                                                const x = i * segW + segW / 2;
                                                const y = 160 - (b.h / 100) * 156;
                                                return `${x},${y}`;
                                            }).join(' L ')}`}
                                            fill="none" stroke="url(#lineGrad)" strokeWidth="2.5"
                                            strokeLinecap="round" strokeLinejoin="round"
                                            filter="url(#glow)"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            whileInView={{ pathLength: 1, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.8, ease: 'easeOut', delay: 0.3 }}
                                        />
                                        {/* Glowing dot at end */}
                                        <motion.circle
                                            cx={360 - (360 / bars.length) / 2}
                                            cy={160 - (bars[bars.length - 1].h / 100) * 156}
                                            r="5" fill="#5FD3E6"
                                            initial={{ scale: 0, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 2.1, duration: 0.4, type: 'spring' }}
                                        />
                                    </svg>

                                    {/* Bars */}
                                    <div className="absolute bottom-6 left-7 right-0 h-full flex items-end gap-1">
                                        {bars.map((bar, i) => (
                                            <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative">
                                                {/* Tooltip on hover */}
                                                <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                                                    <div className="bg-brand-medium text-white text-[9px] font-black px-2 py-1 rounded-lg whitespace-nowrap shadow-lg shadow-brand-medium/30">
                                                        {bar.v} followers
                                                    </div>
                                                </div>
                                                <motion.div
                                                    initial={{ scaleY: 0 }}
                                                    whileInView={{ scaleY: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.07, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                                                    style={{ originY: 1, height: `${(bar.h / 100) * chartH}px` }}
                                                    className={`w-full rounded-t-sm relative overflow-hidden ${i === bars.length - 1
                                                        ? 'bg-gradient-to-t from-brand-medium via-brand-sky to-brand-cyan shadow-[0_0_16px_rgba(95,211,230,0.5)]'
                                                        : 'bg-gradient-to-t from-brand-deep to-brand-medium group-hover:to-brand-sky'
                                                        } transition-colors duration-300`}
                                                >
                                                    {/* Shimmer */}
                                                    <motion.div
                                                        animate={{ x: ['-100%', '200%'] }}
                                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.1, ease: 'linear' }}
                                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                                                    />
                                                </motion.div>
                                                <span className="text-[7px] sm:text-[8px] font-bold text-slate-500">{bar.m}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Footer stats */}
                                <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                                    {[{ l: 'Start', v: '1.2K' }, { l: 'Mid-Year', v: '9.8K' }, { l: 'Year End', v: '45K' }].map((s, i) => (
                                        <div key={i} className="text-center">
                                            <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider">{s.l}</span>
                                            <motion.span
                                                initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                                transition={{ delay: 1.2 + i * 0.15 }}
                                                className="block text-sm font-black text-brand-cyan"
                                            >{s.v}</motion.span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })()}
                </div>
            </section>

            {/* 1️⃣4️⃣ Analytics & Monthly Reporting */}
            <section className="py-16 md:py-28 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    <div className="order-2 lg:order-1 p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-xl">
                        <div className="flex items-center justify-between mb-6"><h4 className="font-bold text-sm">Monthly Report — March 2026</h4><Gauge className="w-5 h-5 text-brand-medium" /></div>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            {[{ l: 'Engagement Rate', v: '6.8%', d: '+2.1%', c: 'text-emerald-500' }, { l: 'Total Reach', v: '284K', d: '+45%', c: 'text-brand-medium' }, { l: 'Followers Gained', v: '+3,420', d: '+62%', c: 'text-brand-cyan' }, { l: 'Leads Generated', v: '156', d: '+38%', c: 'text-brand-cyan' }].map((m, i) => (
                                <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                                    <span className="text-[9px] font-bold uppercase text-slate-400 block mb-1">{m.l}</span>
                                    <span className="text-xl font-black block">{m.v}</span>
                                    <span className={`text-[10px] font-bold ${m.c}`}>{m.d}</span>
                                </div>
                            ))}
                        </div>
                        <div className="h-20 rounded-xl bg-gradient-to-r from-brand-medium/10 to-brand-deep/10 border border-brand-medium/10 flex items-end p-2 gap-1">
                            {[30, 45, 35, 60, 50, 70, 55, 80, 65, 85, 75, 90].map((h, i) => (
                                <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex-1 bg-gradient-to-t from-brand-medium to-brand-deep rounded-t opacity-70" />
                            ))}
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 space-y-8">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Data-Driven Results</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Analytics & Monthly Reporting.</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">Full transparency with detailed monthly reports covering every metric that matters for your business growth.</p>
                        <ul className="space-y-3">
                            {['Engagement Rate Tracking', 'Reach & Impressions Analysis', 'Growth Analytics & Trends', 'Lead Tracking & Attribution', 'Performance Insights & Recommendations'].map((item, i) => (
                                <li key={i} className="flex gap-3 items-center"><CheckCircle2 className="w-5 h-5 text-brand-medium shrink-0" /><span className="font-medium text-sm">{item}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 1️⃣5️⃣ Paid Ads Integration */}
            <section className="py-16 md:py-28 px-4 md:px-6 bg-slate-50 dark:bg-slate-900/50 reveal-section">
                <div className="max-w-5xl mx-auto text-center space-y-10">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30"><Award className="w-4 h-4 text-amber-600 dark:text-amber-400" /><span className="text-[10px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">Optional Add-On</span></div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Paid Ads Integration.</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Supercharge your organic growth with precision-targeted paid social campaigns for faster results.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[{ t: 'Meta Ads', d: 'Facebook & Instagram ad campaigns optimized for your goals.', i: Facebook }, { t: 'Lead Generation', d: 'High-converting lead gen campaigns that fill your pipeline.', i: Target }, { t: 'Retargeting', d: 'Re-engage visitors who didn\'t convert the first time.', i: Repeat }, { t: 'Performance Scaling', d: 'Scale winning campaigns for maximum ROI.', i: TrendingUp }].map((item, i) => (
                            <motion.div key={i} whileHover={{ y: -5 }} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-left hover:border-amber-500/30 transition-all">
                                <item.i className="w-7 h-7 text-amber-500 mb-4" />
                                <h4 className="font-bold text-sm mb-2">{item.t}</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 1️⃣6️⃣ Our Process */}
            <section className="py-16 md:py-28 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Step-by-Step</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Social Media Process.</h2>
                    </div>
                    <div className="relative">
                        <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-medium/30 to-transparent hidden lg:block" />
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {[{ s: '01', t: 'Audit & Strategy', i: Search }, { s: '02', t: 'Content Planning', i: Calendar }, { s: '03', t: 'Design & Creation', i: Palette }, { s: '04', t: 'Post & Engage', i: Share2 }, { s: '05', t: 'Optimize & Report', i: LineChart }].map((step, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center group">
                                    <div className="relative z-10 w-14 h-14 mx-auto mb-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-white/10 group-hover:border-brand-medium flex items-center justify-center transition-colors shadow-lg">
                                        <step.i className="w-6 h-6 text-slate-400 group-hover:text-brand-medium transition-colors" />
                                    </div>
                                    <span className="text-2xl font-black text-slate-100 dark:text-white/5 block mb-1">{step.s}</span>
                                    <h4 className="font-bold text-sm">{step.t}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 1️⃣7️⃣ Portfolio / Sample Posts — Carousel */}
            {(() => {
                const cards = [
                    {
                        id: 'instagram',
                        label: 'Instagram Feed',
                        platform: 'Instagram',
                        bg: 'from-brand-deep via-brand-medium to-brand-sky',
                        content: (
                            <div className="absolute inset-0 p-6 flex flex-col">
                                <div className="flex items-center gap-3 mb-auto">
                                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center"><Instagram className="w-4 h-4 text-white" /></div>
                                    <div><div className="h-2 w-24 bg-white/40 rounded mb-1.5" /><div className="h-1.5 w-16 bg-white/20 rounded" /></div>
                                    <div className="ml-auto w-6 h-1 bg-white/30 rounded" />
                                </div>
                                <div className="flex-1 flex items-center justify-center my-6">
                                    <div className="text-center space-y-3">
                                        <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }} className="text-7xl font-black text-white/90 leading-none">340%</motion.div>
                                        <div className="text-white/60 text-sm font-bold uppercase tracking-widest">Engagement Growth</div>
                                        <div className="h-0.5 w-28 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex gap-6">
                                        {[Heart, MessageSquare, Share2].map((Icon, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <Icon className="w-5 h-5 text-white/70" />
                                                <span className="text-white/60 text-sm font-bold">{['12.4K', '892', '3.2K'][i]}</span>
                                            </div>
                                        ))}
                                        <Bookmark className="w-5 h-5 text-white/70 ml-auto" />
                                    </div>
                                    <div className="space-y-1.5"><div className="h-2 w-full bg-white/20 rounded" /><div className="h-2 w-3/4 bg-white/15 rounded" /></div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        id: 'reels',
                        label: 'Reels Content',
                        platform: 'Reels',
                        bg: '',
                        bgStyle: { background: 'linear-gradient(135deg, #e63946 0%, #f4a261 100%)' },
                        content: (
                            <div className="absolute inset-0 p-6 flex flex-col">
                                <div className="flex items-center gap-3 mb-auto">
                                    <Youtube className="w-6 h-6 text-white" />
                                    <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Short-Form Video</span>
                                </div>
                                <div className="flex-1 flex items-center justify-center">
                                    <div className="text-center space-y-4">
                                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mx-auto">
                                            <Play className="w-10 h-10 text-white ml-1" />
                                        </div>
                                        <div className="text-white font-black text-4xl">52K Views</div>
                                        <div className="text-white/60 text-sm">Avg per Reel</div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <span className="text-white/60 text-xs font-bold">0:42</span>
                                        <div className="flex-1 h-1.5 bg-white/20 rounded-full"><div className="h-full w-2/3 bg-white rounded-full" /></div>
                                        <span className="text-white/60 text-xs font-bold">1:04</span>
                                    </div>
                                    <div className="text-white/50 text-xs text-center">Trending audio · Hook-based script</div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        id: 'linkedin',
                        label: 'LinkedIn Post',
                        platform: 'LinkedIn',
                        bg: '',
                        bgStyle: { background: 'linear-gradient(135deg, #0077b5 0%, #004182 100%)' },
                        content: (
                            <div className="absolute inset-0 p-6 flex flex-col">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center"><Linkedin className="w-5 h-5 text-white" /></div>
                                    <div><div className="h-2 w-28 bg-white/40 rounded mb-1.5" /><div className="h-1.5 w-20 bg-white/20 rounded" /></div>
                                </div>
                                <div className="space-y-2 mb-auto">
                                    {[1, 0.85, 0.7, 0.55].map((w, i) => <div key={i} className="h-2.5 rounded" style={{ width: `${w * 100}%`, background: 'rgba(255,255,255,0.2)' }} />)}
                                </div>
                                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
                                    {[{ l: 'Likes', v: '4.1K' }, { l: 'Comments', v: '218' }, { l: 'Reposts', v: '890' }].map((s, i) => (
                                        <div key={i} className="text-center">
                                            <div className="text-white font-black text-2xl">{s.v}</div>
                                            <div className="text-white/50 text-[10px] uppercase font-bold tracking-wider">{s.l}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ),
                    },
                    {
                        id: 'carousel',
                        label: 'Carousel Design',
                        platform: 'Carousel',
                        bg: 'from-brand-deep to-brand-medium',
                        content: (
                            <div className="absolute inset-0 p-6 flex flex-col">
                                <div className="flex items-center gap-3 mb-6">
                                    <Layers className="w-5 h-5 text-brand-cyan" />
                                    <span className="text-brand-cyan text-xs font-bold uppercase tracking-widest">Swipe-worthy Carousel</span>
                                </div>
                                <div className="flex-1 flex items-center justify-center">
                                    <div className="flex gap-4">
                                        {[1, 2, 3].map(n => (
                                            <motion.div key={n}
                                                animate={{ y: [0, n % 2 === 0 ? -10 : 10, 0] }}
                                                transition={{ duration: 2 + n * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                                                className={`w-20 h-32 rounded-2xl border border-white/20 bg-white/5 backdrop-blur ${n === 2 ? 'scale-110 bg-white/10 border-brand-cyan/40' : 'opacity-60'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-6">
                                    <div className="text-white font-black text-xl">Slide 1 of 8</div>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4].map(n => <div key={n} className={`h-1.5 rounded-full ${n === 1 ? 'w-6 bg-brand-cyan' : 'w-3 bg-white/30'}`} />)}
                                    </div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        id: 'story',
                        label: 'Story Template',
                        platform: 'Stories',
                        bg: 'from-emerald-500 to-teal-700',
                        content: (
                            <div className="absolute inset-0 p-6 flex flex-col">
                                <div className="w-full h-1.5 bg-white/30 rounded-full mb-4"><div className="h-full w-1/2 bg-white rounded-full" /></div>
                                <div className="flex items-center gap-3 mb-auto">
                                    <div className="w-8 h-8 rounded-full bg-white/30" />
                                    <div className="h-2 w-20 bg-white/30 rounded" />
                                    <span className="ml-auto text-white/60 text-xs font-bold">2h ago</span>
                                </div>
                                <div className="text-center mb-6 space-y-2">
                                    <div className="text-white font-black text-5xl">24hr</div>
                                    <div className="text-white/70 text-xs font-bold uppercase tracking-widest">Story Template</div>
                                    <div className="text-white/50 text-xs">On-brand story design</div>
                                </div>
                                <div className="flex justify-around text-white/60">
                                    {[Heart, Send, MessageSquare].map((Icon, i) => <Icon key={i} className="w-5 h-5" />)}
                                </div>
                            </div>
                        ),
                    },
                    {
                        id: 'analytics',
                        label: 'Analytics Report',
                        platform: 'Analytics',
                        bg: '',
                        bgStyle: { background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)', borderWidth: '1px', borderStyle: 'solid' },
                        content: (
                            <div className="absolute inset-0 p-6 flex flex-col">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2"><BarChart3 className="w-5 h-5 text-brand-cyan" /><span className="text-brand-cyan text-xs font-bold uppercase tracking-widest">Monthly Report</span></div>
                                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div className="flex items-end gap-2 flex-1">
                                    {[30, 50, 35, 65, 45, 80, 60, 90, 70, 95].map((h, i) => (
                                        <motion.div key={i} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
                                            transition={{ delay: 0.3 + i * 0.06 }} style={{ height: `${h}%`, originY: 1 }}
                                            className={`flex-1 rounded-t-sm ${i === 9 ? 'bg-brand-cyan shadow-[0_0_12px_rgba(95,211,230,0.6)]' : 'bg-brand-medium/50'}`} />
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/10">
                                    <div><div className="text-white font-black text-2xl">+284%</div><div className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Reach Growth</div></div>
                                    <div className="text-right"><div className="text-emerald-400 font-black text-2xl">6.8%</div><div className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Eng. Rate</div></div>
                                </div>
                            </div>
                        ),
                    },
                    {
                        id: 'ad',
                        label: 'Ad Creative',
                        platform: 'Paid Ads',
                        bg: 'from-amber-500 to-orange-600',
                        content: (
                            <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center gap-5">
                                <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur flex items-center justify-center">
                                    <Megaphone className="w-10 h-10 text-white" />
                                </div>
                                <div>
                                    <div className="text-white/70 text-xs font-bold uppercase mb-2 tracking-widest">Performance Ad Design</div>
                                    <div className="text-white font-black text-3xl leading-tight">Convert More.<br />Spend Less.</div>
                                </div>
                                <div className="flex gap-6">
                                    {[{ l: 'ROAS', v: '3.2x' }, { l: 'CTR', v: '4.8%' }, { l: 'CPC', v: '₹12' }].map((s, i) => (
                                        <div key={i} className="text-center">
                                            <div className="text-white font-black text-xl">{s.v}</div>
                                            <div className="text-white/60 text-[10px] uppercase font-bold">{s.l}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ),
                    },
                ];

                return (
                    <PortfolioCarousel cards={cards} />
                );
            })()}

            {/* 1️⃣8️⃣ Industries We Serve */}
            <section className="py-16 md:py-28 px-4 md:px-6 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Industry Expertise</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Industries We Serve.</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[{ t: 'Retail', i: Store }, { t: 'Real Estate', i: Home }, { t: 'Education', i: GraduationCap }, { t: 'Healthcare', i: HeartPulse }, { t: 'E-Commerce', i: ShoppingCart }, { t: 'Digital Services', i: Globe }, { t: 'Personal Brands', i: User }, { t: 'Finance', i: DollarSign }].map((ind, i) => (
                            <motion.div key={i} whileHover={{ y: -3 }} className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-brand-medium/30 transition-all">
                                <ind.i className="w-5 h-5 text-brand-medium shrink-0" />
                                <span className="font-bold text-sm">{ind.t}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 1️⃣9️⃣ Pricing */}
            <section id="pricing" className="py-16 md:py-28 px-4 md:px-6 bg-[#080B10] text-white reveal-section">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-sky font-bold uppercase tracking-[0.2em] text-xs">Investment</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Pricing Packages.</h2>
                        <p className="text-slate-400 max-w-xl mx-auto">Choose a plan that fits your growth stage. All plans include strategy, design, and reporting.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { tier: 'Basic', price: '\u20b99,999', mo: '/month', features: ['12 Posts / Month', 'Basic Post Design', 'Monthly Report', '1 Platform', 'Email Support'], highlight: false },
                            { tier: 'Standard', price: '\u20b914,999', mo: '/month', features: ['16-20 Posts / Month', 'Reels Included', '2 Platforms', 'Advanced Strategy', 'Detailed Analytics Report', 'Priority Support'], highlight: true },
                            { tier: 'Custom', price: 'Let\'s Talk', mo: '', features: ['Tailored Content Plan', 'Multi-Platform Management', 'Paid Ads Integration', 'Advanced Growth Strategy', 'Dedicated Account Manager', 'Weekly Strategy Calls'], highlight: false }
                        ].map((plan, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className={`rounded-2xl overflow-hidden relative ${plan.highlight ? 'border-2 border-brand-medium shadow-2xl shadow-brand-medium/10 bg-gradient-to-b from-brand-medium/10 to-transparent' : 'bg-white/5 border border-white/10'}`}>
                                {plan.highlight && <div className="bg-brand-medium text-white text-center py-2 text-[10px] font-black uppercase tracking-[0.3em]">Most Popular</div>}
                                <div className="p-6 md:p-8">
                                    <h3 className="text-xl font-bold mb-1">{plan.tier}</h3>
                                    <div className="text-3xl md:text-4xl font-black text-brand-sky mb-1">{plan.price}<span className="text-sm font-medium text-slate-500">{plan.mo}</span></div>
                                    <ul className="space-y-3 my-6">
                                        {plan.features.map((f, j) => (
                                            <li key={j} className="flex items-start gap-3 text-sm"><CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlight ? 'text-brand-sky' : 'text-slate-500'}`} /><span>{f}</span></li>
                                        ))}
                                    </ul>
                                    <a href="#audit" className={`block w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-center transition-all ${plan.highlight ? 'bg-brand-medium text-white hover:bg-brand-deep' : 'bg-white/5 border border-white/10 hover:border-brand-medium/50'}`}>Get Started</a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2️⃣0️⃣ FAQs */}
            < section className="py-16 md:py-28 px-4 md:px-6 reveal-section" >
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-xs">Common Questions</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Frequently Asked Questions.</h2>
                    </div>
                    <div className="space-y-3">
                        {[
                            { q: 'How many posts do you create per month?', a: 'Depending on your plan, we create 12-20+ posts per month including static posts, carousels, stories, and reels. Custom plans can include more.' },
                            { q: 'Do you create reels and video content?', a: 'Yes! Our Standard and Custom plans include reels creation with trending audio, hook-based scripts, professional editing, and captions.' },
                            { q: 'Is ad management included?', a: 'Paid ads management is available as an add-on service. We handle Meta Ads (Facebook & Instagram), including campaign strategy, creative, targeting, and optimization.' },
                            { q: 'Can I customize my package?', a: 'Absolutely. Our Custom plan is fully tailored to your specific needs, platforms, content volume, and growth goals. Let\'s discuss what works best for you.' },
                            { q: 'What results can I expect?', a: 'While results vary by industry and starting point, our clients typically see 2-5x engagement growth, 30-60% follower increase, and measurable lead generation within 3-6 months.' }
                        ].map((faq, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 overflow-hidden">
                                <button onClick={() => setOpenFAQ(openFAQ === i ? null : i)} className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <span className="font-bold text-sm md:text-base pr-4">{faq.q}</span>
                                    <motion.div animate={{ rotate: openFAQ === i ? 45 : 0 }} transition={{ duration: 0.2 }} className="shrink-0"><Plus className="w-5 h-5 text-brand-medium" /></motion.div>
                                </button>
                                <AnimatePresence>
                                    {openFAQ === i && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                                            <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">{faq.a}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2️⃣1️⃣ Free Social Media Audit Form */}
            < section id="audit" className="py-16 md:py-28 px-4 md:px-6 bg-slate-50 dark:bg-slate-900/50 reveal-section" >
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-sky via-brand-medium to-brand-cyan" />
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-medium/10 blur-[80px] rounded-full" />

                        {formStatus === 'success' ? (
                            <div className="py-16 text-center space-y-6">
                                <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto"><CheckCircle2 className="w-10 h-10 text-emerald-500" /></div>
                                <h3 className="text-2xl font-black">Audit Request Received!</h3>
                                <p className="text-slate-500">Our social media strategist will analyze your profiles and reach out within 24 hours.</p>
                                <button onClick={() => setFormStatus('idle')} className="text-brand-medium font-bold text-sm underline underline-offset-4">Submit Another</button>
                            </div>
                        ) : (
                            <>
                                <div className="text-center mb-8 space-y-3">
                                    <h3 className="text-2xl md:text-3xl font-bold">Get Your Free Social Media Audit</h3>
                                    <p className="text-sm text-slate-500">We&apos;ll analyze your profiles and provide actionable recommendations.</p>
                                </div>
                                <form onSubmit={handleFormSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div><label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Full Name *</label><div className="relative"><User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input required type="text" placeholder="John Doe" className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-medium focus:ring-2 focus:ring-brand-medium focus:border-transparent outline-none transition-all" /></div></div>
                                        <div><label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Business Name *</label><div className="relative"><Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input required type="text" placeholder="Acme Corp" className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-medium focus:ring-2 focus:ring-brand-medium focus:border-transparent outline-none transition-all" /></div></div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div><label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Social Media Handle *</label><div className="relative"><Instagram className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input required type="text" placeholder="@yourbrand" className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-medium focus:ring-2 focus:ring-brand-medium focus:border-transparent outline-none transition-all" /></div></div>
                                        <div><label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Platform</label><select className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-medium focus:ring-2 focus:ring-brand-medium focus:border-transparent outline-none transition-all appearance-none"><option>Instagram</option><option>Facebook</option><option>LinkedIn</option><option>YouTube</option><option>Multiple Platforms</option></select></div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div><label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Monthly Budget</label><select className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-medium focus:ring-2 focus:ring-brand-medium focus:border-transparent outline-none transition-all appearance-none"><option>Under ₹10,000</option><option>₹10,000 - ₹25,000</option><option>₹25,000 - ₹50,000</option><option>₹50,000+</option></select></div>
                                        <div><label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Primary Goal</label><select className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-medium focus:ring-2 focus:ring-brand-medium focus:border-transparent outline-none transition-all appearance-none"><option>Brand Awareness</option><option>Lead Generation</option><option>Sales & Revenue</option><option>Community Building</option><option>All of the Above</option></select></div>
                                    </div>
                                    <button disabled={formStatus === 'submitting'} type="submit" className="w-full py-5 rounded-xl bg-gradient-to-r from-brand-medium to-brand-deep text-white font-black uppercase tracking-widest text-sm hover:shadow-xl hover:shadow-brand-medium/20 transition-all flex items-center justify-center gap-3">
                                        <Send className="w-5 h-5" />
                                        {formStatus === 'submitting' ? 'Processing...' : 'Get Free Audit'}
                                    </button>
                                    <p className="text-center text-[11px] text-slate-400">We&apos;ll respond within 24 hours with your personalized audit report.</p>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* 2️⃣2️⃣ Final CTA */}
            < section className="py-16 md:py-28 px-4 md:px-6 bg-[#020617] text-white relative overflow-hidden" >
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gradient-to-br from-brand-medium/20 via-brand-medium/15 to-brand-cyan/20 blur-[200px] rounded-full" />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                        <span className="text-brand-sky font-bold uppercase tracking-[0.3em] text-xs">Your Move</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">Ready to Dominate<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky via-brand-medium to-brand-cyan">Social Media?</span></h2>
                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">Let&apos;s build a powerful online presence that converts followers into customers.</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <a href="#audit" className="px-8 sm:px-12 py-5 sm:py-6 bg-gradient-to-r from-brand-medium to-brand-deep text-white rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-xs sm:text-sm hover:shadow-[0_0_60px_rgba(63,143,204,0.4)] transition-all hover:-translate-y-1 flex items-center justify-center gap-3"><Rocket className="w-5 h-5" /> Start My Social Growth</a>
                        <a href="tel:+919876543210" className="px-8 sm:px-12 py-5 sm:py-6 border-2 border-white/10 rounded-xl sm:rounded-2xl font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-3"><Phone className="w-5 h-5" /> Call Us Directly</a>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-8 border-t border-white/10">
                        {[{ v: '500+', l: 'Posts Created' }, { v: '96%', l: 'Client Satisfaction' }, { v: '3x', l: 'Avg Growth Rate' }, { v: '50+', l: 'Brands Managed' }].map((stat, i) => (
                            <div key={i} className="text-center"><span className="block text-2xl font-black text-brand-sky">{stat.v}</span><span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{stat.l}</span></div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main >
    );
}
