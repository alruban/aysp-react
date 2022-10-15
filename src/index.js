
import React from 'react';
import { createRoot } from 'react-dom/client';
import { TranslateProvider } from 'react-translate-json';

import App from './App';
import './translations/en.json';

const translationOptions = {
  pathPrefix: '',
  locale: 'en',
  fallbackLocale: 'en'
};

const StrictApp = () => (
  <React.StrictMode>
    <TranslateProvider {...translationOptions}>
      <App />
    </TranslateProvider>
  </React.StrictMode>
);

const root = createRoot(document.getElementById('root'));

root.render(<StrictApp />);

module.hot.accept();
