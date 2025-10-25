import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Crosshair } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5F5F5] to-[#E0E0E0] pt-20">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Orange accent squares */}
      <motion.div 
        className="absolute top-20 right-20 w-16 h-16 bg-[#FF6B35]"
        animate={{ 
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 1, 0.9, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-32 left-16 w-24 h-24 bg-[#FF6B35] opacity-50"
        animate={{ 
          rotate: [360, 270, 180, 90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Targeting crosshair animation */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Crosshair className="w-96 h-96 text-[#FF6B35] opacity-10" strokeWidth={1} />
      </motion.div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <div className="inline-block px-4 py-2 bg-[#1A1A1A] text-white mb-6 relative overflow-hidden group">
                <span className="relative z-10 uppercase tracking-wider" style={{ fontSize: '0.875rem' }}>BlockShot - AI Sniper on Raiku</span>
                <div className="absolute top-0 right-0 w-3 h-3 bg-[#FF6B35]" />
                <motion.div 
                  className="absolute inset-0 bg-[#FF6B35]"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  style={{ opacity: 0.1 }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h1 className="mb-6" style={{ 
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                fontWeight: '900',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                color: '#1A1A1A'
              }}>
                LOCK.<br />
                STRIKE.<br />
                <span className="text-[#FF6B35]">WIN.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-4 mb-8"
            >
              <p className="text-[#333333]" style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
                AI-powered precision booking using Raiku's AOT & JIT technologies
              </p>
              <p className="text-[#333333] opacity-80" style={{ fontSize: '1rem' }}>
                Lock your transaction with deterministic execution. Strike at the perfect block.
              </p>
              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse" />
                  <span className="text-[#333333]" style={{ fontSize: '0.875rem' }}>Powered by Raiku AOT/JIT</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[#333333]" style={{ fontSize: '0.875rem' }}>99.9% Success Rate</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                className="bg-[#FF6B35] hover:bg-[#FF8555] text-white px-8 py-6 relative overflow-hidden group"
                style={{ fontSize: '1.125rem', fontWeight: '700', letterSpacing: '0.05em' }}
              >
                <span className="relative z-10">START SNIPING</span>
                <motion.div
                  className="absolute inset-0 bg-[#1A1A1A]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity">START SNIPING</span>
              </Button>

              <Button 
                variant="outline"
                className="border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white px-8 py-6"
                style={{ fontSize: '1.125rem', fontWeight: '700', letterSpacing: '0.05em' }}
              >
                VIEW RAIKU DOCS
              </Button>
            </motion.div>
          </motion.div>

          {/* 3D Block Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            {/* Main 3D Block */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotateX: [0, 5, 0, -5, 0],
                rotateY: [0, 10, 0, -10, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              {/* Central block structure */}
              <div className="relative w-80 h-80">
                {/* Main block face */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] border-2 border-[#FF6B35]"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    boxShadow: '0 20px 60px rgba(255, 107, 53, 0.3)'
                  }}
                >
                  {/* Block grid pattern */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `linear-gradient(#FF6B35 1px, transparent 1px), linear-gradient(90deg, #FF6B35 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }} />

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 bg-[#FF6B35]" />
                  <div className="absolute top-0 right-0 w-8 h-8 bg-[#FF6B35]" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 bg-[#FF6B35]" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#FF6B35]" />

                  {/* Center element */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="relative w-32 h-32 border-2 border-[#FF6B35]/50"
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Crosshair className="w-16 h-16 text-[#FF6B35]" strokeWidth={1.5} />
                      </div>
                      <div className="absolute top-0 right-0 w-4 h-4 bg-[#FF6B35]" />
                      <div className="absolute bottom-0 left-0 w-4 h-4 bg-[#FF6B35]" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* 3D depth layers */}
                <motion.div
                  className="absolute inset-0 bg-[#1A1A1A] opacity-70"
                  style={{
                    transform: 'translateZ(-20px)',
                    transformStyle: 'preserve-3d'
                  }}
                  animate={{ 
                    opacity: [0.7, 0.5, 0.7]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 bg-[#1A1A1A] opacity-40"
                  style={{
                    transform: 'translateZ(-40px)',
                    transformStyle: 'preserve-3d'
                  }}
                  animate={{ 
                    opacity: [0.4, 0.2, 0.4]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>

              {/* Orbiting blocks */}
              {[0, 1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  className="absolute w-12 h-12 bg-[#FF6B35] border-2 border-white"
                  style={{
                    top: '50%',
                    left: '50%',
                    marginTop: '-24px',
                    marginLeft: '-24px'
                  }}
                  animate={{
                    x: [
                      Math.cos((index * Math.PI) / 2) * 150,
                      Math.cos((index * Math.PI) / 2 + Math.PI * 2) * 150
                    ],
                    y: [
                      Math.sin((index * Math.PI) / 2) * 150,
                      Math.sin((index * Math.PI) / 2 + Math.PI * 2) * 150
                    ],
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.5
                  }}
                >
                </motion.div>
              ))}
            </motion.div>

            {/* Floating accent elements */}
            <motion.div
              className="absolute -top-8 -right-8 w-32 h-32 bg-[#FF6B35] opacity-20 blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#1A1A1A] opacity-10 blur-3xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#1A1A1A] rounded-full flex justify-center pt-2">
          <motion.div 
            className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}