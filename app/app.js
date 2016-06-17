/*let React = require('react');
let ReactDOM = require('react-dom');
let AppComponent = require('./components/productBox.js');
ReactDOM.render(<AppComponent />, document.getElementById('content'));*/
import React from 'react';
import ReactDOM from 'react-dom';
/*import AppComponent from './components/productBox.js';*/
import RouterConfig from './routerConfig';

//ReactDOM.render(<AppComponent />, document.getElementById('content'));
ReactDOM.render((RouterConfig), document.getElementById('content'));