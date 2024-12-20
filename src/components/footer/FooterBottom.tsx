import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/elmunoliquor' },
  { icon: Twitter, href: 'https://twitter.com/elmunoliquor' },
  { icon: Instagram, href: 'https://instagram.com/elmunoliquor' },
  { icon: Youtube, href: 'https://youtube.com/elmunoliquor' },
];

// Using SVG icons for payment methods instead of images for better reliability
const paymentMethods = [
  { 
    name: 'Visa',
    icon: () => (
      <svg className="h-8" viewBox="0 0 48 16" fill="currentColor">
        <path d="M44 0H4C1.8 0 0 1.8 0 4v8c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm-1.9 11.5l-2.1-8h-3.2l2.1 8h3.2zm-7.2 0V3.5h-3v8h3zm-6.2 0l2.4-8h-3.2l-1.5 5.5-1.5-5.5h-3.2l2.4 8h4.6z"/>
      </svg>
    )
  },
  {
    name: 'Mastercard',
    icon: () => (
      <svg className="h-8" viewBox="0 0 48 16" fill="currentColor">
        <circle cx="16" cy="8" r="8"/>
        <circle cx="32" cy="8" r="8" fillOpacity="0.8"/>
      </svg>
    )
  },
  {
    name: 'M-Pesa',
    icon: () => (
      <div className="text-sm font-bold text-green-500">M-PESA</div>
    )
  }
];

export function FooterBottom() {
  return (
    <div className="border-t border-gray-800 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </div>

        <div className="flex items-center gap-6">
          {paymentMethods.map((method) => (
            <div key={method.name} className="text-gray-400">
              {method.icon()}
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} ELMUNO LIQUOR. All rights reserved.
        </p>
      </div>
    </div>
  );
}