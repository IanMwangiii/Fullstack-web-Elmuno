import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppLayout } from './layouts/AppLayout';
import { AppRoutes } from './routes';
import { AgeVerificationGate } from './features/age-verification/AgeVerificationGate';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <AgeVerificationGate>
        <AppLayout>
          <AppRoutes />
          <Toaster position="bottom-right" />
        </AppLayout>
      </AgeVerificationGate>
    </BrowserRouter>
  );
};

export default App;
