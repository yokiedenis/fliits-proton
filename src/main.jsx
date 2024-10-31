import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Ensure this path is correct
import './index.css'; // If you have a global CSS file

   ReactDOM.render(
     <React.StrictMode>
       <App />
     </React.StrictMode>,
     document.getElementById('root') // Ensure there is an element with id 'root' in your HTML
   );