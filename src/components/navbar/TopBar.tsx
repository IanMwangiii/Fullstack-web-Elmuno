import React from 'react';
import { Phone, Mail } from 'lucide-react';

export function TopBar() {
  return (
    <div className="hidden lg:block bg-dark-900 text-gray-300 py-2">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-amber-500" />
            <span className="text-sm">Need Support</span>
            <a href="tel:(084)123-45688" className="text-white hover:text-amber-500 transition-colors">
              (084) 123 - 456 88
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-amber-500" />
            <a href="mailto:corino@example.com" className="hover:text-amber-500 transition-colors">
              corino@example.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}