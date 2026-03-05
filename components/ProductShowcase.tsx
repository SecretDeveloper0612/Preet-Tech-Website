import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, ShoppingCart, ChevronLeft, ChevronRight, MessageCircle, ArrowUpRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

const PRODUCTS = [
    {
        id: 'business-tool',
        title: 'Business Tool',
        category: 'Management',
        description: 'Operations & growth automation engine. Streamline workflows, track key metrics, and scale your operations effortlessly.',
        image: '/business-tool.png',
        originalPrice: 249.99,
        discountedPrice: 49.99,
        discountBadge: '80% OFF',
        whatsappMsg: "Hello Preet Tech, I would like to enquire about the Preet Tech Business Tool.",
        color: "from-blue-500/20 to-cyan-400/20"
    },
    {
        id: 'crm-tool',
        title: 'Nexus CRM',
        category: 'SaaS',
        description: 'Next-gen customer management portal. Build stronger relationships, track interactions, and drive sales pipeline growth.',
        image: '/crm-tool.png',
        originalPrice: 399.99,
        discountedPrice: 79.99,
        discountBadge: '80% OFF',
        whatsappMsg: "Hello Preet Tech, I would like to enquire about the Nexus CRM portal.",
        color: "from-indigo-500/20 to-purple-400/20"
    },
    {
        id: 'analytics-tool',
        title: 'Insight Pro',
        category: 'Analytics',
        description: 'Real-time data visualization streams. Transform raw data into actionable insights with beautiful, dynamic dashboards.',
        image: '/analytics-tool.png',
        originalPrice: 199.99,
        discountedPrice: 39.99,
        discountBadge: '80% OFF',
        whatsappMsg: "Hello Preet Tech, I would like to enquire about the Insight Pro Analytics tool.",
        color: "from-emerald-500/20 to-teal-400/20"
    },
    {
        id: 'automation-tool',
        title: 'Flow Master',
        category: 'Automation',
        description: 'Intelligent high-velocity automation. Connect your core apps, automate repetitive tasks, and boost team productivity.',
        image: '/automation-tool.png',
        originalPrice: 299.99,
        discountedPrice: 59.99,
        discountBadge: '80% OFF',
        whatsappMsg: "Hello Preet Tech, I would like to enquire about the Flow Master Automation suite.",
        color: "from-orange-500/20 to-rose-400/20"
    }
];

const ProductShowcase: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Create a base set wide enough to exceed ultra-wide screens
    const BASE_SET = [...PRODUCTS, ...PRODUCTS, ...PRODUCTS, ...PRODUCTS, ...PRODUCTS];
    // Looped data for infinite feel (Left Buffer, Center View, Right Buffer)
    const LOOPED_PRODUCTS = [...BASE_SET, ...BASE_SET, ...BASE_SET];

    const handleInfiniteScroll = () => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;
        const { scrollLeft, scrollWidth } = container;
        const singleSetWidth = scrollWidth / 3;

        // Update dot index
        const relativeScroll = scrollLeft % singleSetWidth;
        const index = Math.round(relativeScroll / (scrollWidth / LOOPED_PRODUCTS.length));
        setCurrentIndex(index % PRODUCTS.length);

        // Debounce seamless infinite loop jump to avoid breaking smooth scrolling
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

        scrollTimeoutRef.current = setTimeout(() => {
            if (!container || isDragging) return;
            const currentScroll = container.scrollLeft;

            // Jump instantly and invisibly once scroll stops
            if (currentScroll >= singleSetWidth * 2 - 50) {
                container.style.scrollBehavior = 'auto';
                container.scrollLeft = currentScroll - singleSetWidth;
            } else if (currentScroll <= singleSetWidth / 2 + 50) {
                container.style.scrollBehavior = 'auto';
                container.scrollLeft = currentScroll + singleSetWidth;
            }
        }, 150);
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            const setupInitialScroll = () => {
                container.style.scrollBehavior = 'auto';
                container.scrollLeft = container.scrollWidth / 3;
            };
            setupInitialScroll();
            const timeout = setTimeout(setupInitialScroll, 100);
            return () => clearTimeout(timeout);
        }
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const firstCard = container.querySelector('.product-card') as HTMLElement;
            if (firstCard) {
                const cardWidth = firstCard.offsetWidth + 24; // includes gap size
                container.style.scrollBehavior = 'smooth';
                container.scrollLeft += direction === 'left' ? -cardWidth : cardWidth;
            }
        }
    };

    // --- Auto Slide and Loop Logic ---
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAutoPlaying && !isDragging) {
            interval = setInterval(() => {
                scroll('right');
            }, 3000); // 3 seconds for a prominent auto slide
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, isDragging]);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setIsAutoPlaying(false);
        if (!scrollContainerRef.current) return;
        scrollContainerRef.current.style.scrollBehavior = 'auto';
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setTimeout(() => setIsAutoPlaying(true), 2500); // Resume sliding after user interacts
    };

    return (
        <section
            className="py-8 md:py-16 relative bg-background overflow-hidden transition-colors duration-300"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => !isDragging && setIsAutoPlaying(true)}
        >
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-medium/10 border border-brand-medium/20 text-brand-medium text-[10px] font-black uppercase tracking-[0.3em]"
                        >
                            <ShoppingCart className="w-3.5 h-3.5" />
                            Inventory_Assets
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-black text-foreground tracking-tighter uppercase leading-none"
                        >
                            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-cyan italic">Tools.</span>
                        </motion.h2>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">

                        <div className="hidden md:flex items-center gap-4">
                            <button
                                onClick={() => scroll('left')}
                                className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-transparent rounded-full border-2 border-[#E9EEF4] dark:border-white/10 flex items-center justify-center text-[#8C9FAF] hover:bg-[#3994fa] dark:hover:bg-[#3994fa] hover:text-white dark:hover:text-white hover:border-[#3994fa] dark:hover:border-[#3994fa] shadow-sm hover:shadow-lg transition-all duration-300 active:scale-95 group"
                            >
                                <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 stroke-[2px]" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-transparent rounded-full border-2 border-[#E9EEF4] dark:border-white/10 flex items-center justify-center text-[#8C9FAF] hover:bg-[#3994fa] dark:hover:bg-[#3994fa] hover:text-white dark:hover:text-white hover:border-[#3994fa] dark:hover:border-[#3994fa] shadow-sm hover:shadow-lg transition-all duration-300 active:scale-95 group"
                            >
                                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 stroke-[2px]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slider Container */}
            <div className="relative w-full">
                <div
                    ref={scrollContainerRef}
                    onScroll={handleInfiniteScroll}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-6 md:pl-[max(1.5rem,calc((100%-1280px+3rem)/2))] md:pr-[max(1.5rem,calc((100%-1280px+3rem)/2))] pb-12 cursor-grab active:cursor-grabbing"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {LOOPED_PRODUCTS.map((product, idx) => (
                        <div
                            key={`${product.id}-${idx}`}
                            className="product-card shrink-0 snap-center snap-always w-[calc(100%-48px)] md:w-[280px] lg:w-[calc((100%-120px)/4)] xl:w-[290px]"
                        >
                            <motion.div
                                className="group relative h-[360px] md:h-[400px] bg-white dark:bg-slate-900/50 rounded-[2rem] border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-2xl hover:border-brand-medium/50 transition-all duration-500 flex flex-col"
                            >
                                {/* 1. Image & Overlay Container */}
                                <div className="relative h-36 w-full overflow-hidden shrink-0">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    {/* Top Badges */}
                                    <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                                        <div className="px-2.5 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full">
                                            <span className="text-[8px] font-black text-white uppercase tracking-widest">{product.category}</span>
                                        </div>
                                        <div className="px-2.5 py-1 bg-brand-medium text-white rounded-full shadow-lg shadow-brand-medium/30">
                                            <span className="text-[9px] font-black uppercase tracking-tighter">{product.discountBadge}</span>
                                        </div>
                                    </div>

                                    {/* Verified Overlay */}
                                    <div className="absolute bottom-3 left-3">
                                        <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 rounded-lg">
                                            <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest">Verified Logic</span>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Content Section */}
                                <div className="p-5 flex-1 flex flex-col">
                                    <div className="space-y-2 mb-auto">
                                        <div className="flex items-start justify-between gap-3">
                                            <h3 className="text-lg md:text-xl font-black tracking-tight leading-tight group-hover:text-brand-medium transition-colors line-clamp-2">
                                                {product.title}
                                            </h3>
                                            <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <ArrowUpRight className="w-3.5 h-3.5 text-brand-medium" />
                                            </div>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed font-medium line-clamp-3">
                                            {product.description}
                                        </p>
                                    </div>

                                    {/* 3. Pricing & CTA Section */}
                                    <div className="mt-5 pt-5 border-t border-slate-100 dark:border-white/5 space-y-4">
                                        <a
                                            href={`https://wa.me/917900310428?text=${encodeURIComponent(product.whatsappMsg)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full group/btn relative overflow-hidden py-3 bg-[#3994fa] text-white rounded-xl font-black text-[9px] uppercase tracking-[0.25em] transition-all flex items-center justify-center gap-2 active:scale-[0.98] shadow-lg hover:shadow-brand-medium/20"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-brand-medium to-brand-cyan opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                            <MessageCircle className="w-3.5 h-3.5 relative z-10 transition-transform group-hover/btn:-rotate-12" />
                                            <span className="relative z-10">Buy via WhatsApp</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Subtle Background Mark */}
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-medium/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            </motion.div>
                        </div>
                    ))}
                </div>
                {/* Bleed Masking Gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-12 lg:w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none hidden md:block" />
                <div className="absolute right-0 top-0 bottom-0 w-12 lg:w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none hidden md:block" />
            </div>

            {/* Bottom View More Button */}
            <div className="mt-2 md:mt-6 flex justify-center items-center w-full px-6 relative z-10">
                <Link
                    href="/services/business-tools"
                    className="px-8 py-3.5 rounded-full bg-brand-medium hover:bg-brand-medium/90 text-white text-[11px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-brand-medium/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                    View More Deals
                    <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
            </div>
        </section>
    );
};

export default ProductShowcase;
