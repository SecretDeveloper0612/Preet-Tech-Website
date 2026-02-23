
import React, { useRef, memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const NeuralSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [45, -45]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={containerRef} className="relative min-h-screen py-32 px-6 flex items-center justify-center overflow-hidden bg-background transition-colors duration-300">
      {/* Matrix-like vertical text streaks */}
      <div className="absolute inset-0 z-0 overflow-hidden flex justify-around pointer-events-none opacity-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '-100%' }}
            animate={{ y: '100%' }}
            transition={{ duration: 15 + i * 2, repeat: Infinity, ease: 'linear' }}
            className="text-[10px] font-mono font-bold tracking-[1em] writing-vertical text-brand-medium/30 h-full whitespace-nowrap"
            style={{ writingMode: 'vertical-rl' }}
          >
            01010101 NEURAL_STREAM DATA_NODE_V4 PREET_TECH_CORE_STABLE 10101010
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{ opacity, scale, rotateX, perspective: '1000px' }}
        className="relative z-10 max-w-6xl mx-auto flex flex-col items-center"
      >
        <div className="mb-8 w-24 h-px bg-gradient-to-r from-transparent via-brand-cyan to-transparent" />
        <h2 className="text-5xl md:text-[10rem] font-black text-foreground mb-4 leading-none tracking-tighter italic uppercase text-center">
          Neural <span className="text-gradient text-glow">Synapse</span>
        </h2>
        <div className="font-mono text-[10px] text-brand-cyan mb-12 tracking-[1em] uppercase bg-brand-cyan/10 px-4 py-1">Layer 02 Active</div>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <p className="text-2xl md:text-4xl text-foreground font-black italic uppercase leading-tight">
              Our architecture <span className="text-brand-cyan">evolves</span> beyond standard interaction patterns.
            </p>
            <div className="glass-morphism p-8 rounded-sm border-l-2 border-brand-cyan">
              <p className="text-slate-600 dark:text-slate-400 font-mono text-sm leading-loose">
                [LOG_V.01] We use physics-based micro-interactions to bridge the gap between human intuition and synthetic intelligence. Each node in our system is a dynamic entity capable of real-time state morphing.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="w-full aspect-square border border-slate-200 dark:border-white/5 glass-morphism flex items-center justify-center p-12 transform rotate-3 hover:rotate-0 transition-transform duration-700">
              <div className="grid grid-cols-4 grid-rows-4 gap-2 w-full h-full">
                {[...Array(16)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.1, 1] }}
                    transition={{ delay: i * 0.05, repeat: Infinity }}
                    className="bg-brand-cyan/20 border border-brand-cyan/30"
                  />
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-background rounded-full mix-blend-difference" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default memo(NeuralSection);
