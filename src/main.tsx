import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { AppProvider } from "./context"

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Auth0Provider
    domain="dev-gcf1nybmbbxxv1vf.us.auth0.com"
    clientId="kY5UgeBlqOLbDrAFrSK7QFy2JLlnvRfv"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,

);