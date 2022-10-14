
import React from 'react';
import { render } from 'react-dom';
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

const rootElement = document.getElementById('root');

render(<StrictApp />, rootElement);

module.hot.accept();
