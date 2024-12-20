import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  return (
    <div className="bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get exclusive offers & rewards
          </h2>
          <p className="text-gray-400 mb-6">
            Sign up for our members portal to receive exclusive offers & rewards. It's easy and free!
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-amber-500"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors flex items-center gap-2"
            >
              <span>Sign Up</span>
              <Send size={16} />
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
}