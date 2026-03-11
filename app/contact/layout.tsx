import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Preet Tech | Get in Touch for IT Solutions",
    description: "Connect with Preet Tech to discuss your next big project. Book a free strategy call with our digital transformation experts today.",
    keywords: ["Contact Preet Tech","IT Solutions Contact","Digital Agency Contact","Strategy Call"],
    alternates: {
        canonical: 'https://preettech.com/contact',
    },
    openGraph: {
        title: "Contact Preet Tech | Get in Touch for IT Solutions",
        description: "Connect with Preet Tech to discuss your next big project. Book a free strategy call with our digital transformation experts today.",
        url: 'https://preettech.com/contact',
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
