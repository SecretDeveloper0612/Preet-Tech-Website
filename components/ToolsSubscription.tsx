
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Layers, Globe, Box, Check } from 'lucide-react';

const ASSETS = [
  {
    name: 'Neural Design Node',
    tag: 'Creative',
    desc: 'Proprietary AI generation frameworks for brand scaling.',
    benefits: ['Sub-second latency', 'High-res exports', 'Neural color synthesis']
  },
  {
    name: 'Analytics Matrix',
    tag: 'Intelligence',
    desc: 'Deep-behavior tracking and predictive ROI modeling.',
    benefits: ['Real-time flow mapping', 'Anomaly detection', 'Cohort projection']
  },
  {
    name: 'Cloud Forge',
    tag: 'Infrastructure',
    desc: 'Custom enterprise deployment modules for global scale.',
    benefits: ['Zero-trust security', 'Auto-scaling nodes', 'Multi-region failover']
  },
];

const ToolsSubscription: React.FC = () => {
  return (
    <section id="tools" className="py-32 px-6 relative bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-medium mb-6 block">Asset Acquisition</span>
            <h2 className="text-6xl lg:text-8xl font-black text-foreground tracking-tighter leading-none mb-10">
              Enterprise <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-medium">Armory.</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-xl mb-12">
              We provide exclusive access to high-tier enterprise licenses and proprietary tools developed in-house to accelerate your digital trajectory.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-brand-deep text-white rounded-full font-bold text-sm hover:scale-105 transition-all clickable" data-cursor="REQUEST">
                Request Access
              </button>
              <button className="px-8 py-4 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white rounded-full font-bold text-sm glass-morphism clickable hover:bg-slate-100 dark:hover:bg-white/5">
                View Catalog
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-brand-medium/20 rounded-full blur-[100px] pointer-events-none scale-150" />
            <div className="relative z-10 p-12 glass-morphism rounded-[3rem] border-slate-200 dark:border-white/10">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: ShieldCheck, label: 'Secured' },
                  { icon: Zap, label: 'Instant' },
                  { icon: Layers, label: 'Scalable' },
                  { icon: Globe, label: 'Global' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-brand-medium/10 flex items-center justify-center text-brand-medium dark:text-brand-sky">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <span className="font-bold text-sm tracking-widest uppercase text-slate-600 dark:text-white/60">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {ASSETS.map((asset, i) => (
            <motion.div
              key={asset.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/20 backdrop-blur-sm group hover:border-brand-medium/30 transition-all duration-500 clickable shadow-lg dark:shadow-none"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-xl flex items-center justify-center text-slate-400 dark:text-white/40 group-hover:text-brand-medium transition-colors">
                  <Box className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest py-1 px-3 bg-brand-medium/10 text-brand-medium dark:text-brand-sky rounded-full border border-brand-medium/20">
                  {asset.tag}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6 uppercase tracking-tight">{asset.name}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-10 leading-relaxed">
                {asset.desc}
              </p>
              <ul className="space-y-4 mb-10">
                {asset.benefits.map(benefit => (
                  <li key={benefit} className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-300 font-bold uppercase tracking-wider">
                    <Check className="w-3 h-3 text-emerald-500" /> {benefit}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-widest group-hover:bg-brand-deep dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-500">
                Initiate Provisioning
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ToolsSubscription);
