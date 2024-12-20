import React from 'react';
import { Link } from 'react-router-dom';
import { Wine } from 'lucide-react';
import { motion } from 'framer-motion';

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <motion.div whileHover={{ rotate: 15 }}>
        <Wine className="h-8 w-8 text-amber-500" />
      </motion.div>
      <span className="font-bold text-2xl tracking-tight">ELMUNO LIQUOR</span>
    </Link>
  );
}