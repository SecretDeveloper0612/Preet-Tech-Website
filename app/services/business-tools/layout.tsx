import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Custom Business Tools & Enterprise Software | Preet Tech",
    description: "Streamline your operations with tailor-made enterprise business tools and CRM solutions engineered for maximum productivity.",
    keywords: ["Custom Business Tools","Enterprise Software","Workflow Automation","CRM Solutions"],
    alternates: {
        canonical: 'https://preettech.com/services/business-tools',
    },
    openGraph: {
        title: "Custom Business Tools & Enterprise Software | Preet Tech",
        description: "Streamline your operations with tailor-made enterprise business tools and CRM solutions engineered for maximum productivity.",
        url: 'https://preettech.com/services/business-tools',
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
