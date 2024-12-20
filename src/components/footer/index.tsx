import React from 'react';
import { NewsletterSection } from './NewsletterSection';
import { FooterLinks } from './FooterLinks';
import { FooterBottom } from './FooterBottom';
import { CompanyInfo } from './CompanyInfo';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <NewsletterSection />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <CompanyInfo />
          </div>
          <div className="lg:col-span-3">
            <FooterLinks />
          </div>
        </div>
        
        <FooterBottom />
      </div>
    </footer>
  );
}