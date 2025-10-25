import { motion } from "motion/react";
import { Zap, Shield, Cpu, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Zap,
    value: "10M+",
    label: "Transactions Processed",
    description: "Successfully executed with precision",
    color: "#FF6B35"
  },
  {
    icon: Shield,
    value: "99.97%",
    label: "Uptime Guarantee",
    description: "24/7 monitoring and execution",
    color: "#1A1A1A"
  },
  {
    icon: Cpu,
    value: "<50ms",
    label: "Average Latency",
    description: "Lightning-fast analysis",
    color: "#FF6B35"
  },
  {
    icon: TrendingUp,
    value: "3.4x",
    label: "Success Multiplier",
    description: "vs manual transactions",
    color: "#1A1A1A"
  }
];

export function Stats() {
  return (
    <section className="py-24 bg-[#1A1A1A] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, #FF6B35 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-40 h-40 bg-[#FF6B35] opacity-20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-60 h-60 bg-[#FF6B35] opacity-10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '900',
            lineHeight: '1.2',
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            marginBottom: '1rem'
          }}>
            PROVEN <span className="text-[#FF6B35]">PERFORMANCE</span>
          </h2>
          <p className="text-[#E0E0E0] max-w-2xl mx-auto" style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
            Real metrics from real users. BlockShot delivers consistently.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 h-full overflow-hidden">
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/20 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                {/* Icon */}
                <div className="mb-6 relative">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 border-2 flex items-center justify-center relative"
                    style={{ borderColor: stat.color }}
                  >
                    <stat.icon 
                      className="w-8 h-8"
                      style={{ color: stat.color }}
                      strokeWidth={1.5}
                    />
                    <div 
                      className="absolute -bottom-2 -right-2 w-4 h-4"
                      style={{ backgroundColor: stat.color }}
                    />
                  </motion.div>
                </div>

                {/* Value */}
                <motion.div
                  className="mb-2"
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.1, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: '900',
                    color: stat.color,
                    lineHeight: '1',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {stat.value}
                </motion.div>

                {/* Label */}
                <h3 className="mb-2" style={{
                  fontSize: '1.125rem',
                  fontWeight: '800',
                  color: '#FFFFFF',
                  letterSpacing: '-0.01em'
                }}>
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-[#E0E0E0] opacity-70" style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
                  {stat.description}
                </p>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#FF6B35]/30 group-hover:border-[#FF6B35] transition-colors" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#FF6B35]/30 group-hover:border-[#FF6B35] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-white" style={{ fontSize: '1rem', fontWeight: '600' }}>
                All systems operational
              </span>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div className="text-[#E0E0E0]" style={{ fontSize: '0.875rem' }}>
              Last updated: <span className="text-white">Just now</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
