"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Zap,
    Shield,
    Layout,
    Layers,
    Code2,
    ArrowRight,
    User,
    Mail,
    Phone,
    Building2,
    ChevronRight,
    Activity,
    Target,
    BarChart3,
    TrendingUp,
    Search,
    Globe,
    Cpu,
    MousePointer2,
    CheckCircle2,
    Share2,
    Briefcase,
    DollarSign,
    Rocket,
    ShoppingCart,
    Landmark,
    Building,
    GraduationCap,
    HeartPulse,
    HelpCircle,
    Plus,
    Minus,
    MessageSquare,
    Play,
    TrendingDown as TrendingDownIcon,
    PieChart,
    BarChart3 as BarChart,
    MousePointerClick,
    Users,
    FileSpreadsheet,
    Gauge,
    Monitor,
    Smartphone,
    Globe2,
    Settings2,
    Search as SearchIcon,
    Instagram,
    Facebook,
    Youtube,
    Linkedin,
    Workflow,
    ArrowUpRight,
    Lock,
    Sun,
    Moon
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const Odometer = ({ value, suffix, prefix = "" }: { value: number; suffix: string; prefix?: string }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 2000;
            const startTime = Date.now();

            const updateCounter = () => {
                const now = Date.now();
                const progress = Math.min((now - startTime) / duration, 1);
                const easedProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic

                setDisplayValue(Math.floor(easedProgress * end));

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            };

            requestAnimationFrame(updateCounter);
        }
    }, [isInView, value]);

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}{displayValue}{suffix}
        </span>
    );
};

enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}

const PerformanceMarketing = () => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains('dark');
        setTheme(isDarkMode ? Theme.DARK : Theme.LIGHT);
        // Ensure light theme is default if not specifically set
        if (!isDarkMode) {
            document.documentElement.classList.remove('dark');
            setTheme(Theme.LIGHT);
        }
    }, []);

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
        // Generic scroll reveal for sections
        gsap.utils.toArray<HTMLElement>(".scroll-reveal").forEach((section) => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom-=100",
                    toggleActions: "play none none none"
                },
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        });

        // Icon floating animation
        gsap.to(".floating-icon", {
            y: "random(-20, 20)",
            duration: "random(2, 4)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    }, { scope: containerRef });

    const trustLogos = [
        { name: "Global Wealth", logo: "https://www.vectorlogo.zone/logos/google/google-ar21.svg" },
        { name: "Next Gen", logo: "https://www.vectorlogo.zone/logos/facebook/facebook-ar21.svg" },
        { name: "Wealth Tech", logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-ar21.svg" },
        { name: "Growth Co", logo: "https://www.vectorlogo.zone/logos/shopify/shopify-ar21.svg" },
        { name: "Digital First", logo: "https://www.vectorlogo.zone/logos/mailchimp/mailchimp-ar21.svg" },
        { name: "Sales Pro", logo: "https://www.vectorlogo.zone/logos/salesforce/salesforce-ar21.svg" }
    ];

    const whyChooseUs = [
        {
            title: "Data-Driven Decisions",
            desc: "Every campaign move is backed by real-time analytics and deep performance audits.",
            icon: BarChart
        },
        {
            title: "ROI Focused Campaigns",
            desc: "We don't just chase clicks; we chase high-value conversions that scale your bottom line.",
            icon: TrendingUp
        },
        {
            title: "Transparent Reporting",
            desc: "Get 24/7 access to your custom performance dashboard with clear, actionable insights.",
            icon: FileSpreadsheet
        },
        {
            title: "Experienced Media Buyers",
            desc: "Our team has managed millions in ad spend across highly competitive global niches.",
            icon: Users
        },
        {
            title: "Conversion Optimization",
            desc: "We optimize the entire journey, from the first ad impression to the final checkout.",
            icon: MousePointerClick
        },
        {
            title: "Strategic Scaling",
            desc: "Predictable templates and frameworks to scale your winning campaigns horizontally.",
            icon: Zap
        }
    ];

    const services = [
        {
            title: "Meta Ads Management",
            desc: "Dominating Facebook and Instagram with high-converting creatives and laser-targeted audience personas.",
            icon: Share2,
            gradient: "from-blue-600 to-cyan-500"
        },
        {
            title: "Google Ads Management",
            desc: "Capturing high-intent search traffic and scaling via Precision Search, Display, and Performance Max campaigns.",
            icon: SearchIcon,
            gradient: "from-orange-500 to-yellow-500"
        },
        {
            title: "YouTube Ads",
            desc: "Cinematic video ads designed to stop the scroll, build trust, and drive massive engagement at scale.",
            icon: Youtube,
            gradient: "from-red-600 to-rose-500"
        },
        {
            title: "Conversion Rate Optimization",
            desc: "A/B testing and landing page refinement to squeeze every drop of ROI from your existing traffic.",
            icon: MousePointer2,
            gradient: "from-emerald-500 to-teal-400"
        },
        {
            title: "Funnel Building",
            desc: "Architecting multi-stage customer journeys that turn cold traffic into loyal, repeat brand advocates.",
            icon: Workflow,
            gradient: "from-purple-600 to-indigo-500"
        },
        {
            title: "Retargeting Campaigns",
            desc: "Re-capturing lost visitors with dynamic product ads and personalized messaging to complete the sale.",
            icon: Target,
            gradient: "from-brand-medium to-brand-cyan"
        }
    ];

    const platforms = [
        { name: "Facebook", icon: Facebook, color: "#1877F2" },
        { name: "Instagram", icon: Instagram, color: "#E4405F" },
        { name: "Google", icon: SearchIcon, color: "#4285F4" },
        { name: "YouTube", icon: Youtube, color: "#FF0000" },
        { name: "LinkedIn", icon: Linkedin, color: "#0077B5" },
        { name: "TikTok", icon: Share2, color: "#000000" }
    ];

    const strategy = [
        { phase: "Research & Audit", desc: "Deep-dive into your existing accounts, competitors, and industry benchmarks.", icon: SearchIcon },
        { phase: "Strategy Planning", desc: "Architecting a custom multi-channel growth roadmap tailored to your KPIs.", icon: Layout },
        { phase: "Campaign Setup", desc: "Precision assembly of tracking, creatives, and high-performance targeting sets.", icon: Layers },
        { phase: "Optimization & Scaling", desc: "Daily bid management, creative rotation, and vertical/horizontal scaling.", icon: Activity },
        { phase: "Reporting & Growth", desc: "Bi-weekly strategy calls and real-time dashboard updates for full clarity.", icon: PieChart }
    ];

    const caseStudies = [
        {
            client: "LuxLiving E-commerce",
            results: "5.2x ROAS",
            growth: "320% Revenue",
            before: "$12k/mo",
            after: "$65k/mo",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2340&auto=format&fit=crop"
        },
        {
            client: "SaaS Flow Pro",
            results: "3x Lead Vol",
            growth: "45% Lower CPA",
            before: "$45 CPA",
            after: "$24 CPA",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
        },
        {
            client: "Prime Real Estate",
            results: "200+ Leads/mo",
            growth: "150% ROI",
            before: "Static Leads",
            after: "Predictable Pipeline",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2346&auto=format&fit=crop"
        }
    ];

    const industries = [
        { name: "Ecommerce", icon: ShoppingCart, desc: "Scaling D2C brands via high-ROAS shopping funnels." },
        { name: "Real Estate", icon: Building, desc: "Generating high-quality property inquiries and site visits." },
        { name: "Education", icon: GraduationCap, desc: "Driving student enrollments and course signups at scale." },
        { name: "Healthcare", icon: HeartPulse, desc: "Patient acquisition for clinics and wellness platforms." },
        { name: "SaaS", icon: Cpu, desc: "Reducing churn and driving trials for recurring software models." },
        { name: "Local Businesses", icon: Landmark, desc: "Dominating local search and driving foot traffic/calls." }
    ];

    const funnelSteps = [
        { stage: "Top Funnel", title: "Awareness", desc: "Cold audience targeting & brand story ads.", color: "bg-blue-500" },
        { stage: "Middle Funnel", title: "Consideration", desc: "Detailed product demos & social proof.", color: "bg-cyan-500" },
        { stage: "Bottom Funnel", title: "Conversion", desc: "Dynamic ads & urgency based offers.", color: "bg-brand-medium" }
    ];

    const tools = [
        { name: "Meta Business Suite", icon: "https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg" },
        { name: "Google Ads", icon: "https://www.vectorlogo.zone/logos/google_ads/google_ads-icon.svg" },
        { name: "Google Analytics", icon: "https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg" },
        { name: "Tag Manager", icon: "https://www.vectorlogo.zone/logos/googletagmanager/googletagmanager-icon.svg" },
        { name: "HubSpot CRM", icon: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg" },
        { name: "Hotjar", icon: "https://www.vectorlogo.zone/logos/hotjar/hotjar-icon.svg" }
    ];

    const metrics = [
        { label: "Ad Spend Managed", value: 10, prefix: "$", suffix: "M+" },
        { label: "Average ROI", value: 4, prefix: "", suffix: ".5x" },
        { label: "Conversions Generated", value: 500, prefix: "", suffix: "K+" },
        { label: "Client retention", value: 95, prefix: "", suffix: "%" }
    ];

    const faqs = [
        { q: "How long does it take to see results?", a: "While initial data starts flowing in within the first 48 hours, meaningful ROI optimization typically takes 2-4 weeks. We focus on 'quick wins' while simultaneously building long-term scalable funnels." },
        { q: "What is your typical management fee?", a: "Our pricing architecture is customized based on project complexity and ad spend. We offer both performance-based models and monthly retainers, ensuring our goals are perfectly aligned with your growth." },
        { q: "Do you handle the creative production?", a: "Yes. Our High-Velocity Content Engine handles everything from high-fidelity narrative design to cinematic ad visuals, ensuring your ads stop the scroll and drive conversions." },
        { q: "Which platforms should I start with?", a: "This depends entirely on your industry and audience. During our initial Strategy Call, we perform a deep-dive audit to recommend the highest-impact channels for your specific goals." },
        { q: "How do you track and report performance?", a: "We provide detailed, transparent real-time reporting dashboards. Every single conversion is tracked via advanced server-side tagging to ensure 100% data accuracy." }
    ];

    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [currentCaseIndex, setCurrentCaseIndex] = useState(0);

    const nextCase = () => {
        setCurrentCaseIndex((prev) => (prev + 1) % caseStudies.length);
    };

    const prevCase = () => {
        setCurrentCaseIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    };

    return (
        <main ref={containerRef} className="bg-white dark:bg-[#030712] transition-colors duration-500">
            <Navbar isDark={theme === Theme.DARK} toggleTheme={toggleTheme} />

            {/* 1. Hero Section */}
            <section className="relative min-h-screen pt-32 pb-20 px-6 lg:px-20 flex items-center overflow-hidden bg-white dark:bg-[#030712]">
                {/* Futuristic Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Animated Gradients */}
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-cyan/20 blur-[120px] rounded-full animate-pulse" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-medium/20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />

                    {/* Floating Abstract Shapes */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, 0],
                            scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 right-1/3 w-32 h-32 bg-gradient-to-br from-brand-cyan/20 to-transparent rounded-3xl blur-xl"
                    />
                    <motion.div
                        animate={{
                            y: [0, 20, 0],
                            rotate: [0, -5, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-tr from-brand-medium/20 to-transparent rounded-full blur-2xl"
                    />
                </div>

                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
                    {/* Left Side: Content */}
                    <div className="lg:col-span-7 hero-content">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] font-black uppercase tracking-[0.2em] mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                            Next-Gen Performance Marketing
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-black text-slate-900 dark:text-white leading-[0.95] md:leading-[0.9] tracking-tighter mb-6 md:mb-8"
                        >
                            Performance Marketing <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium italic">That Drives</span> <br />
                            Measurable Growth
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-slate-600 dark:text-slate-400 text-base md:text-xl font-medium leading-relaxed mb-8 md:mb-12 max-w-2xl"
                        >
                            Maximize your ROI with data-driven campaigns and scalable results. We leverage advanced analytics and precision targeting to turn your marketing spend into a growth engine.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
                        >
                            <button className="px-10 py-5 bg-brand-cyan text-[#030712] rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl shadow-brand-cyan/20 group flex items-center justify-center gap-2">
                                Get Free Audit <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-10 py-5 bg-transparent border-2 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:border-brand-cyan transition-all flex items-center justify-center">
                                View Case Studies
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Side: Glassmorphism Form Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-5 hero-form-container"
                    >
                        <div className="relative group">
                            {/* Card Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan to-brand-medium rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />

                            <div className="relative bg-white/70 dark:bg-[#030712]/70 backdrop-blur-2xl rounded-[3rem] p-8 md:p-10 border border-white/20 dark:border-white/5 shadow-2xl">
                                <div className="mb-8 text-left">
                                    <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2 uppercase">Get My Free Strategy</h3>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Scale your business with expert precision.</p>
                                </div>

                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-brand-cyan ml-1">Full Name</label>
                                            <div className="relative group/input">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within/input:text-brand-cyan transition-colors" />
                                                <input type="text" placeholder="John Doe" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 transition-all font-medium" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-brand-cyan ml-1">Business Name</label>
                                            <div className="relative group/input">
                                                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within/input:text-brand-cyan transition-colors" />
                                                <input type="text" placeholder="Acme Corp" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 transition-all font-medium" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-brand-cyan ml-1">Email</label>
                                            <div className="relative group/input">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within/input:text-brand-cyan transition-colors" />
                                                <input type="email" placeholder="john@company.com" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 transition-all font-medium" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-brand-cyan ml-1">Phone</label>
                                            <div className="relative group/input">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within/input:text-brand-cyan transition-colors" />
                                                <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 transition-all font-medium" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-cyan ml-1">Monthly Ad Budget</label>
                                        <div className="relative group/input">
                                            <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within/input:text-brand-cyan transition-colors" />
                                            <select defaultValue="" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-2xl py-3.5 pl-12 pr-10 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 transition-all font-medium appearance-none">
                                                <option value="" disabled>Select Budget Range</option>
                                                <option value="1k-5k">$1,000 - $5,000</option>
                                                <option value="5k-10k">$5,000 - $10,000</option>
                                                <option value="10k-25k">$10,000 - $25,000</option>
                                                <option value="25k+">$25,000+</option>
                                            </select>
                                            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none rotate-90" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-cyan ml-1">Select Platform</label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {['Meta', 'Google', 'Both'].map((platform) => (
                                                <label key={platform} className="relative cursor-pointer group/choice">
                                                    <input type="radio" name="platform" value={platform} className="peer sr-only" />
                                                    <div className="px-4 py-2 text-center rounded-xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 text-[10px] font-bold uppercase text-slate-500 peer-checked:bg-brand-cyan/20 peer-checked:border-brand-cyan peer-checked:text-brand-cyan transition-all">
                                                        {platform}
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <button className="w-full group mt-4 relative bg-brand-cyan hover:bg-white text-[#030712] rounded-2xl py-4 font-black text-xs uppercase tracking-[0.2em] transition-all overflow-hidden shadow-2xl shadow-brand-cyan/20 flex items-center justify-center gap-2">
                                        Get My Free Strategy <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Trust Indicators / Client Logos Section */}
            <section className="py-12 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Trusted by Growing Brands</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-50">
                        {trustLogos.map((logo, i) => (
                            <img
                                key={i}
                                src={logo.logo}
                                alt={logo.name}
                                className="h-6 sm:h-8 md:h-10 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Why Choose Preet Tech */}
            <section className="py-24 px-6 relative overflow-hidden bg-white dark:bg-[#030712] scroll-reveal">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">The ROI Advantage</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
                            Why Choose <span className="text-brand-cyan">Preet Tech</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyChooseUs.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group p-8 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-brand-cyan/30 transition-all"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(95,211,230,0.2)] transition-all">
                                    <item.icon className="w-6 h-6 text-brand-cyan" />
                                </div>
                                <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 dark:text-white mb-3">{item.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. What is Performance Marketing? (Minimalist Redesign) */}
            <section className="py-24 px-6 bg-white dark:bg-[#030712] scroll-reveal">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <span className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">The Definition</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-tight">
                            Performance Marketing <br />
                            Is <span className="text-brand-cyan">Results-Only</span> Growth.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-black text-slate-300 dark:text-slate-700">01.</span>
                                <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 dark:text-white">Accountability</h3>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-medium">
                                We track every click and every dollar. No more guessing. Performance marketing ensures your investment is tied directly to measurable outcomes.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-black text-slate-300 dark:text-slate-700">02.</span>
                                <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 dark:text-white">Precision</h3>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-medium">
                                We bypass the typical "spray and pray" approach. Our systems target high-intent users who are ready to take action right now.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-black text-slate-300 dark:text-slate-700">03.</span>
                                <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 dark:text-white">Agility</h3>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-medium">
                                Unlike static campaigns, we optimize daily. Our strategies evolve as fast as the market, ensuring you never miss a growth opportunity.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 p-8 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-base font-medium text-slate-600 dark:text-slate-400">
                            <span className="text-slate-900 dark:text-white font-black uppercase text-xs">The Result:</span> You only pay for the growth we deliver.
                        </p>
                        <button className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-[#030712] rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-cyan transition-colors whitespace-nowrap">
                            Request Your Audit
                        </button>
                    </div>
                </div>
            </section>

            {/* 5. Our Core Performance Services */}
            <section className="py-20 px-6 bg-white dark:bg-[#030712] relative overflow-hidden scroll-reveal">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-3 block">Full-Funnel Mastery</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
                            Core Performance <span className="text-brand-cyan">Services</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative p-0.5 rounded-3xl bg-slate-200 dark:bg-white/5 hover:bg-gradient-to-br transition-all duration-500 overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                <div className="relative p-8 rounded-[1.4rem] bg-white dark:bg-slate-900/90 h-full">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <service.icon className="w-6 h-6 text-brand-cyan" />
                                    </div>
                                    <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-3 group-hover:text-brand-cyan transition-colors">{service.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium mb-6">
                                        {service.desc}
                                    </p>
                                    <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-cyan group-hover:gap-4 transition-all">
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Platforms We Master (Strategic Ecosystem Redesign) */}
            <section className="py-24 px-6 bg-white dark:bg-[#030712] relative overflow-hidden scroll-reveal">
                {/* Background Tech Texture */}
                <div className="absolute inset-0 bg-[radial-gradient(#5fd3e6_0.5px,transparent_0.5px)] bg-[size:24px_24px] opacity-[0.05] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-xl">
                            <span className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Omni-Channel Authority</span>
                            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase leading-tight tracking-tighter">
                                Strategic <br />
                                <span className="text-brand-cyan">Ecosystem</span>
                            </h3>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                            <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Live Optimization Active</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                        {platforms.map((platform, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="group relative"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-cyan/0 to-brand-cyan/0 group-hover:from-brand-cyan/20 group-hover:to-brand-medium/20 rounded-[2rem] transition-all duration-500 blur-sm" />
                                <div className="relative h-full p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 backdrop-blur-sm flex flex-col items-center gap-6 transition-all group-hover:border-brand-cyan/30 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] dark:group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                                    <div className="relative">
                                        <div className="absolute -inset-4 bg-brand-cyan/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                                        <platform.icon className="w-10 h-10 transition-all duration-500 opacity-40 group-hover:opacity-100 group-hover:scale-110" style={{ color: platform.color }} />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Channel 0{i + 1}</p>
                                        <span className="text-sm font-black uppercase tracking-tight text-slate-900 dark:text-white transition-colors group-hover:text-brand-cyan">{platform.name}</span>
                                    </div>

                                    {/* Tech Status readout */}
                                    <div className="mt-auto w-full pt-4 border-t border-slate-50 dark:border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="flex gap-1">
                                            <div className="w-1 h-3 bg-brand-cyan/40 rounded-full" />
                                            <div className="w-1 h-3 bg-brand-cyan/60 rounded-full" />
                                            <div className="w-1 h-3 bg-brand-cyan rounded-full" />
                                        </div>
                                        <span className="text-[8px] font-black uppercase tracking-widest text-brand-cyan">Mastered</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Our Strategy Process */}
            <section className="py-24 px-6 bg-white dark:bg-[#030712] overflow-hidden scroll-reveal">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Our Roadmap</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
                            Strategy <span className="text-brand-cyan">Process</span>
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Animated Step Progression Line */}
                        <div className="absolute top-[40px] left-0 w-full h-0.5 bg-slate-100 dark:bg-white/5 hidden lg:block">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                className="h-full bg-brand-cyan shadow-[0_0_10px_#5fd3e6]"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 relative z-10">
                            {strategy.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex flex-col items-center text-center group"
                                >
                                    <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-white/10 flex items-center justify-center mb-4 md:mb-6 group-hover:border-brand-cyan transition-all relative">
                                        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-brand-cyan text-[#030712] text-[8px] font-black flex items-center justify-center border-2 border-white dark:border-[#030712]">
                                            0{i + 1}
                                        </div>
                                        <step.icon className="w-6 h-6 text-brand-cyan" />
                                    </div>
                                    <h4 className="text-sm md:text-base font-black uppercase tracking-tight text-slate-900 dark:text-white mb-2">{step.phase}</h4>
                                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-[160px]">{step.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Case Studies / Results Section (Loop Slider Redesign) */}
            <section className="py-24 px-6 bg-slate-50 dark:bg-[#030712] relative overflow-hidden scroll-reveal">
                {/* Dynamic Background Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-2xl">
                            <span className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Proof Projecting ROI</span>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-slate-900 dark:text-white leading-[0.9]">
                                High Velocity <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium">Growth Stories</span>
                            </h2>
                        </div>

                        <div className="flex gap-4 mb-2">
                            <button
                                onClick={prevCase}
                                className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/30 transition-all group"
                            >
                                <ChevronRight className="w-6 h-6 rotate-180 transition-transform group-hover:-translate-x-1" />
                            </button>
                            <button
                                onClick={nextCase}
                                className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/30 transition-all group"
                            >
                                <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden px-4 -mx-4">
                            <motion.div
                                className="flex gap-8"
                                animate={{ x: `calc(-${currentCaseIndex * 100}% - ${currentCaseIndex * 2}rem)` }}
                                transition={{ type: "spring", damping: 30, stiffness: 200 }}
                            >
                                {caseStudies.map((study, i) => (
                                    <div key={i} className="min-w-full group relative">
                                        <div className="absolute -inset-2 bg-gradient-to-b from-brand-cyan/20 to-transparent rounded-[3.5rem] opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />

                                        <div className="relative h-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[3rem] overflow-hidden flex flex-col">
                                            {/* Immersive Image Header */}
                                            <div className="h-64 relative overflow-hidden">
                                                <img
                                                    src={study.image}
                                                    alt={study.client}
                                                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />

                                                {/* HUD Overlay */}
                                                <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                                                    <div className="px-3 py-1 rounded-lg bg-brand-cyan/20 backdrop-blur-md border border-brand-cyan/30">
                                                        <span className="text-[8px] font-black uppercase tracking-widest text-brand-cyan">{study.client}</span>
                                                    </div>
                                                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                                                        <TrendingUp className="w-5 h-5 text-brand-cyan" />
                                                    </div>
                                                </div>

                                                <div className="absolute bottom-6 left-8 right-8">
                                                    <p className="text-3xl font-black text-white leading-tight uppercase tracking-tighter">
                                                        {study.results} <span className="text-brand-cyan italic">Impact</span>
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Growth Dashboard Bottom */}
                                            <div className="p-10 flex-grow flex flex-col">
                                                <div className="flex justify-between items-center mb-10 pb-6 border-b border-slate-100 dark:border-white/5">
                                                    <div>
                                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Total Scaling</p>
                                                        <p className="text-2xl font-black text-slate-900 dark:text-white uppercase">{study.growth}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="inline-flex items-center gap-1 text-[8px] font-black text-brand-cyan uppercase tracking-widest px-2 py-1 bg-brand-cyan/10 rounded-full">
                                                            Verified ROI
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-auto space-y-4">
                                                    <div className="relative h-20 rounded-2xl bg-slate-50 dark:bg-black/40 border border-slate-100 dark:border-white/5 p-4 flex items-center justify-between overflow-hidden group/metric">
                                                        <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/5 to-transparent -translate-x-full group-hover/metric:translate-x-0 transition-transform duration-500" />

                                                        <div className="relative z-10 flex items-center gap-4">
                                                            <div className="w-10 h-10 rounded-xl bg-white dark:bg-black/20 flex items-center justify-center shadow-sm">
                                                                <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 rotate-180" />
                                                            </div>
                                                            <div>
                                                                <p className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5 whitespace-nowrap">Baseline Metric</p>
                                                                <p className="text-sm font-black text-slate-400 line-through decoration-brand-cyan/30">{study.before}</p>
                                                            </div>
                                                        </div>

                                                        <ArrowRight className="relative z-10 w-4 h-4 text-brand-cyan animate-pulse" />

                                                        <div className="relative z-10 text-right">
                                                            <p className="text-[8px] font-black uppercase tracking-[0.2em] text-brand-cyan mb-0.5 whitespace-nowrap">Current Status</p>
                                                            <p className="text-lg font-black text-slate-900 dark:text-white">{study.after}</p>
                                                        </div>
                                                    </div>

                                                    <button className="w-full py-4 text-[10px] font-black uppercase tracking-[.4em] text-slate-400 hover:text-brand-cyan border border-transparent hover:border-brand-cyan/20 rounded-xl transition-all flex items-center justify-center gap-3 group/btn">
                                                        Full Disclosure <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Progress Indicator */}
                        <div className="flex justify-center gap-2 mt-12">
                            {caseStudies.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentCaseIndex(i)}
                                    className={`h-1 transition-all duration-500 rounded-full ${currentCaseIndex === i ? 'w-12 bg-brand-cyan' : 'w-4 bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. Industries We Serve */}
            <section className="py-32 px-6 bg-white dark:bg-[#030712] relative scroll-reveal">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <span className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Sectors We Transform</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase text-slate-900 dark:text-white">
                            Industries <span className="text-brand-cyan">We Scale</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industries.map((industry, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="group p-10 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-brand-cyan/30 transition-all shadow-sm"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center mb-8 border border-slate-200 dark:border-white/10 group-hover:bg-brand-cyan transition-all">
                                    <industry.icon className="w-8 h-8 text-brand-cyan group-hover:text-[#030712] transition-colors" />
                                </div>
                                <h4 className="text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-4">{industry.name}</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">{industry.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. Mid-Page CTA Banner */}
            <section className="py-16 px-6 relative overflow-hidden scroll-reveal">
                <div className="max-w-7xl mx-auto">
                    <div className="relative rounded-[3rem] bg-slate-900 dark:bg-black p-10 md:p-16 overflow-hidden border border-white/10">
                        {/* Animated Glows */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-cyan/10 blur-[100px] rounded-full animate-pulse" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-medium/10 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-[0.9]">
                                Ready to Scale <br /> <span className="text-brand-cyan italic">Your Revenue?</span>
                            </h2>
                            <p className="text-slate-400 text-base md:text-lg font-medium mb-10">
                                Don't leave your growth to chance. Get a custom performance roadmap designed for your specific business goals.
                            </p>
                            <button className="px-10 py-5 bg-brand-cyan text-[#030712] rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all shadow-2xl shadow-brand-cyan/20 group flex items-center gap-2 mx-auto">
                                Book Free Performance Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 11. Ad Creatives & Funnel Showcase (Command Center Redesign - Compact) */}
            <section className="py-20 px-6 bg-slate-50 dark:bg-[#030712] relative overflow-hidden scroll-reveal">
                {/* Visual Connector Line */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent -rotate-12 pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            <div className="relative">
                                {/* Dashboard View - Floating Browser Frame */}
                                <motion.div
                                    whileHover={{ y: -3, rotateX: 2 }}
                                    className="relative z-20 mb-8 rounded-[1.5rem] overflow-hidden border border-white dark:border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] perspective"
                                >
                                    <div className="absolute top-0 left-0 w-full h-8 bg-white/90 dark:bg-black/90 backdrop-blur-md flex items-center px-4 gap-1.5 border-b border-slate-100 dark:border-white/5">
                                        <div className="flex gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-white/10" />
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-white/10" />
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-white/10" />
                                        </div>
                                        <span className="text-[7px] font-black uppercase tracking-[0.3em] text-slate-400 ml-3">Creative_Command_System</span>
                                    </div>
                                    <div className="bg-slate-100 dark:bg-slate-900 pt-8 aspect-[16/9]">
                                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop" alt="Dashboard" className="w-full h-full object-cover grayscale brightness-50 contrast-125 transition-all duration-700 hover:grayscale-0 hover:brightness-100" />
                                    </div>
                                </motion.div>

                                {/* Creative Duo - Overlapping perspective cards */}
                                <div className="relative h-[350px] sm:h-72 lg:h-[400px] mt-12">
                                    <motion.div
                                        initial={{ rotate: -8, x: -10 }}
                                        whileHover={{ rotate: 0, scale: 1.05, z: 20 }}
                                        className="absolute top-0 left-0 w-[55%] sm:w-[45%] aspect-[9/16] rounded-[1.5rem] sm:rounded-[2rem] bg-slate-200 overflow-hidden shadow-2xl border-2 border-white dark:border-white/10 z-10 transition-all duration-500"
                                    >
                                        <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop" alt="Production" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute top-3 left-3 px-2 py-0.5 bg-brand-cyan text-[#030712] rounded-md text-[7px] font-black uppercase tracking-widest">Top Creative</div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ rotate: 8, x: 30, y: 40 }}
                                        whileHover={{ rotate: 0, scale: 1.05, z: 30, y: 20 }}
                                        className="absolute top-0 right-0 sm:right-[15%] w-[55%] sm:w-[45%] aspect-[9/16] rounded-[1.5rem] sm:rounded-[2rem] bg-slate-200 overflow-hidden shadow-2xl border-2 border-white dark:border-white/10 z-20 transition-all duration-500"
                                    >
                                        <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1974&auto=format&fit=crop" alt="Output" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute top-3 left-3 px-2 py-0.5 bg-white text-[#030712] rounded-md text-[7px] font-black uppercase tracking-widest">Winning Funnel</div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="mb-10">
                                <span className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] block mb-3">High-Velocity Production</span>
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase leading-[0.9] tracking-tighter mb-4">
                                    Creative <br />
                                    <span className="text-brand-cyan">Command</span> <br />
                                    Center.
                                </h2>
                                <p className="text-slate-500 dark:text-slate-400 font-medium text-sm leading-relaxed max-w-sm">
                                    Bridging the gap between raw creativity and predictive ROI.
                                </p>
                            </div>

                            <div className="space-y-3">
                                {[
                                    { label: "Production", title: "Cinematic High-Fi", desc: "Studio-grade video production optimized for rapid 3-second hooks.", icon: Layers },
                                    { label: "Psychology", title: "Behavioral Design", desc: "Landing experiences engineered with psychological triggers.", icon: Layout },
                                    { label: "Analytical", title: "Iterative Testing", desc: "Constant A/B/C testing metrics that scale the winners.", icon: Activity }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 6 }}
                                        className="p-6 rounded-[1.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:border-brand-cyan/40 transition-all flex flex-col gap-2 group shadow-sm"
                                    >
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-2">
                                                <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-white/5 group-hover:bg-brand-cyan transition-colors">
                                                    <item.icon className="w-3 h-3 text-brand-cyan group-hover:text-[#030712]" />
                                                </div>
                                                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{item.label}</span>
                                            </div>
                                            <div className="w-1 h-1 rounded-full bg-slate-200 dark:bg-white/10 group-hover:bg-brand-cyan group-hover:animate-pulse" />
                                        </div>
                                        <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">{item.title}</h4>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 12. Technology & Tools Stack */}
            <section className="py-32 px-6 bg-white dark:bg-[#030712] relative overflow-hidden scroll-reveal">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
                        <div className="max-w-md">
                            <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 dark:text-white mb-4">
                                The <span className="text-brand-cyan">Growth</span> Stack
                            </h3>
                            <p className="text-sm text-slate-500 font-medium">
                                We utilize the world's most advanced marketing platforms and tracking technologies to ensure your business stays ahead of the curve.
                            </p>
                        </div>
                        <div className="flex-1 max-w-2xl">
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                                {tools.map((tool, i) => (
                                    <div key={i} className="flex flex-col items-center p-8 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 group hover:border-brand-cyan/30 transition-all">
                                        <div className="w-12 h-12 mb-4 bg-white dark:bg-black/20 rounded-xl p-2 flex items-center justify-center">
                                            <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-center">{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 13. ROI & Reporting System */}
            <section className="py-32 px-6 bg-slate-50 dark:bg-black relative overflow-hidden text-slate-900 dark:text-white scroll-reveal">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Total Transparency</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-8 leading-tight">
                            ROI & Reporting <br /> <span className="text-brand-cyan">System</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: "Weekly Reports", icon: FileSpreadsheet },
                                { title: "KPI Tracking", icon: Target },
                                { title: "ROAS Monitoring", icon: Activity },
                                { title: "Real-Time Data", icon: Gauge }
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl flex items-center gap-4 group hover:bg-slate-50 dark:hover:bg-white/10 transition-colors">
                                    <div className="w-10 h-10 rounded-lg bg-brand-cyan/20 flex items-center justify-center">
                                        <item.icon className="w-5 h-5 text-brand-cyan" />
                                    </div>
                                    <span className="text-sm font-black uppercase tracking-tight">
                                        {item.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative group">
                        {/* Dashboard Mockup Placeholder */}
                        <div className="relative rounded-3xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-2xl bg-white dark:bg-[#030712] p-4">
                            <div className="flex items-center gap-2 mb-4 px-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <div className="aspect-[1.5/1] bg-slate-100 dark:bg-slate-800/40 rounded-xl relative overflow-hidden p-6">
                                <div className="flex justify-between items-end h-full gap-4">
                                    {[60, 40, 80, 50, 90, 70, 100].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${h}%` }}
                                            transition={{ delay: i * 0.1, duration: 1 }}
                                            className="flex-1 bg-gradient-to-t from-brand-cyan to-brand-medium rounded-t-lg opacity-80"
                                        />
                                    ))}
                                </div>
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white dark:from-[#030712] to-transparent pointer-events-none" />
                            </div>
                        </div>
                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-5 -right-5 sm:-top-10 sm:-right-10 p-4 sm:p-6 bg-white dark:bg-white/10 backdrop-blur-xl border border-slate-200 dark:border-white/20 rounded-2xl shadow-2xl z-20"
                        >
                            <p className="text-[8px] font-black uppercase tracking-widest text-brand-cyan mb-1 text-center">Live ROAS</p>
                            <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">4.82x</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 14. Free Audit / Consultation Form Section (The Command Center Redesign) */}
            <section className="py-32 px-6 bg-white dark:bg-[#030712] relative overflow-hidden transition-colors duration-500">
                {/* Immersive Background */}
                <div className="absolute inset-0 bg-[radial-gradient(#5fd3e6_0.5px,transparent_0.5px)] bg-[size:32px_32px] opacity-[0.05] dark:opacity-[0.03]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-cyan/5 blur-[150px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        {/* Left Content: Value Prop & Visuals */}
                        <div className="lg:col-span-6">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="text-brand-cyan text-[10px] font-black uppercase tracking-[0.5em] mb-6 block">Immediate Value</span>
                                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase leading-[0.95] md:leading-[0.9] tracking-tighter mb-8">
                                    The <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium">Performance</span> <br />
                                    Command Center.
                                </h2>
                                <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed max-w-xl mb-12">
                                    We don't just "talk" growth. We build the architecture for it. Get a detailed breakdown of your current gaps and a roadmap to hit your next revenue milestone.
                                </p>

                                {/* Floating Stat Slates */}
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "Audit Time", value: "24-48h", icon: Zap },
                                        { label: "Data Points", value: "150+", icon: Activity },
                                        { label: "ROI Potential", value: "Significant", icon: TrendingUp },
                                        { label: "Cost", value: "FREE", icon: DollarSign }
                                    ].map((stat, i) => (
                                        <div key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 backdrop-blur-sm flex items-center gap-4 group hover:bg-white dark:hover:bg-white/10 transition-all shadow-sm dark:shadow-none">
                                            <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center">
                                                <stat.icon className="w-5 h-5 text-brand-cyan" />
                                            </div>
                                            <div>
                                                <p className="text-[8px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-0.5">{stat.label}</p>
                                                <p className="text-sm font-black text-slate-900 dark:text-white">{stat.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Content: The Form Card */}
                        <div className="lg:col-span-6 relative">
                            {/* Decorative Elements */}
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-cyan/10 blur-2xl rounded-full" />
                            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-medium/10 blur-3xl rounded-full" />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-cyan/20 to-transparent blur-xl scale-0 group-hover:scale-150 transition-transform duration-700" />

                                <div className="mb-10 text-center lg:text-left">
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">Initialize Your Audit</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Connect with our growth engineers today.</p>
                                </div>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black uppercase tracking-widest text-brand-cyan ml-1">Company Name</label>
                                            <input
                                                type="text"
                                                placeholder="e.g. Acme Scaling"
                                                className="w-full bg-slate-50 dark:bg-[#030712]/50 border border-slate-200 dark:border-white/10 rounded-2xl py-4 px-6 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan/40 transition-all font-medium"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black uppercase tracking-widest text-brand-cyan ml-1">Current ROAS</label>
                                            <input
                                                type="text"
                                                placeholder="e.g. 2.5x"
                                                className="w-full bg-slate-50 dark:bg-[#030712]/50 border border-slate-200 dark:border-white/10 rounded-2xl py-4 px-6 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan/40 transition-all font-medium"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[9px] font-black uppercase tracking-widest text-brand-cyan ml-1">Website URL</label>
                                        <div className="relative">
                                            <Globe className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-600" />
                                            <input
                                                type="url"
                                                placeholder="https://yourbrand.com"
                                                className="w-full bg-slate-50 dark:bg-[#030712]/50 border border-slate-200 dark:border-white/10 rounded-2xl py-4 pl-14 pr-6 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan/40 transition-all font-medium"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black uppercase tracking-widest text-brand-cyan ml-1">Monthly Budget</label>
                                            <select defaultValue="" className="w-full bg-slate-50 dark:bg-[#030712]/50 border border-slate-200 dark:border-white/10 rounded-2xl py-4 px-6 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan/40 transition-all font-medium appearance-none cursor-pointer">
                                                <option value="" disabled className="bg-white dark:bg-[#030712]">Select Range</option>
                                                <option value="5k-10k" className="bg-white dark:bg-[#030712]">$5k - $10k</option>
                                                <option value="10k-50k" className="bg-white dark:bg-[#030712]">$10k - $50k</option>
                                                <option value="50k+" className="bg-white dark:bg-[#030712]">$50k+</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[9px] font-black uppercase tracking-widest text-brand-cyan ml-1">Growth Goal</label>
                                            <select defaultValue="" className="w-full bg-slate-50 dark:bg-[#030712]/50 border border-slate-200 dark:border-white/10 rounded-2xl py-4 px-6 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 focus:border-brand-cyan/40 transition-all font-medium appearance-none cursor-pointer">
                                                <option value="" disabled className="bg-white dark:bg-[#030712]">Primary Objective</option>
                                                <option value="roas" className="bg-white dark:bg-[#030712]">Maximize ROAS</option>
                                                <option value="scale" className="bg-white dark:bg-[#030712]">Vertical Scaling</option>
                                                <option value="churn" className="bg-white dark:bg-[#030712]">Reduce Churn</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button className="w-full group relative bg-brand-cyan hover:bg-slate-900 dark:hover:bg-white text-[#030712] dark:text-[#030712] hover:text-white transition-all rounded-2xl py-5 font-black text-[10px] uppercase tracking-[0.3em] overflow-hidden flex items-center justify-center gap-3 shadow-xl shadow-brand-cyan/20">
                                        <span className="relative z-10">Request Data Audit</span>
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                                        <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-medium group-hover:h-full transition-all duration-500 opacity-20" />
                                    </button>

                                    <div className="flex items-center justify-center gap-2 pt-4 border-t border-slate-100 dark:border-white/5">
                                        <Lock className="w-3 h-3 text-slate-400 dark:text-slate-600" />
                                        <p className="text-[8px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-600">Secure Transmission Encrypted</p>
                                    </div>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 15. Final Strong CTA Section */}
            <section className="py-12 px-6 mb-12 scroll-reveal">
                <div className="max-w-7xl mx-auto relative rounded-[3rem] bg-gradient-to-br from-brand-cyan via-brand-medium to-brand-cyan p-10 md:p-16 overflow-hidden text-[#030712] text-center shadow-[0_30px_100px_rgba(95,211,230,0.2)]">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/20 blur-[80px] rounded-full"
                    />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                            Let's Build Campaigns <br /> <span className="text-white">That Actually Convert</span>
                        </h2>
                        <p className="text-sm md:text-base font-bold uppercase tracking-widest mb-10 opacity-80">
                            Stop Guessing. Start Scaling Profitably.
                        </p>
                        <button className="px-10 py-5 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-slate-900 transition-all shadow-2xl flex items-center gap-2 mx-auto group">
                            Start Your Growth Journey <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default PerformanceMarketing;
