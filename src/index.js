import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {Store} from './redux/Store';
import {Toaster} from 'react-hot-toast';

// Rendering the main application within a BrowserRouter, Redux Provider, and a Toaster for displaying notifications.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={Store}>
      <Toaster/>
      <App/>
    </Provider>
  </BrowserRouter>
);

