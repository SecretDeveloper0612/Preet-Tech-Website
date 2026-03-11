import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Preet Tech | Innovative IT Solutions Company & Digital Agency",
    description: "Preet Tech is an innovative IT solutions company specializing in custom software development, digital transformation, AI automation, and enterprise tech solutions.",
    keywords: [
        "Innovative IT Solutions Company",
        "custom software development",
        "digital transformation agency",
        "enterprise IT solutions",
        "web application development",
        "mobile app development services",
        "scalable cloud infrastructure",
        "UI/UX design agency",
        "artificial intelligence solutions",
        "future-ready technology",
        "high-performance web architecture",
        "secure digital experiences",
        "business automation services",
        "enterprise technology partner"
    ],
    alternates: {
        canonical: 'https://preettech.com/about',
    },
    openGraph: {
        title: "About Preet Tech | Innovative IT Solutions Company",
        description: "Preet Tech is an innovative IT solutions company specializing in custom software development, digital transformation, and enterprise tech solutions.",
        url: 'https://preettech.com/about',
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
