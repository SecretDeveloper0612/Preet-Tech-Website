"use client";
import React, { useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface CardData {
    id: string;
    label: string;
    platform: string;
    bg?: string;
    bgStyle?: React.CSSProperties;
    content: React.ReactNode;
}

interface PortfolioCarouselProps {
    cards: CardData[];
}

const CARD_WIDTH = 340;
const CARD_GAP = 20;
const CARD_STEP = CARD_WIDTH + CARD_GAP;

export default function PortfolioCarousel({ cards }: PortfolioCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const x = useMotionValue(0);
    const trackRef = useRef<HTMLDivElement>(null);

    const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val));

    const snapTo = useCallback((index: number) => {
        const clamped = clamp(index, 0, cards.length - 1);
        setActiveIndex(clamped);
        animate(x, -clamped * CARD_STEP, { type: 'spring', stiffness: 280, damping: 30 });
    }, [cards.length, x]);

    const handleDragEnd = (_: any, info: any) => {
        setIsDragging(false);
        const threshold = CARD_STEP / 3;
        if (info.offset.x < -threshold) {
            snapTo(activeIndex + 1);
        } else if (info.offset.x > threshold) {
            snapTo(activeIndex - 1);
        } else {
            snapTo(activeIndex);
        }
    };

    // Faded trailing opacity effect
    const cardOpacity = (i: number) => {
        const dist = Math.abs(i - activeIndex);
        if (dist === 0) return 1;
        if (dist === 1) return 0.75;
        return 0.45;
    };

    return (
        <section className="py-16 md:py-28 bg-[#060911] text-white overflow-hidden reveal-section relative">
            {/* Background glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-deep/10 blur-[180px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-cyan/8 blur-[140px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="h-px w-8 bg-brand-cyan" />
                            <span className="text-brand-cyan font-bold uppercase tracking-[0.25em] text-xs">Our Work</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                            Content That<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky to-brand-cyan">
                                Stops the Scroll.
                            </span>
                        </h2>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-4">
                        <p className="text-slate-400 max-w-xs text-sm leading-relaxed md:text-right">
                            Premium content crafted for every platform — built to grow your brand.
                        </p>
                        {/* Nav Buttons */}
                        <div className="flex items-center gap-3">
                            <button
                                id="portfolio-prev"
                                onClick={() => snapTo(activeIndex - 1)}
                                disabled={activeIndex === 0}
                                className="w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-brand-medium/20 hover:border-brand-medium/40 flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-5 h-5 text-white group-hover:text-brand-cyan transition-colors" />
                            </button>
                            <span className="text-slate-500 text-sm font-bold tabular-nums">
                                {String(activeIndex + 1).padStart(2, '0')} / {String(cards.length).padStart(2, '0')}
                            </span>
                            <button
                                id="portfolio-next"
                                onClick={() => snapTo(activeIndex + 1)}
                                disabled={activeIndex === cards.length - 1}
                                className="w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-brand-medium/20 hover:border-brand-medium/40 flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-5 h-5 text-white group-hover:text-brand-cyan transition-colors" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel Track — full bleed */}
            <div className="relative pl-4 md:pl-[max(1rem,calc((100vw-80rem)/2+1.5rem))]">
                {/* Drag hint */}
                <motion.div
                    animate={{ opacity: isDragging ? 0 : 1 }}
                    className="absolute top-[-28px] right-4 md:right-8 text-[10px] text-slate-600 font-bold uppercase tracking-widest flex items-center gap-1.5 pointer-events-none"
                >
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Drag to explore
                </motion.div>

                <div ref={trackRef} className="overflow-visible cursor-grab active:cursor-grabbing">
                    <motion.div
                        drag="x"
                        dragConstraints={{ left: -((cards.length - 1) * CARD_STEP), right: 0 }}
                        dragElastic={0.08}
                        onDragStart={() => setIsDragging(true)}
                        onDragEnd={handleDragEnd}
                        style={{ x }}
                        className="flex gap-5 select-none"
                        // Prevent click events from firing on links/buttons while dragging
                        onClick={(e) => { if (isDragging) e.preventDefault(); }}
                    >
                        {cards.map((card, i) => (
                            <motion.div
                                key={card.id}
                                animate={{ opacity: cardOpacity(i), scale: i === activeIndex ? 1 : 0.97 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => !isDragging && snapTo(i)}
                                className="shrink-0 relative rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing"
                                style={{
                                    width: `${CARD_WIDTH}px`,
                                    height: '440px',
                                    ...(card.bgStyle ?? {}),
                                }}
                            >
                                {/* Gradient background */}
                                {card.bg && (
                                    <div className={`absolute inset-0 bg-gradient-to-br ${card.bg}`} />
                                )}

                                {/* Content */}
                                <div className="relative z-10 h-full">
                                    {card.content}
                                </div>

                                {/* Platform badge */}
                                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/30 backdrop-blur border border-white/20 text-[10px] font-bold text-white uppercase tracking-wider">
                                    {card.platform}
                                </div>

                                {/* Active indicator border */}
                                {i === activeIndex && (
                                    <motion.div
                                        layoutId="activeBorder"
                                        className="absolute inset-0 rounded-3xl border-2 border-brand-cyan/60 pointer-events-none z-30"
                                    />
                                )}
                            </motion.div>
                        ))}

                        {/* Spacer at end */}
                        <div style={{ width: `${CARD_WIDTH}px`, flexShrink: 0 }} />
                    </motion.div>
                </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-8 px-4">
                {cards.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => snapTo(i)}
                        className={`transition-all duration-300 rounded-full ${i === activeIndex
                                ? 'w-7 h-2 bg-brand-cyan'
                                : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                            }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Footer CTA */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 mt-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                    className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-2">
                            {['#3F8FCC', '#5FD3E6', '#2F6FB5'].map((c, i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#060911]" style={{ background: c }} />
                            ))}
                        </div>
                        <div>
                            <div className="text-white font-bold text-sm">500+ posts created for 50+ brands</div>
                            <div className="text-slate-500 text-xs">Across Instagram, LinkedIn, YouTube & more</div>
                        </div>
                    </div>
                    <a
                        href="#audit"
                        className="shrink-0 px-6 py-3 bg-gradient-to-r from-brand-medium to-brand-deep rounded-xl font-bold text-white text-xs uppercase tracking-wider hover:shadow-lg hover:shadow-brand-medium/30 transition-all flex items-center gap-2"
                    >
                        Get Our Portfolio <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
