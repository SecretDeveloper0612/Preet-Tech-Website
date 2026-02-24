"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, Share2, ChevronRight, ArrowRight, Twitter, Linkedin, Facebook, Rocket } from 'lucide-react';
import { BlogPost } from '@/lib/blog-data';
import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogSchema from '@/components/blog/BlogSchema';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface BlogPostContentProps {
    post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const isDarkMode = false;
        setIsDark(isDarkMode);
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        if (newTheme) {
            /* handled by next-themes */
        } else {
            /* handled by next-themes */
        }
    };

    return (
        <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />

            <article className="pt-32 pb-24">
                <BlogSchema post={post} />

                {/* Breadcrumbs */}
                <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12">
                    <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        <Link href="/" className="hover:text-brand-cyan transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/blog" className="hover:text-brand-cyan transition-colors">Blog</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-brand-cyan truncate max-w-[200px]">{post.title}</span>
                    </nav>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Main Content Area */}
                        <div className="lg:col-span-8">
                            {/* Header */}
                            <header className="mb-12">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="px-4 py-1.5 bg-brand-medium/10 border border-brand-medium/20 rounded-full text-xs font-bold text-brand-sky uppercase tracking-widest">
                                        {post.category}
                                    </span>
                                    <div className="h-px w-8 bg-white/10" />
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{post.date}</span>
                                </div>

                                <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-tight">
                                    {post.title}
                                </h1>

                                <div className="flex flex-wrap items-center justify-between gap-8 py-8 border-y border-white/5">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full overflow-hidden bg-brand-medium/20 text-brand-cyan flex items-center justify-center text-sm font-black uppercase border border-brand-medium/30 relative">
                                            {post.author.avatar ? (
                                                <Image
                                                    src={post.author.avatar}
                                                    alt={post.author.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                post.author.name.substring(0, 2)
                                            )}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-foreground font-black text-sm tracking-wide">{post.author.name}</span>
                                            <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">{post.author.role}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-brand-cyan" />
                                            <span>{post.readTime}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Share2 className="w-4 h-4 text-brand-cyan" />
                                            <span>Share</span>
                                        </div>
                                    </div>
                                </div>
                            </header>

                            {/* Featured Image */}
                            <div className="aspect-video w-full rounded-[2.5rem] bg-slate-900 overflow-hidden mb-16 border border-white/5 relative">
                                <Image
                                    src={post.featuredImage || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Post Content */}
                            <div className="prose prose-invert prose-brand max-w-none">
                                <div
                                    className="text-slate-400 text-lg leading-[1.8] space-y-8 blog-content-rich"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />
                            </div>

                            {/* Internal CTA Block */}
                            <div className="my-16 p-10 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-brand-medium/10 to-brand-deep/20 border border-brand-medium/20 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Rocket className="w-32 h-32" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">Want Help Implementing This Strategy?</h3>
                                    <p className="text-slate-400 text-lg mb-8 max-w-xl">
                                        Our growth experts have helped dozens of companies execute these exact frameworks to drive millions in revenue.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-brand-cyan text-[#020617] rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform"
                                    >
                                        Book Free Strategy Call <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Tags & Social Share */}
                            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="px-4 py-2 bg-white/5 rounded-lg text-xs font-bold text-slate-400 uppercase tracking-widest border border-white/5 cursor-default hover:bg-white/10 transition-colors">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Share this via</span>
                                    <div className="flex items-center gap-2">
                                        <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-all"><Twitter className="w-4 h-4" /></button>
                                        <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all"><Linkedin className="w-4 h-4" /></button>
                                        <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all"><Facebook className="w-4 h-4" /></button>
                                    </div>
                                </div>
                            </div>

                            {/* Author Footer */}
                            <div className="mt-16 p-10 rounded-[2.5rem] bg-white/5 border border-white/5 flex flex-col md:flex-row items-center gap-8">
                                <div className="w-24 h-24 rounded-3xl overflow-hidden bg-brand-medium/20 text-brand-cyan flex items-center justify-center text-3xl font-black uppercase border border-brand-medium/30 shrink-0 relative">
                                    {post.author.avatar ? (
                                        <Image
                                            src={post.author.avatar}
                                            alt={post.author.name}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        post.author.name.substring(0, 2)
                                    )}
                                </div>
                                <div>
                                    <h4 className="text-xl font-black mb-2 tracking-tight">Written by {post.author.name}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {post.author.role} at Preet Tech. Dedicated to helping brands leverage cutting-edge technology and performance marketing to scale in the digital universe.
                                    </p>
                                    <div className="mt-4 flex items-center gap-4">
                                        <Link href="#" className="text-xs font-bold text-brand-cyan uppercase tracking-widest hover:underline transition-all">View Profile</Link>
                                        <Link href="#" className="text-xs font-bold text-slate-500 uppercase tracking-widest hover:underline transition-all">Previous Articles</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <section className="py-24 mt-24 border-t border-white/5 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
                        <div className="max-w-4xl mx-auto">
                            <span className="text-brand-cyan font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Stay Ahead of the Curve</span>
                            <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">Ready to master the digital landscape?</h2>
                            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                                Subscribe to our newsletter for exclusive weekly insights that you won't find on our blog.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="flex-grow h-16 px-8 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-sky/40 outline-none transition-all text-lg"
                                />
                                <button className="h-16 px-10 bg-brand-cyan text-[#020617] rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform whitespace-nowrap">
                                    Sign Me Up
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </article>

            <Footer />
        </main>
    );
}
