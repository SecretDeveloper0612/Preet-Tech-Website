"use client";
import React from 'react';
import { Search } from 'lucide-react';
import { CATEGORIES } from '@/lib/blog-data';
import { motion } from 'framer-motion';

interface BlogHeroProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
    onSearch: (term: string) => void;
}

export default function BlogHero({ activeCategory, onCategoryChange, onSearch }: BlogHeroProps) {
    return (
        <section className="relative pt-32 pb-8 overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-8">
                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full max-w-2xl group"
                    >
                        <div className="absolute inset-0 bg-brand-cyan/20 blur-xl opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity" />
                        <div className="relative">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-cyan w-5 h-5 pointer-events-none" />
                            <input
                                type="text"
                                placeholder="Search library..."
                                onChange={(e) => onSearch(e.target.value)}
                                className="w-full h-16 pl-16 pr-6 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-cyan/30 outline-none transition-all text-lg font-bold placeholder:text-slate-600 shadow-xl"
                            />
                        </div>
                    </motion.div>

                    {/* Categories */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-2"
                    >
                        <button
                            onClick={() => onCategoryChange('All')}
                            className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${activeCategory === 'All'
                                ? 'bg-brand-medium border-brand-medium text-white shadow-lg shadow-brand-medium/20 scale-105'
                                : 'bg-white/5 border-white/10 text-slate-500 hover:border-brand-sky/40 hover:text-brand-cyan'
                                }`}
                        >
                            All_Posts
                        </button>
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => onCategoryChange(cat)}
                                className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${activeCategory === cat
                                    ? 'bg-brand-medium border-brand-medium text-white shadow-lg shadow-brand-medium/20 scale-105'
                                    : 'bg-white/5 border-white/10 text-slate-500 hover:border-brand-sky/40 hover:text-brand-cyan'
                                    }`}
                            >
                                {cat.replace(/ /g, '_')}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
