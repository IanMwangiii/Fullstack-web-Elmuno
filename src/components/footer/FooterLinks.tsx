import React from 'react';
import { Link } from 'react-router-dom';

interface FooterSection {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

const footerSections: FooterSection[] = [
  {
    title: 'CUSTOMER SERVICE',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'My account', href: '/account' },
      { label: 'Track my order', href: '/orders' },
      { label: 'Return policy', href: '/returns' },
      { label: 'Gift cards', href: '/gift-cards' },
    ],
  },
  {
    title: 'ABOUT US',
    links: [
      { label: 'Company info', href: '/about' },
      { label: 'Press Releases', href: '/press' },
      { label: 'Careers', href: '/careers' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Investor relations', href: '/investors' },
    ],
  },
  {
    title: 'QUICK LINKS',
    links: [
      { label: 'Search', href: '/search' },
      { label: 'Become a reseller', href: '/reseller' },
      { label: 'About us', href: '/about' },
      { label: 'Contact us', href: '/contact' },
      { label: 'Terms of service', href: '/terms' },
    ],
  },
  {
    title: 'CATEGORIES',
    links: [
      { label: 'Brandy', href: '/products?category=brandy' },
      { label: 'White Wine', href: '/products?category=wine' },
      { label: 'Champagne', href: '/products?category=champagne' },
      { label: 'Vodka', href: '/products?category=vodka' },
      { label: 'Tequila', href: '/products?category=tequila' },
    ],
  },
];

export function FooterLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
      {footerSections.map((section) => (
        <div key={section.title}>
          <h3 className="text-white font-semibold mb-4">{section.title}</h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}