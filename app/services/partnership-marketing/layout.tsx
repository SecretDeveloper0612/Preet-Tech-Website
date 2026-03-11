import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Partnership Marketing Services | Preet Tech",
    description: "Expand your reach with strategic partnership marketing and affiliate ecosystems powered by data-driven platforms.",
    keywords: ["Partnership Marketing","Affiliate Programs","Strategic Marketing Tech"],
    alternates: {
        canonical: 'https://preettech.com/services/partnership-marketing',
    },
    openGraph: {
        title: "Partnership Marketing Services | Preet Tech",
        description: "Expand your reach with strategic partnership marketing and affiliate ecosystems powered by data-driven platforms.",
        url: 'https://preettech.com/services/partnership-marketing',
        siteName: 'Preet Tech',
        type: 'website',
    }
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}
