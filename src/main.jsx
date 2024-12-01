import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root'); // Get the root DOM element
const root = createRoot(rootElement); // Create a root for React rendering

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
