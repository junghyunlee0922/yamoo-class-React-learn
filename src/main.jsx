import './styles/main.css'; // global CSS

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 안녕 나는 이정현이야
// 만나서 반가워
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
