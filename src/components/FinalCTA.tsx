import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, Target } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-32 bg-[#1A1A1A] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#FF6B35 1px, transparent 1px), linear-gradient(90deg, #FF6B35 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating orange squares */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-[#FF6B35]"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 bg-[#FF6B35] opacity-30"
        animate={{ 
          y: [0, 40, 0],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 3D Projectile visual */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
        animate={{ 
          x: [-500, 500],
          rotate: [0, 720]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-2 h-12 bg-gradient-to-b from-[#FF6B35] to-transparent rounded-full blur-sm" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h2 className="mb-6" style={{ 
                  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                  fontWeight: '900',
                  lineHeight: '1.1',
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em'
                }}>
                  BE FASTER<br />
                  <span className="text-[#FF6B35]">THAN OTHERS</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p className="text-[#E0E0E0] mb-8" style={{ fontSize: '1.5rem', lineHeight: '1.5' }}>
                  More precise than any bot
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  className="bg-[#FF6B35] hover:bg-[#FF8555] text-white px-8 py-6 group relative overflow-hidden"
                  style={{ fontSize: '1.125rem', fontWeight: '700', letterSpacing: '0.05em' }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    LAUNCH APP
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-[#1A1A1A] opacity-0 group-hover:opacity-100">
                    LAUNCH APP
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Button>

                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#1A1A1A] px-8 py-6"
                  style={{ fontSize: '1.125rem', fontWeight: '700', letterSpacing: '0.05em' }}
                >
                  LEARN MORE
                </Button>
              </motion.div>
            </motion.div>

            {/* Visual element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                {/* Targeting rings */}
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  {[0, 1, 2, 3].map((index) => (
                    <motion.div
                      key={index}
                      className="absolute inset-0 border-2 border-[#FF6B35] rounded-full"
                      style={{ 
                        margin: `${index * 20}px`,
                        opacity: 1 - (index * 0.2)
                      }}
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [1 - (index * 0.2), 0.8 - (index * 0.2), 1 - (index * 0.2)]
                      }}
                      transition={{ 
                        duration: 3,
                        delay: index * 0.2,
                        repeat: Infinity 
                      }}
                    />
                  ))}
                  
                  {/* Center target */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, -360]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Target className="w-24 h-24 text-[#FF6B35]" strokeWidth={1} />
                    </motion.div>
                  </div>

                  {/* Crosshair lines */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-0.5 bg-[#FF6B35] opacity-50" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-0.5 bg-[#FF6B35] opacity-50" />
                  </div>
                </div>
              </motion.div>

              {/* Corner accents */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border-4 border-[#FF6B35] border-b-0 border-l-0" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-4 border-[#FF6B35] border-t-0 border-r-0" />
            </motion.div>
          </div>

          {/* Stats or additional info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: "99.9%", label: "Success Rate" },
              { value: "<100ms", label: "Latency" },
              { value: "24/7", label: "Monitoring" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2" style={{ 
                  fontSize: '2.5rem',
                  fontWeight: '900',
                  color: '#FF6B35',
                  lineHeight: '1'
                }}>
                  {stat.value}
                </div>
                <div className="text-[#E0E0E0] uppercase tracking-wider" style={{ fontSize: '0.875rem' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
