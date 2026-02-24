"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import StatsCounter from '../components/StatsCounter';
import SimpleSteps from '../components/SimpleSteps';
import ReadyToPartner from '../components/ReadyToPartner';
import Testimonials from '../components/Testimonials';
import ProductShowcase from '../components/ProductShowcase';
import Insights from '../components/Insights';
import Footer from '../components/Footer';

enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}

export default function Home() {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);

        // Update document class for Tailwind dark mode
        if (newTheme === Theme.DARK) {
            /* handled by next-themes */
        } else {
            /* handled by next-themes */
        }
    };


    return (
        <main className="selection:bg-brand-medium/30 overflow-x-hidden bg-background text-foreground transition-colors duration-300">
            <Navbar isDark={theme === Theme.DARK} toggleTheme={toggleTheme} />

            <Hero isDark={theme === Theme.DARK} />

            <Services />

            <WhyChooseUs />

            <StatsCounter />

            <Insights />

            <SimpleSteps />

            <Testimonials />

            <ProductShowcase />

            <ReadyToPartner />

            <Footer />
        </main>
    );
}
