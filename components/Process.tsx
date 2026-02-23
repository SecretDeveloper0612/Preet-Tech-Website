
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Scan, PenTool, Code2, Rocket, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    num: "01",
    title: "Strategic Discovery",
    desc: "We analyze your digital infrastructure and market position to define high-impact KPIs and a roadmap for dominance.",
    icon: <Scan className="w-8 h-8" />,
    color: "from-brand-deep to-brand-medium"
  },
  {
    num: "02",
    title: "Architecture & Design",
    desc: "Collaborative wireframing and technical system mapping. We design scalable brand ecosystems that look and feel premium.",
    icon: <PenTool className="w-8 h-8" />,
    color: "from-brand-medium to-brand-sky"
  },
  {
    num: "03",
    title: "Engineered Execution",
    desc: "Agile development sprints with cinema-grade fidelity. We focus on clean code, robust security, and pixel-perfect implementation.",
    icon: <Code2 className="w-8 h-8" />,
    color: "from-brand-sky to-brand-cyan"
  },
  {
    num: "04",
    title: "Growth Acceleration",
    desc: "Continuous deployment and optimization using data-driven insights to maximize conversion and system performance.",
    icon: <Rocket className="w-8 h-8" />,
    color: "from-brand-cyan to-brand-medium"
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 relative bg-background overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-medium/30 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cyan/30 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-medium/10 border border-brand-medium/20 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-medium animate-pulse" />
            <span className="text-xs font-mono text-brand-medium dark:text-brand-sky tracking-wider">OUR PROCESS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-7xl font-black text-foreground tracking-tighter mb-6"
          >
            Methodology <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium to-brand-cyan">Reimagined.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
          >
            A structured, transparent approach to digital transformation. We don't just build; we engineer outcomes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative h-[420px] p-8 rounded-[2rem] bg-white dark:bg-[#0b0f1a] border border-slate-200 dark:border-white/5 hover:border-brand-medium/20 dark:hover:border-white/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Gradient Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Large Watermark Number */}
              <div className="absolute -right-8 -top-8 text-[12rem] font-black text-slate-100 dark:text-white/[0.02] leading-none group-hover:text-slate-200 dark:group-hover:text-white/[0.05] transition-colors select-none">
                {step.num}
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <div className="w-full h-full bg-white dark:bg-[#0b0f1a] rounded-[14px] flex items-center justify-center text-brand-deep dark:text-white">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-deep group-hover:to-brand-medium dark:group-hover:from-white dark:group-hover:to-slate-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-cyan/0 group-hover:text-brand-cyan transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Process);
