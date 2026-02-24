"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search,
    Filter,
    ArrowUpDown,
    ArrowRight,
    CheckCircle2,
    Shield,
    Zap,
    Clock,
    HelpCircle,
    ChevronDown,
    MessageCircle,
    ShoppingBag,
    Star,
    ArrowUpRight,
    Layers,
    Bot,
    MousePointer2,
    Lock,
    LucideIcon,
    Sparkles,
    Smartphone,
    Monitor,
    Layout,
    Box,
    Globe,
    Briefcase
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// --- Data ---

interface Tool {
    id: string;
    name: string;
    category: 'Marketing' | 'SaaS' | 'Design' | 'Productivity' | 'Automation' | 'Finance' | 'Other';
    description: string;
    originalPrice: number;
    discountedPrice: number;
    discountBadge: string;
    image?: string;
}

const TOOLS: Tool[] = [
    {
        id: '1',
        name: 'Adobe Creative Cloud',
        category: 'Design',
        description: 'Access 20+ creative apps including Photoshop, Illustrator, and Premiere Pro.',
        originalPrice: 599.99,
        discountedPrice: 49.99,
        discountBadge: '92% OFF',
        image: 'https://www.thesmbguide.com/images/adobe-creative-cloud-express-logo-maker-1024x512-20220131.png'
    },
    {
        id: '2',
        name: 'SEMrush Guru Plan',
        category: 'Marketing',
        description: 'Advanced SEO tools for content marketing, competitor analysis, and PPC.',
        originalPrice: 2299.99,
        discountedPrice: 99.99,
        discountBadge: '95% OFF',
        image: 'https://1000logos.net/wp-content/uploads/2024/08/SEMrush-Logo.jpg'
    },
    {
        id: '3',
        name: 'Notion Plus Yearly',
        category: 'Productivity',
        description: 'The ultimate workspace for your notes, tasks, and project management.',
        originalPrice: 120.00,
        discountedPrice: 24.99,
        discountBadge: '80% OFF',
        image: 'https://images.unsplash.com/photo-1683114010575-3ead4403180e?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: '4',
        name: 'Canva Pro Lifetime',
        category: 'Design',
        description: 'Premium templates, stock photos, and branding tools for non-designers.',
        originalPrice: 119.99,
        discountedPrice: 19.99,
        discountBadge: '83% OFF',
        image: 'https://1000logos.net/wp-content/uploads/2021/10/Canva-logo.jpg'
    },
    {
        id: '5',
        name: 'Zapier Starter',
        category: 'Automation',
        description: 'Connect your apps and automate workflows without writing code.',
        originalPrice: 240.00,
        discountedPrice: 59.99,
        discountBadge: '75% OFF',
        image: 'https://images.unsplash.com/photo-1764601842093-ac07d758aa66?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8WmFwaWVyfGVufDB8fDB8fHww'
    },
    {
        id: '6',
        name: 'Ahrefs Standard',
        category: 'Marketing',
        description: 'Powerful SEO toolset for link building, keyword research, and rank tracking.',
        originalPrice: 1999.00,
        discountedPrice: 149.99,
        discountBadge: '92% OFF',
        image: 'https://ahrefs.com/assets/esbuild/primary-light-H2PY2LGX.png'
    },
    {
        id: '7',
        name: 'Midjourney Pro Account',
        category: 'Design',
        description: 'Generate high-fidelity AI images with commercial usage rights.',
        originalPrice: 600.00,
        discountedPrice: 89.99,
        discountBadge: '85% OFF',
        image: 'https://media.licdn.com/dms/image/v2/D4D12AQEgzjjkR88XGg/article-cover_image-shrink_720_1280/B4DZachJMgGgAM-/0/1746382656773?e=2147483647&v=beta&t=ELRTR3xLOfF2qVEmQI_fkm6k_zvNEuY3X3w8hVeXGMk'
    },
    {
        id: '8',
        name: 'Shopify Advanced',
        category: 'SaaS',
        description: 'Everything you need to create, manage, and scale your online store.',
        originalPrice: 3588.00,
        discountedPrice: 199.99,
        discountBadge: '94% OFF',
        image: 'https://logoeps.com/wp-content/uploads/2025/03/Shopify-logo.png'
    },
    {
        id: '9',
        name: 'Slack Enterprise Grid',
        category: 'Productivity',
        description: 'Premium collaboration tool with unlimited message history and security.',
        originalPrice: 1500.00,
        discountedPrice: 99.99,
        discountBadge: '93% OFF',
        image: 'https://images.unsplash.com/photo-1649180559928-91d16a63bd39?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: '10',
        name: 'QuickBooks Online Plus',
        category: 'Finance',
        description: 'Manage your business finances, tracking, and tax preparation with ease.',
        originalPrice: 960.00,
        discountedPrice: 79.99,
        discountBadge: '91% OFF',
        image: 'https://digitalasset.intuit.com/content/dam/intuit/qb-design/brand/brand-foundations/logo/do-not-use-qb-ball-only-photo.svg'
    },
    {
        id: '11',
        name: 'Jasper.ai Pro',
        category: 'Marketing',
        description: 'AI-powered content writer for high-converting copy and blog posts.',
        originalPrice: 590.00,
        discountedPrice: 69.99,
        discountBadge: '88% OFF',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73i6NN1_SmdTiGFmDJvmisz4eygirvcC8Ow&s'
    },
    {
        id: '12',
        name: 'Figma Professional',
        category: 'Design',
        description: 'Collaborative UI/UX design tool with advanced prototyping and dev-mode.',
        originalPrice: 180.00,
        discountedPrice: 39.99,
        discountBadge: '78% OFF',
        image: 'https://s3-alpha.figma.com/hub/file/2167104317601928565/6fe8c744-e5e1-40f1-a462-9d1793090d6e-cover.png'
    }
];

const CATEGORIES = ['Marketing', 'SaaS', 'Design', 'Productivity', 'Automation', 'Finance', 'Other'];

const FAQS = [
    {
        q: "How will I receive the tool?",
        a: "Once your payment is confirmed on WhatsApp, we will share the login credentials or access link directly. Most deliveries happen within 10-30 minutes."
    },
    {
        q: "Is this a lifetime deal?",
        a: "Many of our tools offer lifetime access, while others are annual or periodic subscriptions. Specified terms will be confirmed during the WhatsApp chat."
    },
    {
        q: "How fast is delivery?",
        a: "We pride ourselves on instant delivery. Our team is available 24/7 on WhatsApp to ensure you get started immediately after purchase."
    },
    {
        q: "What payment methods are accepted?",
        a: "We accept UPI, Bank Transfer, PayPal, and Crypto. Payment details will be shared on WhatsApp once you select your tool."
    },
    {
        q: "Do you provide support?",
        a: "Yes! We provide direct support for any login issues or setup help. You can message us anytime on WhatsApp for assistance."
    }
];

// --- Page Component ---

export default function ToolsMarketplace() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceSort, setPriceSort] = useState<'none' | 'low' | 'high'>('none');
    const [discountFilter, setDiscountFilter] = useState('0');
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const whatsappNumber = "917900310428";

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            /* handled by next-themes */
            setIsDarkMode(true);
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

    const handleBuyViaWhatsApp = (tool: Tool) => {
        const message = `Hi Preet Tech, I’m interested in purchasing ${tool.name} listed at $${tool.discountedPrice}.\n\nProduct: ${tool.name}\nPrice: $${tool.discountedPrice}\nRef Image: ${tool.image || 'N/A'}\n\nPlease share payment details.`;
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(url, '_blank');
    };

    // --- Filtering Logic ---
    const filteredTools = TOOLS.filter(tool => {
        const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
        const discountValue = parseInt(tool.discountBadge.replace('% OFF', ''));
        const matchesDiscount = discountValue >= parseInt(discountFilter);
        return matchesSearch && matchesCategory && matchesDiscount;
    }).sort((a, b) => {
        if (priceSort === 'low') return a.discountedPrice - b.discountedPrice;
        if (priceSort === 'high') return b.discountedPrice - a.discountedPrice;
        return 0;
    });

    return (
        <main className="relative z-10 selection:bg-brand-medium/20 overflow-x-hidden bg-[#fafafa] text-slate-900 dark:bg-[#050608] dark:text-white transition-colors duration-500 font-sans">
            <Navbar isDark={isDarkMode} toggleTheme={toggleTheme} />

            {/* 1️⃣ Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 md:px-6 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 pointer-events-none -z-10">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 15, repeat: Infinity }}
                        className="absolute -top-[10%] -left-[5%] w-[600px] h-[600px] bg-brand-medium/20 blur-[120px] rounded-full"
                    />
                    <motion.div
                        animate={{ scale: [1.3, 1, 1.3], opacity: [0.05, 0.15, 0.05] }}
                        transition={{ duration: 20, repeat: Infinity }}
                        className="absolute top-1/2 -right-[10%] w-[500px] h-[500px] bg-brand-cyan/20 blur-[100px] rounded-full"
                    />
                </div>

                <div className="max-w-7xl mx-auto text-center space-y-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-medium/10 border border-brand-medium/20 text-brand-medium dark:text-brand-cyan text-xs font-black uppercase tracking-[0.3em]"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span>Limited Time Marketplace</span>
                    </motion.div>

                    <div className="space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase"
                        >
                            Get Up To <span className="text-brand-medium italic">95% Off</span> <br />
                            Premium Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky via-brand-medium to-brand-cyan">Tools.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed"
                        >
                            Access high-value business software, templates, and digital tools at unbeatable discounted prices. All tools are verified, ready-to-use, and delivered quickly.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <button
                            onClick={() => document.getElementById('marketplace-grid')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-10 py-5 bg-brand-deep dark:bg-white text-white dark:text-brand-deep rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
                        >
                            Browse Tools <ArrowRight className="w-4 h-4" />
                        </button>
                        <div className="flex items-center gap-3 py-2">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-4 border-white dark:border-black bg-slate-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?u=tooluser${i}`} alt="user" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div className="text-left">
                                <div className="text-xs font-black uppercase tracking-widest leading-none mb-1">Trusted By 500+</div>
                                <div className="text-[10px] text-slate-500 font-bold">Scaling Businesses Globally</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2️⃣ Filter & Search Section */}
            <section className="sticky top-20 z-40 px-4 md:px-6 mb-12" id="marketplace-grid">
                <div className="max-w-7xl mx-auto">
                    <div className="glass-morphism p-4 md:p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl backdrop-blur-xl dark:bg-black/60 bg-white/80">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                            {/* Search */}
                            <div className="lg:col-span-4 relative group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-medium transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Search by tool name..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-medium/20 transition-all font-medium"
                                />
                            </div>

                            {/* Category Filter */}
                            <div className="lg:col-span-3 relative">
                                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full appearance-none bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl py-3.5 pl-12 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-brand-medium/20 transition-all font-medium"
                                >
                                    <option value="All">All Categories</option>
                                    {CATEGORIES.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                            </div>

                            {/* Price Sort */}
                            <div className="lg:col-span-3 relative">
                                <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                <select
                                    value={priceSort}
                                    onChange={(e) => setPriceSort(e.target.value as any)}
                                    className="w-full appearance-none bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl py-3.5 pl-12 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-brand-medium/20 transition-all font-medium"
                                >
                                    <option value="none">Sort by Price</option>
                                    <option value="low">Price: Low to High</option>
                                    <option value="high">Price: High to Low</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                            </div>

                            {/* Discount Filter */}
                            <div className="lg:col-span-2 relative">
                                <Zap className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                                <select
                                    value={discountFilter}
                                    onChange={(e) => setDiscountFilter(e.target.value)}
                                    className="w-full appearance-none bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl py-3.5 pl-12 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-brand-medium/20 transition-all font-medium"
                                >
                                    <option value="0">All Deals</option>
                                    <option value="50">50% Off+</option>
                                    <option value="70">70% Off+</option>
                                    <option value="90">90% Off+</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3️⃣ Product Cards Layout */}
            <section className="py-12 px-4 md:px-6">
                <div className="max-w-7xl mx-auto">
                    {filteredTools.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                            <AnimatePresence mode="popLayout">
                                {filteredTools.map((tool) => (
                                    <motion.div
                                        layout
                                        key={tool.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="group relative h-[520px] md:h-[550px] bg-white dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-2xl hover:border-brand-medium/50 transition-all duration-500 flex flex-col"
                                    >
                                        {/* 1. Image & Overlay Container */}
                                        <div className="relative h-44 w-full overflow-hidden">
                                            <img
                                                src={tool.image}
                                                alt={tool.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                            {/* Top Badges */}
                                            <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                                                <div className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full">
                                                    <span className="text-[9px] font-black text-white uppercase tracking-widest">{tool.category}</span>
                                                </div>
                                                <div className="px-3 py-1 bg-brand-medium text-white rounded-full shadow-lg shadow-brand-medium/30">
                                                    <span className="text-[10px] font-black uppercase tracking-tighter">{tool.discountBadge}</span>
                                                </div>
                                            </div>

                                            {/* Verified Overlay */}
                                            <div className="absolute bottom-4 left-4">
                                                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 rounded-lg">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                                    <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">Verified Logic</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 2. Content Section */}
                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="space-y-3 mb-auto">
                                                <div className="flex items-start justify-between gap-4">
                                                    <h3 className="text-xl md:text-2xl font-black tracking-tight leading-none group-hover:text-brand-medium transition-colors line-clamp-2">
                                                        {tool.name}
                                                    </h3>
                                                    <div className="p-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <ArrowUpRight className="w-4 h-4 text-brand-medium" />
                                                    </div>
                                                </div>
                                                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-medium line-clamp-3">
                                                    {tool.description}
                                                </p>
                                            </div>

                                            {/* 3. Pricing & CTA Section */}
                                            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/5 space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="space-y-0.5">
                                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                                            <span className="line-through transform translate-y-[1px] opacity-70">${tool.originalPrice}</span>
                                                            <span className="px-1.5 py-0.5 bg-brand-medium/10 text-brand-medium rounded text-[8px] font-black border border-brand-medium/10">SAVE ${(tool.originalPrice - tool.discountedPrice).toFixed(0)}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <span className="text-sm font-black text-slate-400">$</span>
                                                            <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">{tool.discountedPrice}</span>
                                                            <span className="text-[10px] font-black text-slate-400 self-end mb-1.5 ml-1 uppercase tracking-widest">USD</span>
                                                        </div>
                                                    </div>
                                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center group-hover:bg-brand-medium/10 group-hover:border-brand-medium transition-all duration-500">
                                                        <ShoppingBag className="w-5 h-5 text-slate-400 group-hover:text-brand-medium" />
                                                    </div>
                                                </div>

                                                <button
                                                    onClick={() => handleBuyViaWhatsApp(tool)}
                                                    data-product-name={tool.name}
                                                    data-product-price={tool.discountedPrice}
                                                    className="w-full group/btn relative overflow-hidden py-4 bg-[#0a0a0a] dark:bg-white text-white dark:text-black rounded-2xl font-black text-[10px] uppercase tracking-[0.25em] transition-all flex items-center justify-center gap-3 active:scale-[0.98] shadow-xl hover:shadow-brand-medium/20"
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-r from-brand-medium to-brand-cyan opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                                    <MessageCircle className="w-4 h-4 relative z-10 transition-transform group-hover/btn:-rotate-12" />
                                                    <span className="relative z-10">Buy via WhatsApp</span>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Subtle Background Mark */}
                                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-medium/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <div className="text-center py-20 space-y-6 bg-slate-100 dark:bg-white/5 rounded-[3rem] border border-dashed border-slate-300 dark:border-white/10">
                            <Box className="w-16 h-16 mx-auto text-slate-400 opacity-50" />
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold uppercase tracking-tight">No tools found</h3>
                                <p className="text-slate-500 font-medium">Try adjusting your filters or search term.</p>
                            </div>
                            <button
                                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setDiscountFilter('0'); setPriceSort('none'); }}
                                className="text-brand-medium font-black text-xs uppercase tracking-widest hover:underline"
                            >
                                Reset All Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* 5️⃣ Optional Trust Section */}
            <section className="py-20 px-4 md:px-6 bg-slate-100 dark:bg-slate-900/30 reveal-section">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { t: 'Instant Delivery', d: 'Get access credentials via WhatsApp within 10-30 mins of confirmation.', i: Zap },
                            { t: 'Secure Transactions', d: 'Direct human interaction ensures your payment is safe and verified.', i: Shield },
                            { t: 'Direct Support', d: '24/7 dedicated support via WhatsApp for any access or setup issues.', i: MessageCircle },
                            { t: 'Verified Tools', d: 'Every tool license and account is tested and verified for stability.', i: CheckCircle2 }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 group">
                                <div className="flex-shrink-0 w-14 h-14 rounded-[1.5rem] bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center border border-slate-200 dark:border-white/10 group-hover:border-brand-medium transition-colors">
                                    <item.i className="w-6 h-6 text-brand-medium group-hover:scale-110 transition-transform" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold tracking-tight uppercase leading-none">{item.t}</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                                        {item.d}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6️⃣ FAQ Section */}
            <section className="py-20 md:py-32 px-4 md:px-6 reveal-section">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-brand-medium font-bold uppercase tracking-[0.3em] text-xs">Customer Knowledge Base</span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-tight">Frequently <br /> Asked Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {FAQS.map((faq, i) => (
                            <div key={i} className="rounded-[2rem] border border-slate-200 dark:border-white/10 overflow-hidden bg-white dark:bg-slate-900/50 hover:border-brand-medium/30 transition-all">
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                                    className="w-full p-8 flex items-center justify-between text-left group"
                                >
                                    <span className="font-bold text-lg uppercase tracking-tight group-hover:text-brand-medium transition-colors">{faq.q}</span>
                                    <motion.div animate={{ rotate: openFAQ === i ? 180 : 0 }}>
                                        <ChevronDown className="w-6 h-6 text-brand-medium" />
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
                                            <div className="p-8 pt-0 text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
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

            {/* 7️⃣ Final CTA Section */}
            <section className="py-20 md:py-40 px-4 md:px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-medium/5 -z-10" />
                <div className="max-w-5xl mx-auto text-center space-y-12">
                    <div className="space-y-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]"
                        >
                            Save More. <br />
                            <span className="text-brand-medium">Scale Faster.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto"
                        >
                            Premium tools at unbeatable prices — limited availability. Don't wait for the next price hike.
                        </motion.p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi Preet Tech, I want to explore premium business tools deals.`, '_blank')}
                        className="px-12 py-6 bg-[#25D366] text-white font-black rounded-[2rem] shadow-2xl flex items-center gap-4 uppercase tracking-[0.2em] text-sm mx-auto group"
                    >
                        Chat on WhatsApp Now <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    </motion.button>
                </div>
            </section>

            <Footer />

            {/* Sticky WhatsApp Floating Button */}
            <motion.a
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={`https://wa.me/${whatsappNumber}?text=Hi Preet Tech, I have a question about the Business Tools Marketplace.`}
                target="_blank"
                className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center group"
            >
                <div className="absolute -top-12 right-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                    Chat with an expert
                </div>
                <MessageCircle className="w-8 h-8" />
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
            </motion.a>

        </main>
    );
}

