
import { ServiceItem, PortfolioItem } from './types';

export const COLORS = {
  lightCyan: '#5FD3E6',
  skyBlue: '#4FAED8',
  mediumBlue: '#3F8FCC',
  deepBlue: '#2F6FB5',
  bluePurple: '#2B4FA3',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Web Engineering',
    description: 'High-performance web applications built with React, Next.js, and scalable cloud architectures.',
    icon: 'Terminal',
    color: '#5FD3E6',
  },
  {
    id: 'app-dev',
    title: 'App Ecosystems',
    description: 'Native and cross-platform mobile solutions for iOS and Android with seamless UX.',
    icon: 'Smartphone',
    color: '#4FAED8',
  },
  {
    id: 'content',
    title: 'Content Genesis',
    description: 'Cinematic brand storytelling, professional video production, and high-impact visual assets.',
    icon: 'Layers',
    color: '#3F8FCC',
  },
  {
    id: 'marketing',
    title: 'Performance Marketing',
    description: 'Data-driven growth strategies, SEO, and paid media optimization to maximize ROI.',
    icon: 'BarChart',
    color: '#2F6FB5',
  },
  {
    id: 'tools',
    title: 'Tools & Subscriptions',
    description: 'Exclusive access to premium enterprise software licenses and internal productivity tools.',
    icon: 'Cpu',
    color: '#2B4FA3',
  },
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: 'p1', title: 'Streamline Dashboard', category: 'Web Engineering', image: 'https://images.unsplash.com/photo-1551288049-bbdac8626ad1?auto=format&fit=crop&q=80&w=1200' },
  { id: 'p2', title: 'EcoPulse Mobile', category: 'App Ecosystems', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200' },
  { id: 'p3', title: 'Aura Brand Identity', category: 'Content Genesis', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200' },
  { id: 'p4', title: 'Growth Engine', category: 'Performance Marketing', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200' },
];
