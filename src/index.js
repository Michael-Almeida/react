import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './aula6/exemplo/index.js';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
