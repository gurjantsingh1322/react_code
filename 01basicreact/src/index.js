import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import HMM from './GURU';

// React kudh ka ek dom bnata he jiskan name ReactDOM hota he
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);