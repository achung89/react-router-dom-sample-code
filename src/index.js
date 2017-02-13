import ReactDOM from 'react-dom';
import App from './App.js';
import React from 'react';
import App2 from './App2.js';
import {BrowserRouter} from 'react-router-dom';
import App3 from './App3.js';



// ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('app'));
ReactDOM.render(<BrowserRouter><App2 /></BrowserRouter>, document.getElementById('app'));
// ReactDOM.render(<BrowserRouter><App3 /></BrowserRouter>, document.getElementById('app'));