import React from 'react';
import ReactDOM from 'react-dom';

import { StoreProvider } from './store/store';

import App from './App';

const app = (
  <StoreProvider>
    <App />
  </StoreProvider>
);

const rootElement = document.getElementById('root');

ReactDOM.render(app, rootElement);
