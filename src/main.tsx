import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './app/store.ts';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <Provider store={store}>
         <Router>
            <App />
         </Router>
      </Provider>
   </StrictMode>
);
