import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CryptoRoutes } from "./routes/CryptoRoutes.jsx";
import { CryptoProvider } from './context/CryptoProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <CryptoProvider>
        <CryptoRoutes />
     </CryptoProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
