import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import DonationProvider from './Pages/Donations/DonationContext/DonationProvider';
import { store } from './redux/store';
import reportWebVitals from './reportWebVitals';
import MarketProvider from './Pages/EMarket/MarketComponents/MarketContext/MarketProvider'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MarketProvider >
        <DonationProvider >
        <App />
        </DonationProvider>
      </MarketProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
