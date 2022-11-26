import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './aula6/1.8.1/index2.js';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
