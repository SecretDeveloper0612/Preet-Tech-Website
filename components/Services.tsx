import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Palette, Share2, TrendingUp, ArrowUpRight, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, Binary, Rocket, MessageSquare, Code2, Wrench, Users, Target } from 'lucide-react';
import Link from 'next/link';

const SERVICES = [
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    tag: 'ROI_01',
    description: 'Data-driven growth strategies engineered to maximize conversion rates and scale revenue through precision targeting.',
    icon: Target,
    accent: 'text-brand-medium',
    bg: 'from-blue-500/10 to-transparent'
  },
  {
    id: 'start-your-business',
    title: 'Start Your Business',
    tag: 'LAUNCH_02',
    description: 'Complete architectural foundation for new ventures. We handle the tech stack and scaling strategy while you build your vision.',
    icon: Rocket,
    accent: 'text-brand-sky',
    bg: 'from-sky-500/10 to-transparent'
  },
  {
    id: 'social-media-handling',
    title: 'Social Media Handling',
    tag: 'SYNC_03',
    description: 'Algorithmic-first social management designed to build high-authority communities and drive organic brand equity.',
    icon: MessageSquare,
    accent: 'text-brand-cyan',
    bg: 'from-cyan-400/10 to-transparent'
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    tag: 'VISUAL_04',
    description: 'High-fidelity cinematic and digital content engineered to capture attention and communicate complex brand narratives.',
    icon: Palette,
    accent: 'text-brand-deep',
    bg: 'from-indigo-600/10 to-transparent'
  },
  {
    id: 'app-development',
    title: 'App Development',
    tag: 'MOBILE_05',
    description: 'Native and cross-platform mobility solutions built for performance, retaining users through frictionless UX logic.',
    icon: Smartphone,
    accent: 'text-brand-medium',
    bg: 'from-blue-600/10 to-transparent'
  },
  {
    id: 'software-development',
    title: 'Software Development',
    tag: 'CODE_06',
    description: 'Bespoke enterprise software engineered with full-stack precision. We build scalable tools for complex business needs.',
    icon: Code2,
    accent: 'text-brand-sky',
    bg: 'from-sky-500/10 to-transparent'
  },
  {
    id: 'business-tools',
    title: 'Tools for Business',
    tag: 'LOGIC_07',
    description: 'Proprietary internal systems and automation tools designed to optimize operations and reduce resource friction.',
    icon: Wrench,
    accent: 'text-brand-cyan',
    bg: 'from-cyan-400/10 to-transparent'
  },
  {
    id: 'partnership-marketing',
    title: 'Partnership Marketing',
    tag: 'ALLOY_08',
    description: 'Collaborative scaling engines. We manage high-impact partnerships that create exponential brand multipliers.',
    icon: Users,
    accent: 'text-brand-deep',
    bg: 'from-indigo-600/10 to-transparent'
  },
  {
    id: 'eco-website',
    title: 'Eco Website',
    tag: 'WEB_09',
    description: 'Rapid & Budget-Friendly digital foundation. Blazingly fast website architected for immediate deployment.',
    icon: Globe,
    accent: 'text-brand-medium',
    bg: 'from-blue-600/10 to-transparent'
  },
  {
    id: 'advance-website',
    title: 'Advance Website',
    tag: 'WEB_10',
    description: 'Custom Enterprise Features and complex operations engineered for maximum horizontal scaling and authority.',
    icon: Globe,
    accent: 'text-brand-deep',
    bg: 'from-indigo-600/10 to-transparent'
  }
];

const Services: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Triple the data for infinite feeling
  const LOOPED_SERVICES = [...SERVICES, ...SERVICES, ...SERVICES];

  const handleInfiniteScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth } = scrollContainerRef.current;
    const singleSetWidth = scrollWidth / 3;

    // If we've scrolled into the third set, jump back to the middle
    if (scrollLeft >= singleSetWidth * 2) {
      scrollContainerRef.current.scrollLeft = scrollLeft - singleSetWidth;
    }
    // If we've scrolled into the first set, jump forward to the middle
    else if (scrollLeft <= singleSetWidth / 2) {
      scrollContainerRef.current.scrollLeft = scrollLeft + singleSetWidth;
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Initial centered scroll position - must be at the start of the middle set
      const setupInitialScroll = () => {
        const { scrollWidth } = container;
        container.scrollLeft = scrollWidth / 3;
      };

      // Run after a small delay to ensure DOM is fully ready
      const timeout = setTimeout(setupInitialScroll, 100);
      return () => clearTimeout(timeout);
    }
  }, []);

  const [isDragging, setIsDragging] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying && !isDragging) {
      interval = setInterval(() => {
        scroll('right');
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    if (!scrollContainerRef.current) return;
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Optional: Resume auto-play after a delay when dragging stops
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.querySelector('.service-card') as HTMLElement;
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth + 24;
        const currentScroll = scrollContainerRef.current.scrollLeft;
        const newScroll = direction === 'left' ? currentScroll - cardWidth : currentScroll + cardWidth;

        scrollContainerRef.current.scrollTo({
          left: newScroll,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section
      id="services"
      className="pt-12 md:pt-20 pb-6 md:pb-8 relative bg-background overflow-hidden transition-colors duration-500"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => !isDragging && setIsAutoPlaying(true)}
    >
      {/* Structural Accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
      <div className="absolute top-0 right-0 w-[400px] h-full bg-slate-50/30 dark:bg-white/[0.01] -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Responsive Header */}
        <div className="mb-6 md:mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10">
          <div className="space-y-2 md:space-y-4">


            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground uppercase tracking-tighter leading-none"
            >
              Our Core <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-cyan italic font-black">Services.</span>
            </motion.h2>
          </div>

          <div className="hidden md:flex items-center gap-4 mt-2 md:mt-0">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-transparent rounded-full flex items-center justify-center border-2 border-[#E9EEF4] dark:border-white/10 text-[#8C9FAF] hover:bg-[#3994fa] dark:hover:bg-[#3994fa] hover:text-white dark:hover:text-white hover:border-[#3994fa] dark:hover:border-[#3994fa] shadow-sm hover:shadow-lg transition-all duration-300 active:scale-95 group"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 stroke-[2px]" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-transparent rounded-full flex items-center justify-center border-2 border-[#E9EEF4] dark:border-white/10 text-[#8C9FAF] hover:bg-[#3994fa] dark:hover:bg-[#3994fa] hover:text-white dark:hover:text-white hover:border-[#3994fa] dark:hover:border-[#3994fa] shadow-sm hover:shadow-lg transition-all duration-300 active:scale-95 group"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 stroke-[2px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Loop Slider Layout - Bleeding to edges */}
      <div className="relative w-full mt-4">
        <div
          ref={scrollContainerRef}
          onScroll={handleInfiniteScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-6 md:pl-[max(1.5rem,calc((100%-1280px+3rem)/2))] md:pr-[max(1.5rem,calc((100%-1280px+3rem)/2))] pb-8 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', overscrollBehaviorX: 'contain' }}
        >
          {LOOPED_SERVICES.map((service, idx) => (
            <div
              key={`${service.id}-${idx}`}
              className="service-card snap-center snap-always shrink-0"
            >
              <div className="group w-[calc(100vw-48px)] md:w-[310px] h-[320px] md:h-[400px] relative rounded-[2rem] bg-slate-50/80 dark:bg-[#080c14] backdrop-blur-xl border border-slate-200/60 dark:border-white/[0.05] p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-none hover:shadow-2xl hover:shadow-brand-medium/10 transition-all duration-500 hover:-translate-y-2">

                {/* Decorative Background Glow */}
                <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${service.bg} blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4 md:mb-8">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center ${service.accent} group-hover:bg-brand-medium group-hover:text-white transition-all duration-500`}>
                      <service.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <h3 className="text-lg md:text-xl font-black text-foreground uppercase tracking-tight group-hover:text-brand-medium transition-colors leading-[1.1]">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-medium leading-relaxed line-clamp-4">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 pt-5 md:pt-6 border-t border-slate-200/50 dark:border-white/5 flex items-center justify-between">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest font-black">Status</span>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[9px] font-black text-foreground/80 dark:text-white/80 uppercase">Available</span>
                    </div>
                  </div>

                  <Link href={`/services/${service.id}`} className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-slate-100 dark:border-white/10 flex items-center justify-center group-hover:bg-brand-medium group-hover:text-white transition-all duration-500 group-hover:border-brand-medium">
                    <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Desktop-only Side Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-[max(1.5rem,calc((100%-1280px+3rem)/2))] bg-gradient-to-r from-background to-transparent z-10 pointer-events-none hidden md:block" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-[max(1.5rem,calc((100%-1280px+3rem)/2))] bg-gradient-to-l from-background to-transparent z-10 pointer-events-none hidden md:block" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Responsive Footer */}
        <div className="mt-2 flex flex-col justify-center items-center gap-6 md:gap-8 border-t border-slate-50 dark:border-white/5 pt-6 md:pt-8">
          <Link
            href="/services"
            className="px-8 py-3.5 rounded-full bg-brand-medium hover:bg-brand-medium/90 text-white text-[11px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-brand-medium/20 hover:-translate-y-0.5 transition-all duration-300 w-[180px]"
          >
            View more
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
