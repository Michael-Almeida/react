import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './1.7.1/1.7.1';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
