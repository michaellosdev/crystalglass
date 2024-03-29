import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

//Importing Bootstarp CSS
import 'bootstrap/dist/css/bootstrap.min.css';
//Importing custom CSS
import './styles/global.css'
import './styles/pages.css'
import './styles/media.css'
import './styles/assetsStyles.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


