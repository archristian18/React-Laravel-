import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { theme } from './theme';
// import {createStore} from 'redux';
import { Provider } from 'react-redux';
import store from './store/config'
// let store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Provider store={store}>
          <App />
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
);
