import React from 'react';
import { motion } from 'framer-motion';
import { Wine } from 'lucide-react';

interface AgeVerificationProps {
  onVerified: () => void;
}

const AgeVerification: React.FC<AgeVerificationProps> = ({ onVerified }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-lg p-8 max-w-md w-full text-center"
      >
        <Wine className="w-16 h-16 mx-auto mb-6 text-amber-500" />
        <h2 className="text-2xl font-bold mb-4">Age Verification Required</h2>
        <p className="text-gray-600 mb-8">
          You must be 18 years or older to visit ELMUNO LIQUOR.
          Please confirm your age to continue.
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => window.location.href = 'https://www.google.com'}
            className="flex-1 py-3 px-4 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            I'm under 18
          </button>
          <button
            onClick={onVerified}
            className="flex-1 py-3 px-4 rounded-md bg-amber-500 text-white hover:bg-amber-600 transition-colors"
          >
            I'm over 18
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AgeVerification;
