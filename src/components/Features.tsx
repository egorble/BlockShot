import { motion } from "motion/react";
import { Brain, Timer, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Booking",
    description: "Smart analysis of latency, gas fees, and block queue using Raiku's AOT reservations",
    accent: "top-right",
    stats: "< 50ms analysis"
  },
  {
    icon: Timer,
    title: "Precision Execution",
    description: "Deterministic transaction submission with Raiku's JIT execution guarantees",
    accent: "bottom-left",
    stats: "±1 block precision"
  },
  {
    icon: BarChart3,
    title: "Transparent Analytics",
    description: "Monitor performance, execution history, and profitability with Raiku-powered metrics",
    accent: "top-left",
    stats: "Real-time data"
  }
];

export function Features() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #1A1A1A 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2">
              <div className="w-12 h-1 bg-[#FF6B35]" />
              <span className="uppercase tracking-wider text-[#333333]" style={{ fontSize: '0.875rem' }}>BlockShot Features</span>
              <div className="w-12 h-1 bg-[#FF6B35]" />
            </div>
          </div>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '900',
            lineHeight: '1.2',
            color: '#1A1A1A',
            letterSpacing: '-0.02em'
          }}>
            PRECISION AT<br />
            <span className="text-[#FF6B35]">EVERY BLOCK</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card with glassmorphism */}
              <div className="relative bg-white/60 backdrop-blur-sm border border-[#E0E0E0] p-8 h-full overflow-hidden transition-all duration-300 group-hover:border-[#FF6B35]/50">
                {/* Accent square */}
                <div 
                  className={`absolute ${
                    feature.accent === 'top-right' ? 'top-0 right-0' :
                    feature.accent === 'bottom-left' ? 'bottom-0 left-0' :
                    'top-0 left-0'
                  } w-16 h-16 bg-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 animate-shimmer" />
                </div>

                {/* Icon */}
                <div className="mb-4 relative">
                  <div className="w-16 h-16 bg-[#1A1A1A] flex items-center justify-center relative group-hover:bg-[#FF6B35] transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#FF6B35] group-hover:bg-[#1A1A1A] transition-colors duration-300" />
                  </div>
                </div>

                {/* Text content */}
                <h3 className="mb-3" style={{ 
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: '#1A1A1A',
                  letterSpacing: '-0.01em'
                }}>
                  {feature.title}
                </h3>
                <p className="text-[#333333] opacity-80 mb-4" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                  {feature.description}
                </p>

                {/* Stats badge */}
                <div className="inline-block px-3 py-1 bg-[#FF6B35]/10 border border-[#FF6B35]/20">
                  <span className="text-[#FF6B35]" style={{ fontSize: '0.75rem', fontWeight: '700' }}>
                    {feature.stats}
                  </span>
                </div>

                {/* Hover indicator */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-[#FF6B35]"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}