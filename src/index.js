import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import images from './utils/data.js';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App images={images}/>);


    

