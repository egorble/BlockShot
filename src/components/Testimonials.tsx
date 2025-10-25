import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Chen",
    role: "DeFi Trader",
    avatar: "AC",
    content: "BlockShot has completely changed how I interact with time-sensitive DeFi opportunities. The precision is unmatched.",
    rating: 5,
    stats: "+340% success rate"
  },
  {
    name: "Sarah Martinez",
    role: "NFT Collector",
    avatar: "SM",
    content: "I've secured every major NFT drop I've attempted since using BlockShot. The AI timing is phenomenal.",
    rating: 5,
    stats: "15/15 successful mints"
  },
  {
    name: "Michael Thompson",
    role: "Gaming Pro",
    avatar: "MT",
    content: "In competitive on-chain gaming, milliseconds matter. BlockShot gives me the edge I need to stay ahead.",
    rating: 5,
    stats: "Top 1% player"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #FF6B35 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <motion.div
        className="absolute top-10 right-20 w-32 h-32 border-4 border-[#FF6B35]/10"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity }}
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
            marginBottom: '1rem'
          }}>
            TRUSTED BY<br />
            <span className="text-[#FF6B35]">TOP PERFORMERS</span>
          </h2>
          <p className="text-[#333333] max-w-2xl mx-auto" style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
            See what power users are saying about BlockShot
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Shadow card */}
              <div className="absolute inset-0 bg-[#1A1A1A] transform translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              
              {/* Main card */}
              <div className="relative bg-white border-2 border-[#1A1A1A] p-8">
                {/* Quote icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#FF6B35] flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" fill="white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 pt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FF6B35] fill-[#FF6B35]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-[#333333] mb-6" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                  "{testimonial.content}"
                </p>

                {/* Stats badge */}
                <div className="inline-block px-3 py-1 bg-[#FF6B35]/10 border border-[#FF6B35]/20 mb-6">
                  <span className="text-[#FF6B35]" style={{ fontSize: '0.75rem', fontWeight: '700' }}>
                    {testimonial.stats}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#1A1A1A] flex items-center justify-center relative">
                    <span className="text-white" style={{ fontSize: '0.875rem', fontWeight: '700' }}>
                      {testimonial.avatar}
                    </span>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#FF6B35]" />
                  </div>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: '700', color: '#1A1A1A' }}>
                      {testimonial.name}
                    </div>
                    <div className="text-[#333333]" style={{ fontSize: '0.875rem' }}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#1A1A1A] group-hover:bg-[#FF6B35] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-8 items-center"
        >
          {[
            { label: "Active Users", value: "50K+" },
            { label: "Avg Rating", value: "4.9/5" },
            { label: "Successful Txns", value: "10M+" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-1" style={{
                fontSize: '2rem',
                fontWeight: '900',
                color: '#FF6B35',
                lineHeight: '1'
              }}>
                {stat.value}
              </div>
              <div className="text-[#333333]" style={{ fontSize: '0.875rem' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
