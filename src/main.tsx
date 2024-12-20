import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';  // This is correct since App.tsx has default export
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element. Check your index.html for <div id="root"></div>');
}

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
