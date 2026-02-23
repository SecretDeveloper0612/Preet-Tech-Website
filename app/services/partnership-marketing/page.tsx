"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Users,
    TrendingUp,
    Shield,
    Globe,
    Zap,
    CheckCircle2,
    ArrowRight,
    MessageSquare,
    Building2,
    Briefcase,
    Mail,
    User,
    Phone,
    Handshake,
    Rocket,
    BarChart3,
    HeartHandshake,
    PieChart,
    ChevronRight,
    Settings,
    Cpu,
    Target,
    Layers
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function PartnershipMarketing() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Initial theme setup
    useEffect(() => {
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
        const tl = gsap.timeline();

        tl.from(".hero-content > *", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        })
            .from(".hero-form", {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.6");
    }, { scope: containerRef });

    const whyPartner = [
        {
            title: "Revenue Sharing",
            desc: "Earn competitive commissions and recurring revenue for every successful referral and long-term project.",
            icon: PieChart,
            color: "text-brand-cyan",
            bg: "bg-brand-cyan/10"
        },
        {
            title: "Long-Term Collaboration",
            desc: "We focus on building lasting relationships that evolve with market trends and technological shifts.",
            icon: Users,
            color: "text-blue-500",
            bg: "bg-blue-500/10"
        },
        {
            title: "Technical Support",
            desc: "Access our expert engineering team for consultation, integration support, and troubleshooting.",
            icon: Settings,
            color: "text-emerald-500",
            bg: "bg-emerald-500/10"
        },
        {
            title: "White-Label Services",
            desc: "Deliver our premium solutions under your brand name, maintaining a consistent experience for your clients.",
            icon: Layers,
            color: "text-purple-500",
            bg: "bg-purple-500/10"
        }
    ];

    const partnershipTypes = [
        {
            title: "Agency Partnerships",
            desc: "For creative and marketing agencies needing a reliable technical arm for high-end web and app delivery.",
            icon: Building2
        },
        {
            title: "Technology Integration",
            desc: "For SaaS and tech companies looking to build native integrations or co-developed solutions.",
            icon: Cpu
        },
        {
            title: "Reseller Programs",
            desc: "For businesses who want to bundle our services with their own products for a comprehensive offering.",
            icon: Handshake
        },
        {
            title: "Other Partnerships",
            desc: "Have a unique collaboration idea? We are open to custom strategic alliances that drive mutual value.",
            icon: Rocket
        }
    ];

    const processSteps = [
        { title: "Connect", desc: "Initial outreach & screening", icon: Globe },
        { title: "Strategy Discussion", desc: "Aligning goals & resources", icon: MessageSquare },
        { title: "Agreement", desc: "Formalizing the partnership", icon: Shield },
        { title: "Execution", desc: "Co-development & launch", icon: Rocket },
        { title: "Growth", desc: "Scaling mutual success", icon: TrendingUp }
    ];

    const benefits = [
        { title: "Scalable Income", desc: "Unlimited earning potential with our tiered partnership models.", icon: Zap },
        { title: "Brand Expansion", desc: "Leverage Preet Tech's reputation and expertise to grow your footprint.", icon: Globe },
        { title: "Access to Expertise", desc: "Early access to our latest R&D, tools, and technical frameworks.", icon: Briefcase }
    ];

    return (
        <main ref={containerRef} className="relative z-10 selection:bg-brand-cyan/30 overflow-x-hidden bg-background text-foreground dark:bg-[#020617] transition-colors duration-500">
            <Navbar isDark={isDarkMode} toggleTheme={toggleTheme} />

            {/* Hero Section */}
            <section className="relative min-h-[95vh] pt-32 pb-20 px-6 flex items-center overflow-hidden">
                {/* Background Tech Elements */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-full h-[1000px] bg-[radial-gradient(circle_at_50%_0%,rgba(95,211,230,0.1)_0%,transparent_50%)]" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-cyan/10 blur-[120px] rounded-full animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-medium/10 blur-[100px] rounded-full animate-pulse delay-1000" />
                </div>

                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    {/* Left Side: Content */}
                    <div className="hero-content">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[11px] font-bold uppercase tracking-[0.2em] mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                            Strategic Alliances for Infinite Growth
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight leading-[1.05] mb-8 text-slate-900 dark:text-white">
                            Grow Together with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-medium to-brand-cyan bg-[length:200%_auto] animate-gradient-x italic">
                                Strategic Partnerships
                            </span>.
                        </h1>

                        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-10 max-w-xl">
                            Preet Tech collaborates with agencies, startups, influencers, and businesses to build high-performance digital ecosystems. Let's merge expertise and scale together.
                        </p>

                        <div className="flex flex-wrap items-center gap-6">
                            <button className="px-8 py-4 bg-brand-cyan text-slate-950 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-950 transition-all transform hover:-translate-y-1 shadow-[0_0_30px_rgba(95,211,230,0.3)]">
                                Become a Partner
                            </button>
                            <div className="flex items-center gap-4 py-2 px-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-200 dark:border-slate-900 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?u=partner${i}`} alt="Partner" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
                                    <span className="text-brand-cyan">50+ Active</span> Partners
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Enquiry Form */}
                    <div className="hero-form lg:pl-10">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan to-brand-medium rounded-[2.5rem] blur-2xl opacity-10 animate-pulse" />

                            <div className="relative bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-slate-200 dark:border-white/10 shadow-2xl">
                                <div className="mb-8">
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-2 uppercase">Apply for Partnership</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Join our network of elite digital partners.</p>
                                </div>

                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-brand-cyan ml-1">Full Name</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                                <input type="text" placeholder="John Doe" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-all font-medium placeholder:text-slate-400" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-brand-cyan ml-1">Company Name</label>
                                            <div className="relative">
                                                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                                <input type="text" placeholder="Tech Agency" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-all font-medium placeholder:text-slate-400" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-brand-cyan ml-1">Email Address</label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                                <input type="email" placeholder="john@agency.com" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-all font-medium placeholder:text-slate-400" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-brand-cyan ml-1">Phone Number</label>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                                <input type="text" placeholder="+1 (555) 000-0000" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-all font-medium placeholder:text-slate-400" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-cyan ml-1">Partnership Type</label>
                                        <div className="relative">
                                            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                            <select className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-all font-medium appearance-none">
                                                <option className="bg-white dark:bg-slate-900">Agency Partnership</option>
                                                <option className="bg-white dark:bg-slate-900">Influencer</option>
                                                <option className="bg-white dark:bg-slate-900">Technology Partner</option>
                                                <option className="bg-white dark:bg-slate-900">Reseller Program</option>
                                                <option className="bg-white dark:bg-slate-900">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-cyan ml-1">Proposal Details</label>
                                        <textarea rows={3} placeholder="Tell us more about your potential partnership..." className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-all font-medium resize-none placeholder:text-slate-400"></textarea>
                                    </div>

                                    <button className="w-full group relative bg-brand-cyan text-slate-950 rounded-xl py-4 font-black text-xs uppercase tracking-[0.2em] hover:scale-[1.01] active:scale-[0.99] transition-all overflow-hidden shadow-xl shadow-brand-cyan/20">
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            Apply for Partnership <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Partner with Preet Tech */}
            <section className="py-32 px-6 features-section relative overflow-hidden bg-slate-50 dark:bg-slate-950/20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-brand-medium dark:text-brand-cyan text-[11px] font-black uppercase tracking-[0.4em] mb-4 block"
                        >
                            Mutual Excellence
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 text-slate-900 dark:text-white">
                            Why Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium">Preet Tech?</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto font-medium">
                            Join an ecosystem built on trust, engineering excellence, and aggressive growth strategies.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyPartner.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group p-8 rounded-[2rem] bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/[0.05] hover:border-brand-cyan/30 transition-all duration-500 shadow-sm hover:shadow-xl"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-8 border border-slate-100 dark:border-white/5 group-hover:scale-110 transition-transform duration-500`}>
                                    <item.icon className={`w-7 h-7 ${item.color}`} />
                                </div>
                                <h4 className="text-xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-4 group-hover:text-brand-cyan transition-colors">{item.title}</h4>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Types of Partnerships */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                        <div className="max-w-2xl">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-brand-medium dark:text-brand-cyan text-[10px] font-black uppercase tracking-[0.3em] mb-4 block"
                            >
                                Partnership Models
                            </motion.span>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none text-slate-900 dark:text-white">
                                Tailored for your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium italic">Business Model.</span>
                            </h2>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 max-w-sm text-sm font-medium leading-relaxed">
                            No two partners are the same. We offer flexible programs designed to fit your unique strengths and market position.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {partnershipTypes.map((type, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="group p-10 rounded-[3rem] bg-white dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-white/5 hover:border-brand-cyan/40 transition-all duration-500 h-full flex flex-col shadow-sm"
                            >
                                <div className="w-16 h-16 rounded-[1.5rem] bg-brand-cyan/10 flex items-center justify-center mb-10 group-hover:bg-brand-cyan group-hover:text-slate-950 transition-all duration-500">
                                    <type.icon className="w-8 h-8 text-brand-cyan group-hover:text-slate-950" />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 dark:text-white mb-4">{type.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed mb-8">{type.desc}</p>
                                <div className="mt-auto flex items-center gap-2 text-brand-medium dark:text-brand-cyan font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                    Learn More <ChevronRight className="w-3 h-3" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Collaboration Process */}
            <section className="py-32 px-6 process-section relative overflow-hidden bg-slate-50 dark:bg-slate-950/40">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 text-slate-900 dark:text-white">Our Collaboration <span className="text-brand-cyan">Process.</span></h2>
                        <p className="text-slate-500 max-w-2xl mx-auto font-medium">A streamlined path from first contact to exponential growth.</p>
                    </div>

                    <div className="relative">
                        {/* Connection Line */}
                        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent hidden lg:block" />

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
                            {processSteps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="text-center space-y-6"
                                >
                                    <div className="relative mx-auto w-24 h-24 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center group shadow-lg">
                                        <div className="absolute inset-0 rounded-full bg-brand-cyan blur-lg opacity-0 group-hover:opacity-20 transition-opacity" />
                                        <step.icon className="w-10 h-10 text-brand-cyan relative z-10 transition-transform group-hover:scale-110" />
                                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-cyan text-slate-950 flex items-center justify-center font-black text-xs">
                                            {i + 1}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-black uppercase tracking-tight text-slate-900 dark:text-white mb-2">{step.title}</h4>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-tight leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits of Partnership */}
            <section className="py-20 px-6 relative overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] font-black uppercase tracking-[0.3em] mb-4"
                                >
                                    <Target className="w-3 h-3" /> Core Benefits
                                </motion.div>
                                <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1] mb-6 text-slate-900 dark:text-white">
                                    Unlock Ultimate <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium italic">Partner Advantage.</span>
                                </h2>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed max-w-xl">
                                    Partnering with Preet Tech isn't just about revenue; it's about gaining a competitive edge in an increasingly technical market.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {benefits.map((benefit, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-cyan/10 group-hover:border-brand-cyan/20 transition-all shadow-sm">
                                            <benefit.icon className="w-5 h-5 text-brand-cyan" />
                                        </div>
                                        <div>
                                            <h4 className="text-base font-black uppercase tracking-tight text-slate-900 dark:text-white mb-0.5 group-hover:text-brand-cyan transition-colors">{benefit.title}</h4>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative"
                        >
                            <div className="absolute -inset-10 bg-brand-cyan/10 blur-[100px] rounded-full animate-pulse pointer-events-none" />
                            <div className="relative p-1 bg-gradient-to-br from-slate-200 dark:from-white/10 to-transparent rounded-[2.5rem] shadow-2xl overflow-hidden transition-all duration-500">
                                <div className="bg-white dark:bg-[#0a0f1a] rounded-[2.4rem] p-8 md:p-12 border border-slate-100 dark:border-white/5 relative overflow-hidden backdrop-blur-3xl transition-colors duration-500">
                                    <div className="space-y-8">
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-1">
                                                <p className="text-[9px] font-black text-brand-cyan uppercase tracking-widest">Partner Performance</p>
                                                <p className="text-xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">Elite Tier</p>
                                            </div>
                                            <div className="w-12 h-12 rounded-full bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20">
                                                <TrendingUp className="w-6 h-6 text-brand-cyan" />
                                            </div>
                                        </div>

                                        <div className="p-6 rounded-[1.5rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 space-y-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Revenue Growth</span>
                                                <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">+142% Avg</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "85%" }}
                                                    transition={{ duration: 2 }}
                                                    className="h-full bg-gradient-to-r from-brand-cyan to-brand-medium"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 pt-2">
                                                <div className="text-center">
                                                    <p className="text-[8px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">Retention</p>
                                                    <p className="text-lg font-black text-slate-900 dark:text-white tracking-tighter">96%</p>
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-[8px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">Satisfied</p>
                                                    <p className="text-lg font-black text-slate-900 dark:text-white tracking-tighter">4.9/5</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-center gap-3 py-4 px-4 rounded-[1.5rem] border-2 border-dashed border-slate-200 dark:border-white/10 text-center">
                                            <HeartHandshake className="w-5 h-5 text-brand-cyan animate-bounce" />
                                            <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest">Join our Elite Network</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="relative p-1 bg-gradient-to-r from-brand-cyan/50 via-brand-medium/50 to-brand-cyan/50 rounded-[3rem] overflow-hidden shadow-2xl">
                        <div className="bg-white dark:bg-[#020617] rounded-[2.9rem] p-12 md:p-20 text-center relative overflow-hidden transition-colors duration-500">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(95,211,230,0.1),transparent_70%)]" />

                            <div className="relative z-10 max-w-4xl mx-auto">
                                <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-8 leading-tight text-slate-900 dark:text-white">
                                    Ready to Scale <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium">Beyond Limits?</span>
                                </h2>
                                <p className="text-xl text-slate-500 dark:text-slate-400 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                                    Don't just compete in the market. Dominate it with a partnership that delivers engineering brilliance and strategic growth.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                    <button className="px-12 py-5 bg-brand-cyan text-slate-950 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-950 transition-all transform hover:-translate-y-1 shadow-[0_0_50px_rgba(95,211,230,0.4)]">
                                        Apply for Partnership
                                    </button>
                                    <button className="px-12 py-5 bg-transparent border-2 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                                        View Case Studies
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
