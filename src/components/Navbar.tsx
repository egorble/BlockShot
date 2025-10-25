import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.95)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        isScrolled ? 'border-[#E0E0E0] shadow-lg' : 'border-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 relative flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-[#FF6B35] rotate-45" />
            </div>
            <span style={{ 
              fontSize: '1.25rem',
              fontWeight: '900',
              color: '#1A1A1A',
              letterSpacing: '-0.01em'
            }}>
              BLOCKSHOT
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {['Features', 'Use Cases', 'Docs'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-[#333333] hover:text-[#FF6B35] transition-colors relative group"
                style={{ fontSize: '0.875rem', fontWeight: '600', letterSpacing: '0.05em' }}
                whileHover={{ y: -2 }}
              >
                {item.toUpperCase()}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B35] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-[#FF6B35] hover:bg-[#FF8555] text-white px-6 py-2"
              style={{ fontSize: '0.875rem', fontWeight: '700', letterSpacing: '0.05em' }}
            >
              CONNECT WALLET
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#1A1A1A]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-[#E0E0E0]"
          >
            <div className="flex flex-col gap-4">
              {['Features', 'Use Cases', 'Docs'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-[#333333] hover:text-[#FF6B35] transition-colors px-4 py-2"
                  style={{ fontSize: '0.875rem', fontWeight: '600', letterSpacing: '0.05em' }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.toUpperCase()}
                </a>
              ))}
              <div className="px-4">
                <Button 
                  className="bg-[#FF6B35] hover:bg-[#FF8555] text-white w-full"
                  style={{ fontSize: '0.875rem', fontWeight: '700', letterSpacing: '0.05em' }}
                >
                  CONNECT WALLET
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
