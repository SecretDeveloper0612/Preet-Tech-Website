import React from 'react';
import { motion } from 'framer-motion';

const PORTFOLIO_DATA = [
  { id: '1', title: 'Aether OS', category: 'Core Product', image: 'https://images.unsplash.com/photo-1551288049-bbdac8626ad1?auto=format&fit=crop&q=80&w=1200' },
  { id: '2', title: 'Solaris Mobile', category: 'Ecosystem', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200' },
  { id: '3', title: 'Void Identity', category: 'Genesis', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200' },
  { id: '4', title: 'Gravity Engine', category: 'Marketing', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200' },
];

const Portfolio: React.FC = () => {
  // Double the data to ensure smooth infinite loop
  const CAROUSEL_ITEMS = [...PORTFOLIO_DATA, ...PORTFOLIO_DATA];

  return (
    <section id="portfolio" className="py-32 bg-background relative overflow-hidden transition-colors duration-300">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-deep/20 via-background/0 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-medium mb-6 block">Proof of Work</span>
            <h2 className="text-6xl lg:text-9xl font-black text-foreground tracking-tighter leading-none mb-8">
              Selected <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-sky to-brand-medium">Archives.</span>
            </h2>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="px-10 py-5 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white rounded-full font-bold uppercase tracking-widest text-xs glass-morphism clickable hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
          >
            Browse All Records
          </motion.button>
        </div>
      </div>

      {/* Infinite Carousel Container */}
      <div className="group relative w-full overflow-hidden">
        {/* Helper gradient for fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        <div className="flex gap-8 animate-marquee group-hover:[animation-play-state:paused] w-max">
          {CAROUSEL_ITEMS.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="relative w-[300px] md:w-[500px] aspect-[4/3] md:aspect-video flex-shrink-0 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/5 clickable group/card"
              data-cursor="VIEW_RECORDS"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale-[0.5] group-hover/card:grayscale-0 group-hover/card:scale-110 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 transition-opacity duration-500" />

              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-brand-sky mb-3 block">
                    {item.category}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <div className="w-full h-px bg-white/20 scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover/card:border-brand-medium/30 rounded-[2rem] transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
