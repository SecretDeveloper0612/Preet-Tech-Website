"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import CustomCursor from "../components/CustomCursor";
import ChatWidget from "../components/ChatWidget";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        const lenis = new Lenis();

        // Use custom requestAnimationFrame if GSAP isn't needed here, 
        // but robust classic raf setup is preferred for Next.js to avoid freezing
        let rafId: number;
        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return (
        <>
            <CustomCursor />
            {children}
            <ChatWidget />
        </>
    );
}
