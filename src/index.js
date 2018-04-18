import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import createPlotlyComponent from 'react-plotly.js/factory';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
