"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Mail, ArrowRight, TrendingUp } from 'lucide-react';
import { BLOG_POSTS, CATEGORIES } from '@/lib/blog-data';

export default function BlogSidebar() {
    const recentPosts = BLOG_POSTS.slice(0, 3);
    const popularPosts = BLOG_POSTS.slice(1, 4);

    const [subscribeEmail, setSubscribeEmail] = useState('');
    const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [subscribeMessage, setSubscribeMessage] = useState('');

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubscribeStatus('loading');
        setSubscribeMessage('');

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: subscribeEmail })
            });

            const data = await response.json();

            if (data.success) {
                setSubscribeStatus('success');
                setSubscribeEmail('');
                setSubscribeMessage(data.message || 'Subscription successful!');
                setTimeout(() => {
                    setSubscribeStatus('idle');
                    setSubscribeMessage('');
                }, 5000);
            } else {
                setSubscribeStatus('error');
                setSubscribeMessage(data.message || 'Something went wrong.');
            }
        } catch (err) {
            setSubscribeStatus('error');
            setSubscribeMessage('Network Error. Please try again.');
        }
    };
    return (
        <aside className="space-y-12 sticky top-32">
            {/* Search Bar */}
            <div className="bg-surface/40 dark:bg-[#0b0f1a]/60 border border-white/5 p-6 rounded-2xl">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Search</h3>
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search insights..."
                        className="w-full h-12 pl-12 pr-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-sky/40 outline-none transition-all text-sm"
                    />
                </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-surface/40 dark:bg-[#0b0f1a]/60 border border-white/5 p-6 rounded-2xl">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-brand-cyan" />
                    Latest Posts
                </h3>
                <div className="space-y-6">
                    {recentPosts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`} className="group flex gap-4">
                            <div className="w-16 h-16 rounded-lg bg-slate-800 shrink-0 overflow-hidden">
                                <div className="w-full h-full animate-pulse bg-slate-700" title={post.title} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold leading-snug group-hover:text-brand-cyan transition-colors line-clamp-2">
                                    {post.title}
                                </h4>
                                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mt-2 block">
                                    {post.date}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-brand-medium/20 to-brand-deep/20 border border-brand-medium/30 p-8 rounded-[2rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Mail className="w-16 h-16" />
                </div>
                <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3 tracking-tight">Growth Insights Weekly</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-6">
                        Join 5,000+ founders and marketers getting our best growth strategies.
                    </p>
                    <form onSubmit={handleSubscribe} className="space-y-3 relative">
                        <input
                            type="email"
                            placeholder="Email address"
                            value={subscribeEmail}
                            onChange={(e) => setSubscribeEmail(e.target.value)}
                            required
                            disabled={subscribeStatus === 'loading'}
                            className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-sky/40 outline-none transition-all text-sm disabled:opacity-50 text-slate-900 dark:text-white"
                        />
                        <button
                            type="submit"
                            disabled={subscribeStatus === 'loading'}
                            className="w-full h-12 bg-[#3994fa] text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:shadow-lg hover:shadow-[#3994fa]/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {subscribeStatus === 'loading' ? 'SUBSCRIBING...' : 'SUBSCRIBE NOW'}
                        </button>
                        {subscribeMessage && (
                            <p className={`text-xs mt-2 font-bold ${subscribeStatus === 'success' ? 'text-[#3994fa]' : 'text-red-500'}`}>
                                {subscribeMessage}
                            </p>
                        )}
                    </form>
                </div>
            </div>

            {/* Categories */}
            <div className="bg-surface/40 dark:bg-[#0b0f1a]/60 border border-white/5 p-6 rounded-2xl">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6">All Categories</h3>
                <div className="space-y-2">
                    {CATEGORIES.map((cat) => (
                        <Link
                            key={cat}
                            href={`/blog?category=${cat.replace(/\s+/g, '-').toLowerCase()}`}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group"
                        >
                            <span className="text-sm text-slate-400 group-hover:text-brand-cyan transition-colors">{cat}</span>
                            <span className="text-xs text-slate-600">
                                {BLOG_POSTS.filter(p => p.category === cat).length}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* CTA Box */}
            <div className="bg-brand-medium text-white p-8 rounded-[2rem] relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-2xl font-black mb-4 leading-tight">Ready to Scale Your Digital Presence?</h3>
                    <p className="text-white/80 text-sm mb-8 leading-relaxed">
                        Book a free discovery call with our experts today.
                    </p>
                    <button className="w-full py-4 bg-white text-brand-medium rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
                        Book Free Strategy Call <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
                {/* Background glow */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 blur-[60px] rounded-full" />
            </div>
        </aside>
    );
}
