"use client";

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import {
    Users,
    Target,
    Rocket,
    Shield,
    Zap,
    TrendingUp,
    Globe,
    Cpu,
    Heart,
    CheckCircle2,
    ArrowRight,
    Sparkles,
    BarChart3,
    Lightbulb,
    Workflow,
    Search,
    Layout,
    Command,
    Plus,
    Code2,
    Cloud,
    MessageSquare,
    Palette,
    Settings,
    Headphones,
    Smile,
    Play
} from 'lucide-react';

enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}

import ThreeSphereScene from '../../components/ThreeSphere';

export default function AboutPage() {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
    const [isPlaying, setIsPlaying] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const isDark = theme === Theme.DARK;

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        if (newTheme === Theme.DARK) {
            /* handled by next-themes */
        } else {
            /* handled by next-themes */
        }
    };

    useEffect(() => {
        // Default is light, no need to force dark
    }, []);

    const headlineVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
            }
        })
    };

    const yBg = useTransform(scrollYProgress, [0, 0.3], [0, 200]);
    const yText = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

    return (
        <main ref={containerRef} className="relative z-10 selection:bg-brand-medium/30 overflow-x-hidden bg-background text-foreground transition-colors duration-300">
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />

            {/* 1. HERO SECTION: STRONG POSITIONING */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
                {/* Background Animation & Glows */}
                <motion.div style={{ y: yBg, opacity: opacityHero }} className="absolute inset-0 z-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-medium/20 rounded-full blur-[120px] animate-pulse" />
                        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[100px]" />
                        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
                    </motion.div>

                    {/* 3D CENTRAL ELEMENT (Matching Landing Page) */}
                    <div className={`absolute inset-0 z-[1] flex items-center justify-center ${isDark ? 'opacity-60 lg:opacity-90' : 'opacity-100'}`}>
                        <div className="w-full h-full max-w-5xl opacity-40">
                            <ThreeSphereScene isDark={isDark} />
                        </div>
                    </div>

                    {/* Animated Grid Pattern */}
                    <div className="absolute inset-0 z-[2]">
                        <motion.div
                            initial={{ opacity: 0, backgroundSize: "60px 60px" }}
                            animate={{ opacity: 1, backgroundSize: "40px 40px" }}
                            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent_100%)]"
                        />

                        {/* Scanning Light Effect */}
                        <motion.div
                            initial={{ y: "-100%" }}
                            animate={{ y: "100%" }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-medium/5 to-transparent h-1/2 w-full pointer-events-none"
                        />
                    </div>
                </motion.div>

                <motion.div style={{ y: yText, opacity: opacityHero }} className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center"
                    >
                        <motion.span
                            variants={headlineVariants}
                            custom={0}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-medium/10 text-brand-medium text-[10px] font-black uppercase tracking-[0.4em] mb-8 border border-brand-medium/20 backdrop-blur-xl"
                        >
                            <Sparkles className="w-3 h-3" />
                            Innovation Meets Execution
                        </motion.span>

                        <motion.h1
                            variants={headlineVariants}
                            custom={1}
                            className="text-4xl md:text-7xl lg:text-8xl font-black leading-[1] md:leading-[0.9] uppercase tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground to-foreground/40"
                        >
                            Building Digital <br className="hidden md:block" />
                            <span className="text-brand-medium">Solutions</span> for a <br className="hidden md:block" />
                            Smarter Future
                        </motion.h1>

                        <motion.p
                            variants={headlineVariants}
                            custom={2}
                            className="text-lg md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed font-medium mb-12"
                        >
                            Preet Tech is a forward-thinking IT company delivering scalable, modern, and performance-driven digital solutions.
                        </motion.p>

                        <motion.div
                            variants={headlineVariants}
                            custom={3}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            <button className="group relative px-10 py-5 bg-brand-medium text-black rounded-2xl font-black text-xs uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(63,143,204,0.3)]">
                                <span className="relative z-10 flex items-center gap-2">
                                    Work With Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                            </button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* 2. WHO WE ARE: HUMAN STORY */}
            <section className="py-24 px-6 bg-white dark:bg-[#07090f] transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative rounded-[2.5rem] overflow-hidden aspect-square max-w-lg mx-auto border border-slate-200 dark:border-white/5">
                                <div className="absolute inset-0 bg-brand-medium/5" />
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                                    alt="Our Team"
                                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-x-8 bottom-8 p-6 bg-white/95 dark:bg-black/80 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-white/10">
                                    <p className="text-sm font-medium italic text-slate-600 dark:text-slate-300">
                                        "We don’t just write code; we architect experiences that redefine how businesses interact with the world."
                                    </p>
                                </div>
                            </div>
                            {/* Decorative Accents */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-brand-medium animate-pulse" />
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-brand-cyan animate-pulse" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-brand-medium font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Our Story</span>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6 leading-none">
                                Human Intelligence <br />
                                <span className="text-brand-medium">Digital Craft.</span>
                            </h2>
                            <div className="space-y-4 text-slate-500 dark:text-slate-400 text-base md:text-lg font-medium leading-relaxed">
                                <p>
                                    Founded with a mission to bridge the gap between complex technology and business growth, Preet Tech started as a small collective of visionaries who believed that software should be more than just functional—it should be transformative.
                                </p>
                                <p>
                                    We are a passionate team of developers, designers, and strategists dedicated to helping businesses grow through technology. Our approach is human-centric, focusing on solving real problems with scalable, future-ready solutions.
                                </p>
                                <p>
                                    Whether it's a startup looking for its first MVP or an enterprise scaling its digital ecosystem, we bring the same level of engineering precision and creative imagination to every project.
                                </p>
                            </div>

                            <div className="mt-10 grid grid-cols-2 md:flex md:gap-6 gap-y-8 gap-x-4">
                                <div>
                                    <h4 className="text-2xl md:text-3xl font-black text-brand-medium mb-1">2021</h4>
                                    <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500">Founded</p>
                                </div>
                                <div className="hidden md:block w-px h-10 bg-slate-200 dark:bg-white/10" />
                                <div>
                                    <h4 className="text-2xl md:text-3xl font-black text-foreground mb-1">50+</h4>
                                    <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500">Systems Built</p>
                                </div>
                                <div className="hidden md:block w-px h-10 bg-slate-200 dark:bg-white/10" />
                                <div className="col-span-2 md:col-span-1">
                                    <h4 className="text-2xl md:text-3xl font-black text-foreground mb-1">99%</h4>
                                    <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-500">Client Success</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2.5 VIDEO SECTION: THE PREET TECH EXPERIENCE */}
            <section className="py-16 md:py-24 px-6 relative overflow-hidden bg-slate-50 dark:bg-[#0b101b]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(63,143,204,0.05),transparent_70%)]" />
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-brand-medium font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Visual Narrative</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-tight mb-4 text-foreground dark:text-white">
                            The Preet Tech <br /> <span className="text-brand-medium">Experience.</span>
                        </h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative aspect-video rounded-[2.5rem] overflow-hidden bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-white/10 shadow-2xl group"
                    >
                        {/* YouTube Background Autoplay */}
                        <div className="absolute inset-0 pointer-events-none scale-[1.05]">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/2jmiNO3jwrA?autoplay=1&mute=1&loop=1&playlist=2jmiNO3jwrA&controls=0&modestbranding=1&rel=0&playsinline=1&showinfo=0"
                                title="Preet Tech Experience"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                        </div>

                        {/* Visual Grayscale to Color Transition Layer (Subtle) */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-1000" />

                        {/* Top Gradient Overlay */}
                        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

                        {/* Bottom Info Bar */}
                        <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 flex justify-between items-end bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                            <div className="text-white">
                                <p className="text-[10px] font-black uppercase tracking-widest text-brand-medium mb-1">Visual Narrative</p>
                                <h4 className="text-xl md:text-2xl font-black uppercase tracking-tighter">The Preet Tech Experience</h4>
                            </div>
                            <div className="flex gap-4">
                                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
                                    <ArrowRight className="w-4 h-4 text-white -rotate-45" />
                                </div>
                            </div>
                        </div>

                        {/* Optional Interaction Layer (Unmute/Watch link) */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <a
                                href="https://youtu.be/2jmiNO3jwrA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-brand-medium text-black rounded-full font-black text-[10px] uppercase tracking-widest shadow-2xl hover:scale-110 transition-transform"
                            >
                                Watch with Sound
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. MISSION & VISION: TWO CARDS */}
            <section className="py-16 md:py-32 bg-slate-50 dark:bg-white/[0.02] relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-medium">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-white dark:bg-[#0b0f1a] border border-slate-200 dark:border-white/5 relative overflow-hidden transition-all hover:border-brand-medium/30"
                        >
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-brand-medium/10 flex items-center justify-center text-brand-medium mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <Target className="w-8 h-8" />
                                </div>
                                <span className="text-brand-medium font-black uppercase tracking-widest text-[10px] mb-4 block">The Mission</span>
                                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-4 leading-tight md:leading-none">Innovative. <br className="hidden md:block" /> Scalable. <br className="hidden md:block" /> Future-Ready.</h3>
                                <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
                                    Deliver innovative, scalable, and future-ready IT solutions that empower businesses to lead in an ever-evolving digital world.
                                </p>
                            </div>
                            <Target className="absolute -right-20 -bottom-20 w-80 h-80 text-brand-medium/5 group-hover:text-brand-medium/10 transition-colors duration-500" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] bg-brand-medium text-white relative overflow-hidden transition-all shadow-[0_20px_50px_rgba(63,143,204,0.3)] hover:-translate-y-2"
                        >
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500">
                                    <Globe className="w-8 h-8" />
                                </div>
                                <span className="text-white/80 font-black uppercase tracking-widest text-[10px] mb-4 block">The Vision</span>
                                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-4 leading-tight md:leading-none">Your Trusted <br className="hidden md:block" /> Global Tech <br className="hidden md:block" /> Partner.</h3>
                                <p className="text-base md:text-xl text-white/80 leading-relaxed">
                                    To become a trusted technology partner for growing businesses worldwide, setting the standard for digital excellence and innovation.
                                </p>
                            </div>
                            <Globe className="absolute -right-20 -bottom-20 w-80 h-80 text-white/10 group-hover:text-white/20 transition-colors duration-500" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. WHAT WE DO: SERVICE CARDS */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-brand-medium font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Core Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
                            High-Impact <br /> <span className="text-brand-medium">Capabilities.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "Web Development", icon: Code2, desc: "Building high-performance, SEO-optimized web architectures using cutting-edge frameworks." },
                            { title: "Software Development", icon: Command, desc: "Custom industrial-grade software tailored to solve complex business logic and workflows." },
                            { title: "Mobile App Development", icon: Zap, desc: "Creating immersive iOS and Android experiences that put your business in the user's pocket." },
                            { title: "UI/UX Design", icon: Palette, desc: "Sleek, premium, and conversion-focused interfaces that wow users at first glance." },
                            { title: "Cloud Solutions", icon: Cloud, desc: "Scalable cloud infrastructure and devops strategies for 99.9% reliability and global scale." },
                            { title: "IT Consulting", icon: MessageSquare, desc: "Strategic technology roadmaps that align your IT investment with long-term business goals." }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 rounded-[2rem] bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-brand-medium/50 transition-all duration-500 flex flex-col items-start shadow-sm"
                            >
                                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-brand-medium mb-6 group-hover:bg-brand-medium group-hover:text-black transition-all duration-500">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-black uppercase tracking-tighter mb-3">{service.title}</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                    {service.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. OUR APPROACH: PROCESS STEPS */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900 text-foreground dark:text-white relative overflow-hidden transition-colors duration-500">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-medium/30 rounded-full blur-[150px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
                        <div>
                            <span className="text-brand-medium font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Professional Protocol</span>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.8]">
                                OUR <span className="text-brand-medium">APPROACH.</span>
                            </h2>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 font-medium max-w-sm text-base">
                            A structured, transparent methodology refined over hundreds of successful deployments.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-x-4 gap-y-12 md:gap-8">
                        {[
                            { step: "01", title: "Discover & Understand", icon: Search },
                            { step: "02", title: "Plan & Strategize", icon: Layout },
                            { step: "03", title: "Design & Develop", icon: Code2 },
                            { step: "04", title: "Test & Optimize", icon: Settings },
                            { step: "05", title: "Launch & Support", icon: Rocket }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 rounded-full border-2 border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 relative z-10 bg-white dark:bg-slate-900 group-hover:border-brand-medium transition-colors duration-500 shadow-xl dark:shadow-none">
                                    <item.icon className="w-6 h-6 text-brand-medium" />
                                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-brand-medium text-black text-[8px] font-black flex items-center justify-center">
                                        {item.step}
                                    </div>
                                </div>
                                <h4 className="text-[10px] md:text-base font-black uppercase tracking-tighter text-foreground dark:text-white group-hover:text-brand-medium transition-colors">{item.title}</h4>

                                {i < 4 && (
                                    <div className="hidden lg:block absolute top-8 left-[70%] w-full h-[1px] bg-gradient-to-r from-brand-medium/50 to-transparent" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. WHY CHOOSE PREET TECH: BULLET POINTS */}
            <section className="py-24 px-6 bg-background relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-brand-medium font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">The Competitive Edge</span>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-10 leading-none">
                                Why Choose <br /> <span className="text-brand-medium">Preet Tech?</span>
                            </h2>

                            <div className="space-y-4">
                                {[
                                    { title: "Future-ready technology", desc: "We utilize the latest tech stacks to ensure your products remain relevant for years.", icon: Rocket },
                                    { title: "Scalable architecture", desc: "Systems designed to handle traffic spikes and grow as your business expands.", icon: Cloud },
                                    { title: "Performance-focused solutions", desc: "Optimizing every line of code for sub-second load times and high efficiency.", icon: Zap },
                                    { title: "Client-centric approach", desc: "Your goals are our primary KPI. We work as an extension of your own team.", icon: Users },
                                    { title: "Transparent communication", desc: "No jargon, no hidden fees—just honest architecture and clear progress updates.", icon: MessageSquare }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 10, scale: 1.02 }}
                                        className="relative p-5 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:border-brand-medium/30 transition-all duration-300 group overflow-hidden shadow-sm hover:shadow-lg"
                                    >
                                        <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-medium scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300" />
                                        <div className="flex gap-5 items-start relative z-10">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center group-hover:bg-brand-medium group-hover:border-brand-medium transition-all duration-500 shadow-sm">
                                                <item.icon className="w-6 h-6 text-brand-medium group-hover:text-black transition-colors" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-black uppercase tracking-tighter mb-1 text-foreground transition-colors group-hover:text-brand-medium">{item.title}</h4>
                                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                        {/* Subtle background glow on hover */}
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-32 bg-brand-medium/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="relative font-medium">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative rounded-[3rem] border border-slate-200 dark:border-white/10 p-2 sm:p-4 bg-white dark:bg-[#0b0f1a] overflow-hidden"
                            >
                                <div className="relative z-10 h-full w-full">
                                    {/* Embedded Autoplay Video Player */}
                                    <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-lg group bg-slate-100 dark:bg-slate-900">
                                        <div className="absolute inset-0 bg-brand-medium/5 pointer-events-none z-10 mix-blend-overlay" />
                                        <iframe
                                            className="w-full h-[150%] absolute top-1/2 left-0 -translate-y-1/2 scale-[1.05] pointer-events-none"
                                            src="https://www.youtube.com/embed/2jmiNO3jwrA?autoplay=1&mute=1&loop=1&playlist=2jmiNO3jwrA&controls=0&modestbranding=1&rel=0&playsinline=1&showinfo=0"
                                            title="Autoplay Video"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        ></iframe>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Card Detail */}
                            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-medium rounded-full blur-[80px] opacity-20" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. INDUSTRY INSIGHTS / INNOVATION SECTION */}
            <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900 text-foreground dark:text-white transition-colors duration-500">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-medium/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-3xl mb-16">
                        <span className="text-brand-medium font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Innovation Engine</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-6">
                            Staying Ahead of the <br /> <span className="text-brand-medium">Digital Curve.</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                            We stay ahead of industry trends like AI, automation, and cloud technologies to deliver next-gen solutions that give our clients a competitive edge.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Artificial Intelligence", icon: Cpu, desc: "Implementing LLMs and neural architectures to automate intelligence." },
                            { title: "Cloud Native", icon: Cloud, desc: "Building modular, elastic infrastructures for infinite global scale." },
                            { title: "Hyper Automation", icon: Zap, desc: "Eliminating manual friction with sophisticated robotic process automation." }
                        ].map((trend, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-brand-medium transition-all group shadow-xl dark:shadow-none"
                            >
                                <trend.icon className="w-10 h-10 text-brand-medium mb-6 group-hover:scale-110 transition-transform" />
                                <h4 className="text-xl font-black uppercase tracking-tighter mb-4 text-foreground dark:text-white">{trend.title}</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{trend.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. CLIENT-CENTRIC SECTION */}
            <section className="py-16 md:py-24 px-6 font-medium">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 md:space-y-8"
                    >
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-medium/10 flex items-center justify-center text-brand-medium mx-auto animate-bounce">
                            <Heart className="w-6 h-6 md:w-8 md:h-8 fill-current" />
                        </div>
                        <h2 className="text-2xl md:text-5xl font-black tracking-tighter uppercase leading-tight md:leading-none">
                            Built on <span className="text-brand-medium">Partnership.</span>
                        </h2>
                        <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-light italic px-4">
                            "At Preet Tech, we don’t just build projects. We build long-term partnerships. Your success is our reputation, and we take that personally."
                        </p>

                        <div className="flex justify-center gap-6 md:gap-8 pt-4 grayscale opacity-50">
                            <Smile className="w-8 h-8 md:w-10 md:h-10" />
                            <Users className="w-8 h-8 md:w-10 md:h-10" />
                            <Headphones className="w-8 h-8 md:w-10 md:h-10" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 10. CALL TO ACTION: STRONG ENDING */}
            <section className="py-24 px-6 relative overflow-hidden font-medium">
                <div className="absolute inset-0 bg-brand-medium/5 animate-pulse" />
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-brand-medium/20 text-center overflow-hidden shadow-2xl dark:shadow-none"
                    >
                        {/* Glow Accents */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(63,143,204,0.1),transparent_70%)]" />

                        <div className="relative z-10 space-y-6">
                            <h2 className="text-2xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1] md:leading-[0.9] text-foreground dark:text-white">
                                Ready to Build <br className="hidden md:block" /> <span className="text-brand-medium italic">Something Powerful?</span>
                            </h2>
                            <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
                                Let’s Turn Your Vision Into Reality. Initialize your digital transformation with our core team.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-4 bg-brand-medium text-black rounded-xl font-black text-[10px] uppercase tracking-widest shadow-[0_20px_50px_rgba(63,143,204,0.4)]"
                            >
                                Contact Us Today
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
