import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CompanyInfo() {
  return (
    <div className="mb-8">
      <Link to="/" className="inline-block mb-6">
        <h1 className="text-3xl font-bold text-amber-500">ELMUNO LIQUOR</h1>
      </Link>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-gray-400">
          <MapPin size={20} className="text-amber-500" />
          <p>123 Kimathi Street, Nairobi, Kenya</p>
        </div>
        
        <div className="flex items-center gap-3 text-gray-400">
          <Phone size={20} className="text-amber-500" />
          <a href="tel:+254700000000" className="hover:text-amber-500 transition-colors">
            +254 700 000 000
          </a>
        </div>
        
        <div className="flex items-center gap-3 text-gray-400">
          <Mail size={20} className="text-amber-500" />
          <a href="mailto:info@elmunoliquor.com" className="hover:text-amber-500 transition-colors">
            info@elmunoliquor.com
          </a>
        </div>
      </div>
    </div>
  );
}