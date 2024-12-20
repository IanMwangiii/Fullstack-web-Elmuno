import { FC, PropsWithChildren } from 'react';
import { Navbar } from '../components/navbar/Navbar';
import { Footer } from '../components/footer';

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-950">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};
