import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "Nebula Enterprise",
    text: "Preet Tech is one of the few partners who actually delivers on the promise of high-performance engineering. Their strategic approach to our legacy migration was flawless.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Head of Growth",
    company: "Solaris Tech",
    text: "The measurable ROI increase we saw after implementing Preet Tech's performance engine was unprecedented. A truly professional team with deep technical expertise.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    name: "Elena Rossi",
    role: "Managing Director",
    company: "Zenith Global",
    text: "Beyond just coding, they understand business objectives. Our global infrastructure is now more secure and scalable than ever before. Simply outstanding work.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 4,
    name: "David Kim",
    role: "VP of Product",
    company: "Vortex Systems",
    text: "Their ability to translate complex requirements into intuitive user experiences is unmatched. The new platform has transformed our customer engagement metrics.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"
  }
];

const Testimonials: React.FC = () => {
  // Duplicate for seamless loop
  const SCROLL_REVIEWS = [...REVIEWS, ...REVIEWS];

  return (
    <section className="py-16 md:py-24 relative bg-background overflow-hidden transition-colors duration-300">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-deep/10 via-background to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10 text-left">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-md mb-8"
        >
          <Star className="w-4 h-4 text-yellow-500 dark:text-yellow-400 fill-yellow-500 dark:fill-yellow-400" />
          <span className="text-xs font-mono text-slate-600 dark:text-slate-300 tracking-wider">TRUSTED BY INDUSTRY LEADERS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-foreground tracking-tighter mb-6"
        >
          Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-cyan">Voices.</span>
        </motion.h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex flex-col gap-12 pb-20">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        {/* Row 1: Left to Right (Reverse) */}
        <div className="flex gap-8 animate-marquee-reverse hover:[animation-play-state:paused] w-max">
          {SCROLL_REVIEWS.map((review, i) => (
            <div
              key={`row1-${review.id}-${i}`}
              className="w-[450px] flex-shrink-0 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/20 to-brand-cyan/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-full bg-white dark:bg-[#0b0f1a] border border-slate-200 dark:border-white/5 p-10 rounded-[2rem] backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-2 shadow-lg dark:shadow-none">
                <Quote className="w-12 h-12 text-brand-medium/20 absolute top-8 right-8" />

                <div className="flex items-center gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 dark:text-yellow-400 fill-yellow-500 dark:fill-yellow-400" />
                  ))}
                </div>

                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 font-medium italic">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200 dark:border-brand-medium/20">
                    <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold">{review.name}</h4>
                    <p className="text-xs text-brand-medium dark:text-brand-sky font-mono uppercase tracking-wider">
                      {review.role}, {review.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Testimonials);
