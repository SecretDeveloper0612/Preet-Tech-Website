"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Github,
    Twitter,
    Linkedin,
    Instagram,
    ArrowRight,
    ShieldCheck
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}

const ContactPage = () => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
    const [formState, setFormState] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const isDarkMode = false;
        setTheme(isDarkMode ? Theme.DARK : Theme.LIGHT);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        if (newTheme === Theme.DARK) {
            /* handled by next-themes */
        } else {
            /* handled by next-themes */
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 overflow-x-hidden">
            <Navbar isDark={theme === Theme.DARK} toggleTheme={toggleTheme} />

            <div className="pt-32 pb-20 px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Compact Header */}
                    <div className="mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 mb-4"
                        >
                            <div className="w-8 h-[1px] bg-brand-cyan" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-cyan">Connect</span>
                        </motion.div>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none">
                            Let's Build Your <span className="text-brand-cyan">Next Big Thing.</span>
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        {/* Left: Contact Details & Integrated Map */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="space-y-6">
                                {[
                                    { icon: Mail, label: "Email", value: "hello@preettech.com" },
                                    { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                                    { icon: MapPin, label: "Studio", value: "Sector 62, Noida, UP" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center border border-slate-100 dark:border-white/10 shrink-0 shadow-sm">
                                            <item.icon className="w-5 h-5 text-brand-cyan" />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{item.label}</p>
                                            <p className="text-sm font-bold text-slate-900 dark:text-white">{item.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Small Integrated Map */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="relative h-60 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-white/10 shadow-sm group"
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.882142279294!2d77.3622435!3d28.6139353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c3f1c3e!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1708064000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{
                                        border: 0,
                                        filter: theme === Theme.DARK ? 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' : 'grayscale(1) contrast(1.1)'
                                    }}
                                    allowFullScreen
                                    loading="lazy"
                                    className="transition-all duration-700 group-hover:grayscale-0"
                                ></iframe>
                                <div className="absolute inset-x-0 bottom-0 p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between">
                                    <span className="text-[10px] font-bold dark:text-white">Our Location</span>
                                    <ArrowRight className="w-3 h-3 text-brand-cyan" />
                                </div>
                            </motion.div>

                            {/* Minimal Socials */}
                            <div className="flex gap-3">
                                {[Linkedin, Twitter, Github, Instagram].map((Icon, i) => (
                                    <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-100 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-cyan hover:border-brand-cyan transition-all bg-white dark:bg-white/5">
                                        <Icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right: Modern Compact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:col-span-3 bg-slate-50 dark:bg-white/[0.03] rounded-[2.5rem] p-8 md:p-10 border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Identity</label>
                                        <input
                                            required
                                            type="text"
                                            name="fullName"
                                            value={formState.fullName}
                                            onChange={handleInputChange}
                                            className="w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl py-4 px-5 text-sm text-slate-900 dark:text-white outline-none focus:border-brand-cyan transition-all shadow-sm"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Node</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleInputChange}
                                            className="w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl py-4 px-5 text-sm text-slate-900 dark:text-white outline-none focus:border-brand-cyan transition-all shadow-sm"
                                            placeholder="hello@world.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Brief Vision</label>
                                    <textarea
                                        required
                                        name="message"
                                        value={formState.message}
                                        onChange={handleInputChange}
                                        rows={5}
                                        className="w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-2xl py-4 px-5 text-sm text-slate-900 dark:text-white outline-none focus:border-brand-cyan transition-all resize-none shadow-sm"
                                        placeholder="Tell us about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-16 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black uppercase tracking-[0.2em] rounded-xl hover:bg-brand-cyan dark:hover:bg-brand-cyan transition-all duration-300 shadow-lg shadow-slate-200 dark:shadow-none flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50"
                                >
                                    <AnimatePresence mode="wait">
                                        {submitted ? (
                                            <motion.div key="1" initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex items-center gap-2">
                                                Received <ShieldCheck className="w-4 h-4" />
                                            </motion.div>
                                        ) : isSubmitting ? (
                                            <div className="w-5 h-5 border-2 border-brand-cyan border-t-transparent rounded-full animate-spin" />
                                        ) : (
                                            <motion.div key="2" className="flex items-center gap-2">
                                                Initiate <Send className="w-3 h-3" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default ContactPage;
