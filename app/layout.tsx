import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout"; // Separate client logic like Lenis
import { ThemeProvider } from "../components/theme-provider";

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: '--font-jakarta',
    display: 'swap',
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: '--font-outfit',
    display: 'swap',
});

const jetbrains = JetBrains_Mono({
    subsets: ["latin"],
    variable: '--font-jetbrains',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Preet Tech | Next Gen Digital Agency",
    description: "Architecting digital universes where precision meets imagination. We deploy hyper-scale solutions for the brands of tomorrow.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${jakarta.variable} ${outfit.variable} ${jetbrains.variable}`} suppressHydrationWarning>
            <body className="antialiased font-sans bg-background text-foreground selection:bg-brand-medium/30 transition-colors duration-300" suppressHydrationWarning>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <ClientLayout>
                        {children}
                    </ClientLayout>
                </ThemeProvider>
            </body>
        </html>
    );
}
