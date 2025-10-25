import { motion } from "motion/react";
import { Gamepad2, TrendingUp, Image as ImageIcon, LineChart } from "lucide-react";

const useCases = [
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "Guaranteed execution for on-chain games using Raiku's deterministic booking",
    color: "#FF6B35"
  },
  {
    icon: TrendingUp,
    title: "DeFi",
    description: "Precision in trading and yield strategies with Raiku-powered transaction guarantees",
    color: "#1A1A1A"
  },
  {
    icon: ImageIcon,
    title: "NFT Drops",
    description: "Deterministic minting with guaranteed slot reservations via BlockShot",
    color: "#FF6B35"
  },
  {
    icon: LineChart,
    title: "Prediction Markets",
    description: "Controlled execution for time-sensitive predictions using Raiku AOT/JIT",
    color: "#1A1A1A"
  }
];

export function UseCases() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F5F5F5] relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-0 w-64 h-64 bg-[#FF6B35] opacity-10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -50, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
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
            color: '#1A1A1A',
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem'
          }}>
            DOMINATE<br />
            <span className="text-[#FF6B35]">EVERY MARKET</span>
          </h2>
          <p className="text-[#333333] max-w-3xl mx-auto" style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
            Leverage BlockShot's AI sniper capabilities across gaming, DeFi, NFTs, and prediction markets
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="group relative"
            >
              <div className="relative aspect-square bg-white border border-[#E0E0E0] p-8 flex flex-col items-center justify-center text-center overflow-hidden">
                {/* Background accent square */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: useCase.color }}
                  initial={{ scale: 0, rotate: 45 }}
                  whileHover={{ scale: 1.5, rotate: 45 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                  >
                    <div 
                      className="w-20 h-20 mx-auto flex items-center justify-center border-2 group-hover:border-white transition-colors duration-300"
                      style={{ borderColor: useCase.color }}
                    >
                      <useCase.icon 
                        className="w-10 h-10 group-hover:text-white transition-colors duration-300" 
                        style={{ color: useCase.color }}
                        strokeWidth={1.5}
                      />
                    </div>
                  </motion.div>

                  <h3 
                    className="mb-2 group-hover:text-white transition-colors duration-300" 
                    style={{ 
                      fontSize: '1.5rem',
                      fontWeight: '800',
                      color: '#1A1A1A',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {useCase.title}
                  </h3>
                  <p 
                    className="text-[#333333] group-hover:text-white/90 transition-colors duration-300" 
                    style={{ fontSize: '0.875rem' }}
                  >
                    {useCase.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div 
                  className="absolute top-0 right-0 w-8 h-8 group-hover:bg-white transition-colors duration-300"
                  style={{ backgroundColor: useCase.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-8 py-4 bg-[#1A1A1A] relative overflow-hidden group">
            <p className="text-white uppercase tracking-wider relative z-10" style={{ fontSize: '1.125rem', fontWeight: '700' }}>
              BE FIRST. BE PRECISE.
            </p>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FF6B35]" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#FF6B35]" />
            <motion.div
              className="absolute inset-0 bg-[#FF6B35]"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
              style={{ opacity: 0.2 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}