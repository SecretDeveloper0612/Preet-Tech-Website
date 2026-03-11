import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cookie Policy | Preet Tech",
    description: "Read the Preet Tech Cookie Policy to learn how we use cookies and tracking technologies to improve our services and user experience.",
    alternates: {
        canonical: 'https://preettech.com/cookie-policy',
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
