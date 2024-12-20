import { FC, ReactNode } from 'react';

interface AgeVerificationGateProps {
  children: ReactNode;
}

export const AgeVerificationGate: FC<AgeVerificationGateProps> = ({ children }) => {
  // Your age verification logic here
  return <>{children}</>;
};