import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Import the named export
import { ContactApp } from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactApp />
  </StrictMode>
);
