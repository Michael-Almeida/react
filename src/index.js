import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './exemplo/1.8.1/index.js';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
