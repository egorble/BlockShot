import { motion } from "motion/react";
import { Lock, Clock, Zap, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Lock,
    title: "LOCK",
    subtitle: "Reserve Your Position with Raiku AOT",
    description: "Submit your transaction intent to BlockShot. Our AI instantly analyzes network conditions and reserves your slot using Raiku's Ahead-of-Time execution guarantees.",
    features: ["Raiku AOT slot reservation", "Queue position analysis", "Optimal timing calculation"]
  },
  {
    number: "02",
    icon: Clock,
    title: "STRIKE",
    subtitle: "Execute with Raiku JIT Precision",
    description: "BlockShot monitors the mempool in real-time, waiting for the perfect moment when conditions align with your requirements, then executes using Raiku's Just-in-Time precision.",
    features: ["Real-time monitoring", "Raiku JIT execution", "Sub-block precision"]
  },
  {
    number: "03",
    icon: Zap,
    title: "WIN",
    subtitle: "Guaranteed Success",
    description: "Your transaction is broadcast at the optimal moment with Raiku's deterministic execution, maximizing your chances of success in competitive environments.",
    features: ["99.9% success rate", "Priority placement", "Success confirmation"]
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#F5F5F5] to-white relative overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating squares - added more squares as requested */}
      <motion.div
        className="absolute top-20 right-10 w-20 h-20 border-4 border-[#FF6B35]/20"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-16 h-16 bg-[#FF6B35]/10"
        animate={{
          rotate: [360, 270, 180, 90, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      {/* Additional floating squares */}
      <motion.div
        className="absolute top-1/3 left-20 w-12 h-12 bg-[#FF6B35]"
        animate={{
          rotate: [0, -90, -180, -270, -360],
          x: [0, -15, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-20 w-20 h-20 border-2 border-[#FF6B35]"
        animate={{
          rotate: [0, 45, 90, 135, 180],
          scale: [1, 1.2, 1, 0.8, 1]
        }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/4 right-1/3 w-10 h-10 bg-[#FF6B35]/30"
        animate={{
          rotate: [0, 180, 360],
          y: [0, 25, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-1 bg-[#FF6B35]" />
            <span className="uppercase tracking-wider text-[#333333]" style={{ fontSize: '0.875rem', fontWeight: '700' }}>
              How BlockShot Works
            </span>
            <div className="w-16 h-1 bg-[#FF6B35]" />
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '900',
            lineHeight: '1.2',
            color: '#1A1A1A',
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem'
          }}>
            BE FASTER<br />
            <span className="text-[#FF6B35]">THAN OTHERS</span>
          </h2>
          <p className="text-[#333333] max-w-2xl mx-auto" style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
            BlockShot's AI-powered engine with Raiku's AOT & JIT execution guarantees
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="mb-12 last:mb-0"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Content - alternating sides */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative group">
                    {/* Background card */}
                    <div className="absolute inset-0 bg-white border-2 border-[#E0E0E0] transform translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                    
                    {/* Main card */}
                    <div className="relative bg-white border-2 border-[#1A1A1A] p-8">
                      {/* Step number */}
                      <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#FF6B35] flex items-center justify-center">
                        <span style={{
                          fontSize: '1.5rem',
                          fontWeight: '900',
                          color: '#FFFFFF',
                          fontFamily: 'monospace'
                        }}>
                          {step.number}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="mb-6 pt-4">
                        <step.icon className="w-12 h-12 text-[#1A1A1A]" strokeWidth={1.5} />
                      </div>

                      {/* Title */}
                      <h3 className="mb-2" style={{
                        fontSize: '2.5rem',
                        fontWeight: '900',
                        color: '#1A1A1A',
                        letterSpacing: '-0.02em',
                        lineHeight: '1'
                      }}>
                        {step.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="mb-4" style={{
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        color: '#FF6B35',
                        letterSpacing: '-0.01em'
                      }}>
                        {step.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-[#333333] mb-6" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                        {step.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        {step.features.map((feature, fIndex) => (
                          <motion.div
                            key={fIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + fIndex * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle2 className="w-5 h-5 text-[#FF6B35] flex-shrink-0" strokeWidth={2} />
                            <span className="text-[#333333]" style={{ fontSize: '0.875rem', fontWeight: '600' }}>
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Corner accent */}
                      <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#1A1A1A]" />
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative aspect-square max-w-md mx-auto"
                  >
                    {/* Animated rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {[0, 1, 2].map((ringIndex) => (
                        <motion.div
                          key={ringIndex}
                          className="absolute inset-0 border-2 rounded-full"
                          style={{
                            borderColor: ringIndex === 1 ? '#FF6B35' : '#1A1A1A',
                            margin: `${ringIndex * 30}px`,
                            opacity: 0.3
                          }}
                          animate={{
                            scale: [1, 1.05, 1]
                          }}
                          transition={{
                            duration: 10 + ringIndex * 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: ringIndex * 0.2
                          }}
                        />
                      ))}
                    </div>

                    {/* Center icon - static (not rotating) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-transparent border-0 flex items-center justify-center relative">
                        <step.icon className="w-24 h-24 text-[#FF6B35]" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Orbiting elements */}
                    <motion.div
                      className="absolute top-1/2 left-1/2"
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{ width: '200px', height: '200px', marginLeft: '-100px', marginTop: '-100px' }}
                    >
                      <div className="absolute top-0 left-1/2 w-4 h-4 bg-[#FF6B35] -translate-x-1/2" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-8">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '60px' }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.4, duration: 0.4 }}
                    className="w-1 bg-gradient-to-b from-[#FF6B35] to-[#1A1A1A]"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}