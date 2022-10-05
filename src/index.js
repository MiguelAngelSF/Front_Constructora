import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/elements/NavBar/NavBar';
import Footer from './components/elements/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {
      window.location.pathname !== '/login' && (<NavBar />)
    }
    <App />
    {
      window.location.pathname !== '/login' && (<Footer />)
    }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
