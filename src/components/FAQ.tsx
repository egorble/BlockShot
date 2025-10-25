import { motion } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does BlockShot determine the optimal execution time?",
    answer: "BlockShot uses advanced AI algorithms to analyze real-time network conditions including gas prices, mempool congestion, block times, and transaction patterns. Our predictive engine calculates the probability of success for each block and executes when conditions are most favorable."
  },
  {
    question: "What is the success rate compared to manual transactions?",
    answer: "Our users experience an average 3.4x improvement in success rate for time-sensitive transactions compared to manual execution. For competitive scenarios like NFT drops, our success rate exceeds 99.9% when optimal conditions are met."
  },
  {
    question: "Does BlockShot work with all Raiku transactions?",
    answer: "BlockShot supports all standard Raiku transaction types including transfers, smart contract interactions, DeFi operations, and NFT minting. Our AI is optimized for time-sensitive scenarios where milliseconds matter."
  },
  {
    question: "How much does BlockShot cost?",
    answer: "BlockShot operates on a performance-based model. You only pay when transactions are successfully executed. Pricing varies based on transaction complexity and network conditions. Check our pricing page for detailed information."
  },
  {
    question: "Is my wallet safe with BlockShot?",
    answer: "Absolutely. BlockShot never has access to your private keys. We use industry-standard secure connection methods and all transactions are signed locally on your device. Your funds remain in your complete control at all times."
  },
  {
    question: "Can I cancel a transaction after booking?",
    answer: "Yes, you can cancel any booked transaction before it's executed. Once execution begins (typically within milliseconds of optimal conditions), the transaction enters the mempool and follows standard blockchain cancellation rules."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F5F5F5] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #1A1A1A 1px, transparent 1px), linear-gradient(-45deg, #1A1A1A 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
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
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-1 bg-[#FF6B35]" />
            <span className="uppercase tracking-wider text-[#333333]" style={{ fontSize: '0.875rem', fontWeight: '700' }}>
              FAQ
            </span>
            <div className="w-16 h-1 bg-[#FF6B35]" />
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '900',
            lineHeight: '1.2',
            color: '#1A1A1A',
            letterSpacing: '-0.02em',
            marginBottom: '1rem'
          }}>
            QUESTIONS &<br />
            <span className="text-[#FF6B35]">ANSWERS</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="relative group">
                {/* Shadow */}
                <div className="absolute inset-0 bg-[#1A1A1A] transform translate-x-1 translate-y-1" />
                
                {/* Main container */}
                <div className="relative bg-white border-2 border-[#1A1A1A] overflow-hidden">
                  {/* Question button */}
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between gap-4 text-left transition-colors hover:bg-[#F5F5F5]"
                  >
                    <span style={{
                      fontSize: '1.125rem',
                      fontWeight: '700',
                      color: '#1A1A1A',
                      lineHeight: '1.4'
                    }}>
                      {faq.question}
                    </span>
                    
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      {openIndex === index ? (
                        <div className="w-8 h-8 bg-[#FF6B35] flex items-center justify-center">
                          <Minus className="w-5 h-5 text-white" strokeWidth={3} />
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-[#1A1A1A] flex items-center justify-center">
                          <Plus className="w-5 h-5 text-white" strokeWidth={3} />
                        </div>
                      )}
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 border-t-2 border-[#E0E0E0]">
                      <p className="text-[#333333]" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>

                  {/* Accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-[#FF6B35]"
                    initial={{ width: 0 }}
                    animate={{ width: openIndex === index ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-8 py-4 bg-[#1A1A1A] relative group cursor-pointer">
            <p className="text-white relative z-10" style={{ fontSize: '1.125rem', fontWeight: '700' }}>
              Still have questions? <span className="text-[#FF6B35]">Contact our team →</span>
            </p>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FF6B35]" />
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
