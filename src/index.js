import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';

import PagesRouter from './components/PagesRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PagesRouter/> 
    </BrowserRouter> 
  </React.StrictMode>
);
