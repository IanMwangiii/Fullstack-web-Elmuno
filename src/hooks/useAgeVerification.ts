typescript
import { useState, useEffect } from 'react';

export function useAgeVerification() {
  const [isAgeVerified, setIsAgeVerified] = useState(() => {
    return localStorage.getItem('age-verified') === 'true';
  });

  useEffect(() => {
    const lastVerified = localStorage.getItem('age-verified-timestamp');
    if (lastVerified) {
      const now = new Date().getTime();
      const hoursSinceVerified = (now - parseInt(lastVerified)) / (1000 * 60 * 60);
      if (hoursSinceVerified > 24) {
        localStorage.removeItem('age-verified');
        localStorage.removeItem('age-verified-timestamp');
        setIsAgeVerified(false);
      }
    }
  }, []);

  const handleAgeVerified = () => {
    localStorage.setItem('age-verified', 'true');
    localStorage.setItem('age-verified-timestamp', new Date().getTime().toString());
    setIsAgeVerified(true);
  };

  return {
    isAgeVerified,
    handleAgeVerified
  };
}