"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    User,
    Building2,
    MessageSquare,
    PhoneCall,
    ChevronDown,
    Github,
    Twitter,
    Linkedin,
    Instagram,
    ArrowRight,
    Sparkles,
    ShieldCheck,
    Globe
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
        phone: '',
        email: '',
        companyName: '',
        service: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains('dark');
        setTheme(isDarkMode ? Theme.DARK : Theme.LIGHT);
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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    const services = [
        "Website Development",
        "App Development",
        "Software Development",
        "Performance Marketing",
        "Social Media Handling",
        "Partnership Marketing",
        "Start Your Business",
        "Content Creation"
    ];

    const contactInfo = [
        {
            icon: Mail,
            label: "Email Address",
            value: "hello@preettech.com",
            href: "mailto:hello@preettech.com"
        },
        {
            icon: Phone,
            label: "Phone Number",
            value: "+91 98765 43210",
            href: "tel:+919876543210"
        },
        {
            icon: MapPin,
            label: "Office Location",
            value: "Tech Hub, Sector 62, Noida, UP, India",
            href: "https://maps.google.com"
        },
        {
            icon: Clock,
            label: "Business Hours",
            value: "Mon - Fri: 9:00 AM - 6:00 PM",
            href: null
        }
    ];

    const socialIcons = [
        { icon: Linkedin, href: "#" },
        { icon: Twitter, href: "#" },
        { icon: Instagram, href: "#" },
        { icon: Github, href: "#" }
    ];

    return (
        <main className="relative z-10 selection:bg-brand-medium/30 overflow-x-hidden bg-background text-foreground transition-colors duration-500 font-sans">
            <Navbar isDark={theme === Theme.DARK} toggleTheme={toggleTheme} />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6 lg:px-20 flex flex-col items-center justify-center overflow-hidden">
                {/* Background Accents */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(63,143,204,0.1),transparent_70%)]" />
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-20 right-[10%] w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-0 left-[10%] w-[500px] h-[500px] bg-brand-medium/5 rounded-full blur-[120px]"
                    />
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-medium/10 border border-brand-medium/20 text-brand-medium text-[10px] font-black uppercase tracking-[0.3em] mb-8"
                    >
                        <Sparkles className="w-3.5 h-3.5" />
                        Engagement Protocol
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter mb-8 uppercase"
                    >
                        Let’s Build <br />
                        <span className="text-brand-medium italic">Something Great</span> <br />
                        Together.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
                    >
                        Whether you're looking to launch a new project, explore a strategic partnership, or simply have an inquiry, our team is ready to engineer your vision into reality.
                    </motion.p>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-20 px-6 lg:px-20 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                        {/* Left Side: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-7 bg-white dark:bg-slate-900/40 rounded-[3rem] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:shadow-[0_0_100px_-20px_rgba(63,143,204,0.1)] border border-slate-100 dark:border-brand-medium/10 backdrop-blur-xl relative overflow-hidden"
                        >
                            {/* Card Accent Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-medium/5 blur-[80px] -z-10" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-cyan/5 blur-[80px] -z-10" />

                            <div className="mb-10 relative">
                                <div className="h-1 w-12 bg-brand-medium rounded-full mb-6" />
                                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-4">Initialize Inquiry</h2>
                                <p className="text-slate-500 dark:text-slate-400 font-medium max-w-md">Fill out the protocol below and our strategic architects will respond within 12 hours.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-medium ml-1">Full Name</label>
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-medium transition-colors" />
                                            <input
                                                required
                                                type="text"
                                                name="fullName"
                                                value={formState.fullName}
                                                onChange={handleInputChange}
                                                placeholder="Enter full name"
                                                className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-medium/20 transition-all font-medium placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-medium ml-1">Phone Number</label>
                                        <div className="relative group">
                                            <PhoneCall className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-medium transition-colors" />
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                value={formState.phone}
                                                onChange={handleInputChange}
                                                placeholder="+91 00000 00000"
                                                className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-medium/20 transition-all font-medium placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-medium ml-1">Email Address</label>
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-medium transition-colors" />
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={formState.email}
                                                onChange={handleInputChange}
                                                placeholder="you@email.com"
                                                className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-medium/20 transition-all font-medium placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-brand-medium ml-1">Company Name (Optional)</label>
                                        <div className="relative group">
                                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-medium transition-colors" />
                                            <input
                                                type="text"
                                                name="companyName"
                                                value={formState.companyName}
                                                onChange={handleInputChange}
                                                placeholder="Your Company"
                                                className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-medium/20 transition-all font-medium placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-medium ml-1">Service Interested In</label>
                                    <div className="relative group">
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none group-focus-within:text-brand-medium transition-colors" />
                                        <select
                                            required
                                            name="service"
                                            value={formState.service}
                                            onChange={handleInputChange}
                                            className="w-full appearance-none bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/5 rounded-2xl py-4 pl-6 pr-12 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-medium/20 transition-all font-medium"
                                        >
                                            <option value="" disabled className="dark:bg-slate-900">Select a service</option>
                                            {services.map((service, i) => (
                                                <option key={i} value={service} className="dark:bg-slate-900">{service}</option>
                                            ))}
                                            <option value="Other" className="dark:bg-slate-900">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-brand-medium ml-1">Message</label>
                                    <div className="relative group">
                                        <MessageSquare className="absolute left-4 top-5 w-4 h-4 text-slate-400 group-focus-within:text-brand-medium transition-colors" />
                                        <textarea
                                            required
                                            name="message"
                                            value={formState.message}
                                            onChange={handleInputChange}
                                            placeholder="Tell us about your project/inquiry..."
                                            rows={5}
                                            className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-medium/20 transition-all font-medium resize-none placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full group relative bg-brand-medium hover:bg-brand-deep text-white rounded-2xl py-5 font-black text-xs uppercase tracking-[0.3em] transition-all overflow-hidden shadow-2xl shadow-brand-medium/20 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70 disabled:pointer-events-none"
                                >
                                    <AnimatePresence mode="wait">
                                        {submitted ? (
                                            <motion.div
                                                key="sent"
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                className="flex items-center gap-2"
                                            >
                                                Message Sent <ShieldCheck className="w-5 h-5" />
                                            </motion.div>
                                        ) : isSubmitting ? (
                                            <motion.div
                                                key="submitting"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                            />
                                        ) : (
                                            <motion.div
                                                key="default"
                                                className="flex items-center gap-3"
                                            >
                                                Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </form>
                        </motion.div>

                        {/* Right Side: Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5 flex flex-col justify-between"
                        >
                            <div className="space-y-12">
                                <div>
                                    <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-8">Node Information</h2>
                                    <div className="space-y-6">
                                        {contactInfo.map((item, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ x: 10 }}
                                                className="flex items-start gap-6 group"
                                            >
                                                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-medium transition-colors">
                                                    <item.icon className="w-5 h-5 text-brand-medium group-hover:text-white transition-colors" />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                                                    {item.href ? (
                                                        <a href={item.href} className="text-lg font-bold text-slate-900 dark:text-white hover:text-brand-medium transition-colors">
                                                            {item.value}
                                                        </a>
                                                    ) : (
                                                        <p className="text-lg font-bold text-slate-900 dark:text-white">
                                                            {item.value}
                                                        </p>
                                                    )}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-8 rounded-[3rem] bg-slate-50 dark:bg-brand-medium/5 border border-slate-200 dark:border-brand-medium/10 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-medium/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute top-[-20%] right-[-20%] p-4 opacity-[0.03] dark:opacity-[0.05] pointer-events-none group-hover:scale-110 transition-transform duration-700">
                                        <Globe className="w-64 h-64 text-brand-medium" />
                                    </div>
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-brand-medium mb-6 relative z-10">Strategic Network</h3>
                                    <div className="flex gap-4 relative z-10">
                                        {socialIcons.map((social, i) => (
                                            <a
                                                key={i}
                                                href={social.href}
                                                className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-brand-medium hover:scale-110 group/social transition-all shadow-sm"
                                            >
                                                <social.icon className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover/social:text-white transition-colors" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 lg:mt-0 pt-12 border-t border-slate-100 dark:border-white/5">
                                <div className="flex items-center gap-4 text-slate-400">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 overflow-hidden bg-slate-100 dark:bg-slate-800">
                                                <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="Team Member" className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-[10px] font-black uppercase tracking-tighter leading-tight">
                                        Direct line to <br /> <span className="text-slate-900 dark:text-white">Senior Architects</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Google Map Section */}
            <section className="py-20 px-6 lg:px-20 relative z-10 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-brand-medium text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Physical Node</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Locate Us</h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-[3rem] overflow-hidden border border-slate-100 dark:border-white/5 shadow-2xl h-[450px] group"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.882142279294!2d77.3622435!3d28.6139353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c3f1c3e!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1708064000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: theme === Theme.DARK ? 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' : 'none' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="transition-all duration-700 group-hover:scale-105"
                        ></iframe>

                        <div className="absolute top-6 left-6 p-6 bg-white/90 dark:bg-black/80 backdrop-blur-xl rounded-[2rem] border border-white/20 dark:border-white/10 max-w-xs shadow-xl hidden md:block">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-brand-medium flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <h4 className="font-bold text-slate-900 dark:text-white">Preet Tech HQ</h4>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                Our engineering center is located in the heart of Noida's tech corridor. Visit us for coffee and a project session.
                            </p>
                            <button className="mt-4 text-[10px] font-black uppercase text-brand-medium flex items-center gap-2 hover:gap-3 transition-all">
                                Get Directions <ArrowRight className="w-3 h-3" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ContactPage;
