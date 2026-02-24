import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Globe, Cpu, Hexagon, Terminal, Activity, ShieldCheck, Sparkles } from 'lucide-react';
import ThreeSphereScene from './ThreeSphere';

interface HeroProps {
  isDark?: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark: _ignoredIsDark }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background py-20 lg:py-0">
      {/* 1. LAYERED BACKGROUNDS */}
      <div className="absolute inset-0 z-0">
        {/* Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.03] dark:opacity-[0.15]" />

        {/* Radial Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-medium/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/10 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      {/* 2. 3D CENTRAL ELEMENT (BACKGROUND) */}
      <ThreeSphereScene />

      {/* 3. CENTERED CONTENT */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center max-w-4xl"
        >
          {/* Main Headline */}
          <div className="flex flex-col items-center gap-2 mb-6 md:mb-8">
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: hovered ? "0.4em" : "0.3em" }}
              whileInView={{
                letterSpacing: typeof window !== 'undefined' && window.innerWidth < 768 ? "0.3em" : "0.6em"
              }}
              transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
              className="text-[10px] sm:text-xs md:text-sm font-black uppercase text-slate-500 dark:text-white/70 mb-2"
            >
              Welcome to Preet Tech
            </motion.span>
            <h1 className="text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[11rem] font-black tracking-tighter leading-[0.9] md:leading-[0.8] flex flex-col items-center text-center">
              <span className="block text-slate-900 dark:text-white">DIGITAL</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-medium via-brand-cyan to-brand-deep animate-gradient-x italic pb-4 md:pb-8 px-2 md:px-4">
                SOLUTIONS.
              </span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed mb-8 md:mb-10 font-medium px-4 md:px-0 text-center"
          >
            Your premier IT partner for cutting-edge <span className="text-foreground dark:text-white font-bold">Website & App Development</span>, Software Engineering, Digital Marketing, and high-impact Content Creation.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto px-10 sm:px-0"
          >
            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-brand-medium text-black font-black tracking-widest uppercase text-[10px] sm:text-xs rounded-2xl overflow-hidden transition-all shadow-[0_20px_50px_rgba(63,143,204,0.3)] hover:shadow-brand-medium/50 hover:-translate-y-1 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              <span className="relative flex items-center justify-center gap-3">
                Initialize System <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </button>

            <button className="group px-8 sm:px-12 py-4 sm:py-5 border-2 border-slate-200 dark:border-white/10 text-foreground font-black text-[10px] sm:text-xs tracking-widest uppercase transition-all rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 hover:-translate-y-1 active:scale-95">
              <span className="flex items-center justify-center gap-3">
                Architecture <Hexagon className="w-5 h-5 text-brand-medium group-hover:rotate-180 transition-transform duration-700" />
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* 4. ANIMATED PROPS (LEFT & RIGHT) */}

      {/* Left Props */}
      <div className="absolute left-10 lg:left-20 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-16 z-30 pointer-events-none">
        {/* Prop 1: System Latency */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="glass-morphism p-6 rounded-[2.5rem] border border-brand-medium/20 w-56 flex flex-col gap-4 shadow-2xl"
        >
          <div className="flex items-center justify-between">
            <Globe className="text-brand-medium w-6 h-6" />
            <div className="flex gap-1">
              {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-medium/40 animate-pulse" />)}
            </div>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Web Development</p>
            <p className="text-2xl font-black text-foreground">Next<span className="text-brand-medium ml-1">Gen</span></p>
          </div>
          <div className="h-1 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="h-full w-1/3 bg-brand-medium"
            />
          </div>
        </motion.div>

        {/* Prop 2: Growth Visual */}
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="p-8 rounded-[3rem] bg-black text-white border border-white/10 w-64 shadow-[0_50px_100px_rgba(0,0,0,0.5)] transform -rotate-3"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-cyan/20 flex items-center justify-center">
              <Activity className="w-6 h-6 text-brand-cyan" />
            </div>
            <p className="text-xs font-black uppercase tracking-[0.2em]">Digital Marketing</p>
          </div>
          <div className="flex items-end gap-2 h-16">
            {[40, 70, 50, 90, 60, 80, 100].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="flex-1 bg-brand-cyan rounded-t-sm"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Props */}
      <div className="absolute right-10 lg:right-20 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-10 z-30 pointer-events-none">
        {/* Prop 3: Security Shield */}
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="glass-morphism p-8 rounded-[3rem] border border-emerald-500/20 w-60 shadow-2xl items-center flex flex-col text-center"
        >
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-emerald-500/20 blur-2xl animate-pulse" />
            <Cpu className="w-16 h-16 text-emerald-500 relative z-10" />
          </div>
          <h4 className="font-black text-sm uppercase tracking-widest mb-1 text-foreground">App & Software</h4>
          <p className="text-[10px] font-bold text-emerald-500 uppercase">Scalable Solutions...</p>
        </motion.div>

        {/* Prop 4: Sparkle Feature */}
        <motion.div
          animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="p-8 rounded-[2.5rem] bg-gradient-to-br from-brand-medium/20 to-brand-cyan/20 border border-white/10 backdrop-blur-3xl w-72 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-medium/20 blur-3xl" />
          <div className="flex items-center gap-4 mb-4">
            <Sparkles className="w-6 h-6 text-brand-medium group-hover:animate-spin" />
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Content Creation</p>
          </div>
          <p className="text-xl font-black text-foreground tracking-tighter leading-tight">
            Engaging Brand Stories & Media
          </p>
        </motion.div>
      </div>



    </section>
  );
};

export default memo(Hero);
