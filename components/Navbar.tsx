import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sun, Moon, Globe, Smartphone, Palette, Share2, TrendingUp, ChevronRight, ChevronLeft, Target, Rocket, Cpu, Zap, Shield } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

interface NavbarProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark: _ignoredIsDark, toggleTheme: _ignoredToggleTheme }) => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = mounted ? currentTheme === 'dark' : false;
  const toggleTheme = () => setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [activeTab, setActiveTab] = useState<'development' | 'marketing' | 'ventures'>('development');
  const [hoveredItem, setHoveredItem] = useState<{ name: string; detail: string; longDesc: string; href: string } | null>(null);
  const [isMobileSubMenuOpen, setIsMobileSubMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setIsMobileSubMenuOpen(false);
    }
  }, [isOpen]);

  const links = [
    { name: 'Home', href: '/', desc: 'Preet Tech Home' },
    { name: 'About', href: '/about', desc: 'The Preet Edge' },
    { name: 'Services', href: '/services', desc: 'Strategic Multipliers', hasMegaMenu: true },
    { name: 'Case Studies', href: '/#case-studies', desc: 'Measurable Outcomes' },
    { name: 'Blog', href: '/blog', desc: 'Digital Logic' },
    { name: 'Contact', href: '/contact', desc: 'Start a Journey' },
  ];

  const megaMenuContent = {
    development: {
      title: 'Digital Engineering',
      desc: 'High-performance code for scalable digital infrastructure.',
      items: [
        { name: 'Website Development', icon: Globe, href: '/services/website-development', detail: 'Eco-Budget & Advance Platforms', longDesc: 'We engineer blazingly fast websites. Choose between our Eco-Budget path for rapid deployment or Advance Websites for custom enterprise features.' },
        { name: 'App Development', icon: Smartphone, href: '/services/app-development', detail: 'Native & Cross-platform reach', longDesc: 'Building high-performance mobile applications with seamless user experiences across iOS and Android ecosystems.' },
        { name: 'Software Development', icon: Cpu, href: '/services/software-development', detail: 'Custom enterprise logic', longDesc: 'Architecting complex software systems tailored to your business operations, ensuring efficiency and long-term scalability.' },
        { name: 'Tools for Business', icon: Zap, href: '/services/business-tools', detail: 'Marketplace | Up to 95% Off', longDesc: 'Access high-value premium business software, templates, and digital licenses at unbeatable discounted prices through our exclusive marketplace.' },
      ]
    },
    marketing: {
      title: 'Growth & Reach',
      desc: 'Data-driven strategies to amplify your brand authority.',
      items: [
        { name: 'Performance Marketing', icon: TrendingUp, href: '/services/performance-marketing', detail: 'Profit-focused campaigns', longDesc: 'Scientific approach to advertisement. We optimize for conversion and ROI across all major digital ad platforms.' },
        { name: 'Social Media Handling', icon: Share2, href: '/services/social-media-handling', detail: 'Community & Content management', longDesc: 'Engineering your social presence to build high-conversion communities and maintain consistent brand authority.' },
        { name: 'Partnership Marketing', icon: Target, href: '/services/partnership-marketing', detail: 'Strategic brand collaborations', longDesc: 'We connect you with key partners to amplify reach and build mutual authority through strategic digital alliances.' },
      ]
    },
    ventures: {
      title: 'Business Launch',
      desc: 'Everything you need to successfully enter the market.',
      items: [
        { name: 'Start Your Business', icon: Rocket, href: '/services/start-your-business', detail: 'End-to-end setup protocol', longDesc: 'From company registration to digital infrastructure. We handle the technical and strategic complexity of launching your new venture.' },
        { name: 'Content Creation', icon: Palette, href: '/services/content-creation', detail: 'High-fidelity narrative design', longDesc: 'Premium visual and written content that commands attention and communicates your brand story with precision.' },
      ]
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-500 px-4 md:px-10 ${isScrolled ? 'py-2' : 'py-4'
        }`}
      onMouseLeave={() => {
        setShowMegaMenu(false);
        setHoveredItem(null);
      }}
    >
      <div className="max-w-7xl mx-auto md:px-6 relative">
        <div
          className={`relative z-[120] rounded-[2rem] md:rounded-full px-4 md:px-8 py-1 md:py-1.5 flex items-center justify-between transition-all duration-500 backdrop-blur-xl border ${isScrolled
            ? 'bg-white/95 dark:bg-black/90 border-brand-medium/30 shadow-2xl'
            : 'bg-white/80 dark:bg-black/50 border-slate-200 shadow-lg dark:border-white/10'
            }`}
        >
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center group relative z-[210]" onClick={() => setIsOpen(false)}>
            <img
              src={isDark ? '/logo-black.png' : '/logo-white.png'}
              alt="Preet Tech Logo"
              className={`h-10 md:h-12 w-auto object-contain transition-all duration-500 group-hover:scale-105`}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {links.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasMegaMenu && setShowMegaMenu(true)}
              >
                <Link
                  href={link.href}
                  className={`text-[11px] font-bold uppercase tracking-[0.25em] ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-brand-medium'} transition-all py-2`}
                >
                  {link.name}
                </Link>
                {link.hasMegaMenu && showMegaMenu && (
                  <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-medium" />
                )}
              </div>
            ))}
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-2 md:gap-4 relative z-[210]">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isOpen
                ? (isDark ? 'text-white/70 hover:text-white' : 'text-slate-600 hover:text-slate-900')
                : (isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-brand-deep')
                }`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 md:w-5 md:h-5" /> : <Moon className="w-4 h-4 md:w-5 md:h-5" />}
            </button>

            <Link href="/contact" className="hidden sm:flex items-center gap-2 px-5 md:px-6 py-2 md:py-2.5 bg-brand-deep dark:bg-white text-white dark:text-brand-deep rounded-full font-black text-[9px] md:text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-lg active:scale-95">
              Contact <ArrowUpRight className="w-3 h-3" />
            </Link>

            <button
              className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-full transition-all relative z-[220] ${isOpen
                ? (isDark ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-900')
                : (isDark ? 'text-white' : 'text-slate-900')
                }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Mega Menu */}
      <AnimatePresence>
        {showMegaMenu && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className="absolute top-full left-6 right-6 mt-4 hidden lg:block"
            onMouseEnter={() => setShowMegaMenu(true)}
          >
            <div className="bg-white dark:bg-[#050505] p-2 rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.2)] overflow-hidden">
              <div className="flex bg-slate-50/50 dark:bg-white/[0.02] rounded-[2rem] overflow-hidden min-h-[500px]">
                {/* Tab Switcher Panel */}
                <div className="w-1/4 p-8 border-r border-slate-100 dark:border-white/5 flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-medium mb-8">Capabilities</p>
                    {(Object.keys(megaMenuContent) as Array<keyof typeof megaMenuContent>).map((tab) => (
                      <button
                        key={tab}
                        onMouseEnter={() => {
                          setActiveTab(tab);
                          setHoveredItem(null);
                        }}
                        className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between group ${activeTab === tab ? 'bg-white dark:bg-white/10 shadow-sm text-brand-medium translate-x-2' : 'hover:translate-x-1 text-slate-500'}`}
                      >
                        <span className="font-bold uppercase text-sm tracking-tighter">{tab}</span>
                        <ChevronRight className={`w-4 h-4 transition-all ${activeTab === tab ? 'opacity-100' : 'opacity-0 -translate-x-2'}`} />
                      </button>
                    ))}
                  </div>
                  <div className="p-6 bg-brand-medium/5 dark:bg-brand-medium/10 rounded-3xl">
                    <p className="text-[9px] font-black uppercase tracking-widest text-brand-medium mb-3">Next Step</p>
                    <p className="text-xs font-bold text-foreground mb-4 leading-relaxed">Ready for a Strategic Audit?</p>
                    <button className="text-[10px] font-black uppercase text-brand-medium flex items-center gap-2 group hover:gap-3 transition-all">
                      Schedule <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                {/* Content Area */}
                <div className="flex-1 p-12 bg-white dark:bg-transparent relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="h-full flex flex-col"
                    >
                      <div className="mb-12 min-h-[100px] flex flex-col justify-end">
                        <AnimatePresence mode="wait">
                          {hoveredItem ? (
                            <motion.div key={hoveredItem.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-2">
                              <h3 className="text-4xl font-black text-brand-medium tracking-tighter uppercase">{hoveredItem.name}</h3>
                              <p className="text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-medium">{hoveredItem.longDesc}</p>
                            </motion.div>
                          ) : (
                            <motion.div key={megaMenuContent[activeTab].title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                              <h3 className="text-4xl font-black text-foreground tracking-tighter uppercase mb-4">{megaMenuContent[activeTab].title}</h3>
                              <p className="text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed">{megaMenuContent[activeTab].desc}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-10 flex-1">
                        {megaMenuContent[activeTab].items.map((item, i) => (
                          <Link
                            key={i}
                            href={item.href}
                            className={`group flex gap-6 items-start transition-all origin-left ${hoveredItem?.name === item.name ? 'scale-[1.05]' : 'scale-100 opacity-70 hover:opacity-100'}`}
                            onMouseEnter={() => setHoveredItem(item)}
                            onClick={() => setShowMegaMenu(false)}
                          >
                            <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all ${hoveredItem?.name === item.name ? 'bg-brand-medium text-white border-brand-medium shadow-lg shadow-brand-medium/20' : 'bg-slate-50 dark:bg-white/5 border-slate-100 dark:border-white/10 group-hover:bg-brand-medium/10'}`}>
                              <item.icon className={`w-6 h-6 transition-transform ${hoveredItem?.name === item.name ? 'scale-110' : 'text-brand-medium'}`} />
                            </div>
                            <div>
                              <h4 className={`font-bold uppercase tracking-tight mb-1 transition-colors ${hoveredItem?.name === item.name ? 'text-brand-medium' : 'text-foreground'}`}>{item.name}</h4>
                              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono tracking-tight">{item.detail}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-auto pt-8 border-t border-slate-100 dark:border-white/5 flex items-center gap-12 text-slate-400">
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><Shield className="w-3.5 h-3.5" />Zero Upfront Friction</div>
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest"><Zap className="w-3.5 h-3.5" />Performance Optimized</div>
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ml-auto text-brand-medium">
                          View Success Cases <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Portal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu-portal"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white dark:bg-[#070708] z-[105] flex flex-col lg:hidden"
          >
            <div className="absolute inset-0 z-0 overflow-hidden opacity-30 dark:opacity-20 pointer-events-none">
              <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-brand-medium/30 rounded-full blur-[120px]" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 flex flex-col h-full pt-32 pb-12 px-6 overflow-y-auto">
              <AnimatePresence mode="wait">
                {!isMobileSubMenuOpen ? (
                  <motion.div
                    key="mobile-main"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex flex-col h-full"
                  >
                    <div className="flex flex-col gap-1 mb-12">
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-medium">Navigation</p>
                      <div className="h-0.5 w-12 bg-brand-medium" />
                    </div>

                    <div className="flex flex-col gap-6 mb-auto">
                      {links.map((link, i) => (
                        <motion.div
                          key={link.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          {link.hasMegaMenu ? (
                            <button onClick={() => setIsMobileSubMenuOpen(true)} className="group w-full text-left">
                              <div className="flex items-center justify-between py-2">
                                <span className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">{link.name}</span>
                                <ChevronRight className="w-6 h-6 text-brand-medium" />
                              </div>
                              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-1">{link.desc}</p>
                            </button>
                          ) : (
                            <Link href={link.href} onClick={() => setIsOpen(false)} className="group block">
                              <div className="flex items-center justify-between py-2">
                                <span className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">{link.name}</span>
                                <ArrowUpRight className="w-6 h-6 text-slate-200 dark:text-white/10 group-hover:text-brand-medium transition-colors" />
                              </div>
                              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-1">{link.desc}</p>
                            </Link>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-12 pt-12 border-t border-slate-100 dark:border-white/5 grid grid-cols-2 gap-8">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Pulse</p>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-xs font-bold text-slate-900 dark:text-white">Active</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Connect</p>
                        <div className="flex justify-end gap-3 text-brand-medium font-bold text-xs underline underline-offset-4">
                          Mail Us
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="mobile-services"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="flex flex-col h-full"
                  >
                    <button onClick={() => setIsMobileSubMenuOpen(false)} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-brand-medium mb-12">
                      <ChevronLeft className="w-4 h-4" /> Go Back
                    </button>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter uppercase">Capabilities</h3>
                    <div className="flex flex-col gap-3 mb-auto overflow-y-auto pr-2 pb-8">
                      {Object.values(megaMenuContent).flatMap(cat => cat.items).map((item, i) => (
                        <Link key={i} href={item.href} onClick={() => setIsOpen(false)} className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 active:scale-95 transition-all">
                          <div className="w-10 h-10 rounded-xl bg-brand-medium/10 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5 text-brand-medium" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="font-bold text-slate-900 dark:text-white text-sm uppercase truncate">{item.name}</h5>
                            <p className="text-[10px] text-slate-500 font-mono uppercase truncate">{item.detail}</p>
                          </div>
                          <div className="w-10 h-10 flex items-center justify-center text-brand-medium/40">
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
