import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import {images, results}from './utils/data.js';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App images={images} results={results}/>);


    

