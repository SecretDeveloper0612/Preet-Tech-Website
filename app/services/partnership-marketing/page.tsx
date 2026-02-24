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
    Target,
    Layers,
    MousePointerClick,
    LineChart,
    Share2,
    CreditCard,
    ExternalLink,
    Search,
    BarChart,
    Check
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PartnershipMarketing() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Initial theme setup and mount check
    useEffect(() => {
        setMounted(true);
        const isDark = false;
        setIsDarkMode(isDark);
    }, []);

    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        if (newMode) {
            /* handled by next-themes */
        } else {
            /* handled by next-themes */
        }
    };

    if (!mounted) {
        return <div className="min-h-screen bg-background" />;
    }

    const whatWeDoItems = [
        {
            title: "We connect complementary brands",
            desc: "Finding the perfect synergy between products to unlock new audiences.",
            icon: Share2
        },
        {
            title: "We structure win-win revenue-sharing deals",
            desc: "Creating transparent, performance-based agreements that benefit everyone.",
            icon: PieChart
        },
        {
            title: "We execute full marketing campaigns",
            desc: "From creative design to distribution, we handle the entire launch process.",
            icon: Rocket
        },
        {
            title: "We manage the sales pipeline",
            desc: "Ensuring every lead is captured and converted through optimized funnels.",
            icon: Target
        },
        {
            title: "We track and optimize performance",
            desc: "Real-time data monitoring to scale what works and cut what doesn't.",
            icon: LineChart
        }
    ];

    const whyPreetTech = [
        {
            title: "Performance-Based Model",
            desc: "Zero upfront risk. We only win when you win. Our interests are perfectly aligned with your growth.",
            icon: TrendingUp
        },
        {
            title: "Strategic Partner Matchmaking",
            desc: "We don't just find partners; we find the RIGHT partners that complement your brand's DNA.",
            icon: Users
        },
        {
            title: "Full Campaign Execution",
            desc: "Our in-house team of experts handles strategy, creative, and technical implementation.",
            icon: Zap
        },
        {
            title: "Transparent Revenue Tracking",
            desc: "Get access to real-time dashboards showing every sale and commission generated.",
            icon: BarChart3
        },
        {
            title: "Long-term Scalable Partnerships",
            desc: "We build engines that grow over time, creating sustainable secondary revenue streams.",
            icon: Layers
        }
    ];

    const steps = [
        {
            step: "01",
            title: "Identify Complementary Brand",
            desc: "We audit your brand and match you with high-affinity partners."
        },
        {
            step: "02",
            title: "Structure Revenue-Sharing Agreement",
            desc: "Transparent contracts built on shared success and clear milestones."
        },
        {
            step: "03",
            title: "Launch Joint Campaign",
            desc: "High-impact execution across social, email, and web channels."
        },
        {
            step: "04",
            title: "Drive Targeted Traffic",
            desc: "Aggressive user acquisition targeting the partner's core audience."
        },
        {
            step: "05",
            title: "Convert and Track Revenue",
            desc: "Optimized funnels and precision tracking for every conversion."
        },
        {
            step: "06",
            title: "Optimize and Scale",
            desc: "Data-driven iteration to double down on high-performing segments."
        }
    ];

    const audiences = [
        {
            title: "E-commerce Brands",
            desc: "Scale your sales through curated product bundles and co-marketing with brands your customers love.",
            benefit: "Increase AOV & Market Reach"
        },
        {
            title: "SaaS Companies",
            desc: "Integrate with complementary tools and leverage joint workflows to reduce churn and find new users.",
            benefit: "Drive Recursive Revenue"
        },
        {
            title: "D2C Brands",
            desc: "Bypass high ad costs by tapping into established communities through strategic brand collaborations.",
            benefit: "Lower CAC Significantly"
        },
        {
            title: "Course Creators",
            desc: "Partner with influencers and relevant platforms to sell your knowledge to a 'warmed-up' audience.",
            benefit: "High-Margin Scale"
        },
        {
            title: "Agencies",
            desc: "Offer more value to your clients by implementing revenue-sharing structures that boost their ROI.",
            benefit: "Expand Service Portfolio"
        },
        {
            title: "Service Businesses",
            desc: "Build a lead-gen engine through referral partnerships with businesses in your professional circle.",
            benefit: "Predictable Lead Flow"
        }
    ];

    const collabTypes = [
        {
            title: "Direct Brand-to-Brand Sales Partnerships",
            desc: "We facilitate deals where two brands directly promote each other's products for a split of the revenue.",
            result: "Instant access to a trust-built audience."
        },
        {
            title: "Joint Digital Marketing Campaigns",
            desc: "Collaborative ads, email blasts, and content series that leverage the combined strengths of both parties.",
            result: "2X the creative power, 1/2 the ad spend."
        },
        {
            title: "Revenue-Share Joint Ventures",
            desc: "Deep integration where we build a new product or service specifically for the combined audience.",
            result: "Creation of a new, high-value asset."
        },
        {
            title: "Custom Partnership Strategy",
            desc: "Bespoke plans tailored to unique business models that don't fit the standard mold.",
            result: "Innovative growth beyond traditional routes."
        },
        {
            title: "Full Campaign Execution",
            desc: "Don't just plan—perform. We handle everything from copy to technical tracking setup.",
            result: "Plug-and-play growth engine."
        },
        {
            title: "Sales Performance Tracking",
            desc: "Precision instrumentation to ensure every dollar of revenue is attributed correctly.",
            result: "100% Transparency & Trust."
        }
    ];

    const revenueModels = [
        {
            name: "Pure Revenue Share",
            setup: "No Upfront Cost",
            share: "15-30% of Sales",
            features: [
                "Zero risk entry",
                "Full strategy & matching",
                "Execution on commission",
                "Best for high-margin brands"
            ],
            bestFor: "Proven products ready to scale."
        },
        {
            name: "Hybrid Model",
            setup: "Small Setup Fee",
            share: "5-10% of Sales",
            features: [
                "Lower commission share",
                "Priority resource allocation",
                "Custom creative assets",
                "Predictable cost structure"
            ],
            bestFor: "Businesses wanting deeper involvement.",
            highlight: true
        },
        {
            name: "Strategic JV Model",
            setup: "Custom Terms",
            share: "Varies (Profit Split)",
            features: [
                "Long-term equity/asset focus",
                "Dedicated growth team",
                "Full infrastructure support",
                "Co-branded product development"
            ],
            bestFor: "Enterprise & High-Growth Startups."
        }
    ];

    return (
        <main className="relative selection:bg-brand-cyan/30 overflow-x-hidden bg-background text-foreground dark:bg-[#020617] transition-colors duration-500 font-sans">
            <Navbar isDark={isDarkMode} toggleTheme={toggleTheme} />

            {/* Sticky Mobile CTA */}
            <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 lg:hidden border-t border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl">
                <button className="w-full py-4 bg-brand-cyan text-slate-950 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-lg active:scale-95 transition-transform">
                    Book Strategy Call
                </button>
            </div>

            {/* 1️⃣ Hero Section */}
            <section className="relative min-h-[90vh] pt-32 pb-20 px-6 flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-full h-[800px] bg-[radial-gradient(circle_at_50%_0%,rgba(95,211,230,0.15)_0%,transparent_60%)]" />
                    <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-brand-cyan/10 blur-[140px] rounded-full animate-pulse" />
                </div>

                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-content"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
                            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                            Performance-Driven Partnerships
                        </div>

                        <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.95] mb-8 text-slate-900 dark:text-white">
                            Grow Sales with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-medium to-brand-cyan bg-[length:200%_auto] italic">
                                % Revenue Share
                            </span> <br />
                            Collabs.
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6 max-w-xl">
                            We partner with brands and drive measurable sales — <span className="text-slate-900 dark:text-white font-bold underline decoration-brand-cyan decoration-4">you pay only on performance.</span>
                        </p>

                        <p className="text-lg text-slate-500 dark:text-slate-500 font-medium leading-relaxed mb-10 max-w-xl">
                            Preet Tech creates strategic brand partnerships that generate real revenue, not just awareness. We build the engine that turns "exposure" into high-margin sales.
                        </p>

                        <div className="flex flex-wrap items-center gap-6">
                            <div className="flex items-center gap-4 py-2.5 px-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 overflow-hidden shadow-lg">
                                            <img src={`https://i.pravatar.cc/100?u=collab${i}`} alt="Partner" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <span className="block text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">Trusted by</span>
                                    <span className="text-sm font-black text-slate-900 dark:text-white">50+ Scaling Brands</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Lead Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-form lg:pl-10"
                    >
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan to-brand-medium rounded-[2.5rem] blur-2xl opacity-20" />

                            <div className="relative bg-white dark:bg-slate-900/90 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-10 border border-slate-200 dark:border-white/10 shadow-2xl">
                                <div className="mb-8">
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-2 uppercase text-balance">Book Free Strategy Call</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Let's audit your partnership potential.</p>
                                </div>

                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-brand-cyan ml-1">Full Name</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                                <input type="text" placeholder="John Doe" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-all font-medium" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-brand-cyan ml-1">Brand Name</label>
                                            <div className="relative">
                                                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                                <input type="text" placeholder="Acme Inc" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-all font-medium" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-brand-cyan ml-1">Website URL</label>
                                            <div className="relative">
                                                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                                <input type="url" placeholder="yourbrand.com" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-all font-medium" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-brand-cyan ml-1">Email</label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                                <input type="email" placeholder="john@brand.com" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-all font-medium" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-brand-cyan ml-1">Monthly Revenue</label>
                                            <select className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3.5 px-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-all font-medium appearance-none">
                                                <option className="bg-white dark:bg-slate-900" value="">Select Range</option>
                                                <option value="<10k">&lt; $10k</option>
                                                <option value="10k-50k">$10k - $50k</option>
                                                <option value="50k-200k">$50k - $200k</option>
                                                <option value="200k+">$200k+</option>
                                            </select>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-brand-cyan ml-1">Interest Type</label>
                                            <select className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3.5 px-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-all font-medium appearance-none">
                                                <option className="bg-white dark:bg-slate-900" value="">Select Interest</option>
                                                <option value="collab">Brand Collab</option>
                                                <option value="marketing">Joint Marketing</option>
                                                <option value="jv">Revenue Share JV</option>
                                                <option value="not_sure">Not Sure</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-cyan ml-1">Short Description</label>
                                        <textarea rows={2} placeholder="Briefly describe your goals..." className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3.5 px-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 transition-all font-medium resize-none"></textarea>
                                    </div>

                                    <button className="w-full group relative bg-brand-cyan text-slate-950 rounded-xl py-4 font-black text-xs uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all overflow-hidden shadow-xl shadow-brand-cyan/20">
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            Book Strategy Call <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2️⃣ What We Do: Partnership Marketing */}
            <section className="py-32 px-6 relative overflow-hidden bg-slate-50 dark:bg-slate-950/20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <span className="text-brand-medium dark:text-brand-cyan text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">Our Expertise</span>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 text-slate-900 dark:text-white text-balance">
                            The Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium">Growth Engine.</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium text-lg">
                            We don't just 'do' marketing. We build ecosystems of high-performance collaborations where everyone wins.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {whatWeDoItems.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group relative p-8 rounded-[2.5rem] bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:border-brand-cyan/30 transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 flex items-center justify-center mb-8 border border-brand-cyan/5 group-hover:bg-brand-cyan group-hover:text-slate-950 transition-all duration-500">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h4 className="text-lg font-black uppercase tracking-tight text-slate-900 dark:text-white mb-4 group-hover:text-brand-cyan transition-colors">{item.title}</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3️⃣ Why Preet Tech for Your Collabs */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="text-brand-medium dark:text-brand-cyan text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">The Advantage</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[1.1] mb-8 text-slate-900 dark:text-white">
                            Why Choose <span className="italic text-brand-cyan">Preet Tech?</span>
                        </h2>
                        <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-12">
                            Traditional agencies sell 'hours' and 'services.' We sell outcomes. Our authority is built on real sales data and high-trust partnerships.
                        </p>

                        <div className="space-y-6">
                            {whyPreetTech.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="flex gap-6 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-cyan group-hover:text-slate-950 transition-all">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-black uppercase tracking-tight text-slate-900 dark:text-white mb-1 group-hover:text-brand-cyan transition-colors">{item.title}</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-10 bg-brand-cyan/20 blur-[120px] rounded-full pointer-events-none" />
                        <div className="relative p-2 bg-gradient-to-br from-slate-200 dark:from-white/10 to-transparent rounded-[3rem] shadow-xl">
                            <div className="bg-white dark:bg-[#0a0f1a] rounded-[2.8rem] p-10 md:p-14 border border-slate-100 dark:border-white/5 overflow-hidden">
                                <div className="space-y-8">
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black text-brand-cyan uppercase tracking-[0.3em]">Agency Authority</p>
                                            <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">Sales Impact</p>
                                        </div>
                                        <BarChart3 className="w-8 h-8 text-brand-cyan" />
                                    </div>

                                    <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                                        <div className="text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">$14M+</div>
                                        <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Revenue Generated for Partners</p>
                                        <div className="mt-8 flex gap-2">
                                            {[1, 2, 3, 4, 5, 6].map(i => (
                                                <div key={i} className="h-12 flex-1 bg-brand-cyan/10 rounded-lg relative overflow-hidden">
                                                    <motion.div
                                                        initial={{ height: 0 }}
                                                        whileInView={{ height: `${20 + (i * 15)}%` }}
                                                        transition={{ duration: 1, delay: i * 0.1 }}
                                                        className="absolute bottom-0 left-0 right-0 bg-brand-cyan"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-5 rounded-[1.5rem] border border-dashed border-slate-300 dark:border-white/10 justify-center">
                                        <Shield className="w-5 h-5 text-brand-cyan" />
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white">100% Performance-Aligned</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4️⃣ How Our Partnerships Boost Your Sales */}
            <section className="py-32 px-6 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#5FD3E6_0%,transparent_50%)]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 text-balance">
                            The Roadmap to <br />
                            <span className="text-brand-cyan italic">Scale.</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            A streamlined, repeatable process that removes guesswork from growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group relative"
                            >
                                <div className="text-8xl font-black text-white/5 absolute -top-8 -left-4 pointer-events-none group-hover:text-brand-cyan/10 transition-colors">
                                    {step.step}
                                </div>
                                <div className="relative z-10 pl-4 border-l-2 border-brand-cyan/30 group-hover:border-brand-cyan transition-colors">
                                    <h4 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:translate-x-2 transition-transform">{step.title}</h4>
                                    <p className="text-slate-400 font-medium leading-relaxed">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <div className="inline-flex items-center gap-6 p-2 pr-8 rounded-full bg-white/5 border border-white/10">
                            <div className="w-12 h-12 rounded-full bg-brand-cyan text-slate-950 flex items-center justify-center">
                                <MousePointerClick className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-black uppercase tracking-widest text-white/80">Reduce Risk. Increase Predictability.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5️⃣ Perfect Businesses for Our Service */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                        <div className="max-w-2xl">
                            <span className="text-brand-medium dark:text-brand-cyan text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">Target Industries</span>
                            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none text-slate-900 dark:text-white">
                                Built for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium italic">Leaders.</span>
                            </h2>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 max-w-sm text-lg font-medium">
                            If you have a high-quality product and want to scale without the 'ad-spend burden', this is for you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {audiences.map((aud, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group p-10 rounded-[3rem] bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 hover:border-brand-cyan/30 transition-all duration-500 shadow-lg"
                            >
                                <div className="mb-10 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 w-fit border border-slate-100 dark:border-white/10 group-hover:scale-110 transition-transform">
                                    <div className="w-10 h-10 flex items-center justify-center">
                                        {i === 0 && <CreditCard className="w-10 h-10 text-brand-cyan" />}
                                        {i === 1 && <Layers className="w-10 h-10 text-brand-cyan" />}
                                        {i === 2 && <Zap className="w-10 h-10 text-brand-cyan" />}
                                        {i === 3 && <User className="w-10 h-10 text-brand-cyan" />}
                                        {i === 4 && <Building2 className="w-10 h-10 text-brand-cyan" />}
                                        {i === 5 && <CheckCircle2 className="w-10 h-10 text-brand-cyan" />}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-4">{aud.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8">{aud.desc}</p>
                                <div className="pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-cyan">{aud.benefit}</span>
                                    <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-700 group-hover:text-brand-cyan transition-colors" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6️⃣ Collab Types We Drive */}
            <section className="py-32 px-6 bg-slate-50 dark:bg-slate-950/40 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 text-slate-900 dark:text-white">
                            Collab <span className="text-brand-cyan">Structures.</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium">
                            Diversified partnership models to capture every revenue opportunity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {collabTypes.map((type, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex gap-8 p-10 rounded-[2.5rem] bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 hover:shadow-xl transition-all group"
                            >
                                <div className="shrink-0 w-16 h-16 rounded-2xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan font-black text-2xl group-hover:bg-brand-cyan group-hover:text-slate-950 transition-all">
                                    {i + 1}
                                </div>
                                <div>
                                    <h4 className="text-xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-4">{type.title}</h4>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6 italic">"{type.desc}"</p>
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                                        Result: {type.result}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7️⃣ Our % Revenue Share Models */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <span className="text-brand-medium dark:text-brand-cyan text-[11px] font-black uppercase tracking-[0.4em] mb-4 block">Pricing Models</span>
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6 text-slate-900 dark:text-white">
                            Choose Your <span className="italic">Path.</span>
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg font-medium text-balance">
                            Transparent sharing structures with built-in tracking for absolute clarity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                        {revenueModels.map((model, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`relative p-12 rounded-[3.5rem] flex flex-col transition-all duration-500 ${model.highlight ? 'bg-slate-900 text-white scale-105 z-10 shadow-2xl' : 'bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-white/5'}`}
                            >
                                {model.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-brand-cyan text-slate-950 font-black text-[10px] uppercase tracking-[0.2em] whitespace-nowrap">
                                        Most Popular
                                    </div>
                                )}
                                <div className="mb-10">
                                    <h3 className={`text-2xl font-black uppercase tracking-tight mb-2 ${model.highlight ? 'text-brand-cyan' : 'text-slate-900 dark:text-white'}`}>{model.name}</h3>
                                    <div className="text-4xl font-black mb-1">{model.setup}</div>
                                    <div className={`text-sm font-black uppercase tracking-widest ${model.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{model.share}</div>
                                </div>

                                <div className="space-y-6 mb-12 flex-1">
                                    {model.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-4">
                                            <Check className={`w-5 h-5 shrink-0 ${model.highlight ? 'text-brand-cyan' : 'text-brand-medium'}`} />
                                            <span className={`text-sm font-medium ${model.highlight ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'}`}>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className={`pt-8 border-t ${model.highlight ? 'border-white/10' : 'border-slate-100 dark:border-white/5'}`}>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Ideal For</div>
                                    <p className={`text-sm font-bold ${model.highlight ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{model.bestFor}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 p-10 rounded-[2.5rem] bg-brand-cyan/5 border border-brand-cyan/20">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex items-center gap-6">
                                <Search className="w-10 h-10 text-brand-cyan" />
                                <div>
                                    <h4 className="text-xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-1">Full Transparency System</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">All partnerships are managed through our proprietary tracking platform with custom dashboards.</p>
                                </div>
                            </div>
                            <button className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">
                                Learn About Tracking
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8️⃣ Free Collab Strategy Call Section */}
            <section className="py-32 px-6 relative overflow-hidden bg-slate-100 dark:bg-slate-950/20">
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="w-24 h-24 rounded-full bg-brand-cyan/20 flex items-center justify-center mx-auto mb-12 border border-brand-cyan/30">
                        <HeartHandshake className="w-12 h-12 text-brand-cyan" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8 text-slate-900 dark:text-white leading-[1.1] text-balance">
                        Let’s Build a Partnership <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium">That Pays You Back.</span>
                    </h2>
                    <p className="text-xl text-slate-500 dark:text-slate-400 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                        We limit the number of active partnerships we manage to ensure maximum focus and execution. Skip the guesswork and tap into zero-risk performance-driven growth.
                    </p>
                    <button className="px-12 py-5 bg-brand-cyan text-slate-950 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-950 transition-all transform hover:-translate-y-1 shadow-2xl shadow-brand-cyan/40">
                        Schedule Free Collab Call
                    </button>
                </div>
            </section>

            {/* 9️⃣ Final High-Impact CTA Section */}
            <section className="py-40 px-6 relative overflow-hidden bg-slate-950 text-white text-center">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-cyan/20 blur-[150px] rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase mb-10 leading-[0.9] text-balance">
                        Stop Spending on Ads Alone. <br />
                        <span className="text-brand-cyan italic">Start Growing Through Strategic Partnerships.</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-slate-400 font-medium mb-16 max-w-3xl mx-auto leading-relaxed">
                        Ready to decouple your growth from the rising costs of platforms? Join the next generation of brands scaling through high-affinity, performance-aligned collaborations.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="px-12 py-6 bg-brand-cyan text-slate-950 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-cyan/30 active:scale-95">
                            Start Your Partnership Today
                        </button>
                        <button className="px-12 py-6 bg-transparent border-2 border-white/20 text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-white/5 transition-all flex items-center gap-3">
                            <MessageSquare className="w-5 h-5" /> Talk to Our Growth Team
                        </button>
                    </div>

                    <div className="mt-24 pt-20 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-4xl font-black text-brand-cyan mb-2">0%</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Upfront Risk</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-brand-cyan mb-2">100%</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Performance Focus</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-brand-cyan mb-2">$14M+</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Partner Revenue</div>
                        </div>
                        <div>
                            <div className="text-4xl font-black text-brand-cyan mb-2">50+</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Active Collaborations</div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
