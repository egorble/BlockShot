import { motion } from "motion/react";
import { Github, Twitter, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: MessageCircle, href: "#", label: "Discord" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  const footerLinks = {
    Product: ['Features', 'Pricing', 'Roadmap', 'Changelog'],
    Resources: ['Documentation', 'API Reference', 'Tutorials', 'Blog'],
    Company: ['About', 'Careers', 'Contact', 'Partners'],
    Legal: ['Privacy', 'Terms', 'Security', 'Compliance']
  };

  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 relative flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-[#FF6B35] rotate-45" />
              </div>
              <span style={{ 
                fontSize: '1.5rem',
                fontWeight: '900',
                letterSpacing: '-0.01em'
              }}>
                BLOCKSHOT
              </span>
            </div>
            <p className="text-[#E0E0E0] mb-6" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
              AI-powered precision booking for Raiku transactions. Be faster and more accurate than everyone else.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 border border-[#E0E0E0] hover:border-[#FF6B35] flex items-center justify-center group transition-colors"
                >
                  <social.icon className="w-5 h-5 text-[#E0E0E0] group-hover:text-[#FF6B35] transition-colors" strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4" style={{ 
                fontSize: '0.875rem',
                fontWeight: '800',
                letterSpacing: '0.05em'
              }}>
                {category.toUpperCase()}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#E0E0E0] hover:text-[#FF6B35] transition-colors inline-block"
                      style={{ fontSize: '0.875rem' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="h-px bg-[#E0E0E0] opacity-20" />
          <motion.div
            className="absolute top-0 left-0 h-px bg-[#FF6B35]"
            initial={{ width: 0 }}
            whileInView={{ width: '200px' }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#E0E0E0]" style={{ fontSize: '0.875rem' }}>
            © 2025 BlockShot. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse" />
              <span className="text-[#E0E0E0]" style={{ fontSize: '0.875rem' }}>
                System Operational
              </span>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#FF6B35] opacity-5 blur-3xl" />
      </div>
    </footer>
  );
}
